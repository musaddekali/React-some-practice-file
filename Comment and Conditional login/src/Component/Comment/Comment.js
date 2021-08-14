import React from 'react';
import UserInfo from './UserInfo';
//format Date
function formatDate(date) {
    return date.toLocaleDateString();
  }

const Comment = (props) => {
    return (
        <div className="comment card rounded shadow p-2">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date small">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

export default Comment;