import React from 'react';

const SingleReview = ({singleReview}) => {
    const {photourl, userName, review} = singleReview;
    return (
        <div className='border-2 rounded-2xl shadow-md border-cyan-500 flex flex-col w-2/4 mx-auto justify-center gap-5 p-3 mb-5'>
            <div className=' flex w-full justify-center items-center gap-5 border-b-2 pb-5 border-cyan-500' >
                <img className='w-12 rounded-full' src={photourl} alt="" />
                <p className='font-bold text-md text-yellow-500'>{userName}</p>
            </div>
            <div className='flex justify-center items-center'>
                {review}
            </div>
        </div>
    );
};

export default SingleReview;