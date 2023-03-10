import React from 'react';

import Octicons from 'react-native-vector-icons/Octicons'; //home\

const Homeicon = props => {
  return <Octicons name={props.name} size={26} style={{ marginBottom: 8 }} color={props.focused ? '#ff8906' : '#fffffe'} />;
};

export default Homeicon;
