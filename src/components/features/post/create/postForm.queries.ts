import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      postId
      title
      content
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      postId
      title
      content
    }
  }
`
