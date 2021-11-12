import React from 'react';
import { CardGroup, Card, Col} from 'react-bootstrap';
import './App.css';

const Websites = (props) => {
    return(
          <CardGroup>
                    {props.urls.map((url, index) => {
                        return(
                            <Col sm="4">
                            <Card className="m-2 rounded shadow" key={`website-entry-${index}`} id="cardz">
                                <Card.Title>
                                    {props.titles[index]}
                                </Card.Title>
                                <Card.Body>
                                    {url}
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </CardGroup>
    )
}

export default Websites;