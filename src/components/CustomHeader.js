import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default CustomHeader = (props) => {
  const {leftSection, rightSection, title} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.sideSectionStyle}>{leftSection && leftSection}</View>
      {title && (
        <View style={styles.sectionStyle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      <View style={styles.sideSectionStyle}>{rightSection && rightSection}</View>
    </View>
  );
};
