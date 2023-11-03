import React from "react";
import {useRouteError} from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);
    return(
        <div id="error-page">
            <h1>Xin lỗi, đã có lỗi sẩy ra trong quá trình xử lý.</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}