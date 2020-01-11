import React from 'react';
import {Button, View } from 'react-native';
import styles from './styles';

export default function ScanButton() {
  return (
    <View style={styles.container}>
      <Button
            title="Scan"
            onPress={() => console.log('Scanning')}
          />
    </View>
  );
}

