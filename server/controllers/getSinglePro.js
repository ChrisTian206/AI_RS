import axios from 'axios'

export const getProperty = (req, res) => {
    const mls = req.body.mls;

    const options = {
        method: 'GET',
        url: `https://api.repliers.io/listings/mlsNumber=${mls}`,
        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': process.env.REPLIERS_DEV_KEY
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            res.send('working on it')
        })
        .catch(function (error) {
            console.error(error);
        });
}

