import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { LAUNCHES_PAST } from './query'

export const SpaceX: FC = () => {
    const { loading, data } = useQuery(LAUNCHES_PAST)

    if (loading && !data) {
        return <div>loading...</div>
    }

    return <pre>{JSON.stringify(data, null, 4)}</pre>
}
