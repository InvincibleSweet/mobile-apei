import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const Card = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.titleTies}>{props.word}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e53170',
    marginTop: 20,
    maxWidth: 400,
    minWidth: 240,
    width: 'auto',
    height: 115,
    maxHeight: 150,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  titleTies: {
    fontSize: RFValue(18, 680),
    color: 'white',
    alignItems: 'center',
    fontWeight: '500',
  },
});
export default Card;
