import React from 'react';
import {Button, Card, CardBody, CardImg} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';


const CafeCard = () => {
    return (
        <Card>
            <CardImg top width="100%" src="http://via.placeholder.com/500x330" alt="Card image cap"/>
            <CardBody>
                <h3 className="card-title mb-0">Cafe Basilico</h3>
                <div className="d-flex align-items-center my-2">
                    <StarRatingComponent
                        className="h2 mb-0"
                        name=""
                        value={4.5}
                        starCount={5}
                        editing={false}/>
                    <span className="d-inline-block text-muted h4 ml-2 mb-0"><small>4.5 (52)</small></span>
                </div>
                <h4 className="font-weight-light">
                    Italian Cafe
                </h4>
                <p className="card-text text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                </p>
                <hr/>
                <h3 className="card-title mb-0">Tonight's availability</h3>
            </CardBody>

            <div className="card-mt-footer">
                <div className="btn-group-mins mb-2">
                    <span className="jr-btn">
                        <i className="zmdi zmdi-time zmdi-hc-lg"/>
                        <span>Time</span>
                    </span>

                    <span className="jr-btn">7:30 PM</span>

                    <span className="jr-btn">9:00 PM</span>
                </div>
                <Button size="sm" outline color="primary" className="ml-2">RESERVE</Button>
            </div>
        </Card>
    );
};

export default CafeCard;