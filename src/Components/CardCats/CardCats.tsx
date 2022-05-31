import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CardCats = (props) => {
    const {
        mockObject: {
            name,
            description,
            image: {
                url
            },
            cfa_url,
            wikipedia_url
        }
    } = props;


    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                // height="140"
                image={url}
                alt={`${name}_image`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link target="_blank" size="small" underline="none" color="inherit" href={cfa_url}>{name}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    Сhange Picture
                </Button>
                <Button size="small">
                    <Link target="_blank" size="small" underline="none" href={wikipedia_url}>Learn More</Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardCats;