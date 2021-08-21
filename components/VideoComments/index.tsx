import React from 'react';
import { View, Text } from 'react-native';
import comments from '../../assets/data/comments.json';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';

const VideoComments = () => {
    return (
        <View style={{ backgroundColor: '#141414', flex: 1 }}>
            <BottomSheetFlatList
            data={comments}
            renderItem={({item})=><VideoComment comment={item}/>}
            />
        </View>
    )
}

export default VideoComments;
