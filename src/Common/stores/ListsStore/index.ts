import { observable, action } from 'mobx'
import Cookies from 'js-cookie'

interface MyProps {
   currentBoardId: string
   lists: any
   currentListId: string
}
class ListsStore {
   @observable listState: MyProps = {
      currentBoardId: '',
      lists: [],
      currentListId: ''
   }

   @action.bound
   updateCurrentBoardId = (boardId: string) => {
      this.listState.currentBoardId = boardId
      this.getLists()
   }
   @action.bound
   updateCurrentListId = (listId: string) => {
      this.listState.currentListId = listId
      console.log('header store')
   }

   @action.bound
   getLists = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const { currentBoardId } = this.listState
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
      const listsData = data.map(eachList => ({
         id: eachList.id,
         name: eachList.name
      }))
      this.listState.lists = listsData
   }
   @action.bound
   addList = async listname => {
      const jwtToken = Cookies.get('jwt_token')
      const { currentBoardId } = this.listState

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
      console.log(data)
      const newList: { id: string; name: string } = {
         id: data.id,
         name: data.name
      }
      const updatedList = [...this.listState.lists, newList]
      this.listState.lists = updatedList
   }
}
export default ListsStore
