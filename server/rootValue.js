class RootValue {
    constructor(posts) {
        this.posts = posts
    }

    createPost({ post }) {
        const newPost = {
            ...post,
            id: this.posts.length
        }

        this.posts.push(newPost)

        return newPost
    }

    getAllPosts() {
        return this.posts
    }
}

module.exports = RootValue
