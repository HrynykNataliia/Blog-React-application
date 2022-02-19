import React from 'react';
import { useSelector } from 'react-redux';
import { postSelectors } from '../../store/post';
import { CommentsForm } from '../CommentsForm/CommentsForm';

export const PostComments: React.FC = () => {
  const comments = useSelector(postSelectors.getComments);

  return (
    <div className="box">
      <CommentsForm />
      <h2 className="title has-text-link is-5">Comments:</h2>
      <ul className="list">
        {comments.map(comment => (
          <li
            className="message is-link"
            key={comment.id}
          >
            <p className="list__item message-body has-text-link">
              {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
