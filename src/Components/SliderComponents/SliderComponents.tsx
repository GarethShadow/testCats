import React, {useEffect, useState, useRef} from "react"
import {Cat} from "../../types/Cat";
import CardCats from "../CardCats/CardCats";
import Slider from "react-slick";


const SliderComponents: React.FC<{ cats: Cat[] }> = ({cats}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {cats.map(item => <CardCats cat={item} key={item.id}/>)}
            </Slider>
        </div>
    );
}

export default SliderComponents