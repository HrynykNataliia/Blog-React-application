export const request = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const url = `https://bloggy-api.herokuapp.com/${endpoint}`;

  const response = await fetch(url, options);
  const data: T = await response.json();

  return data;
};

export const getPosts = async (): Promise<Post[]> => {
  return request('posts');
};

export const getPost = async (postId: number): Promise<Post> => {
  return request(`posts/${postId}?_embed=comments`);
};

export const deletePost = async (postId: number): Promise<Post> => {
  return request(`posts/${postId}`, { method: 'DELETE' });
};

export const addComment = async (comment: CommentModel) => {
  await request('comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const addPost = async (post: PostModel) => {
  await request('posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const updatePost = async (postId: number, post: PostModel) => {
  await request(`posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
