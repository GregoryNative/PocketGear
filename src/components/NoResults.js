/* @flow */

import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },

  item: {
    margin: 8,
    alignItems: 'center',
  },

  label: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
    opacity: 0.5,
    margin: 8,
  },
});

type Props = {
  source: any;
  label: string;
}

export default function NoResults({ source, label }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.item} source={source} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}