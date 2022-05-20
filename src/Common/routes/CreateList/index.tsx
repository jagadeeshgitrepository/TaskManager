import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { observer, inject } from 'mobx-react'
import { GrFormClose } from 'react-icons/gr'
import BoardModal from '../BoardModel/index'
import ListModal from '../ListModel/index'
import Tasks from '../Tasks/index'
import ModalStores from '../../stores/ModalStores/index'
import ListsStore from '../../stores/ListsStore/index'
import TaskStore from '../../stores/TasksStore/index'
import ReactPopUp from '../popup/index'
import {
   CreateListContainer,
   CreateListHeading,
   CreateListUnorderedList,
   CreatedListItem,
   CreateTaskTitleContainer,
   CreateTaskTitleHeadingInput,
   CreateTaskAddTaskButton,
   CreateTaskTextArea,
   CreateTaskAddButton,
   AddTaskContainer
} from './style'

interface StoreProps {
   listStore: ListsStore
   taskStore: TaskStore
   modalStore: ModalStores
}

@inject('listStore', 'taskStore', 'modalStore')
@observer
class CreateList extends Component<StoreProps> {
   state = { taskName: '' }

   render(): React.ReactElement {
      const { listStore, taskStore } = this.props
      const { currentListId } = listStore.listState

      const { lists } = listStore.listState
      console.log('hello lists')
      console.log(lists)

      return (
         <>
            <CreateListUnorderedList>
               {lists.map((eachList: { name: string; id: string }) => (
                  <CreatedListItem id={eachList.id} key={eachList.id}>
                     <CreateTaskTitleContainer>
                        <CreateTaskTitleHeadingInput value={eachList.name} />

                        <ReactPopUp
                           listStore={this.props.listStore}
                           deleteListId={eachList.id}
                        />
                     </CreateTaskTitleContainer>

                     <Tasks listId={eachList.id} />

                     {currentListId !== eachList.id ? (
                        <>
                           <CreateTaskAddTaskButton
                              onClick={e => {
                                 listStore.updateCurrentListId(e.target.id)
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
                                 this.setState({
                                    taskName: e.target.value
                                 })
                              }
                           ></CreateTaskTextArea>
                           <AddTaskContainer>
                              <CreateTaskAddButton
                                 onClick={e => {
                                    taskStore.addTask(
                                       e.target.id,
                                       this.state.taskName
                                    )
                                    listStore.getLists()
                                 }}
                                 id={eachList.id}
                              >
                                 Add Task
                              </CreateTaskAddButton>
                              <GrFormClose
                                 className='text-3xl'
                                 onClick={() =>
                                    listStore.updateCurrentListId('')
                                 }
                              />
                           </AddTaskContainer>
                        </>
                     )}
                  </CreatedListItem>
               ))}
            </CreateListUnorderedList>

            <ListModal listStore={this.props.listStore} />
         </>
      )
   }
}
export default CreateList
