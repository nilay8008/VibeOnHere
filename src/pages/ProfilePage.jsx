import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full object-cover mb-4"
            src="/abc.png"
            alt="Profile"
          />
          <h2 className="text-2xl font-bold text-gray-800">Nilay Patel</h2>
          <p className="text-gray-500">Blockchain Developer  </p>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">About Me</h3>
          <p className="text-gray-600">
            Passionate about building Web3 products that make people's lives easier. 
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-3 text-center">
          <div>
            <h4 className="text-lg font-bold text-gray-800">120</h4>
            <p className="text-gray-500">Posts</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">300</h4>
            <p className="text-gray-500">Friends</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">1.2K</h4>
            <p className="text-gray-500">Followers</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
