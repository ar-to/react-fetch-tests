import React from 'react';
import SingleUser from './single-user';

const JsonMockApi = (props) => {
  const userByOne = props.users.map((user) => {
    return <SingleUser key={user.id} user={user} />
  });
  return (
    <ul>{userByOne}</ul>
  )
}

export default JsonMockApi;
