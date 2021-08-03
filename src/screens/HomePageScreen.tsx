import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView,  View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';


import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies'
import { Movie } from '../interfaces/movieInterface';

const {width} = Dimensions.get('window')
export const HomePageScreen = () => {

    const { nowPlaying, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    {if(isLoading){
       return (
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
       )
   }
         
            
    
    }

    return (
        <View  style={{marginTop: top + 25}}>
            <View style={{
                height: 480
            }}>
                <Carousel 
                data={nowPlaying}
                renderItem={({ item }:any ) => <MovieCard movie={item}/> }
                sliderWidth={width}
                itemWidth={300}
                />
            </View>
        </View>
    )
}
