import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';

//Item
export default class Item extends React.Component  {
  constructor(props){
    super(props);
  }

  //logo-whatsapp
  render() {
    let {text}=this.props;
    return (
      <Text style={styles.item}>{text}</Text>
            
    );
  }
}

Item.propTypes = {
  text: PropTypes.string,
};