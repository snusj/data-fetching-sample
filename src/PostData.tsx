export const loadPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = (await response.json()) as Post[];
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export type Post = {
  //userId: number;
  id: number;
  title: string;
  body: string;
};

export const loadComments = async (id: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    const data = (await response.json()) as Comment[];
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export type Comment = {
  //postId: number;
  id: number;
  //name: string;
  email: string;
  body: string;
};
