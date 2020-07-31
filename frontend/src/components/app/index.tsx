import React from 'react';
import './app.css';

import Keycloak, { KeycloakError, KeycloakInitOptions, KeycloakInstance } from 'keycloak-js'
import { KeycloakProvider } from "@react-keycloak/web";
import { KeycloakEvent, KeycloakTokens } from "@react-keycloak/core";
import { Router } from "../../routes";
import { configure } from 'axios-hooks'
import Axios from 'axios'

const keycloak: KeycloakInstance = Keycloak({
    realm: process.env.REACT_APP_KEYCLOAK_REALM || '',
    url: process.env.REACT_APP_KEYCLOAK_URL,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || '',
});

const keycloakProviderInitConfig: KeycloakInitOptions = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
}

const axios = Axios.create({
    baseURL: 'http://localhost:8081',
});

configure({ axios, cache: false });

const App: React.FC = React.memo(() => {
    const onKeycloakEvent = (event: KeycloakEvent, error?: KeycloakError) => {
        console.log('onKeycloakEvent', event, error)
    }

    const onKeycloakTokens = (tokens: KeycloakTokens) => {
        console.log('onKeycloakTokens', tokens)
    }

    return (
        <KeycloakProvider
            keycloak={keycloak}
            initConfig={keycloakProviderInitConfig}
            onEvent={onKeycloakEvent}
            onTokens={onKeycloakTokens}
        >
            {/*<AppRouter/>*/}
            <Router/>
        </KeycloakProvider>
    );
});

// class App extends React.PureComponent {
//     onKeycloakEvent = (event: KeycloakEvent, error?: KeycloakError) => {
//         console.log('onKeycloakEvent', event, error)
//     }
//
//     onKeycloakTokens = (tokens: KeycloakTokens) => {
//         console.log('onKeycloakTokens', tokens)
//     }
//
//     render() {
//         return (
//             <KeycloakProvider
//                 keycloak={keycloak}
//                 initConfig={keycloakProviderInitConfig}
//                 onEvent={this.onKeycloakEvent}
//                 onTokens={this.onKeycloakTokens}
//             >
//                 <AppRouter/>
//             </KeycloakProvider>
//         );
//     }
// }

export default App;