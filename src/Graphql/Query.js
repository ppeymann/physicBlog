import { gql } from "@apollo/client";

export const BLOG_INFO = gql`
query MyQuery {
  posts {
    reference {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    slug
    title
    coverPhoto {
      url
    }
    id
  }
}


`
export const AUTHORS_INFO = gql`
query MyQuery {
  authors {
    avatar {
      url
    }
    id
    name
    slug
  }
}

`
export const AUTHOR_INFO = gql`
query getAuthor($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    name
    field
    description {
      html
    }
    posts {
      slug
      coverPhoto {
        url
      }
      title
      id
    }
  }
}

`
export const POST_INFO =gql`
query postInfo($slug: String!) {
  post(where: {slug: $slug}) {
    reference {
      ... on Author {
        id
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
}

`
export const GET_COMMENT = gql`
query getCom($slug: String!) {
  comments(where: {post: {slug: $slug }}) {
    name
    text
    email
    id
  }
}

`