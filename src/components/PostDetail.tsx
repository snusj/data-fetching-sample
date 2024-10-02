import { useEffect, useState } from 'react';

import { type Comment, loadComments, type Post } from '../PostData.tsx';

export const PostDetail = ({ post }: { post: Post | undefined }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (post === undefined) return;
    loadComments(post.id)
      .then((data: Comment[] | undefined) => {
        if (data === undefined) return;
        setComments(data);
      })
      .catch((error: unknown) => {
        console.error('Error:', error);
      });
  }, [post]);

  return (
    <div className="post-detail">
      <div className="post-detail-text">
        <h2>{'내용'}</h2>
        <p>{post?.body}</p>
      </div>
      <div>
        <div className="post-detail-comments">
          <h2>{'댓글'}</h2>
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-email">작성자: {comment.email}</div>
              <div className="comment-text">{comment.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
