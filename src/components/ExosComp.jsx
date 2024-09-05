import React from 'react';



function ExosComp({ children }) {


  return (
    <div className="flex flex-col items-center justify-between h-full bg-no-repeat bg-cover bg-top bg-fixed" >{ children }</div>
  );
}

export default ExosComp;