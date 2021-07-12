import { useMutation, useQuery } from '@apollo/client'
import { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react'
import { CREATE_POST } from './mutation'
import { GET_ALL_POSTS } from './query'
import { PostsView } from './View'

export type Post = {
    title: string
    id: number
}

type QueryData = {
    getAllPosts: Post[]
}

type MutationData = {
    createPost: Post
}

export const Posts: FC = () => {
    const { data, loading, refetch } = useQuery<QueryData>(GET_ALL_POSTS)
    const [createPost] = useMutation<MutationData>(CREATE_POST)
    const [Error, setError] = useState<ReactNode>(null)

    const [postTitle, setPostTitle] = useState('')

    const onChangePostTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setPostTitle(e.target.value)
        setError(null)
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const trimmed = postTitle.trim()

        if (trimmed) {
            try {
                const { data } = await createPost({
                    variables: {
                        post: {
                            title: trimmed
                        }
                    }
                })
                const post = data?.createPost

                if (post) {
                    setPostTitle('')
                    return refetch()
                }

                return setError(() => <div>something went wrong</div>)
            } catch (e) {
                return setError(() => <div>something went wrong</div>)
            }
        }

        return setError(() => <div>cannot be empty</div>)
    }

    if (loading) {
        return <div>loading....</div>
    }

    return (
        <PostsView
            posts={data?.getAllPosts!}
            postTitle={postTitle}
            Error={Error}
            onChangePostTitle={onChangePostTitle}
            onSubmit={onSubmit}
        />
    )
}
