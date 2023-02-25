import React from 'react';
import Feather from 'react-native-vector-icons/Feather'; //book-open
const BookIcon = props => {
  return <Feather name={props.name} size={26} style={{ marginBottom: 8 }} color={props.focused ? '#C3F400' : '#fffffe80'} />;
};

export default BookIcon;
