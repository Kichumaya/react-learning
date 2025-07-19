import React from 'react'

// function Card(props) {
function Card({userName, btnText="Visit me"}) {
  console.log('props => ', userName)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sBi3LPcdPFSXkX3wOhg6EkXMtXnPPnzfBA&s"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{userName}</h2>
        </div>
        <p className="text-gray-300">
          <button>{btnText}</button>
        </p>
      </div>
  )
}

export default Card