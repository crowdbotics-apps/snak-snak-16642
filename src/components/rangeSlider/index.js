import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, WP} from '../../services';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export const RangeSlider = () => {
  return (
    <MultiSlider
      onValuesChangeStart={() => {}}
      onValuesChangeFinish={() => {}}
      enabledTwo={true}
      allowOverlap={false}
      values={[0, 10]}
      // onValuesChange={onValuesChange}
      min={0}
      max={10}
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
