
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Navigation } from '../Navigation/Navigation'
import * as S from './Sidebar.styled'

type SidebarProps = {
    isOpen: boolean
    closeSidebar: (v: boolean) => void;
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
    if(isOpen) 
    return (
        <S.SidebarContainer>
            <Navigation 
               direction='column' 
               gap='1.5rem' 
               color='#f1f1f1' 
               hoverColor=''
               />

            <S.CloseButton onClick={() => closeSidebar(false)}>
            <IoIosCloseCircleOutline />
            </S.CloseButton>
        </S.SidebarContainer>
    )
}