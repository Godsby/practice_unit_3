# Schema for practice

Routes

- **User**
  - GET `/users` - Get all users,
  - Get `/users/:id` - Get single user,
  - Post `/users` - Add single user,
  - DELETE `/users/:id` - Delete user with the corresponding `id`.

- **Post**
  - GET `/posts` - Get all posts,
  - GET `/posts/:id` - Get single post,
  - POST `/posts` - Add single post,
  - Put `/posts/:id` - Update single post,
  - DELETE `/posts/:id` - Delete single post.

- **Likes**
  - GET `/likes` - Get all likes,
  - GET `/likes/posts/:id` - Get all likes for a single post,
  - POST `/likes` - Add single like,
  - DELETE `/likes/:id` - Delete single like.

- **Comments**
  - GET `/comments` - Get all comments,
  - GET `/comments/posts/:id` - Get all comments for a single post,
  - POST `/comments` - Add a comment,
  - PUT `/comments/:id` - Update a comment,
  - DELETE `/comments/:id` - Delete a comment.

- **Album**
  - GET `/albums` - Get all albums,
  - POST `/albums` - Add new album

- **Pictures** 
  - GET `/pictures` - Get all pictures,
  - GET `/pictures/albums/:id` - Get all pictures for a single album,
  - POST `/pictures` - Add a picture,
  - DELETE `/pictures/:id` - Delete single picture.

