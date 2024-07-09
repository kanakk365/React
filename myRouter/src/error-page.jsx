import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error=useRouteError();
    console.log(error);

    return(
        <div id="error-page">
            <h1>Oops! That's an ERROR</h1>
            <p>Seem like, i am dumb . Well can't do anything about it </p>
            <p>
                <i>
                    {error.statusText ||error.message}
                </i>
            </p>
            
        </div>
    );
}