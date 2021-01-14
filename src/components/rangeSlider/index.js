import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, WP} from '../../services';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export const RangeSlider = ({onValuesChange, range = [0, 10]}) => {
  return (
    <MultiSlider
      onValuesChangeStart={() => {}}
      onValuesChangeFinish={() => {}}
      enabledTwo={true}
      allowOverlap={false}
      values={range}
      onValuesChange={onValuesChange}
      min={range[0]}
      max={range[1]}
      markerStyle={styles.markerStyle}
      selectedStyle={styles.selectedStyle}
      enableLabel={false}
      lineHeight={10.0}
      markerSize={1}
      sliderLength={WP('85')}
    />
  );
};

const styles = StyleSheet.create({
  markerStyle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    height: WP('5.5'),
    width: WP('5.5'),
  },
  selectedStyle: {backgroundColor: colors.black_1, height: 4},
  unselectedStyle: {
    backgroundColor: 'white',
  },
});
