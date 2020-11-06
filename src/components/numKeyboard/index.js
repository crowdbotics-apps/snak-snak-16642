import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';
import {appIcons} from '../../services';
export const NumKeyboard = () => {
  const _renderKey = val => {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.keyContainer}>
        <Text style={styles.keyLabel}>{val}</Text>
      </TouchableOpacity>
    );
  };

  const _renderDelKey = () => {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.keyContainer}>
        <Image style={styles.backspace} source={appIcons.backspace} />
      </TouchableOpacity>
    );
  };

  const _renderRowWith3 = (val1, val2, val3) => {
    return (
      <View style={styles.keyboardRow}>
        {_renderKey(val1)}
        {_renderKey(val2)}
        {_renderKey(val3)}
      </View>
    );
  };
  const _renderRowWith2 = () => {
    return (
      <View style={styles.keyboardRow}>
        <View style={styles.spacerKeyContainer} />
        {_renderKey(0)}
        {_renderDelKey()}
      </View>
    );
  };
  return (
    <View style={styles.numKeyboard}>
      {_renderRowWith3(1, 2, 3)}
      {_renderRowWith3(4, 5, 6)}
      {_renderRowWith3(7, 8, 9)}
      {_renderRowWith2()}
    </View>
  );
};
