import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';
import SingleMyReview from './SingleMyReview';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
  const [serviceReviews, setServiceReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setServiceReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const ifDelete = window.confirm("Are you sure to delete?");
    if (ifDelete) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount > 0){
                alert('deleted order successfully');
                const remaining = serviceReviews.filter(order => order._id !== id);
                setServiceReviews(remaining);
            }
        });
    }
  };


    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                serviceReviews.map(singleServiceReview => <SingleMyReview key={singleServiceReview._id} singleServiceReview={singleServiceReview} handleDelete={handleDelete}></SingleMyReview>)
            }
        </div>
    );
};

export default Myreviews;