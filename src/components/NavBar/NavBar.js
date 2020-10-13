import React, { useContext } from 'react'
import {
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Logo } from 'components/Icons'
import { AuthContext } from 'components/Auth'
import NewPostModal from 'components/Modal'

import './navbar.scss'

function NavBar() {
  const { setAuthStatus } = useContext(AuthContext)

  const signOut = (e) => {
    e.preventDefault()
    setAuthStatus(false)
  }

  return (
    <Navbar className="nav-bar">
      <NavbarBrand className="navbar-brand" href="/">
        <Logo size={36} color="white" className="mr-md-3" /> <h4>PhotoZ</h4>
      </NavbarBrand>
      <NewPostModal />

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          John Doe
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={signOut}>Sign out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  )
}

export default NavBar
