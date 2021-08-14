import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
    return (
        <div className="userinfo">
            <Avatar user={props.user} />
            <div className="userinfo-name fw-bold">
                {props.user.name}
            </div>
        </div>
    )
}
export default UserInfo;
