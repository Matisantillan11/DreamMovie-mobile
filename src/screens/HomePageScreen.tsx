import React, { useEffect, useState } from 'react'
import { Button,  Text, View } from 'react-native'
import movieDB from '../api/movieDB';

export const HomePageScreen = () => {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        movieDB.get('/now_playing').then((res) => console.log(res.data)).catch(err => console.log(err));        
    }, [])

    return (
        <View  style={{margin: 10}}>
            <Text style={{
                marginVertical: 10,
                fontSize: 25
            }}>
                Hello from home
            </Text>     
        </View>
    )
}
