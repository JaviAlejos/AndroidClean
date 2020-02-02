import React from 'react';
import PropTypes from 'prop-types';
import {Button,View} from 'react-native';
import styles from './styles';

//simple button component
export default class ScanButton extends React.Component  {
  constructor(props) {
    super(props);
    this._handleScanButton=this._handleScanButton.bind(this);
  }

  _handleScanButton(){
    console.log('Scan');
    this.props.onPress();
  };
  
  render() {
    return (
      <View style={styles.button}>
        <Button title={this.props.title}
              onPress={this._handleScanButton}
           />
      </View>
    );
  }
}

ScanButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};