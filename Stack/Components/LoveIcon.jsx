import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Loveicon = props => {
  return <AntDesign name={props.name} size={26} style={{ marginBottom: 8 }} color={props.focused ? '#ff8906' : '#fffffe'} />;
};

export default Loveicon;
