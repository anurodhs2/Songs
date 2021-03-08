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
    paddingHorizontal: scale(20),
    paddingVertical: scale(40),
    justifyContent: 'space-between',
  },

  songImageContainer: {
    alignSelf: 'stretch',
    height: verticalScale(280),
    borderRadius: scale(10),
  },
  descContainer: {
    alignSelf: 'stretch',
    borderRadius: scale(8),
    backgroundColor: CONST.WHITE_COLOR,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: scale(18),
    color: CONST.PRIMARY_COLOR,
    textAlign:'center'
  },
  artistText: {
    fontSize: scale(12),
    color: CONST.PRIMARY_COLOR,
    fontWeight: 'bold',
    marginTop: scale(10),
  },
  timeText: {
    marginLeft: scale(10),
    fontSize: scale(12),
    color: CONST.PRIMARY_COLOR,
    marginTop: scale(10),
  },
  timeSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(5),
  },
  seekTimeText: {
    fontSize: scale(12),
    color: CONST.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  controlsSection: {
    flexDirection: 'row',
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    backgroundColor: CONST.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(10),
  },
  sliderStyle:{
    alignSelf: 'stretch',
    marginHorizontal: scale(10)
  },
  sliderThumbStyle:{
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    elevation: 5,
  },
});
