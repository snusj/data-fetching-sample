import type { Post } from '../PostData.tsx';

export const PostList = ({
  posts,
  selectedId,
  setSelectedId,
}: {
  posts: Post[];
  selectedId: number | undefined;
  setSelectedId: (id: number) => void;
}) => {
  return (
    <div className="post-list">
      <h2>{'포스트 목록'}</h2>
      <div className="post-list-container">
        {posts.map((post) => (
          <h3
            key={post.id}
            className={`post-list-item ${selectedId === post.id ? 'selected' : ''}`}
            onClick={() => {
              setSelectedId(post.id);
            }}
          >
            <div className="post-title">
              {post.id}. {post.title}
            </div>
          </h3>
        ))}
      </div>
    </div>
  );
};
