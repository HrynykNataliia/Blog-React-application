import { AnyAction, Dispatch } from 'redux';
import {
  addPost,
  deletePost,
  getPosts,
  updatePost,
} from '../api';
import { postActions } from './post';

enum ActionTypes {
  SetPosts = 'posts/set',
}

export const postsActions = {
  setPosts: (posts: Post[]): AnyAction => ({
    type: ActionTypes.SetPosts,
    value: posts,
  }),

  loadPosts: () => async (dispatch: Dispatch) => {
    const posts = await getPosts();

    dispatch(postsActions.setPosts(posts));
  },

  deletePost: (postId: number) => async (dispatch: Dispatch) => {
    await deletePost(postId);

    await postsActions.loadPosts()(dispatch);
  },

  addPost: (post: PostModel) => async (dispatch: Dispatch) => {
    await addPost(post);

    await postsActions.loadPosts()(dispatch);
  },

  updatePost: (postId: number, post: PostModel) => async (dispatch: Dispatch) => {
    await updatePost(postId, post);

    await postsActions.loadPosts()(dispatch);

    await postActions.loadPost(postId)(dispatch);
  },
};

export const postsSelectors = {
  getPosts: (state: State): Post[] => state.posts,
};

export const postsReducer = (state: Post[] = [], action: AnyAction): Post[] => {
  switch (action.type) {
    case ActionTypes.SetPosts:
      return [...action.value];
    default:
      return state;
  }
};
