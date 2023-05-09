import React, {useState} from "react";
import { NavBarContext } from "./navBarContext";

interface NavBarContextProps {
  children: React.ReactNode;
}
const NavBarProvider: React.FC<NavBarContextProps> = ({ children }) => {
    const [selectedPage, setSelectedPage] = useState('/home');
    const selectHandler = (a:string)=>{
        setSelectedPage(a)
    }
  const values = {
    selectedPage,
    selectHandler,
  };
  return (
    <NavBarContext.Provider value={values}>{children}</NavBarContext.Provider>
  );
};

export default NavBarProvider;
