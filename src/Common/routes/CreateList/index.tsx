import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import BoardModal from '../App/BoardModel/index'
import ListModal from '../App/ListModel/index'
import Tasks from '../Tasks/index'
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
   AddTaskContainer
} from './style'

interface MyProps {
   boardId: string
   lists: { id: string; name: string }[]
   addList: (listname: string) => void

   addTask: (listId: string, taskName: string) => void
}
class CreateList extends Component<MyProps> {
   state = { addTaskActiveId: '', taskName: '' }
   createList = listname => {
      this.props.addList(listname)
   }

   updateAddTaskActiveId = e => this.setState({ addTaskActiveId: e.target.id })

   closeAddTaskActiveId = e => this.setState({ addTaskActiveId: '' })

   createTask = e => {
      const { taskName } = this.state
      this.props.addTask(e.target.id, taskName)
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
               {lists.map((eachList: { name: string; id: string }) => (
                  <CreatedListItem id={eachList.id} key={eachList.id}>
                     <CreateTaskTitleContainer>
                        <CreateTaskTitleHeading>
                           {eachList.name}
                        </CreateTaskTitleHeading>
                        <BiDotsHorizontalRounded />
                     </CreateTaskTitleContainer>

                     <Tasks listId={eachList.id} />

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
                                 onClick={this.createTask}
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
