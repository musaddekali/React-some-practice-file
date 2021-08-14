import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comment from './Component/Comment/Comment';
import LoginControl from './Component/LoginControl';


//main data
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

export default function App() {
  return (
    <div className="wrapper">
        {/* Comment Section  */}
    <section className="comment">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3">
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
          </div>
        </div>
      </div>
      </section>
      <section className="login-control">
        <div className="container">
          <LoginControl/>
        </div>
      </section>
   </div>
  )
}
