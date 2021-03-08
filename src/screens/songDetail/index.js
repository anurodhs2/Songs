import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import scale from './../../utils/Scale';
import * as CONST from './../../utils/Constants';
import Slider from 'react-native-slider';

export default SongDetail = ({route, navigation}) => {
  const {data} = route.params;
  const {collectionName, artistName, trackTimeMillis, artworkUrl100} = data;
  const [audioStatus, setAudioStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleSongState = () => {
    setAudioStatus(!audioStatus);
  };

  const renderLeftSection = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <AntDesign name={'left'} size={scale(20)} color={CONST.WHITE_COLOR} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={'SONG DETAIL'} leftSection={renderLeftSection()} />
      <View style={styles.bodyContainer}>
        <>
          <View style={styles.songImageContainer}>
            <Image
              style={styles.songImageContainer}
              source={{uri: artworkUrl100}}
            />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.titleText} ellipsizeMode={'tail'}>
              {collectionName}
            </Text>
            <Text style={styles.artistText}>{artistName}</Text>
            <Text style={styles.timeText}>{formatTime(trackTimeMillis)} m</Text>
          </View>
        </>
        <View>
          <Slider
            value={currentTime}
            style={styles.sliderStyle}
            minimumValue={0}
            maximumValue={trackTimeMillis}
            minimumTrackTintColor={CONST.PRIMARY_COLOR}
            maximumTrackTintColor={CONST.GREY_COLOR}
            onValueChange={(value) => {
              setCurrentTime(value);
            }}
            thumbTintColor={CONST.WHITE_COLOR}
            thumbStyle={styles.sliderThumbStyle}
          />
          <View style={styles.timeSection}>
            <Text style={styles.seekTimeText}>
              {formatTime(trackTimeMillis - currentTime)}
            </Text>
            <Text style={styles.seekTimeText}>
              {formatTime(trackTimeMillis)}
            </Text>
          </View>
          <View style={styles.controlsSection}>
            <AntDesign
              name={'stepbackward'}
              size={scale(20)}
              color={CONST.PRIMARY_COLOR}
            />
            <TouchableOpacity
              onPress={() => {
                toggleSongState();
              }}
              style={styles.playButton}>
              {audioStatus ? (
                <AntDesign
                  name={'caretright'}
                  size={scale(20)}
                  color={CONST.PRIMARY_COLOR}
                />
              ) : (
                <Fontisto
                  name={'pause'}
                  size={scale(16)}
                  color={CONST.PRIMARY_COLOR}
                />
              )}
            </TouchableOpacity>
            <AntDesign
              name={'stepforward'}
              size={scale(20)}
              color={CONST.PRIMARY_COLOR}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
