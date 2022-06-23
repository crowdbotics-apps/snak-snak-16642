import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from 'react-native-paper';
import {Text} from 'react-native';
function DropDown({value, onChangeText, items, ...props}) {
  const {colors} = useTheme();
  const [open, setOpen] = useState(false);
  //   const [items, setItems] = useState([
  //     {label: 'Apple', value: 'apple'},
  //     {label: 'Banana', value: 'banana'},
  //   ]);

  return (
    <>
      <Text
        style={[
          {
            fontSize: 15,
            fontFamily: 'OpenSans-Regular',
            marginBottom: 2,
          },
          {color: colors.black},
        ]}>
        {props.title}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={onChangeText}
        style={{
          borderColor: colors.lightGrey,
        }}
        labelStyle={{
          color: 'rgba(0, 0, 0, 0.7)',
        }}
        dropDownContainerStyle={{
          borderColor: colors.lightGrey,
        }}
        placeholder={props.placeholder}
        placeholderStyle={{
          color: 'grey',
        }}
        //   setItems={setItems}
      />
    </>
  );
}

export default DropDown;
