import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { observer, inject } from 'mobx-react'
import { GrFormClose } from 'react-icons/gr'
import Loader from 'react-loader-spinner'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
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

const reorder = (list, startIndex, endIndex) => {
   const result = Array.from(list)
   const [removed] = result.splice(startIndex, 1)
   result.splice(endIndex, 0, removed)

   return result
}

@inject('listStore', 'taskStore', 'modalStore')
@observer
class CreateList extends Component<StoreProps> {
   state = { taskName: '' }

   onDragEnd = result => {
      const { destination, source } = result

      // dropped outside the list
      if (!destination) {
         return
      }

      // dropped in the same position
      if (
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      ) {
         return
      }

      const items = reorder(
         this.props.listStore.listState.lists,
         result.source.index,
         result.destination.index
      )
      const { listStore } = this.props
      listStore.listState.lists = items
   }
   render(): React.ReactElement {
      const { listStore, taskStore } = this.props
      const { currentListId } = listStore.listState

      const { lists } = listStore.listState
      console.log('hello lists')
      console.log(lists)

      return (
         <>
            <DragDropContext onDragEnd={this.onDragEnd}>
               <Droppable droppableId='droppable' direction='horizontal'>
                  {(provided, snapshot) => (
                     <CreateListUnorderedList
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                     >
                        {lists.map(
                           (eachList: { name: string; id: string }, index) => (
                              <Draggable
                                 key={eachList.id}
                                 draggableId={eachList.id}
                                 index={index}
                              >
                                 {(provided, snapshot) => (
                                    <CreatedListItem
                                       id={eachList.id}
                                       key={eachList.id}
                                       ref={provided.innerRef}
                                       {...provided.draggableProps}
                                       {...provided.dragHandleProps}
                                    >
                                       <CreateListTitleContainer>
                                          <CreateListTitleHeadingInput
                                             value={eachList.name}
                                          />

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
                                                   listStore.updateCurrentListId(
                                                      e.target.id
                                                   )
                                                }}
                                                id={eachList.id}
                                             >
                                                + Add Task
                                             </CreateTaskAddTaskButton>
                                          </>
                                       ) : (
                                          <>
                                             {taskStore.taskState
                                                .enableLoader && (
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
                                                      this.props.taskStore.enableTaskLoader(
                                                         true
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
                                                      listStore.updateCurrentListId(
                                                         ''
                                                      )
                                                   }
                                                />
                                             </AddTaskContainer>
                                          </>
                                       )}
                                    </CreatedListItem>
                                 )}
                              </Draggable>
                           )
                        )}
                        {provided.placeholder}
                     </CreateListUnorderedList>
                  )}
               </Droppable>
            </DragDropContext>

            <ListModal listStore={this.props.listStore} />
         </>
      )
   }
}
export default CreateList
