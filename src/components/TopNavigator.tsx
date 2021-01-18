import React from 'react';
import { FiAlignJustify } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'


import { Nav, NavContainer } from '../components/styles';
import { Link } from 'react-router-dom';

const TopNavigator: React.FC = () => {

  return(
    <>
      <Nav>
        <NavContainer>
          <div>
              <FiAlignJustify color={'#fffcff'} size={24} />
              <Link to={'/robot'}>
                <FaRobot color={'#fffcff'} size={24}/>
              </Link>
          </div>
        </NavContainer>
      </Nav>
    </>
  );
}

export default TopNavigator;