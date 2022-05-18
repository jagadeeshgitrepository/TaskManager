import React, { Component, useEffect } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import Select from 'react-select'
import Cookies from 'js-cookie'

import Modal from '../App/Model/index'

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

interface MyProps {
   updateFun: (organizationId: string) => void
}

class Header extends Component<MyProps> {
   state = {
      organizations: []
   }

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
      this.updateDropDown()
   }

   updateDropDown = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://api.trello.com/1/members/me?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
      const option = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const responseT = await fetch(url, option)
      const bodyT = await responseT.json()
      const { idOrganizations } = bodyT
      console.log(idOrganizations)
      const dropDown = idOrganizations.map(eachItem => ({
         value: eachItem,
         label: eachItem
      }))
      const optionsData = [
         { value: 'chocolate', label: 'Chocolate' },
         { value: 'strawberry', label: 'Strawberry' },
         { value: 'vanilla', label: 'Vanilla' }
      ]

      this.setState(prevState => ({
         organizations: dropDown
      }))
   }
   createWorkSpace = async (name: string) => {
      const jwtToken = Cookies.get('jwt_token')
      const apiUrl = `https://api.trello.com/1/organizations?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&displayName=${name}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(apiUrl, options)
      const body = await response.json()
      this.updateDropDown()
   }

   render(): React.ReactElement {
      const { organizations } = this.state
      console.log(this.props)
      console.log(organizations)
      return (
         <TaskManagerHeader>
            <TaskManagerHeaderMenuItems>
               <TaskManagerMenuItemList>
                  <TaskManagerHeaderHome>
                     <AiOutlineHome />
                  </TaskManagerHeaderHome>
                  <TaskManagerHeaderBriefContainer>
                     <TaskManagerHeaderBriefCase src='https://res.cloudinary.com/dmpepn8dm/image/upload/v1652699960/Task%20Manager/Line_a6zgc3.png' />
                  </TaskManagerHeaderBriefContainer>
                  <Select
                     styles={this.customStyles}
                     options={organizations}
                     className='w-40 h-10  rounded select-dropDown'
                     onChange={e => this.props.updateFun(e.value)}
                  />
                  <Modal createworkSpace={this.createWorkSpace} />

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
