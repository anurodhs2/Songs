import React, {useEffect, useCallback} from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import * as songsAction from './../../actions/songsAction';
import * as CONST from './../../utils/Constants';

const Songs = (props) => {
  const {songs, isFetching} = props;

  useEffect(() => {
    // Fetch Songs
    props.fetchSongs(false);
  }, []);

  const onRefresh = () => {
    props.fetchSongs(false);
  };

  const formatTime = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const renderItem = ({item}) => {
    const {collectionName, artistName, trackTimeMillis, artworkUrl100} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SongDetail', {data: item});
        }}
        activeOpacity={0.8}
        style={styles.songsCard}>
        <View style={styles.songImageContainer}>
          <Image
            style={styles.songImageContainer}
            source={{uri: artworkUrl100}}
          />
        </View>
        <View style={styles.descContainer}>
          <Text
            style={styles.titleText}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {collectionName}
          </Text>
          <View style={styles.subInfo}>
            <Text style={styles.artistText} numberOfLines={1}>
              {artistName}
            </Text>
            <Text style={styles.timeText} numberOfLines={1}>
              {formatTime(trackTimeMillis)} m
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = useCallback((item, index) => '' + index);

  return (
    <View style={styles.container}>
      <CustomHeader title={'SONGS'} />
      <View style={styles.bodyContainer}>
        {isFetching ? (
          <>
            <ActivityIndicator color={CONST.PRIMARY_COLOR} size={'large'} />
            <Text style={styles.loaderText}>{'Please wait'}</Text>
          </>
        ) : songs && songs.length != 0 ? (
          <View style={styles.bodyContainer}>
            <FlatList
              contentContainerStyle={{flex: 1}}
              refreshControl={
                <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
              }
              showsVerticalScrollIndicator={false}
              extraData={songs}
              data={songs}
              keyExtractor={keyExtractor}
              renderItem={(item) => renderItem(item)}
              contentContainerStyle={styles.SongContainerStyle}
            />
          </View>
        ) : (
          <View style={styles.bodyContainer}>
            <Text style={styles.noDataText}>{'No songs available'}</Text>
            <TouchableOpacity
              style={styles.retryContainer}
              activeOpacity={0.6}
              onPress={() => {
                props.fetchSongs(false);
              }}>
              <Text style={styles.noDataText}>{'Retry'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.SongReducer.songs,
    isFetching: state.SongReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSongs: () => dispatch(songsAction.fetchSongs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
