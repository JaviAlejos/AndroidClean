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
    let color="";
    if (icon=="whatsapp"){
      color="green";
    }
      else
      if (icon=="instagram")
        color="#FF0080";

      let textStyle= [styles.text,{color}];

    return (
            <Text style={styles.header}>
              <Text>
                <Ionicons name={`logo-${this.props.icon}`} size={styles.item.height} color={color} style={{marginRight: 30}}/> 
              </Text>
              <Text>   </Text>
              <Text style={textStyle}>
                {this.props.icon}
              </Text>
            </Text>
      
    );
  }
}

Header.propTypes = {
  icon: PropTypes.string,
};