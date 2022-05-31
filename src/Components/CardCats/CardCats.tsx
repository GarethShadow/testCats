import React from 'react';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
    Link
} from '@mui/material';
import {Cat} from "../../types/Cat";


const CardCats: React.FC<{ cat: Cat, setRandomImage: (id: string) => void }> = ({cat, setRandomImage}) =>  (
        <Card sx={{maxWidth: 345}} className="Card">
            <CardMedia
                component="img"
                alt={`${cat.name}_${cat.id}`}
                height="250"
                image={cat.image.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link href={cat.cfa_url} underline="none" color="inherit" target="_blank">
                        {cat.name}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" className="CardDescription">
                    {cat.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => setRandomImage(cat.id)} size="small">Random Image</Button>
                <Button size="small">
                    <Link href={cat.wikipedia_url} underline="none" target="_blank">
                        Learn More
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );

export default CardCats;