import './global.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View className={"gap-20 flex-col bg-red-500"}>
        <Text className={"text-2xl"}>Open up App.tsx to start working on your app!</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* aparentemente o grid nao funciona no ios, mas no web funciona */}
        <View className={"p-10 gap-10 grid grid-cols-3 bg-blue-500"}>
          <View className={"w-5 h-5 bg-green-500"}/>
          <View className={"w-5 h-5 bg-green-500"}/>
          <View className={"w-5 h-5 bg-green-500"}/>
          <View className={"w-5 h-5 bg-green-500"}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}