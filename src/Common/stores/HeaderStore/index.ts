import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

class HeaderStore {
   @observable headerState = {
      organizations: [],
      currentWorkSpace: '',
      boards: [],
      currentBoardId: '',
      loaderActivate: false
   }

   @action.bound
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

      this.headerState.organizations = dropDown
   }

   @action.bound
   updateCurrentWorkSpace = organizationId => {
      this.headerState.currentWorkSpace = organizationId
      this.getBoards()
   }

   @action.bound
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

   @action.bound
   getBoards = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const workSpace = this.headerState.currentWorkSpace
      const url = `
         https://api.trello.com/1/organizations/${workSpace}/boards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
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
      this.headerState.boards = data
   }
   @action.bound
   loader() {
      this.headerState.loaderActivate = true
   }

   @action.bound
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
      if (response.ok === true) {
         const data = await response.json()
         console.log(response)
         this.headerState.loaderActivate = false
         this.getBoards()
      } else {
         this.headerState.loaderActivate = false
         alert('response failed')
      }
   }
}

export default HeaderStore
