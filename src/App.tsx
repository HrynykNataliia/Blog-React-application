import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { PostForm } from './components/PostForm/PostForm';
import { PostInfo } from './components/PostInfo/PostInfo';
import { PostList } from './components/PostList/PostList';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="columns">
        <div className="column is-two-thirds">
          <PostList />
        </div>

        <div className="column">
          <Routes>
            <Route
              path="/"
              element={(
                <div className="box has-background-warning-light has-text-link">
                  Please, choose a post in order to see the details.
                </div>
              )}
            />
            <Route path="/:postId" element={<PostInfo />} />
            <Route path="/:postId/edit" element={<PostForm />} />
            <Route path="/new" element={<PostForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
