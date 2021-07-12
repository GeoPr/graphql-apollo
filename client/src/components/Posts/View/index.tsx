import { ChangeEvent, FC, FormEvent, ReactNode } from 'react'
import type { Post } from '../index'
import styles from './index.module.css'

type Props = {
    posts: Post[]
    postTitle: string
    Error: ReactNode
    onChangePostTitle(e: ChangeEvent<HTMLInputElement>): void
    onSubmit(e: FormEvent<HTMLFormElement>): void
}

const View: FC<Props> = ({
    posts,
    onChangePostTitle,
    onSubmit,
    postTitle,
    Error
}) => (
    <>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={postTitle}
                onChange={onChangePostTitle}
                className={styles.input}
            />
        </form>
        {Error}
        <ul>
            {posts.map(({ title, id }) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    </>
)

export { View as PostsView }
