import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';
import {appIcons, colors} from '../../services';
export const NumKeyboard = ({
  getValue,
  limit = 11,
  onDone,
  doneText = 'Done',
  onBack,
}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    getValue(value);
    if (value.length >= limit) {
      setValue('');
      getValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const pressNumberKey = num => {
    if (value.length < limit) {
      setValue(prevState => prevState + num);
    }
  };
  const pressBackSpace = () => {
    if (value.length > 0) {
      setValue(prevState => prevState.slice(0, -1));
    }
  };
  const _renderKey = val => {
    return (
      <TouchableOpacity
        onPress={() => pressNumberKey(val)}
        style={styles.keyContainer}>
        <Text style={styles.keyLabel}>{val}</Text>
      </TouchableOpacity>
    );
  };

  const _renderDelKey = () => {
    return (
      <TouchableOpacity onPress={pressBackSpace} style={styles.keyContainer}>
        <Image style={styles.backspace} source={appIcons.backspace} />
      </TouchableOpacity>
    );
  };

  const _renderEnterKey = () => {
    return (
      <TouchableOpacity
        onPress={doneText === 'Done' ? onDone : onBack}
        style={[styles.keyContainer, {backgroundColor: colors.primary}]}>
        <Text style={styles.doneText}>{doneText}</Text>
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
        {/* <View style={styles.spacerKeyContainer} /> */}
        {_renderEnterKey()}
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
