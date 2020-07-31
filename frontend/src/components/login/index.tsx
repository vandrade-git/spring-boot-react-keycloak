import React, { useCallback } from 'react'

import { useKeycloak } from '@react-keycloak/web'

export default () => {
    const [keycloak, initialized] = useKeycloak();

    const login = useCallback(() => {
        keycloak.login()
    }, [keycloak])

    return (
        <div>
            <button type="button" onClick={login}>
                Login
            </button>
        </div>
    )
}