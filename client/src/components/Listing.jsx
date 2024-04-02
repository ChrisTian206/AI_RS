import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

function Listing() {
    const [res, setRes] = useState({})

    const options = {
        method: 'GET',
        url: 'https://api.repliers.io/listings?city=Vancouver&minBeds=9&minBaths=5&listings=true&operator=AND&sortBy=updatedOnDesc&status=A',

        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': ''
        },
    };

    useEffect(() => {
        const funCall = async () => {
            await axios
                .request(options)
                .then(function (response) {
                    //console.log(response.data)
                    setRes(response.data)
                    // mistake: if updating a state, put it inside a useEffect OR set a condition like in onClick(), onSubmit()
                    // original code: setRes(response.data)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
        funCall()

    }, [])

    console.log('res.listings: ', res.listings)


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Here is a example of Repliers Call:</h1>
            <h3 style={{ textAlign: 'center' }}>I want residential properties that has at least 9 bedrooms and 5 bathrooms located in Vancouver</h3>
            {res.listings ? <h4 style={{
                textAlign: 'center',
                marginTop: '10px',
                borderTop: 'solid black 1px'
            }}>Here are {res.listings.length} results that fits the description</h4> : ''}
            {res.listings ? res.listings.map((property, index) => (
                <p key={index} style={{ textAlign: 'center' }}>{property.address.neighborhood}</p>
            )) : <h4 style={{ textAlign: 'center', color: 'gray' }}>Loading...</h4>
            }
        </div >
    )
}

export default Listing