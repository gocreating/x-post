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
    let {
      getHint,
      getRemindInfo,
      getLinkPath,
      buttonText,
    } = this.props
    let { donateAmount } = this.state
    let hint = getHint(donateAmount)
    let remindInfo = getRemindInfo(donateAmount)
    let linkPath = getLinkPath(donateAmount)

    return (
      <Form>
        <Form.Group grouped>
          {hint && (
            <label>{hint}</label>
          )}
          {' '}
          {remindInfo && (
            <Popup
              inverted
              hideOnScroll
              trigger={<FontAwesomeIcon icon={faInfoCircle} />}
              position="top center"
              content={remindInfo}
            />
          )}
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
          href={`${config.donationHost}${linkPath}`}
          target="_blank"
          primary
          size="large"
        >
          <FontAwesomeIcon icon={faDonate} />
          {'　'}{buttonText || 'Donate Now'}
        </Button>
      </Form>
    )
  }
}

export default DonationForm
