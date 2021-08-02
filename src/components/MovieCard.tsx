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
            margin: 15
        }}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer:{
        flex:1,  
        shadowColor: "#f1f1f1",
        shadowOffset:{
            width: 10,
            height: 100
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    img:{
        flex: 1,
        borderRadius: 20,
    }
})
