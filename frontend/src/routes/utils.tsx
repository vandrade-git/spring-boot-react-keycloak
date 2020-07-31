import React from 'react';
import { RouteProps } from 'react-router';
import { Navigate, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

export const ProtectedRoute: React.FC<RouteProps> = (props: RouteProps) => {
    const [keycloak, initialized] = useKeycloak();

    if (keycloak.authenticated) {
        return <Route {...props}/>;
    } else {
        keycloak.login();
        return null;
    }
}