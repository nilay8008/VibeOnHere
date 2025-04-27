import React from 'react';

const dummyPosts = [
  {
    id: 1,
    user: 'Nilay Patel',
    avatar: 'https://via.placeholder.com/50',
    text: 'Loving the new features! Excited for what’s next 🚀',
    image: 'https://via.placeholder.com/500x300',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Raj Purohit',
    avatar: 'https://via.placeholder.com/50',
    text: 'Had an amazing day exploring the city!',
    image: 'https://via.placeholder.com/500x300',
    time: '4 hours ago',
  },
  {
    id: 2,
    user: 'Rahul',
    avatar: 'https://via.placeholder.com/50',
    text: 'good day',
    image: 'https://via.placeholder.com/500x300',
    time: '5 hours ago',
  },
  {
    id: 2,
    user:  'meet patel' ,
    avatar: 'https://via.placeholder.com/50',
    text: 'WHAT A WEEKEND',
    image: 'https://via.placeholder.com/500x300',
    time: '6 hours ago',
  },
  {
    id: 2,
    user: 'Sudhanshu',
    avatar: 'https://via.placeholder.com/50',
    text: 'eXPLORING WEEKEND',
    image: 'https://via.placeholder.com/500x300',
    time: '10 hours ago',
  },
  {
    id: 2,
    user: 'Anish ',
    avatar: 'https://via.placeholder.com/50',
    text: 'Love to tracking on weekends',
    image: 'https://via.placeholder.com/500x300',
    time: '8 hours ago',
  },
];

const NewsFeedPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {dummyPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            
            {/* Post Header */}
            <div className="flex items-center p-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={post.avatar}
                alt={post.user}
              />
              <div className="ml-4">
                <h2 className="font-semibold text-gray-800">{post.user}</h2>
                <p className="text-gray-500 text-sm">{post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-4">
              <p className="text-gray-700 mb-4">{post.text}</p>
              <img
                className="w-full rounded-lg"
                src={post.image}
                alt="Post content"
              />
            </div>

            {/* Post Actions */}
            <div className="flex justify-between px-4 py-2 border-t text-gray-600">
              <button className="hover:text-blue-600">Like</button>
              <button className="hover:text-blue-600">Comment</button>
              <button className="hover:text-blue-600">Share</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeedPage;
