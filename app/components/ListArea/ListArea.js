import React from 'react';
import PropTypes from 'prop-types';
import {View, SectionList} from 'react-native';

import styles from './styles';
import Separator from './Separator';
import Header from './Header';
import Item from './Item';


// List of items (Files) candidates to be deleted
export default class ListArea extends React.Component {

getBorderColor(icon){
  let color="";
  if (icon=="whatsapp"){
    color="green";
  }
else
if (icon=="instagram")
  color="#FF0080";

return {backgroundColor:color};

}


    render() {
      return (
            <View style={styles.container}>
                <SectionList styles={styles.sectionlist}
                              sections={this.props.sections} 
                              renderItem={({item}) => <Item text={item}/>}
                              renderSectionHeader={({section}) =><View style={this.getBorderColor(section.title)}><Header icon={section.title}/></View>}
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
