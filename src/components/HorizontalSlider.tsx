import React from 'react'
import { ScrollView } from 'react-native'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { MovieCard } from './MovieCard'


interface Props{
    title?: string,
    movies: Movie[]
}
export const HorizontalSlider = ({ title, movies}: Props) => {



    return (
        <View style={{ marginVertical: 25, height:(title ) ? 400 : 350}}>
            
            {title &&
              <Text style={{ 
                color: "#f1f1f1",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 15
            }}>{ title }</Text>}
            
            <ScrollView 
                horizontal={ true }
                showsHorizontalScrollIndicator = { false }
                >
                {movies.map(movie =>{
                    return <MovieCard  
                            key= {movie.id} 
                            movie={movie} 
                            height={300}
                            width={250}
                            />
                })}

            </ScrollView>
        </View>
    )
}
