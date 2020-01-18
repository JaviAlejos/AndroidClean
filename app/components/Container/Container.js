import React from 'react';
import {View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

//Main container of the app
export default class Container extends React.Component {

  render() {
      return (
          <View style={styles.container}>
              {this.props.children}
          </View>
      );
  }
}

Container.propTypes = {
  children: PropTypes.any
};
