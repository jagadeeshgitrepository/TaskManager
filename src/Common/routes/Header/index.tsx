import React, { Component } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import Dropdown from 'react-dropdown'

import Select from 'react-select'

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
import './header.css'
class Header extends Component {
   customStyles = {
      control: (base, state) => ({
         ...base,
         backgroundColor: '#4E97C2',
         width: '160px',
         height: '41px',
         border: '0px',
         borderRadius: '4px'
      })
   }

   options = [
      { label: 'Organization', value: 'apple' },
      { label: 'Orange', value: 'orange' }
   ]

   render(): React.ReactElement {
      return (
         <TaskManagerHeader>
            <TaskManagerHeaderMenuItems>
               <TaskManagerMenuItemList>
                  <TaskManagerHeaderHome>
                     <AiOutlineHome />
                  </TaskManagerHeaderHome>
                  <Select
                     styles={this.customStyles}
                     options={this.options}
                     className='w-40 h-10  rounded select-dropDown'
                     defaultValue={this.options[0]}
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
