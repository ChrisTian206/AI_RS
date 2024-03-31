import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function Listing() {
    const [res, setRes] = useState('')

    const options = {
        method: 'GET',
        url: 'https://api.repliers.io/listings?lat=42.3601&long=-71.0589&minBeds=3&minBaths=3&listings=true&operator=AND&sortBy=updatedOnDesc&status=A',

        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': ''
        },
    };

    const funCall = async () => {
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
                // mistake: if updating a state, put it inside a useEffect OR set a condition like in onClick(), onSubmit()
                // original code: setRes(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    funCall()

    return (
        <div>Listings</div>
    )
}

export default Listing