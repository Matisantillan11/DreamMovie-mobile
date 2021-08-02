import React from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies'


export const HomePageScreen = () => {

    const { nowPlaying, isLoading } = useMovies();

    if(isLoading){
        return ( 
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }
    return (
        <View  style={{margin: 10}}>
            <ScrollView horizontal={true}>
                {nowPlaying.map(movie =>{
                return <MovieCard key={movie.id} movie={movie}/>
                })}
            </ScrollView>
            
        </View>
    )
}
