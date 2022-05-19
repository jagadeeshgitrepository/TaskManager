import React, { Component } from 'react'
import Cookies from 'js-cookie'
import 'twin.macro'
import { EachTask, TasksContainer } from './style'
interface MyProps {
   listId: string
}
class Tasks extends Component<MyProps> {
   state = { tasks: [] }
   componentDidMount() {
      this.getTasks(this.props.listId)
   }
   getTasks = async (listId: string) => {
      const jwtToken = Cookies.get('jwt_token')

      const url = `https://api.trello.com/1/lists/${listId}/cards?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}`
      const options = {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('all tasks in a list')
      console.log(response)
      console.log(data)

      this.setState({ tasks: [...data] })
   }

   render(): React.ReactElement {
      const { tasks } = this.state

      return (
         <>
            <TasksContainer>
               {tasks.map((eachTask: { id: string; name: string }) => (
                  <EachTask key={eachTask.id}>{eachTask.name}</EachTask>
               ))}
            </TasksContainer>
         </>
      )
   }
}

export default Tasks
