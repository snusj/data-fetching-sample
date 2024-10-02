import './reset.css';
import './App.css';

import { useEffect, useState } from 'react';

import { PostDetail } from './components/PostDetail';
import { PostList } from './components/PostList';
import { loadPosts, type Post } from './PostData';

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    loadPosts()
      .then((data: Post[] | undefined) => {
        if (data === undefined) return;
        setPosts(data);
        setSelectedId(data[0]?.id);
      })
      .catch((error: unknown) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <PostList
        posts={posts}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <PostDetail
        post={posts.find((p) => p.id === selectedId) ?? posts.at(0)}
      ></PostDetail>
    </div>
  );
};
