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
   ${tw`list-none    ml-10 flex flex-row justify-start items-center flex-wrap`};
`

export const CreatedListItem = styled.li`
   ${tw`rounded flex flex-row justify-between m-2 items-start`};
   background-color: white;
   height: 81px;
   width: 254px;
`
