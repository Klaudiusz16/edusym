import React, { ReactElement } from 'react'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, from } from '@apollo/client';
import { SERVER } from '../../../config';
import { ErrorResponse, onError } from "@apollo/client/link/error";
import RefreshTokenController from '../../api/refreshToken/refreshToken';

let TOKEN = window.localStorage.getItem("user");
let REFRESH_TOKEN = window.localStorage.getItem("refresh_token");

const errorLink = onError(({ networkError, operation, forward }: ErrorResponse) => {
    if (
        networkError &&
        'statusCode' in networkError &&
        networkError.statusCode === 401 && TOKEN
    ) {
        (async () => {
            const refreshTokenController = new RefreshTokenController(TOKEN);
            const newToken = await refreshTokenController.getToken()
            TOKEN = newToken
            return forward(operation)
        })()
    }

});

const additiveLink = from([
    errorLink,
    new HttpLink({
        uri: `${SERVER}/api/graphql`, headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    })
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: additiveLink
});


export default function Providers({ children }: { children?: ReactElement | ReactElement[] }) {




    return (
        <ApolloProvider client={client}>
            <Provider store={store}>{children}</Provider>
        </ApolloProvider>
    )
}
