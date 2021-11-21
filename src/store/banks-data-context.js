import React, { useState } from 'react';

export const BanksDataContext = React.createContext({
  defaultData: [],
  data: [],
  sortBy: '',
  setData: () => {},
  updateSort: () => {},
  filterData: () => {},
  search: () => {},
});

export const BanksDataProvider = (props) => {
  const [defaultData, setDefaultData] = useState([]);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('asc');
  return <BanksDataContext.Provider value={{
      defaultData,
      data,
      sortBy,
      updateBanksData: function(data = []) {
        setDefaultData(data);
        setData(data)
      },
      updateSort: function(result) {
        setSortBy(result);
      },
      filterData: function(result) {
        setData(result)
      },
      search: function(result) {
        setData(result);
        setSortBy('asc');
      }
    }}>
    { props.children }
  </BanksDataContext.Provider>
};