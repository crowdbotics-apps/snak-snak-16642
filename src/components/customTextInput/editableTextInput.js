/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {colors, family, HP, size, WP} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const EditTextInput = ({
  label,
  value,
  containerStyle,
  inputField,
  editBackColor,
  row,
}) => {
  const [val, setVal] = useState('');
  const [editPress, onEditPress] = useState(false);

  useEffect(() => {
    setVal(value);
  }, [value]);

  useEffect(() => {}, [editPress]);

  const _renderInputField = () => {
    return (
      <TextInput
        value={val}
        onChangeText={val => {
          setVal(val);
        }}
        style={styles.textInput}
      />
    );
  };
  return (
    <View
      style={[
        styles.inputContainer,
        containerStyle,
        {backgroundColor: editPress ? colors.inputBackground : editBackColor},
      ]}>
      {label?.length > 0 && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        <View style={{flex: row ? 0.8 : 1}}>{_renderInputField()}</View>
        <View
          style={{
            flex: row ? 0.2 : 0.1,
            justifyContent: 'center',
            bottom: HP('2'),
            left: row ? WP('3') : 0,
          }}>
          <TouchableOpacity onPress={() => onEditPress(!editPress)}>
            {!editPress ? (
              <MaterialIcons name={'edit'} color={colors.primary} size={20} />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    height: HP(10),
    backgroundColor: colors.inputBackground,
    borderRadius: WP(3),
    paddingHorizontal: WP(4),
    paddingTop: HP(2),
  },
  label: {
    color: colors.labels,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.xxtiny,
  },
  inputVal: {
    marginTop: HP(0.3),
    color: colors.gray_2,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
  },
  textInput: {
    height: WP(8),
    display: 'flex',
    padding: 0,
    color: colors.gray_2,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
  },
  dropDownContainer: {
    height: WP(8),
    paddingTop: WP(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  carrotSign: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  dropdownStyle: {
    borderRadius: WP('2'),
    borderWidth: 0,
    borderColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: colors.black_1,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  optionText: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
    paddingLeft: WP('4'),
    paddingRight: WP('6'),
  },
  headerText: {
    color: colors.black_1,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.xsmall,
    paddingLeft: WP('4'),
    paddingRight: WP('3'),
    paddingVertical: WP('2'),
  },
  evenBackground: {
    backgroundColor: colors.dropDownlabelBackground,
  },
  selectedBackground: {
    backgroundColor: colors.selectedLabelBackground,
  },
  rowDropDown: {
    flexDirection: 'row',
    height: HP('5'),
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.selectedLabelBackground,
  },
  roundBorders: {
    borderRadius: WP('2'),
  },
  topBorderRadius: {
    borderTopRightRadius: WP('2'),
    borderTopLeftRadius: WP('2'),
  },
  checkBox: {
    marginLeft: WP('4'),
  },
  dropdownTextStyle: {
    color: colors.gray_2,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
  },
  dropdownTextHide: {
    color: colors.inputBackground,
    fontSize: 1,
  },
  dropdownrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});
