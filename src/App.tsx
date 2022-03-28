import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './components/input/input';
import List, { Task } from './components/list/list';
import { addPosts } from './redux/actions/actions';

interface State {
  data: {
    posts: []
  }
}

function App() {
  const posts = useSelector((state: State) => state.data.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(data => dispatch(addPosts(data.map((item: Task) => {
          return {
            ...item,
            id: item.title
          }
        }))))
    }
  }, [dispatch, posts.length]);

  return (
    <>
      <div className="App">
        <Input />
        <List tasks={posts} />
      </div>
    </>
  );
}

export default App;
