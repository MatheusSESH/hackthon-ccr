import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import {NavRobot,NavRobotContainer} from './styles';

const TopNavigatorRobotPage: React.FC = () => {
  return(
    <>
      <NavRobot>
        <NavRobotContainer>
          <div>
              <FiAlignJustify color={'#fffcff'} size={24} />
              <Link to={'/'}>
                <FaRobot color={'#fffcff'} size={24}/>
              </Link>
          </div>
        </NavRobotContainer>
      </NavRobot>
    </>
  );
}

export default TopNavigatorRobotPage;