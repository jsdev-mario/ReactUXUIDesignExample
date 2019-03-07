import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from 'reactstrap';
import styles from './style.css';

function MediaControlCard(props) {

    return (
        <div>
            <Card className={styles.card}>
                <div className={styles.details}>
                    <CardBody className={styles.content}>
                        <CardTitle>Live From Space</CardTitle>
                        <CardSubtitle color="secondary">
                            Mac Miller
                        </CardSubtitle>
                    </CardBody>
                    <div className={styles.controls}>
                        <span className="icon-btn">
                            <i className="zmdi zmdi-skip-previous"/>
                        </span>
                        <span className="icon-btn">
                            <i className="zmdi zmdi-skip-previous" {styles.playIcon} />
                        </span>
                        <span className="icon-btn">
                            <i className="zmdi zmdi-skip-next"/>
                        </span>
                    </div>
                </div>
                <CardImg className={styles.cover}
                         image="http://via.placeholder.com/600x400"
                         title="Live from space album cover"
                />
            </Card>
        </div>
    );
}

export default MediaControlCard;