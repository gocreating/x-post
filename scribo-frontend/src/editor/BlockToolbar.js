import React from 'react'
import { Menu } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

let BlockToolbar = ({
  preview,
  onPreviewClick,
  onRemoveClick,
}) => (
  <div className="toolbar-container">
    <Menu icon borderless fluid vertical compact size="mini">
      <Menu.Item
        link
        onClick={onPreviewClick}
      >
        <FontAwesomeIcon
          icon={preview ? faEyeSlash : faEye}
        />
      </Menu.Item>
      <Menu.Item
        link
        onClick={onRemoveClick}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Menu.Item>
    </Menu>
  </div>
)

export default BlockToolbar
