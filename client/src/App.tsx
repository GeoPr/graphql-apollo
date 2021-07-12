import { ApolloProvider } from '@apollo/client'
import { FC } from 'react'
import './App.css'
import { Posts } from './components/Posts'
import { SpaceX } from './components/SpaceX'
import { Wrapper } from './components/Wrapper'
import { createApolloClient } from './utils/createApolloClient'

const App: FC = () => {
    return (
        <Wrapper>
            <ApolloProvider
                client={createApolloClient('http://localhost:5000/graphql')}
            >
                <Posts />
            </ApolloProvider>

            <ApolloProvider
                client={createApolloClient('https://api.spacex.land/graphql/')}
            >
                <SpaceX />
            </ApolloProvider>
        </Wrapper>
    )
}

export default App
