import React, {useState, useEffect} from 'react';
import './App.css';
import SliderComponents from "./Components/SliderComponents/SliderComponents";
import {Cat} from "./types/Cat";

const App = () => {
    const LIMIT = 30;
    const [cats, setCats] = useState<{ loader: boolean, items: Cat[] }>({
        loader: true,
        items: new Array(LIMIT).fill(null) as Cat[]
    });

    const setRandomImage = (catId: string): void => {
        const newImageIdx = Math.floor(Math.random() * LIMIT);

        const newItems = cats.items.map(item => {
            if (item.id === catId) {
                item.image = cats.items[newImageIdx].image
            }
            return item;
        })

        setCats({
            loader: cats.loader,
            items: newItems
        })
    };

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds?limit=${LIMIT}`)
            .then(response => response.json())
            .then(data => data as Cat[])
            .then(data => setCats({
                loader: false,
                items: data
            }))
    }, []);

    return (
        <div className="container">
            <SliderComponents
                isLoader={cats.loader}
                cats={cats.items}
                setRandomImage={setRandomImage}
            />
        </div>
    );
}

export default App;
