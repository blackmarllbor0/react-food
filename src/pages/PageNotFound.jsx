import Helmet from "react-helmet";

export default function PageNotFound() {
    return <>
        <Helmet><title>Error Page</title></Helmet>
        <h1> Page Not Found </h1>
    </>;
}