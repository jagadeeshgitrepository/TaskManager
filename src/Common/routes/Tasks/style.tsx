import styled, { css } from 'styled-components'

import tw from 'twin.macro'
export const EachTask = styled.li`
   ${tw`mt-2 rounded p-2 text-sm hover:bg-gray-100 cursor-pointer`};
   height: 38px;
   width: 230px;

   box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const TasksContainer = styled.ul`
   ${tw`list-none p-0 flex flex-col justify-start items-center flex-wrap`};
`
