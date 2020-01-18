import React from 'react';
import { Button } from '../app/components/Button';
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
                <Button onPress={ this._handleScanButtonOnPress} title={"Scan"}/>
            </Container>
        );
    }
}