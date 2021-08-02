import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie
}

export const MovieCard = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    return (
        <View style={{
            width: 300,
            height: 450,
        }}>
            <View style={styles.imgContainer}>
                <Image 
                source={{uri}} 
                style={styles.img} 
                />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer:{
        flex:1,  
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10
    },
    img:{
       flex: 1,
       borderRadius: 20,

    }
})
