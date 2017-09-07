import React from 'react';
import userStyles from './user-styles';

const SingleUser = ({user}) => {
  //console.log(user);
  const name = user.name;
  const email = user.email;
  const phone = user.phone;
  return (
    <li style={ userStyles.list }>
      <div style={ userStyles.listDiv }>
        <div style={ userStyles.listDivDiv }>{name}</div>
        <div style={ userStyles.listDivDiv }>{email}</div>
        <div style={ userStyles.listDivDiv }>{phone}</div>
      </div>
    </li>
  )
}

export default SingleUser;
