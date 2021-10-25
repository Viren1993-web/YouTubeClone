import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    videoCard:{
marginVertical:10
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,

    },
    middleContainer: {
        marginHorizontal: 15,
        flex: 1,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,

    },
    subTitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '300',
    }
});

export default styles;