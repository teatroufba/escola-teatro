import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { Menu, MenuItem } from '@szhsin/react-menu'

import { MenuButton } from './styles'

const arrowIcon = (
  <svg
    width="11"
    height="6"
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 0.875L5.25 5.125L9.5 0.875"
      stroke="#A8A8B3"
      strokeWidth="1.41667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function StyledDropdown() {
  return (
    <Menu
      menuButton={
        <MenuButton>
          BOTÃO
          {arrowIcon}
        </MenuButton>
      }
      transition
    >
      <MenuItem>New File</MenuItem>
      <MenuItem>Save</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </Menu>
  )
}
