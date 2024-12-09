import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function HomeScreen() {
  return (
    <WebView source={{ uri: 'http://10.0.2.2:3000/quiz-app' }} style={{ marginTop: '10%'}} sharedCookiesEnabled={true} thirdPartyCookiesEnabled={true}></WebView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})