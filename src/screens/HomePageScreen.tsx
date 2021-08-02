import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button,  Text, View } from 'react-native'

interface Props extends StackScreenProps<any, any>{}; 
export const HomePageScreen = ({ navigation }: Props) => {
    return (
        <View  style={{margin: 10}}>
            <Text style={{
                marginVertical: 10,
                fontSize: 25
            }}>
                Hello from home
            </Text> 
            <Button
            title="go to descriptions"
            onPress={()=> navigation.navigate("MovieDescription")}
            />           
        </View>
    )
}
