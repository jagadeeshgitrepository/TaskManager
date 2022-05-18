import styled, { css } from 'styled-components'

import tw from 'twin.macro'

export const CreateBoardContainer = styled.div``

export const CreateBoardHeading = styled.h1`
   ${tw`h-screen bg-white rounded`};
   color: #475569;
   width: 205px;
   height: 24px;
`
export const CreateBoardUnorderedList = styled.ul`
   ${tw`list-none    ml-10 flex flex-row justify-start items-center flex-wrap`};
`

export const CreatedBoardItem = styled.li`
   ${tw`rounded flex flex-col justify-center m-2 items-center`};
   background-color: white;
   width: 341px;
   height: 157px;
`
