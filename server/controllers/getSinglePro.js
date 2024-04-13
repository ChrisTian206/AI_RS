import axios from 'axios'

export const getProperty = async (req, res) => {
    const mls = req.body.mlsNumber;
    console.log('/api/listings/getProperty > mls received as: ', mls)

    const options = {
        method: 'GET',
        url: `https://api.repliers.io/listings/${mls}`,
        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': process.env.REPLIERS_DEV_KEY
        }
    };

    await axios
        .request(options)
        .then(function (response) {
            //console.log(response.data);
            res.json(response.data)
        })
        .catch(function (error) {
            //console.error(error);
        });
}

