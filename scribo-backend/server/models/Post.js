'use strict'

let whitelistMethods = require('../toolbox/whitelistMethods')
const appendAbstractBlocks = require('../hooks/post/appendAbstractBlocks')
const handleSeriesPosts = require('../hooks/post/handleSeriesPosts')

module.exports = function(Post) {
  whitelistMethods(Post, [
    'findById',
  ])

  Post.observe('before save', appendAbstractBlocks)
  Post.observe('before save', handleSeriesPosts)

  Post.findMixed = (filter, next) => {
    if (!filter) {
      filter = {
        include: 'author',
        fields: {
          id: true,
          authorId: true,
          slug: true,
          headerImage: true,
          title: true,
          subtitle: true,
          abstractBlocks: true,
          createdAt: true,
          updatedAt: true,
        },
        order: 'createdAt DESC',
      }
    }
    Post.find({ ...filter }, (err, posts) => {
      if (err) return next(err)

      next(null, posts)
    })
  }
  Post.remoteMethod('findMixed', {
    isStatic: true,
    http: {
      verb: 'get',
      path: '/mixed',
      errorStatus: 404,
    },
    description: 'Get posts of all users mixed together.',
    accepts: [
      {
        arg: 'filter',
        type: 'object',
        http: { source: 'query' },
      },
    ],
    returns: {
      arg: 'data',
      type: 'object',
      root: true,
    },
  })
}
