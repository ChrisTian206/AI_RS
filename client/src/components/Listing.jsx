import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function Listing() {
    const axios = require('axios')
    const [res, setRes] = useState('')

    const options = {
        method: 'GET',
        url: 'https://api.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'REPLIERS-API-KEY': 'cVVMwWBp1xdGzfzDXLjyF948CpJ2g7'
        },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

    return (
        <div>Listing</div>
    )
}

export default Listing