import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postActions } from '../../store/post';

export const CommentsForm: React.FC = () => {
  const dispatch = useDispatch();
  const commentInput = useRef({} as HTMLInputElement);
  const { postId } = useParams();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment: CommentModel = {
      postId: +(postId as string),
      body: commentInput.current.value,
    };

    commentInput.current.value = '';

    dispatch(postActions.addComment(comment));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="field">
        <input
          type="text"
          placeholder="Enter your comment"
          ref={commentInput}
          required
          className="input is-link"
        />
      </div>

      <div className="field is-grouped is-grouped-right">
        <div className="control">
          <button
            type="reset"
            className="button is-link is-light"
          >
            Reset
          </button>
        </div>

        <div className="control">
          <button
            type="submit"
            className="button is-link"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
