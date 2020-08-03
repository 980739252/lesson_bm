import React,{useEffect,useState} from  'react';
import Swiper from 'swiper';
import "swiper/css/swiper.css";


function  Swiper(props){
    const[sliderSwiper,setSliderSwiper]=useState(null);
    const{bannerList} = props;

    useEffect(()=>{
        if(bannerList.length && !sliderSwiper)              
    })
}

