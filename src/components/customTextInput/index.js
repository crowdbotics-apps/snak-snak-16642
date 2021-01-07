/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {appIcons, colors, family, HP, size, WP} from '../../services';
import ModalDropdown from 'react-native-modal-dropdown';
export const CustomTextInput = ({
  label,
  value,
  containerStyle,
  inputField,
  dropDown,
  isMultiSelect,
  itemList,
  dropDownListHeader,
  showMultiSelectValues,
  editable,
  editBackColor,
  isPhoneInput = false,
  keyboardType = 'default',
  getVal = () => {},
}) => {
  const [val, setVal] = useState('');
  const [multiSelectedValues, setMultiSelectedvalues] = useState([]);
  const [options, setOptions] = useState([]);
  const [singleDropDown, setSingleDropDown] = useState([]);
  let modalRef;
  useEffect(() => {
    setVal(value);
  }, [value]);

  useEffect(() => {
    if (itemList?.length > 0) {
      if (
        dropDownListHeader?.length > 0 &&
        itemList?.length > 0 &&
        itemList[0] !== ''
      ) {
        let array = itemList;
        array.unshift('');
        setOptions(array);
      } else {
        setOptions(itemList);
      }
    }
  }, []);
  const changeValue = index => {
    if (isMultiSelect) {
      let tempArray = Object.assign([], multiSelectedValues);
      let toReturntemp = Object.assign([], multiSelectedValues);
      if (multiSelectedValues.indexOf(options[index]) === -1) {
        tempArray.push(options[index]);
        toReturntemp.push(options[index]);
      } else {
        tempArray.splice(tempArray.indexOf(options[index]), 1);
        toReturntemp.splice(toReturntemp.indexOf(options[index]), 1);
      }
      setMultiSelectedvalues(tempArray);
      let toReturn = [];
      toReturntemp.forEach(item => {
        toReturn.push(item[0]);
      });
      getVal(toReturn);
    } else {
      setSingleDropDown(itemList[index][1]);
      getVal(itemList[index][0]);
    }
  };

  const _renderRow = (option, index, isSelected) => {
    if (
      option?.length === 0 &&
      index.toString() === '0' &&
      dropDownListHeader
    ) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              modalRef.hide();
            }}
            style={[styles.headerContainer, styles.topBorderRadius]}>
            <Text style={styles.headerText}>{dropDownListHeader}</Text>
            <Text style={styles.headerText}>x</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.rowDropDown,
          index % 2 === 0 && styles.evenBackground,
          isSelected && !isMultiSelect && styles.selectedBackground,
          index === 0 && styles.roundBorders,
          index + 1 === options.length && styles.roundBorders,
        ]}>
        {isMultiSelect && (
          <Image
            style={styles.checkBox}
            source={
              multiSelectedValues.indexOf(options[index]) === -1
                ? appIcons.uncheck
                : appIcons.check
            }
          />
        )}
        <Text style={styles.optionText}>{option[1]}</Text>
      </View>
    );
  };

  const _renderInputField = () => {
    if (inputField === false) {
      return (
        <Text
          style={[styles.inputVal, {paddingLeft: isPhoneInput ? WP('20') : 0}]}>
          {val}
        </Text>
      );
    } else if (dropDown === true) {
      let multiSelectText = '';
      multiSelectedValues?.map(item => {
        multiSelectText += ', ' + item[1];
      });
      multiSelectText = multiSelectText.substring(2);
      return (
        <TouchableOpacity
          onPress={() => modalRef.show()}
          style={{flexDirection: 'row'}}>
          <Text
            style={[styles.dropdownTextStyle, {width: WP('77')}]}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {showMultiSelectValues ? multiSelectText : singleDropDown}
          </Text>
          <View
            style={[
              styles.dropDownContainer,
              {
                width: showMultiSelectValues === true ? WP('8') : WP('85'),
              },
            ]}>
            <ModalDropdown
              defaultValue={''}
              textStyle={[styles.dropdownTextHide]}
              renderSeparator={() => <View />}
              renderRow={_renderRow}
              dropdownStyle={{
                ...styles.dropdownStyle,
                height:
                  options?.length > 8
                    ? HP('5') * 8
                    : HP('5') * itemList?.length,
              }}
              ref={ref => (modalRef = ref)}
              options={options}
              onDropdownWillHide={() => !isMultiSelect}
              onSelect={changeValue}
            />
            <Image style={styles.carrotSign} source={appIcons.carrot} />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TextInput
          value={val}
          keyboardType={keyboardType}
          onChangeText={val => {
            setVal(val);
            getVal(val);
          }}
          style={[styles.textInput]}
        />
      );
    }
  };
  return (
    <View
      style={[
        styles.inputContainer,
        containerStyle,
        {backgroundColor: editable ? editBackColor : colors.inputBackground},
      ]}>
      {label?.length > 0 && (
        <Text
          style={[styles.label, {paddingLeft: isPhoneInput ? WP('20') : 0}]}>
          {label}
        </Text>
      )}
      {_renderInputField()}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    height: HP('10'),
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
});
