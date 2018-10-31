import React, { Component } from 'react'
import { Form, Radio, Button, Popup } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faDonate } from '@fortawesome/free-solid-svg-icons'
import DonateOptions from '../../constants/DonateOptions'
import config from '../../config'

class DonationForm extends Component {
  state = {
    donateAmount: 100,
  }

  handleDonateOptionChange = (e, { value }) => {
    this.setState({ donateAmount: parseInt(value) })
  }

  render() {
    let { recipient, postId, accessToken } = this.props
    let { donateAmount } = this.state

    return (
      <Form>
        <Form.Group grouped>
          <label>Donate NT$ {donateAmount} to Author</label>
          {' '}
          <Popup
            inverted
            hideOnScroll
            trigger={<FontAwesomeIcon icon={faInfoCircle} />}
            position="top center"
            content="Part of the donation will be used for hosting x-post service."
          />
          {DonateOptions.map(amount => (
            <Form.Field key={amount}>
              <Radio
                name="donateOption"
                onChange={this.handleDonateOptionChange}
                checked={donateAmount === amount}
                label={`NT$ ${amount}`}
                value={amount}
              />
            </Form.Field>
          ))}
        </Form.Group>

        <Button
          as="a"
          href={(
            `${config.donationHost}/api/payments/ecpay/donation?` +
            `amount=${donateAmount}&` +
            `recipient=${recipient}&` +
            `postId=${postId}&` +
            `access_token=${accessToken}`
          )}
          target="_blank"
          primary
          size="large"
        >
          <FontAwesomeIcon icon={faDonate} />
          {`　Donate Now`}
        </Button>
      </Form>
    )
  }
}

export default DonationForm
