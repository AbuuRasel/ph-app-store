import { createContext, useState } from 'react';

export const installedAppsContext = createContext();



const InstalledAppsProvider = ({children}) => {
 const [installedApps, setInstalledApps]= useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  }
  return <installedAppsContext.Provider value= {data}>{children}</installedAppsContext.Provider>
};

export default InstalledAppsProvider;