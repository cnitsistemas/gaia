import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Styles from '../../commom/Styles'
import * as Animatable from 'react-native-animatable'

export default function Home({ route, navigation }) {
    const viewRef = React.useRef(null);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
        })
        return () => unsubscribe;
    }, [navigation])
    return (
        <View style={Styles.container}>
            <Animatable.View
                ref={viewRef}
                easing={'ease-in-out'}
                style={Styles.container}>
                <Text>home</Text>
            </Animatable.View>
        </View>
    )
}