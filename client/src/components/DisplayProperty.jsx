import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import House1 from '../assets/houses/house1.jpeg'
import House2 from '../assets/houses/house2.jpeg'
import House3 from '../assets/houses/house3.jpeg'
import House4 from '../assets/houses/house4.jpeg'
import House5 from '../assets/houses/house5.jpeg'
import House6 from '../assets/houses/house6.jpeg'
import House7 from '../assets/houses/house7.jpeg'
import House8 from '../assets/houses/house8.jpeg'

function DisplayProperty({ property }) {
    const images = [House1, House2, House3, House4, House5, House6, House7, House8]
    const num = Math.floor(Math.random() * 8);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={images[num]} />
                <Card.Body>
                    <Card.Title>
                        {property.address.streetNumber} {property.address.streetName} {property.address.streetSuffix}
                    </Card.Title>
                    <Card.Text>
                        {property.mlsNumber}
                    </Card.Text>
                    <Card.Text>
                        $CAD {property.originalPrice}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DisplayProperty