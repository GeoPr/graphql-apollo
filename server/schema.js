const { buildSchema } = require('graphql')

module.exports = buildSchema(`
	type Post {
		id: ID
		title: String
	}

	input PostInput {
		title: String!
	}

	type Query {
		getAllPosts: [Post]
	}

	type Mutation {
		createPost(post: PostInput): Post
	}
`)
