import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle,} from 'reactstrap';


function MediaCard() {
    return (
        <div className="col-md-8">
            <Card>
                <CardImg className="height-200" image="http://via.placeholder.com/500x330"
                         title="Contemplative Reptile"/>
                <CardBody>
                    <CardTitle>Lizard</CardTitle>
                    <CardText>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </CardText>
                    <Button size="sma" outline color="primary">
                        Share
                    </Button>
                    <Button size="sma" outline color="primary">
                        Learn More
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default MediaCard;