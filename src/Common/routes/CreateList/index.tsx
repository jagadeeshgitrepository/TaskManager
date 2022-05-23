import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { observer, inject } from 'mobx-react'
import { GrFormClose } from 'react-icons/gr'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
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
   CreateListTitleContainer,
   CreateListTitleHeadingInput,
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
                     <CreateListTitleContainer>
                        <CreateListTitleHeadingInput value={eachList.name} />

                        <ReactPopUp
                           listStore={this.props.listStore}
                           deleteListId={eachList.id}
                        />
                     </CreateListTitleContainer>

                     <Tasks
                        listId={eachList.id}
                        taskStore={this.props.taskStore}
                     />

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
                           {taskStore.taskState.enableLoader && (
                              <div>
                                 <Loader
                                    type='ThreeDots'
                                    color='#0b69ff'
                                    height='50'
                                    width='50'
                                 />
                              </div>
                           )}

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
                                    this.props.taskStore.enableTaskLoader()
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
