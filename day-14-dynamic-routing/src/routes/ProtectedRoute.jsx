import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {
    let isAdmin = false;

    if(!isAdmin){ // agar admin true hai to ye if conditions skip kar dega
        console.log('hey i am running..');
        alert('You are not an admin');
        return <Navigate to={'/'} />
    }

    return children; 
}


export default ProtectedRoute;