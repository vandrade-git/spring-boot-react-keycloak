import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'
import { MyComp } from "../components";
// import { ProtectedRoute } from "./utils";

export const Router: React.FC = React.memo(() => {
    const [keycloak, initialized] = useKeycloak();

    if (!initialized) return <Spinner/>;

    if (keycloak.authenticated) {
        return <AuthenticatedRouter/>;
    } else {
        // keycloak.login();
        // return null;
        return <UnauthenticatedRouter/>
    }
});

export const AuthenticatedRouter: React.FC = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MyComp/> }/>
                <Route path="users" element={ <MyComp/> }/>
            </Routes>
        </BrowserRouter>
    );
});

export const UnauthenticatedRouter: React.FC = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MyComp/> }/>
                <Route path="users" element={ <MyComp/> }/>
            </Routes>
        </BrowserRouter>
    );
});

// export const AppRouter = () => {
//     const [keycloak, initialized] = useKeycloak();
//
//     if (!initialized) return <div>Loading...</div>
//     // console.log(keycloak)
//
//     return (
//         <BrowserRouter>
//             <span>{ keycloak.subject }</span>
//             <Routes>
//                 <Route path="/" element={ <Spinner/> }/>
//                 <ProtectedRoute path="users" element={ <MyComp/> }/>
//                 <ProtectedRoute path="home" element={ <HomePage/> }/>
//                 {/*<Route path="login" element={ <LoginPage/> }/>*/ }
//             </Routes>
//         </BrowserRouter>
//     )
// }

function Spinner() {
    return (
        <span>Loading...</span>
    );
}