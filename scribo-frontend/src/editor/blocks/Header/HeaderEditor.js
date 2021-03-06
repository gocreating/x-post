import React, { Component } from 'react'
import { compose } from 'recompose'
import { Field, reduxForm } from 'redux-form'
import { Grid, Form } from 'semantic-ui-react'
import xBlock from '../../hoc/xBlock'
import propsToolbar from '../../hoc/propsToolbar'
import BlockTypes from '../../../constants/BlockTypes'
import Header from './Header'
import TextArea from '../../../fields/TextArea'

class HeaderEditor extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  renderPreview = () => (
    <Header block={this.props.block} />
  )

  renderEditor = () => {
    let { block, autoUpdateValues } = this.props

    return (
      <Form>
        <Field
          name="text"
          component={TextArea}
          onChange={autoUpdateValues}
          rows={1}
          autoHeight
          className={`header-level-${block.values.level} editor web-font`}
          onKeyPress={this.handleKeyPress}
          placeholder="輸入標題文字"
        />
      </Form>
    )
  }

  render() {
    let { block } = this.props

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {block.preview && this.renderPreview()}
            {!block.preview && this.renderEditor()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

let enhance = compose(
  xBlock({
    type: BlockTypes.HEADER,
    defaultValues: {
      text: '',
      level: 1,
    },
  }),
  propsToolbar({
    items: [{
      label: 'H1',
      propsMap: { level: 1 },
    }, {
      label: 'H2',
      propsMap: { level: 2 },
    }, {
      label: 'H3',
      propsMap: { level: 3 },
    }],
  }),
  reduxForm()
)
export default enhance(HeaderEditor)
