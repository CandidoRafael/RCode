import { Navigation } from '../Navigation/Navigation'
import { IoCloseSharp } from 'react-icons/io5'
import styles from './Sidebar.module.css';

type SidebarProps = {
    isOpen: boolean
    closeSidebar: (v: boolean) => void;
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
    
    if(isOpen)
    return (
        <div className={styles.sidebar}>
            <Navigation
               direction='column' 
               gap='1.5rem' 
               color='#f1f1f1' 
               hovercolor=''
               />
            <button className={styles.btn} onClick={() => closeSidebar(false)}>
              <IoCloseSharp />
            </button>
        </div>
    );
};