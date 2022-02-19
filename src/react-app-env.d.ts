/// <reference types="react-scripts" />

interface PostModel {
  title: string;
  body: string;
}

interface Post extends PostModel {
  id: number;
  comments?: PostComment[];
}

interface CommentModel {
  postId: number;
  body: string;
}

interface PostComment extends CommentModel {
  id: number;
}

interface State {
  posts: Post[];
  post: Post;
}
