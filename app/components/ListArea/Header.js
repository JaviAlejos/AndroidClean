import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

//Header
export default class Header extends React.Component  {
  constructor(props){
    super(props);
  }

  //logo-whatsapp
  render() {
    let {icon}=this.props;
    return (
            <Text style={styles.header}>
              <Text>
                <Ionicons name={`logo-${this.props.icon}`} size={styles.item.height} color="white" style={{marginRight: 30}}/> 
              </Text>
              <Text>   </Text>
              <Text style={styles.text}>
                {this.props.icon.toUpperCase()}
              </Text>
            </Text>
      
    );
  }
}

Header.propTypes = {
  icon: PropTypes.string,
};