import React from 'react';
import PropTypes from 'prop-types';
import {View,FlatList} from 'react-native';
// SectionList -> https://facebook.github.io/react-native/docs/using-a-listview

import styles from './styles';

// List of items (Files) candidates to be deleted
export default class ListArea extends React.Component {
  
    render() {
      return (
            <View style={styles.container}>
                <FlatList data={this.props.data} renderItem={this.props.renderItem}/>
            </View>
        );
    }
  }

  ListArea.propTypes = {
    data: PropTypes.array,
    renderItem: PropTypes.func
  };
