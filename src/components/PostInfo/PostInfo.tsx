import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { postActions, postSelectors } from '../../store/post';
import { postsActions } from '../../store/posts';
import { PostComments } from '../PostComments/PostComments';

export const PostInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = useSelector(postSelectors.getPost);

  useEffect(() => {
    dispatch(postActions.loadPost(+(postId as string)));
  }, [postId]);

  const deletePost = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(postsActions.deletePost(post.id));
    navigate('/');
  };

  if (!post.id) {
    return (
      <div className="box has-background-danger-light has-text-danger">
        Post is not found
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-centered has-text-link">
            {post.title}
          </p>
        </header>

        <article className="card-content">
          <div className="content">
            {post.body}
          </div>
        </article>

        <footer className="card-footer">
          <Link
            to={`/${postId}/edit`}
            className="card-footer-item"
          >
            Edit
          </Link>

          <a
            href="/"
            className="card-footer-item"
            onClick={deletePost}
          >
            Delete
          </a>
        </footer>
      </div>

      <PostComments />
    </>
  );
};
