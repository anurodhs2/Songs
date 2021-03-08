import {StyleSheet} from 'react-native';
import scale from './../utils/Scale';
import * as CONST from './../utils/Constants';

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
    backgroundColor: CONST.HEADER_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: CONST.BORDER_COLOR,
  },
  sectionStyle: {
    alignItems: 'center',
  },
  sideSectionStyle: {
    width: scale(40),
    alignItems: 'center',
  },
  titleText: {
    color: CONST.WHITE_COLOR,
    fontSize: scale(18),
    fontWeight: '700',
  },
});

export default styles;
