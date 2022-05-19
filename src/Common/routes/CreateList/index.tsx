import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { observer, inject } from 'mobx-react'
import { GrFormClose } from 'react-icons/gr'
import BoardModal from '../BoardModel/index'
import ListModal from '../ListModel/index'
import Tasks from '../Tasks/index'
import HeaderStore from '../../stores/HeaderStore/index'
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

interface HeaderProps {
   headerStore: HeaderStore
}

@inject('headerStore')
@observer
class CreateList extends Component<HeaderProps> {
   state = { taskName: '' }

   render(): React.ReactElement {
      const { headerStore } = this.props
      const { currentListId } = headerStore.headerState

      const { lists } = headerStore.headerState
      console.log('hello lists')
      console.log(lists)

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

                     {currentListId !== eachList.id ? (
                        <>
                           <CreateTaskAddTaskButton
                              onClick={e => {
                                 headerStore.updateCurrentListId(e.target.id)
                              }}
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
                                 onClick={e =>
                                    headerStore.addTask(
                                       e.target.id,
                                       this.state.taskName
                                    )
                                 }
                                 id={eachList.id}
                              >
                                 Add Task
                              </CreateTaskAddButton>
                              <GrFormClose
                                 className='text-3xl'
                                 onClick={() =>
                                    headerStore.updateCurrentListId('')
                                 }
                              />
                           </AddTaskContainer>
                        </>
                     )}
                  </CreatedListItem>
               ))}
            </CreateListUnorderedList>

            <ListModal headerStore={this.props.headerStore} />
         </>
      )
   }
}
export default CreateList
