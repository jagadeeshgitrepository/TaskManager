import styled from 'styled-components'
import Dropdown from 'react-dropdown'

import tw from 'twin.macro'

export const TaskManagerHeader = styled.nav`
   ${tw`flex flex-row justify-start pl-12 pr-48 pt-6 pb-6`};
   background-color: #0067a3;
   height: 90px;
`

export const TaskManagerHeaderMenuItems = styled.ul`
   ${tw`flex flex-row items-center list-none justify-between `};
`

export const TaskManagerMenuItemList = styled.li``

export const TaskManagerHeaderHome = styled.div`
   ${tw`w-10 h-10 text-white flex flex-row items-center  justify-center `};
   background-color: #4e97c2;
   border-radius: 4px;
`
export const TaskManagerDropDown = styled.DropDown`
   ${tw`w-40 h-10`};
   background-color: '#4E97C2';
`
