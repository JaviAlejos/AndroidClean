import React from 'react';
import { Button } from '../app/components/Button';
import { Container } from '../app/components/Container';


// The main screen with a single button 
//to scan the files availables in the device
export default class Home extends React.Component {

constructor(props) {
    super(props);
    this._handleScanButtonOnPress = this._handleScanButtonOnPress.bind(this);
}

//we'll eventually look for files to delete in the device
_handleScanButtonOnPress(){
    console.log("_handleScanButtonOnPress");
    this.props.navigation.navigate('FilesList');
}
    render() {
        return (
            <Container>
                <Button onPress={ this._handleScanButtonOnPress} title={"Scan"}/>
            </Container>
        );
    }
}