import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import * as Styled from '../styled';
import avatar from '../../assets/images/avatar.png'

const Header = ({ direction, logOut }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  return (
    <Styled.Header>
      <Styled.AntDropdown>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle
            data-toggle="dropdown"
            tag="span"
          >
            <div className='title'>
              <h4>John Doe</h4>
              <span>Available</span>
            </div>
            <img src={avatar} alt='bg' />
          </DropdownToggle>
          <DropdownMenu>
            <div onClick={logOut}>
              Logout
            </div>
          </DropdownMenu>
        </Dropdown>
      </Styled.AntDropdown>
    </Styled.Header>
  );
}

export default Header;
