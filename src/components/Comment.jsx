import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';
import './comment.css';

export default function Comment({ postId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`https://unicornreadybackend.vercel.app/api/comments/${postId}`);
        setComments(res.data);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      return;
    }

    try {
      await axios.post('https://unicornreadybackend.vercel.app/api/comments', {
        username: user.username,
        postId,
        text: comment,
      });

      const res = await axios.get(`https://unicornreadybackend.vercel.app/api/comments/${postId}`);
      setComments(res.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  return (
    <div className="comment">
      <h3>Comments</h3>
      <div className="commentList">
        {comments.map((c) => (
          <div key={c._id} className="commentItem">
            <b>{c.username}</b>: {c.text}
          </div>
        ))}
      </div>
      {user && (
        <form onSubmit={handleCommentSubmit} className="commentForm">
          <textarea
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className='addcomment'>Add Comment</button>
        </form>
      )}
    </div>
  );
}
