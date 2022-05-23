import { observable, action } from 'mobx'
import Cookies from 'js-cookie'
class TaskStore {
   @observable taskState = { enableLoader: false }

   @action.bound
   enableTaskLoader(status) {
      this.taskState.enableLoader = status
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
   }
}
export default TaskStore
