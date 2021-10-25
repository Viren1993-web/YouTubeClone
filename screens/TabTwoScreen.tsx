import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import {Auth} from 'aws-amplify';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const signOut=()=>{
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <Pressable onPress={signOut}>
      <Text style={styles.title}>SignOut</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor:'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
