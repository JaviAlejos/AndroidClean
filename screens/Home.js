import React from 'react';
import { ScanButton } from '../app/components/Button';
import { Container } from '../app/components/Container';



export default class Home extends React.Component {

constructor(props) {
    super(props);
    this._handleScanButtonOnPress = this._handleScanButtonOnPress.bind(this);
}


_handleScanButtonOnPress(){
    console.log("_handleScanButtonOnPress");
    this.props.navigation.navigate('FilesList');
}
    render() {
        return (
            <Container>
                <ScanButton onPress={ this._handleScanButtonOnPress}/>
            </Container>
        );
    }
}