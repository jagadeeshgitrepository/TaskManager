import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { observer } from 'mobx-react'
import 'twin.macro'
import Header from '../Header'
import CreateBoard from '../CreateBoards/index'
import { HomeContainer } from './styledComponents'

class Home extends Component {
   state = { currentWorkSpace: '', boards: [] }

   updateCurrentWorkSpace = organizationId =>
      this.setState({ currentWorkSpace: organizationId }, this.getBoards)

   getBoards = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const { currentWorkSpace } = this.state
      const url = `
         https://api.trello.com/1/organizations/${currentWorkSpace}/boards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      this.setState({ boards: data })
   }

   addBoard = async boardname => {
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://api.trello.com/1/boards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${boardname}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(response)
      this.getBoards()
   }
   render(): React.ReactElement {
      const { currentWorkSpace, boards } = this.state
      console.log('currentWorkSpace')
      console.log(currentWorkSpace)

      return (
         <>
            <Header updateFun={this.updateCurrentWorkSpace} />
            <HomeContainer>
               <CreateBoard
                  currentWorkSpace={currentWorkSpace}
                  boards={boards}
                  addBoard={this.addBoard}
               />
            </HomeContainer>
         </>
      )
   }
}

export default Home
