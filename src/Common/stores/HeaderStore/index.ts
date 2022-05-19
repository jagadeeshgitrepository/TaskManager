import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

class HeaderStore {
   @observable headerState = {
      organizations: [],
      currentWorkSpace: '',
      boards: [],
      currentBoardId: '',
      currentListId: '',
      taskName: '',
      lists: []
   }

   @action.bound
   updateCurrentBoardId = (boardId: string) => {
      this.headerState.currentBoardId = boardId
      this.getLists()
   }
   @action.bound
   updateCurrentListId = (listId: string) => {
      this.headerState.currentListId = listId
      console.log('header store')
      alert('header store')
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
   @action.bound
   getLists = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const { currentBoardId } = this.headerState
      console.log('tasks created board id is')
      console.log(currentBoardId)

      const url = `https://api.trello.com/1/boards/${currentBoardId}/lists?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('board detail lists')
      this.headerState.lists = data
   }
   @action.bound
   addList = async listname => {
      const jwtToken = Cookies.get('jwt_token')
      const { currentBoardId } = this.headerState

      const url = `https://api.trello.com/1/boards/${currentBoardId}/lists?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${listname}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('lists created')
      console.log(response)
      this.getLists()
   }
   @action.bound
   addTask = async (listId, taskName) => {
      const jwtToken = Cookies.get('jwt_token')

      const url = `https://api.trello.com/1/cards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${taskName}&idList=${listId}`
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('tasks  created')
      console.log(response)
      console.log(data)
      this.getLists()
   }
}

export default HeaderStore
