import React, { createContext, useState } from 'react'

export const AppContext = createContext();
export const AppContextProvider = (props) => {

  const [showSideBar, setShowSideBar] = useState(false);
  let media = matchMedia("(max-width : 830px)");

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  const hideSideBarInMobile = () => {
    if (media.matches) {
      toggleSideBar();
    }
  }
  
  const contextValue = {
    showSideBar, toggleSideBar, hideSideBarInMobile
  }

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}
