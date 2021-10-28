import React, { useState } from 'react';

export const BanksDataContext = React.createContext({
  data: [],
  setData: function(data = []) {
    this.data = data;
  }
});

export const BanksDataProvider = (props) => {
  const [defaultData, setDefaultData] = useState([]);
  const [data, setData] = useState([]);
  return <BanksDataContext.Provider value={{
      defaultData,
      data,
      updateBanksData: function(data = []) {
        setDefaultData(data);
        setData(data)
      },
      search: function(result) {
        setData(result)
      }
    }}>
    { props.children }
  </BanksDataContext.Provider>
};