import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { postSelectors } from '../../store/post';
import { postsActions } from '../../store/posts';

export const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch('/new');
  const post = useSelector(postSelectors.getPost);
  const titleField = useRef({} as HTMLInputElement);
  const bodyField = useRef({} as HTMLTextAreaElement);

  const updateSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedPost: PostModel = {
      title: titleField.current.value,
      body: bodyField.current.value,
    };

    dispatch(postsActions.updatePost(post.id, updatedPost));
    navigate(`/${post.id}`);
  };

  const addSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: PostModel = {
      title: titleField.current.value,
      body: bodyField.current.value,
    };

    dispatch(postsActions.addPost(newPost));
    navigate('/');
  };

  return (
    <form
      className="box"
      onSubmit={match ? addSubmitHandler : updateSubmitHandler}
    >
      <div className="field">
        <input
          type="text"
          defaultValue={match ? '' : post.title}
          ref={titleField}
          placeholder="Enter your title"
          required
          className="input is-link"
        />
      </div>

      <div className="field">
        <textarea
          placeholder="Enter your post"
          defaultValue={match ? '' : post.body}
          ref={bodyField}
          required
          className="textarea is-link has-fixed-size"
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
            {match ? 'Add' : 'Update'}
          </button>
        </div>
      </div>
    </form>
  );
};
