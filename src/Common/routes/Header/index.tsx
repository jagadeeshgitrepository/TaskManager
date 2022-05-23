import React, { Component, useEffect } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import Select from 'react-select'
import Cookies from 'js-cookie'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Modal from '../Model/index'

import HeaderStore from '../../stores/HeaderStore/index'
import ModalStores from '../../stores/ModalStores/index'

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
   TaskManagerProfileHeading,
   TaskManagerHeaderBriefCase,
   TaskManagerHeaderBriefContainer
} from './style'

import 'react-dropdown/style.css'
import './header.css'

interface HeaderProps {
   headerStore: HeaderStore
   modalStore: ModalStores
}

@inject('headerStore', 'modalStore')
@observer
class Header extends Component<HeaderProps> {
   customStyles = {
      control: (base, state): any => ({
         ...base,
         backgroundColor: '#4E97C2',
         width: '160px',
         height: '41px',
         border: '0px',
         borderRadius: '4px'
      })
   }
   componentDidMount() {
      const { headerStore } = this.props
      headerStore.updateDropDown()
   }

   render(): React.ReactElement {
      const { headerStore } = this.props
      const { organizations } = headerStore.headerState
      console.log(this.props)
      console.log(organizations)
      return (
         <TaskManagerHeader>
            <TaskManagerHeaderMenuItems>
               <TaskManagerMenuItemList>
                  <Link to='/home'>
                     <TaskManagerHeaderHome>
                        <AiOutlineHome />
                     </TaskManagerHeaderHome>
                  </Link>
                  <TaskManagerHeaderBriefContainer>
                     <TaskManagerHeaderBriefCase src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652699960/Task%20Manager/Line_a6zgc3.png' />
                  </TaskManagerHeaderBriefContainer>
                  <Select
                     styles={this.customStyles}
                     options={organizations}
                     className='w-40 h-10  rounded select-dropDown'
                     onChange={e => headerStore.updateCurrentWorkSpace(e.value)}
                  />
                  <Modal headerStore={this.props.headerStore} />

                  <Link to='/home'>
                     <TaskManagerHeaderBoards>
                        <TaskManagerHeaderBoardLogo src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652693709/Task%20Manager/logo_xdfebn.png' />
                        <TaskManagerHeaderBoardHeading>
                           Boards
                        </TaskManagerHeaderBoardHeading>
                     </TaskManagerHeaderBoards>
                  </Link>
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
