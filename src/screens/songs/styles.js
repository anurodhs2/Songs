import {StyleSheet} from 'react-native';
import scale, {verticalScale} from './../../utils/Scale';
import * as CONST from './../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.SECONDARY_COLOR,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  loaderText: {
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(14),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  noDataText: {
    fontSize: scale(14),
    textAlign: 'center',
  },
  retryContainer: {
    backgroundColor: CONST.PRIMARY_COLOR,
    padding: scale(5),
    paddingHorizontal: scale(10),
    borderRadius: scale(5),
    paddingVertical: scale(5),
    marginVertical: scale(5),
  },
  songsCard: {
    marginVertical: verticalScale(20),
    flexDirection: 'row',
    width: '100%',
    borderRadius: scale(5),
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
  },
  songImageContainer: {
    height: verticalScale(80),
    width: verticalScale(80),
    borderRadius: scale(5),
  },
  descContainer: {
    flex: 1,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  titleText: {
    fontSize: scale(18),
    color: CONST.PRIMARY_COLOR,
  },
  subInfo: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  artistText: {
    fontSize: scale(12),
    color: CONST.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  timeText: {
    marginLeft: scale(10),
    fontSize: scale(12),
    color: CONST.PRIMARY_COLOR,
  },
});
