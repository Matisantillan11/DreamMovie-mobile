import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MovieCard = ({ movie, height = 450, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=> navigation.navigate('MovieDescription', movie)}
        style={{
            width,
            minHeight: height,
            margin: 15
        }}
        >
            <View style={styles.imgContainer}>
                <Image 
                source={{uri}} 
                style={styles.img} 
                />
                <Text style={{
                    fontSize: 18,
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    color:"#f1f1f1",
                }}>
                    {movie.original_title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgContainer:{
        flex:1,  
        backgroundColor: "#333",
        shadowColor: "#ffffffb2",
        shadowOffset:{
            width: 0,
            height: 100
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5 ,
        borderRadius: 20,
    },
    img:{
        flex: 1,
        borderRadius: 5,
    }
})
