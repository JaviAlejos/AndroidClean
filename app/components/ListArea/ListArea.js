import React from 'react';
import PropTypes from 'prop-types';
import {View,Text, SectionList} from 'react-native';

import styles from './styles';
import Separator from './Separator';
import Header from './Header';

// List of items (Files) candidates to be deleted
export default class ListArea extends React.Component {

    render() {
      return (
            <View style={styles.container}>
                <SectionList styles={styles.sectionlist}
                              sections={this.props.sections} 
                              renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
                              renderSectionHeader={({section}) => <Header icon={section.title}/>}
                              keyExtractor={(item, index) => index}
                              SectionSeparatorComponent={Separator}
                              />
            </View>
        );
    }
  }

  ListArea.propTypes = {
    sections: PropTypes.array
  };
