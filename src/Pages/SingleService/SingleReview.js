import React from 'react';

const SingleReview = ({singleReview}) => {
    const {photourl, userName, review} = singleReview;
    return (
        <div className='border-2 rounded-2xl shadow-md border-cyan-500 flex w-2/4 mx-auto justify-center gap-5 p-3 mb-5'>
            <div className='w-1/4 flex flex-col items-center gap-5 border-r-4 border-cyan-500' >
                <img className='w-12 rounded-full' src={photourl} alt="" />
                <p className='font-bold text-md text-yellow-500'>{userName}</p>
            </div>
            <div className='w-3/4 flex items-center'>
                {review}
            </div>
        </div>
    );
};

export default SingleReview;