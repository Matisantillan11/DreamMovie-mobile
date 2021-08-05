import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../stacks/MoviesStack'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'MovieDescription'>{};


const { height, width } = Dimensions.get("window")

export const MovieDescriptionPage = ({ route }: Props) => {
    
    const movie = route.params
    const { isLoading, movieDetails:{ cast, fullMovie } } = useMovieDetails(movie.id);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <ScrollView>
            <View style={styles.posterContainer}>
                <Image 
                source={{uri}}
                style={{
                    flex:1,
                }}
                />
            </View>

            <View style={{
                flex: 1,
                padding: 15
            }}>
                <Text style={styles.originalTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title} ({movie.original_language.toUpperCase()})</Text>
                
                    {
                        isLoading
                            ? <ActivityIndicator size="small" color="#0000ff" />
                            : <MovieDetails movie={fullMovie !} cast={cast} width={width} height={height} />
                    }
            </View>

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterContainer: {
        width, 
        height: height * 0.7,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        overflow: 'hidden'
    },
    originalTitle: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 20
    },
    title:{
        color: "#f1f1f1",
        fontSize: 28,
        fontWeight: "bold"
    },
})
