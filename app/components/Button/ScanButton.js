import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native';
//import styles from './styles';

export default class ScanButton extends React.Component  {
  constructor(props) {
    super(props);
  }

  _handleScanButton(props){
    console.log('Scan');
    console.log(props);
    const {onPress} = props;
    onPress();
  };
  
  render() {
    return (
      <Button
            title="Scan"
            onPress={()=>this._handleScanButton(this.props)}
          />

    );
  }
}

ScanButton.propTypes = {
  onPress: PropTypes.func,
};