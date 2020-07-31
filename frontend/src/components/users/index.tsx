import React, { useCallback } from 'react';
import useAxios from "axios-hooks";
import { useKeycloak } from "@react-keycloak/web";

export const Users: React.FC = () => {
    const [keycloak, initialized] = useKeycloak();
    const [{data, loading, error}, refetch] = useAxios({
        url: '/users',
        headers: {
            Authorization: initialized ? `Bearer ${ keycloak.token }` : undefined,
        },
    });

    const login = useCallback(() => {
        keycloak.login()
    }, [keycloak]);

    const logout = useCallback(() => {
        keycloak.logout()
    }, [keycloak]);

    const recall = React.useCallback(() => {
        refetch();
    }, [refetch]);

    return (
        <div>
            <span>{keycloak.subject}</span>
            <button onClick={ recall }>refetch</button>
            <button onClick={ login }>login</button>
            <button onClick={ logout }>logout</button>
            { loading && <p>Loading...</p> }
            { error && <p>Error!!!</p> }
            { data && <pre>{ JSON.stringify(data, null, 2) }</pre> }
        </div>
    )
}

export default Users;