import React from 'react';
//import {Text,View} from 'react-native';

import { Container } from '../app/components/Container';
import { ListArea } from '../app/components/ListArea';
import { Button } from '../app/components/Button';
import sections from "../mock/mockdata";

// In this screen we'll see the files we want (or not) to delete
export default class FilesList extends React.Component {
    render() {
        return (
            <Container>
                <ListArea sections={sections}/>
                <Button title={"Delete"}></Button>
            </Container>
        );
    }
}