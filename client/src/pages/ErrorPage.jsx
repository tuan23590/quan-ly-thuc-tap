import React from "react";
import {useRouteError} from 'react-router-dom';
export default function ErrorPage(){
    const error  = useRouteError();
return(
    <div>
        <h1>Error</h1>
        <h4><i>{error.statusText||error.message}</i></h4>
    </div>
)
}