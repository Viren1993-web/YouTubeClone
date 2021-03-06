import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';
import { Feather } from '@expo/vector-icons';
import { DataStore, Auth } from 'aws-amplify';
import { Comment, User } from '../../src/models';

interface VideoCommentsProps {
    comments: Comment[],
    videoID: string
}
const VideoComments = ({ comments, videoID }: VideoCommentsProps) => {
    const [newComment, setNewComment] = useState('');
    const sendComment = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userSub = userInfo.attributes.sub;
        const user = (await DataStore.query(User)).find(u => u.sub === userSub);
        if (!user) {
            console.log("user not found");
            return;
        }
        await DataStore.save(new Comment({
            comment: newComment,
            likes: 0,
            dislike: 0,
            replies: 0,
            videoID,
            userID: user.id,
        })
        );
        setNewComment("");
    };
    return (
        <View style={{ backgroundColor: '#141414', flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <TextInput
                    placeholder="what do you think"
                    value={newComment}
                    onChangeText={setNewComment}
                    placeholderTextColor='grey'
                    style={{
                        backgroundColor: '#0101001',
                        padding: 10,
                        flex: 1
                    }}
                />
                <Pressable onPress={sendComment}>
                    <Feather name="send" size={24} color="white" />
                </Pressable>
            </View>
            <BottomSheetFlatList
                data={comments}
                renderItem={({ item }) => <VideoComment comment={item} />}
            />
        </View>
    );
};

export default VideoComments;
