import React from 'react'
import { CookiesProvider } from "react-cookie";
import Dashboard from './Layout/Dashboard'
 const Container = ({isdashboard, children}) =>  {
    return (
        <CookiesProvider>
        <div className="background">
          {isdashboard ? (
            <Dashboard 
                componentToRender={children}
            />
          ) : children}
        </div>
      </CookiesProvider>
    )
}
export default Container