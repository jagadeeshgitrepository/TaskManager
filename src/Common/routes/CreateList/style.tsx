import styled, { css } from 'styled-components'

import tw from 'twin.macro'

export const CreateListContainer = styled.div``

export const CreateListHeading = styled.h1`
   ${tw`h-screen bg-white rounded`};
   color: #475569;
   width: 205px;
   height: 24px;
`
export const CreateListUnorderedList = styled.ul`
   ${tw`list-none    ml-10 flex flex-row justify-start items-start flex-wrap`};
`

export const CreatedListItem = styled.li`
   ${tw`rounded flex pt-2 pb-2 pl-4 pr-4 flex-col justify-between m-2 items-start`};
   background-color: #ebecf0;

   width: 254px;
`

export const CreateTaskTitleContainer = styled.div`
   ${tw` flex flex-row justify-between w-full p-2 items-center`};
`

export const CreateTaskTitleHeadingInput = styled.input`
   ${tw`text-sm border-0 rounded `}
   height: 28px;
   width: 222px;
`

export const CreateTaskAddTaskButton = styled.button`
   ${tw`rounded  text-sm mt-2	`}
   width: 142px;
   height: 33px;
   color: #475569;
   background: #cbd5e1;
`

export const CreateTaskTextArea = styled.textarea`
   ${tw`rounded outline-none mt-2 text-sm pl-2 pt-2`}
   Width:222px;
   height: 68px;
   box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const CreateTaskAddButton = styled.button`
   ${tw`text-sm rounded mt-2 text-white`}
   width: 95px;
   height: 32px;
   background-color: #1d4ed8;
`
export const AddTaskContainer = styled.div`
   ${tw` flex flex-row justify-start items-center`};
`
