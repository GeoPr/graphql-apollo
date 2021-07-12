import { gql } from '@apollo/client'

export const LAUNCHES_PAST = gql`
    query {
        launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
        }
    }
`

