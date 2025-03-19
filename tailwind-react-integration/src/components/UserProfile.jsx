import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm hover:shadow-xl">
      <img
        src="https://images.mediago.io/ML/423feb9431560c453ac521992cea73b1__scv1__622x368.png"
        alt="User"
        className="rounded-full w-28 h-28 mx-auto border-2 border-blue-500 border-solid sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-400">
        John Doe
      </h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base hover:text-gray-900">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
