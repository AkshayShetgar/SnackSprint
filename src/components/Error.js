import { useRouteError } from "react-router-dom";

const Error = () => {
    const  err = useRouteError();
    console.log(err);
    return(
        <div>
            <h3>Oops Something Went Wrong, try again afetr some time....</h3>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;
