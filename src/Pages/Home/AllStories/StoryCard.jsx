import React from 'react';

const StoryCard = ({item}) => {
    const {pckageName, touristImage, touristName, touristEmail, imgUrl, Details} = item || {}
    return (
        <div className="flex 96 flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md text-white bg-[#023047] ">
	<div className="flex space-x-4">
		<img alt="" src={touristImage} className="object-cover w-12 h-12 rounded-full shadow dark:dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{touristName}</a>
			<span className="text-xs dark:dark:text-gray-400">4 hours ago</span>
		</div>
	</div>
	<div>
		<img src={imgUrl} alt="" className="object-cover w-full mb-4 h-38 sm:h-72 dark:dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{pckageName}</h2>
		<p className="text-sm dark:dark:text-gray-400">{Details}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		
		 <button className='btn w-full bg-[#FFB703] hover:bg-[#FFB703] text-white font-bold '>View Details</button>
	</div>
</div>
    );
};

export default StoryCard;