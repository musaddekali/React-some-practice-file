import React from 'react';

const Avatar = (props) => {
    return (
        <img src={props.user.avatarUrl} alt={props.user.name} className="img-fluid mb-2"/>
    )
}
export default Avatar;
