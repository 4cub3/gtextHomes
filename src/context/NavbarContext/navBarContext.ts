import {createContext} from 'react'
import { SelectedPage } from '../../types/selectedPage'
interface NavBarTypes{
    selectedPage: string;
    selectHandler: (a:string) => void;
}
export const NavBarContext = createContext<NavBarTypes>({
    selectedPage : SelectedPage.Home,
    selectHandler : ()=>{},
})