import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    videoInfoContainer: {
        marginHorizontal: 15,
        flex: 1,
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,

    },
    tag: {
        color: '#0094e3',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,

    },
    subTitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '300',
    },
    actionListItem: {
        width: 50,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    actionListContainer: {
        marginVertical:10,
    },
    actionText: {
        color: 'white',
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
    }
});

export default styles;