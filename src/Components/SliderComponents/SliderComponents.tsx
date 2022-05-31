import React from "react";
import {Cat} from "../../types/Cat";
import Slider from "react-slick";
import CardCats from "../CardCats/CardCats";
import NextArrow from "./Arrows/NextArrow";
import PrevArrow from "./Arrows/PrevArrow";
import Loader from "../Loader/Loader";


const SliderComponents: React.FC<{ cats: Cat[], setRandomImage: (id: string) => void, isLoader: boolean }> = ({cats, setRandomImage, isLoader}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        style: {margin: "0 auto", zIndex: "20"}
    };

    return (
            <Slider {...settings}>
                {isLoader
                    ? cats.map(() => <Loader/>)
                    : cats.map(item => <CardCats setRandomImage={setRandomImage} cat={item} key={item.id}/>)
                }
            </Slider>
    );
}

export default SliderComponents