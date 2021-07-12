import { gql } from '@apollo/client'

export const CREATE_POST = gql`
    mutation createPostMutation($post: PostInput) {
        createPost(post: $post) {
            title
            id
        }
    }
`
