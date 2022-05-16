import styled from 'styled-components'

import tw from 'twin.macro'

export const TaskManagerContainer = styled.div`
   ${tw`flex flex-col items-center justify-start h-screen `};
   background-color: #1976ad;
`

export const TaskManagerLogo = styled.img`
   ${tw`text-white mb-16`};
   width: 360px;
   height: 84px;
   margin-top: 78px;
   @media (max-width: 713px) {
      width: 196px;
      height: 42px;
   }
`
export const TaskManagerLoginContainer = styled.div`
   ${tw`bg-white rounded-lg pt-12 pl-16 pr-12 pb-16`};
   width: 613px;
   height: 563px;
   @media (max-width: 713px) {
      width: 328px;
      height: 350px;
      ${tw`bg-white rounded-lg pt-8 pl-4 pr-4 pb-8`};
   }
`
export const TaskManagerLoginImage = styled.img`
   width: 485px;
   height: 294px;
   @media (max-width: 713px) {
      width: 280px;
      height: 170px;
   }
`
export const TaskManagerLoginHeading = styled.h1`
   ${tw`text-2xl mt-12`};
   color: '#1E293B';
   margin-left: 23px;
   font-size: 24px;
   @media (max-width: 713px) {
      font-size: 14px;
      ${tw`mt-2`}
   }
`
export const TaskManagerButton = styled.button`
   ${tw`text-white mt-12	`};
   width: 234px;
   height: 48px;
   background-color: #1976ad;
   border-radius: 24px;
   margin-left: 125px;
   @media (max-width: 713px) {
      width: 234px;
      height: 48px;
      margin-left: 29px;
      background: #1976ad;
      border-radius: 24px;
      margin-top: 8px;
   }
`
