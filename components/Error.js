import { useRouteError } from 'react-router-dom' 
import React from 'react'


function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div><h1>Error</h1>
    <h2>hahaha</h2>
    <h1>{err.status + " " + err.state}</h1></div>
  )
}

export default Error