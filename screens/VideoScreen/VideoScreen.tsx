import React, { useRef } from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native'
import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import styles from './styles';
import VideoPlayer from '../../components/VideoPlayer';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment';
import { AntDesign } from '@expo/vector-icons';

const VideoScreen = () => {
    const commentsSheetRef = useRef<BottomSheetModal>(null);
    let viewsString = video.views.toString();
    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(2) + 'm'
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(2) + 'k'
    }
    const openComments = () => {
        commentsSheetRef.current?.present();
    }
    return (
        <View style={{ backgroundColor: '#141414', flex: 1 }}>
            {/* Video player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
            {/* video info */}
            <View style={{ flex: 1 }}>
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tag}>{video.title}</Text>
                    <Text style={styles.subTitle}>{video.user.name} {viewsString} {video.createdAt}</Text>
                    <Text></Text>
                </View>
                {/* Action list */}
                <View style={styles.actionListContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.actionListItem}>
                            <AntDesign name="like1" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="dislike1" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="export" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={30} color="grey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>
                    </ScrollView>
                </View>
                {/* user info */}
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderColor: '#3d3d3d', borderTopWidth: 1, borderBottomWidth: 1 }}>
                    <Image style={styles.avatar} source={{ uri: video.user.image }} />
                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{video.user.name}</Text>
                        <Text style={{ color: 'grey', fontSize: 18 }}>{video.user.subscribers} subscriber</Text>
                    </View>
                    <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Subscribes</Text>

                </View>

                {/* comments */}
                <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }}>
                    <Text style={{ color: 'white' }}>Comments </Text>
                    {/* comment component */}

                </Pressable>
                {/* All comments */}
                <BottomSheetModal
                    ref={commentsSheetRef}
                    snapPoints={['62%']}
                    index={0}
                    backdropComponent={({style})=><View style={[style,{backgroundColor:'#101010'}]}/>}
                    >
                    <VideoComments />
                </BottomSheetModal>
            </View>
        </View>
    )
};
const VideoScreenWithRecommendation = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#141414', flex: 1 }}>
            <BottomSheetModalProvider>
                <FlatList
                    data={videos}
                    renderItem={({ item }) => <VideoListItem video={item} />}
                    ListHeaderComponent={VideoScreen}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
    )
}
export default VideoScreenWithRecommendation;
