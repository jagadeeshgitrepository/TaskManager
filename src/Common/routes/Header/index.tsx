import React, { Component } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import Dropdown from 'react-dropdown'
import './header.css'
import {
   TaskManagerHeader,
   TaskManagerHeaderMenuItems,
   TaskManagerMenuItemList,
   TaskManagerHeaderHome,
   TaskManagerHeaderBoards,
   TaskManagerHeaderBoardLogo,
   TaskManagerHeaderBoardHeading,
   TaskManagerHeaderLogo,
   TaskManagerSearchContainer,
   TaskManagerSearchInput,
   TaskManagerLogoutHeading,
   TaskManagerProfile,
   TaskManagerProfileHeading
} from './style'

import 'react-dropdown/style.css'

class Header extends Component {
   render(): React.ReactElement {
      const options = ['Organization', 'two', 'three']
      return (
         <TaskManagerHeader>
            <TaskManagerHeaderMenuItems>
               <TaskManagerMenuItemList>
                  <TaskManagerHeaderHome>
                     <AiOutlineHome />
                  </TaskManagerHeaderHome>
                  <Dropdown
                     options={options}
                     placeholder='Organization'
                     className='w-40 h-10 bg-sky-500'
                  />
                  <TaskManagerHeaderBoards>
                     <TaskManagerHeaderBoardLogo src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652693709/Task%20Manager/logo_xdfebn.png' />
                     <TaskManagerHeaderBoardHeading>
                        Boards
                     </TaskManagerHeaderBoardHeading>
                  </TaskManagerHeaderBoards>
               </TaskManagerMenuItemList>
               <TaskManagerMenuItemList>
                  <TaskManagerHeaderLogo src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652694609/Task%20Manager/Group_7401_3_spui3s.png' />
               </TaskManagerMenuItemList>
               <TaskManagerMenuItemList>
                  <TaskManagerSearchContainer>
                     <TaskManagerSearchInput
                        type='search'
                        placeholder='search'
                     />
                     <AiOutlineSearch />
                  </TaskManagerSearchContainer>
                  <TaskManagerLogoutHeading>Log Out</TaskManagerLogoutHeading>
                  <TaskManagerProfile>
                     <TaskManagerProfileHeading>WJ</TaskManagerProfileHeading>
                  </TaskManagerProfile>
               </TaskManagerMenuItemList>
            </TaskManagerHeaderMenuItems>
         </TaskManagerHeader>
      )
   }
}
export default Header
