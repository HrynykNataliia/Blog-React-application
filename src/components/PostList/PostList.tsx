import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postsActions, postsSelectors } from '../../store/posts';
import './PostList.scss';

export const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors.getPosts);

  useEffect(() => {
    dispatch(postsActions.loadPosts());
  }, []);

  return (
    <ul className="list box">
      {posts.map(post => (
        <li
          className="message is-link"
          key={post.id}
        >
          <Link
            to={`/${post.id}`}
            className="list__item message-body has-text-link"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
