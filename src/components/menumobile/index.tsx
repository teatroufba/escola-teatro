import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu'
import { GoThreeBars } from 'react-icons/go'

import { ContainerButton, ContainerSub, MenuButton } from './styles'

function StyledDropdown() {
  return (
    <Menu
      menuButton={
        <ContainerButton>
          <MenuButton>
            <GoThreeBars color="white" width={100} height={100} />
          </MenuButton>
        </ContainerButton>
      }
    >
      <ContainerSub>
        <SubMenu label="A Escola">
          <MenuItem>Apresentação</MenuItem>
          <MenuItem>Organograma/Contatos</MenuItem>
          <MenuItem>Corpo Docente</MenuItem>
          <MenuItem>Corpo Técnico-Administrativo</MenuItem>
          <MenuItem>Ingresso</MenuItem>
          <MenuItem>Como Chegar</MenuItem>
        </SubMenu>

        <SubMenu label="Ensino e Pesquisa">
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
        </SubMenu>

        <SubMenu label="Extensão">
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
        </SubMenu>

        <SubMenu label="Espaços">
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
        </SubMenu>

        <SubMenu label="Agenda">
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
          <MenuItem>Lorem ipsum</MenuItem>
        </SubMenu>

        <MenuItem>Galeria Virtual</MenuItem>
      </ContainerSub>
    </Menu>
  )
}

export default StyledDropdown
