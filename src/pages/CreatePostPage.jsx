import React, { useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "This is Alice's first post!" },
    { id: 2, user: "Bob", content: "Bob here! Happy to be part of this platform." },
  ]);
  
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() === "") return; // Prevent posting empty content

    const newPostObject = {
      id: posts.length + 1,
      user: "Me",  // Replace with actual user
      content: newPost,
    };

    setPosts([newPostObject, ...posts]); // Add new post to the top
    setNewPost(""); // Clear input field
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Post Page</h1>

      {/* Post Form */}
      <div className="mb-4">
        <textarea
          className="w-full p-3 border rounded-md"
          rows="4"
          placeholder="Write something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="font-semibold text-lg">{post.user}</div>
            <p className="text-gray-700 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
