import React from 'react';
import Header from './Header';
import Body from './Body';

function Card(props){
  return (
    <>
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username}></Header>
      <Body comment={props.commentObject.comment}></Body>
    </>
  )
}

export default Card;
