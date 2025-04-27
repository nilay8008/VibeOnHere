import React from 'react';

const dummyPosts = [
  {
    id: 1,
    user: 'Nilay Patel',
    avatar: './abc.png',
    text: 'what a view !!',
    image: './w1.jpg',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Raj Purohit',
    avatar: './abc2.jpeg',
    text: 'Had an amazing day exploring forest!',
    image: './w2.avif',
    time: '4 hours ago',
  },
  {
    id: 2,
    user: 'Rahul',
    avatar: './abc3.jpeg',
    text: 'good day',
    image: './w3.jpg',
    time: '5 hours ago',
  },
  {
    id: 2,
    user:  'meet patel' ,
    avatar: './abc4.jpg',
    text: 'WHAT A WEEKEND',
    image: './w4.avif',
    time: '6 hours ago',
  },
  {
    id: 2,
    user: 'Sudhanshu',
    avatar: 'abc5.jpg',
    text: 'eXPLORING WEEKEND',
    image: './w5.jpeg',
    time: '10 hours ago',
  },
  {
    id: 2,
    user: 'Anish ',
    avatar: 'abc6.jpg',
    text: 'Love to tracking on weekends',
    image: './w6.jpeg',
    time: '8 hours ago',
  },
];

const NewsFeedPage = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-green-400 to-blue-400">
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
