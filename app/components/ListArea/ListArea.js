import React from 'react';
import PropTypes from 'prop-types';
import {View,Text, SectionList} from 'react-native';

import styles from './styles';
import Separator from './Separator';

// List of items (Files) candidates to be deleted
export default class ListArea extends React.Component {
  
    render() {
      return (
            <View style={styles.container}>
                <SectionList sections={this.props.sections} 
                              renderItem={({item}) => <Text>{item}</Text>}
                              renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                              keyExtractor={(item, index) => index}
                              ItemSeparatorComponent={Separator}
                              SectionSeparatorComponent={Separator}
                              />
            </View>
        );
    }
  }

  ListArea.propTypes = {
    sections: PropTypes.array
  };
