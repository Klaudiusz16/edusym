import React, { ReactElement } from 'react'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, from, fromPromise, Observable } from '@apollo/client';
import { SERVER } from '../../../config';
import { ErrorResponse, onError } from "@apollo/client/link/error";
import RefreshTokenController from '../../api/refreshToken/refreshToken';
import { redirect } from 'react-router-dom';


let GET_TOKEN = () => window.localStorage.getItem("user");
let GET_REFRESH_TOKEN = () => window.localStorage.getItem("refresh_token");


const errorLink = onError(({ networkError, operation, forward }: ErrorResponse) => {
    const tmp_rt = GET_REFRESH_TOKEN();
    if (
        networkError &&
        'statusCode' in networkError &&
        networkError.statusCode === 401 && tmp_rt
    ) {


        const refreshTokenController = new RefreshTokenController(tmp_rt);
        return new Observable(observer => {
            refreshTokenController.getToken()
                .then(refreshResponse => {
                    refreshTokenController.saveToLocalStorage(refreshResponse.token, refreshResponse.refresh_token)
                    operation.setContext(({ headers = {} }) => ({
                        headers: {
                            ...headers,
                            authorization: `Bearer ${refreshResponse.token}` || null,
                        }
                    }));
                })
                .then(() => {
                    const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer)
                    };
                    forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                    // No refresh or client token available, we force user to login
                    window.localStorage.removeItem("user");
                    window.localStorage.removeItem("refresh_token");
                    return redirect("/login")
                });
        });

    }

});

const additiveLink = from([
    errorLink,
    new HttpLink({
        uri: `${SERVER}/api/graphql`, headers: {
            "Authorization": `Bearer ${GET_TOKEN()}`
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
