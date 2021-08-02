import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'


interface Props extends StackScreenProps<any, any>{};
export const MovieDescriptionPage = ({ navigation }: Props) => {
    return (
        <View>
            <Text style={{
                marginVertical: 10,
                fontSize: 25
            }}>
                Hello from descriptions
            </Text>

            <Button
            title="go to home"
            onPress={()=> navigation.navigate("Home")}
            />
        </View>
    )
}
