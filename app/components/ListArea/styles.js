import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height; 

const imageWidth =  (width/4)*3;
const imageheight = (height/4)*3;

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: imageWidth,
        height: imageheight,
        marginBottom: (height-imageheight)/4
    }
});