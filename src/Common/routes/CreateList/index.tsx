import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import BoardModal from '../App/BoardModel/index'
import ListModal from '../App/ListModel/index'

import {
   CreateListContainer,
   CreateListHeading,
   CreateListUnorderedList,
   CreatedListItem,
   CreateTaskTitleContainer,
   CreateTaskTitleHeading,
   CreateTaskAddTaskButton,
   CreateTaskTextArea,
   CreateTaskAddButton,
   AddTaskContainer,
   TasksContainer,
   EachTask
} from './style'

interface MyProps {
   boardId: string
   lists: any
}
class CreateList extends Component<MyProps> {
   state = { addTaskActiveId: '', taskName: '' }
   createList = async listname => {
      const jwtToken = Cookies.get('jwt_token')
      const { boardId } = this.props
      console.log('board Id')
      console.log(boardId)
      const url = `https://api.trello.com/1/boards/${boardId}/lists?key=8f4c47d39646c71bd5f9e09471af0d3e&token=${jwtToken}&name=${listname}`
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
   }

   updateAddTaskActiveId = e => this.setState({ addTaskActiveId: e.target.id })

   closeAddTaskActiveId = e => this.setState({ addTaskActiveId: '' })

   addTasks = async e => {
      const jwtToken = Cookies.get('jwt_token')
      const listId = e.target.id
      const { taskName } = this.state
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

   getTasks = async (listId: string) => {
      const jwtToken = Cookies.get('jwt_token')

      const { taskName } = this.state
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
      const tasks = [...data]
      return tasks.map(eachTask => (
         <EachTask key={eachTask.id}>{eachTask.name}</EachTask>
      ))
   }

   render(): React.ReactElement {
      const { addTaskActiveId } = this.state
      console.log('lists')
      const { lists } = this.props
      console.log('hello lists')
      console.log(lists)
      console.log(this.props.boardId)
      return (
         <>
            <CreateListUnorderedList>
               {lists.map((eachList: { name: string; id: 'string' }) => (
                  <CreatedListItem id={eachList.id} key={eachList.id}>
                     <CreateTaskTitleContainer>
                        <CreateTaskTitleHeading>
                           {eachList.name}
                        </CreateTaskTitleHeading>
                        <BiDotsHorizontalRounded />
                     </CreateTaskTitleContainer>

                     <TasksContainer>
                        {this.getTasks(eachList.id)}
                     </TasksContainer>

                     {addTaskActiveId !== eachList.id ? (
                        <>
                           <CreateTaskAddTaskButton
                              onClick={this.updateAddTaskActiveId}
                              id={eachList.id}
                           >
                              + Add Task
                           </CreateTaskAddTaskButton>
                        </>
                     ) : (
                        <>
                           <CreateTaskTextArea
                              placeholder='Enter a Title For This Card'
                              onChange={e =>
                                 this.setState({ taskName: e.target.value })
                              }
                           ></CreateTaskTextArea>
                           <AddTaskContainer>
                              <CreateTaskAddButton
                                 onClick={this.addTasks}
                                 id={eachList.id}
                              >
                                 Add Task
                              </CreateTaskAddButton>
                              <GrFormClose
                                 className='text-3xl'
                                 onClick={this.closeAddTaskActiveId}
                              />
                           </AddTaskContainer>
                        </>
                     )}
                  </CreatedListItem>
               ))}
            </CreateListUnorderedList>

            <ListModal createList={this.createList} />
         </>
      )
   }
}
export default CreateList
