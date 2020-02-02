import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height; 

const imageWidth =  (width/4)*3;
const imageheight = (height/4)*3;

export default styles = StyleSheet.create({
    item:{
        height:imageheight/20,
    },
    container: {
        flex:7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop:(height-imageheight)/4,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#d6d7da',
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: imageWidth,
    },
    text:{
        fontSize: 24,
        color: '#FF0080',
    },
    header:{
        textAlign: 'center', // <-- the magic 
    }
});