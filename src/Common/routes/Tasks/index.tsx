import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import 'twin.macro'
import { EachTask, TasksContainer } from './style'
interface MyProps {
   listId: string
}
const Tasks = (props: MyProps) => {
   const [tasks, setTasks] = useState([])
   const [listId, setListId] = useState(props.listId)

   useEffect(() => {
      const getTasks = async (listId: string) => {
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

         setTasks(data)
      }
      getTasks(props.listId)
   }, [props])

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

export default Tasks
