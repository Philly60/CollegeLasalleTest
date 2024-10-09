// src/components/ReviewPage.js
import React, { useState } from 'react';
import './Review.css';
 
const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      review: 'The parts are of high quality! I was very satisfied with my order and the customer service.',
      date: '2024-09-15'
    },
    {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 4,
      review: 'Good parts, though shipping took a little longer than expected. Will shop again.',
      date: '2024-09-10'
    }
  ]);
 
  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
<span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };
 
  return (
<div className="review-page">
<h2>Customer Reviews</h2>
<div className="reviews-container">
        {reviews.map((review, index) => (
<div className="review-card" key={index}>
<div className="review-header">
<img src={review.avatar} alt="Avatar" className="avatar" />
<div className="review-info">
<h3>{review.name}</h3>
<div className="rating">{renderStars(review.rating)}</div>
</div>
</div>
<p className="review-text">{review.review}</p>
<p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
</div>
        ))}
</div>
</div>
  );
};
 
export default ReviewPage;