import { AnyAction, Dispatch } from 'redux';
import { addComment, getPost } from '../api';

enum ActionTypes {
  SetPost = 'post/set',
}

export const postActions = {
  setPost: (post: Post): AnyAction => ({
    type: ActionTypes.SetPost,
    value: post,
  }),

  loadPost: (postId: number) => async (dispatch: Dispatch) => {
    const post = await getPost(postId);

    dispatch(postActions.setPost(post));
  },

  addComment: (comment: CommentModel) => async (dispatch: Dispatch) => {
    await addComment(comment);

    await postActions.loadPost(comment.postId)(dispatch);
  },
};

export const postSelectors = {
  getPost: (state: State): Post => state.post,
  getComments: (state: State): PostComment[] => [...state.post.comments || []].reverse(),
};

const initState: Post = {
  id: 0,
  title: '',
  body: '',
  comments: [],
};

export const postReducer = (state: Post = initState, action: AnyAction): Post => {
  switch (action.type) {
    case ActionTypes.SetPost:
      return { ...action.value };
    default:
      return state;
  }
};
