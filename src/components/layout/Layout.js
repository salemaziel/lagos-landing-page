import React from 'react';



import BG from "../../images/janitor1.jpg"
import "../landing.css"


const Layout = ({ children }) => {
  return (
    <>
      <main className="text-gray-900">

        {children}
     
        </main>
        
    </>
  );
};

export default Layout;
