import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async() => {
    async function loadPosts() {
      try{
        const res = await fetch('http://localhost:3000/posts');
        const data = await res.json();
        setPosts(data);
      } catch(err) {
        console.error(err);
        setError('게시글을 불러오지 못했어요.');
      }

      setLoading(false);
    }
    loadPosts();
  }, []);

  const handleAddPost = async(newPost) => {
    try{
      const res = await fetch('http://localhost:3000/posts',
      {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      const saved = await res.json();
      setPosts([newPost, ...posts]);
    } catch(err) {
      console.error(err);
    }
  };

  const handleDelete = (id) => {
    try{
      await fetch(`http://localhost:3000/posts/${id}`,
        {method: 'DELETE'}
      );
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = (id) => {
    try{
      const post = posts.find(p => p.id === id);
      const res = await fetch(`http:/localhost:3000/posts/${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({likes: post.likes + 1})
        });
        const updated = await res.json();
        setPosts(posts.map(p =>p.id === id ? { ...p, likes: p.likes + 1 }: p));
    } catch (err) {
      console.error(err);
    }
    setPosts(
      posts.map(p =>
        p.id === id
          ? { ...p, likes: p.likes + 1 }
          : p
      )
    );
  };


  if (loading)
    return <>
      <Header /> <p>불러오는 중...</p>
    </>;
  
  if (error)
    return <>
      <Header /> <p>에러: {error}</p>
    </>;

  return (
    <>
      <Header />
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} onDelete={handleDelete} onLike={handleLike} />
    </>
  );
}

export default App;