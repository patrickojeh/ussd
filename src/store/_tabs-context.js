import React, { useState } from 'react';

export const TabsContext = React.createContext({
  active: '',
  setActive: () => {}
})

export const TabsProvider = (props) => {
  const tabs = {
    all: 'all',
    fav: 'favorites'
  }
  const [activeTab, setActiveTab] = useState(tabs.all);
  return <TabsContext.Provider value={{
      active: activeTab,
      setActive: (val) => {
        setActiveTab(val);
      }
    }}>
    {props.children}
  </TabsContext.Provider>
}