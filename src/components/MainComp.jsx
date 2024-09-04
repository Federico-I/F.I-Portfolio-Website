import React from 'react';

function MainComp({ children }) {

  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-full mb-28 ">{children}</div>
  )
}

export default MainComp;