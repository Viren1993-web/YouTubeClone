import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, Pressable, ActivityIndicator } from 'react-native';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import styles from './styles';
import VideoPlayer from '../../components/VideoPlayer';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment';
import { AntDesign } from '@expo/vector-icons';
import { Video, Comment } from '../../src/models';
import { useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
const VideoScreen = () => {
    const [video, setVideo] = useState<Video | undefined>(undefined);
    const [comments, setComments] = useState<Comment[]>([]);
    const route = useRoute();
    const videoId = route.params?.id;
    useEffect(() => {
        DataStore.query(Video, videoId).then(setVideo);
    }, [videoId])
    useEffect(() => {
        const fetchComments = async () => {
            if (!video) { return; }
            const VideoComments = (await DataStore.query(Comment))
                .filter(comment => comment.videoID === video.id);
            setComments(videoComments);
        };
        fetchComments();
    }, [video])

    const commentsSheetRef = useRef<BottomSheetModal>(null);
    const openComments = () => {
        commentsSheetRef.current?.present();
    }
    if (!video) {
        return <ActivityIndicator />;
    }
    /*   let viewsString = video.views.toString();
     if (video.views > 1000000) {
         viewsString = (video.views / 1000000).toFixed(2) + 'm'
     } else if (video.views > 1000) {
         viewsString = (video.views / 1000).toFixed(2) + 'k'
     } */
    return (
        <View style={{ backgroundColor: '#141414', flex: 1 }}>
            {/* Video player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
            {/* video info */}
            <View style={{ flex: 1 }}>
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tag}>{video.title}</Text>
                    <Text style={styles.subTitle}>{video.User?.name} {viewsString} {video.createdAt}</Text>
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
                    <Image style={styles.avatar} source={{ uri: video.User?.image }} />
                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{video.user.name}</Text>
                        <Text style={{ color: 'grey', fontSize: 18 }}>{video.User?.subscribers} subscriber</Text>
                    </View>
                    <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Subscribes</Text>

                </View>

                {/* comments */}
                <Pressable onPress={openComments}
                    style={{ padding: 10, marginVertical: 10 }}>
                    <Text style={{ color: 'white' }}>Comments </Text>
                    {/* comment component */}
                    {comments.length > 0 && <VideoComment comment={comments[0]} />}
                </Pressable>
                {/* All comments */}
                <BottomSheetModal
                    ref={commentsSheetRef}
                    snapPoints={['62%']}
                    index={0}
                    backdropComponent={({ style }) => <View style={[style, { backgroundColor: '#101010' }]} />}
                >
                    <VideoComments comments={comments} videoID={video.id}/>
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
