import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const BannerScreen = () => {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxx/xxxxxxxx';

  return (
    <View>
      <Text style={styles.title}>{BannerAdSize.ANCHORED_ADAPTIVE_BANNER}</Text>
      <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 12,
  },
});


export default BannerScreen;
