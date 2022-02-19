import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './post';
import { postsReducer } from './posts';

const reducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
