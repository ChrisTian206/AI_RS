import { OpenAI } from "@langchain/openai"
import { PromptTemplate } from "@langchain/core/prompts"
import { LLMChain } from 'langchain/chains'
import isUrl from 'is-url'
import axios from 'axios'


const welcome = (req, res) => {
    res.send('you have reached the ai api')
}

const talk = async (req, res) => {
    const assistantTemplate = "Im using the Repliers API to search for property listings. If you are not able to generate a url OR you think the input is not about real estate, please return a 0 to me. If some params are not available in my question, just ignore them. Then please return me the url you generated. If you are not able to generate a url OR you think the input is not about real estate, please return a 0 to me. Thanks! Here are all the params that it can take: agent array of strings Filters listings by agent name or agent ID, for example, John Doe.Supports multiple values, for example ? agent = john & agent= mary ADD STRING aggregates string Aggregates listing counts in the response by specified fields.For example: GET / listings ? aggregates = details.numBedrooms, details.numBathrooms would provide a breakdown by bedroom count and bathroom count for all the listings in the response. Allowed values: class, status, lastStatus, type, address.area, address.city, address.neighborhood, details.propertyType, details.style, detail.numBedrooms, details.numBathrooms, permissions.displayPublic, details.businessType, details.businessSubType, details.basement1, details.basement2, details.garage, details.den, details.sewer, details.waterSource, details.heating, details.swimmingPool, details.yearBuilt, details.exteriorConstruction, details.sqft, details.balcony, condominium.locker, details.driveway, map, address.zip amenities array of strings Example usage: ? amenities = Gym & amenities=Swimming Pool ADD STRING area string Filter by the geographical area of the listing(also referred to as region) balcony array of strings Filters listings by one or more values for balcony. ADD STRING basement array of strings Filters listings by basement description using the supplied value. ADD STRING boardId array of int32s Filter by boardId.This is only required if your account has access to more than one MLS.You may specify one or more board IDs to filter by, if not specified, returns all boards that that account has access to be default. ADD INT32 brokerage string Filter results by brokerage name businessSubType array of strings ADD STRING businessType array of strings ADD STRING city array of strings Filter listing by one or more cities ADD STRING class array of strings The class of listing to filter the search results by.Allowed values: condo, residential, commercial ADD STRING clusterFields string A comma - separated list of fields that are provided for clusters containing a single listing. clusterLimit int32 Use this parameter to limit the amount of clusters returned when 'map' is specified in aggregates.Values can be between 1 and 200. This parameter can only be used if 'map' is specified in aggregates. clusterPrecision int32 Use this parameter to adjust the granularity of map clusters.A lower value aggregates listings into less clusters, a higher value aggregates listings into more clusters.Values can be between 0 and 29. This parameter can only be used if 'map' is specified in aggregates. den string Filter listings by den description. displayAddressOnInternet string If not specified, returns both listings whose address may be displayed on the internet(Y) and whose address should not be displayed on the the internet(N) Allowed values: Y, N displayInternetEntireListing string Used to filter listings permitted for display on internet portals. 'Y' indicates that the listing can be displayed, 'N' indicates that it can not and may only be used for back office purposes. displayPublic string If not specified, returns both listings that may be displayed publicly(Y) and those that should be password protected(N) Allowed values: Y, N district string Filter by the geographical district of the listing driveway array of strings Filters listings by one or more values for driveway. ADD STRING exteriorConstruction array of strings Filters listings by one or more values for exteriorConstruction - note, matches details.exteriorConstruction1 and details.exteriorConstruction2 fields. ADD STRING fields string Use if you want to limit the response to containing certain fields only.For example: fields ? listPrice, soldPrice would limit the response to contain listPrice and soldPrice only.You can also specify the amount of images to return, for example if a listing has 40 images total and you specify fields = images[5] it will only return the first 5 images. garage array of strings Filter listings by garage description. ADD STRING hasAgents boolean If true, only returns listings that have a listing agent assigned to them, if false, only returns listings that do not have a listing agent assigned to them.If not specified, returns both. hasImages boolean If not specified, returns both listings that have images(true) and listings that do not have images(false). heating array of strings Filters listings by one or more values for heating. ADD STRING lastStatus array of strings Filters the last status of the listing.Multiple values may be used, ie: lastStatus = sus & lastStatus=sld & laststatus=exp Allowed values: Sus, Exp, Sld, Ter, Dft, Lsd, Sc, Sce, Lc, Pc, Ext, New ADD STRING lat string Accepts a value for latitude.Must be used with radius parameter to return listings within a certain radius of a given latitude and longitude. listDate date Filter listings by a specific date that the listings were added to the MLS.Date format: YYYY - MM - DD listings boolean If false, the listings object will be empty.Useful for speeding up responses when statistics and aggregates are requested and listings are not needed. true locker array of strings Filters listings by one or more values for locker. ADD STRING long string Accepts a value for longitude.Must be used with radius parameter to return listings within a certain radius of a given latitude and longitude. map json An array of polygons arrays with arrays of longitude / latitude shapes to be used as a filter for listing results. Note - if the map is too large for a get request you may send it in the body of the request.The method will need to be POST instead of GET. Example usage: [[[-79.14121, 43.79041], [-79.132627, 43.773059], [-79.188932, 43.886988], [-79.200605, 43.877832], [-79.236654, 43.869665], [-79.265836, 43.860011], [-79.281972, 43.856051], [-79.322828, 43.84689], [-79.368146, 43.839214], [-79.386021, 43.836139], [-79.41486, 43.838616], [-79.423787, 43.836635], [-79.475285, 43.82227], [-79.480092, 43.813352], [-79.480778, 43.803441], [-79.485585, 43.79799], [-79.493825, 43.794025], [-79.556996, 43.779649], [-79.601628, 43.761303], [-79.61611, 43.758572], [-79.629934, 43.750141], [-79.625471, 43.728064], [-79.616888, 43.713177], [-79.606245, 43.695555], [-79.601095, 43.685873], [-79.593885, 43.681156], [-79.590109, 43.672465], [-79.582212, 43.671224], [-79.574659, 43.670975], [-79.535177, 43.58325], [-79.424627, 43.619052], [-79.385488, 43.602645], [-79.315451, 43.612092], [-79.14121, 43.79041]]] maxBaths int32 maxBeds int32 maxBedsPlus int32 If supplied, filters listings that have an amount of plus bedrooms that's no greater than the supplied value. A plus bedroom is a bedroom that was not part of the original floorplan such as a den that was converted to a bedroom or a bedroom that was added to a basement (below grade). maxKitchens int32 maxListDate date Filter listings that were listed on or before the supplied value.Date format: YYYY - MM - DD maxMaintenanceFee int32 If supplied, filters listings whose maintenance fee is <= the supplied value. maxOpenHouseDate date If specified, filters listings that have an open house on or before the supplied date.Date format: YYYY - MM - DD maxPrice int32 maxSoldDate date Filter listings that were sold / leased on or before the supplied value.Date format: YYYY - MM - DD maxSoldPrice int32 Filter listings whose sold price is <= the supplied value. maxSqft int32 Filter listings whose square footage is <= the supplied value.Note - excludes listings where the sqft value is not supplied by the MLS. maxUnavailableDate date Filter listings that became unavailable on or before the supplied value.Not all MLSes support this parameter. maxUpdatedOn date Filter listings that were updated on or before the supplied value.Date format: YYYY - MM - DD maxYearBuilt int32 Filter listings whose year built value is <= the supplied value.excludes listings where the year built value is not supplied by the MLS. minBaths int32 minBeds int32 minBedsPlus int32 If supplied, filters listings that have an amount of plus bedrooms that's no less than the supplied value. A plus bedroom is a bedroom that was not part of the original floorplan such as a den that was converted to a bedroom or a bedroom that was added to a basement (below grade). minGarageSpaces int32 Filters listings that have >= the supplied value of garage spaces. minKitchens int32 minListDate date Filter listings that were listed on or after the supplied value.Date format: YYYY - MM - DD minOpenHouseDate date If specified, filters listings that have an open house on or after the supplied date.Date format: YYYY - MM - DD minParkingSpaces int32 minPrice int32 minSoldDate date Filter listings that were sold / leased on or after the supplied value.Date format: YYYY - MM - DD minSoldPrice string Filter listings whose sold price is >= the supplied value. minSqft int32 Filter listings whose square footage is >= the supplied value.Note - excludes listings where the sqft value is not supplied by the MLS. minUnavailableDate date Filter listings that became unavailable on or after the supplied value.Not all MLSes support this parameter.Date format: YYYY - MM - DD minUpdatedOn date Filter listings that were updated on or after the supplied value.Date format: YYYY - MM - DD minYearBuilt string Filter listings whose year built value is >= the supplied value.excludes listings where the year built value is not supplied by the MLS. mlsNumber array of strings Filter listings by one or more MLS numbers. neighborhood array of strings Filter by the geographical neighborhood that the listing is situated in.For example GET / listings ? city = Vaughan & neighborhood=Sonoma Heights & neighborhood=Vellore Village officeId string Filter listings by the office ID of the listing brokerage. operator string If set to 'AND', listings must match all supplied parameters.If set to 'OR', listings must match at least 1 parameter. Allowed values: AND, OR AND pageNum int32 If specified indexes a specific page in the results set.For example, if there are 1000 listings and 100 listings per page, if you'd like to view listings 101-201 you'd specify pageNum = 2 propertyType array of strings Filters listings by one or more property types. radius int32 Accepts a value for radius in KM.Must be used with lat and long parameters to return listings within a certain radius of a given latitude and longitude. resultsPerPage int32 The amount of listings to return in each page of the results set. search string One or more keywords may be specified to filter the results by. searchFields string To be used in conjunction with the 'search' parameter.If specified, limits the keyword search to specific fields.For example, if search = yonge and you want to limit the search to streetName you would specify searchFields = address.streetName sortBy string The attribute that the listings will be sorted by.Note, distanceAsc and distanceDesc must be used in combination with lat, long and radius parameters. Allowed values: createdOnDesc, updatedOnDesc, createdOnAsc, distanceAsc, distanceDesc, updatedOnAsc, soldDateAsc, soldDateDesc, soldPriceAsc, soldPriceDesc, sqftAsc, sqftDesc, listPriceAsc, listPriceDesc, bedsAsc, bedsDesc, bathsDesc, bathsAsc, yearBuiltDesc, yearBuiltAsc, random updatedOnDesc sqft array of strings Filters listings by one or more values for sqft. statistics string For example: GET / listings ? statistics = avg - listPrice, avg - daysOnMarket & type=sale & city=Toronto would provide the average list price and average days on market for all re - sale properties in the city of Toronto.You can also group the statistics by year and / or month by adding grp - mth and / or grp - yr values to the request, for example, GET / listings ? statistics = grp - mth, avg - listPrice would provide the average list price grouped by month for current active listings.Supported calculations include average(avg), minimum(min), maximum(max), count(cnt), median(med), standard deviation(sd) and sum(sum) for metrics like listPrice, soldPrice, daysOnMarket, new listings, closed listings and available listings. Allowed values: avg - daysOnMarket, sum - daysOnMarket, min - daysOnMarket, max - daysOnMarket, avg - listPrice, sum - listPrice, min - listPrice, max - listPrice, avg - soldPrice, sum - soldPrice, min - soldPrice, max - soldPrice, cnt - new, cnt - closed, med - listPrice, med - soldPrice, med - daysOnMarket, sd - listPrice, sd - soldPrice, sd - daysOnMarket, avg - priceSqft, grp - mth, grp - yr status array of strings Set status = A to retrieve active listings.Set status = U to retrieve unavailable listings.Set status = A & status=U to retrieve both active and unavailable listings. Allowed values: A, U streetDirection string Filter by the street direction of the listing, for example 'W' streetName string Filter by the street name of the listing(excluding the street suffix and direction, for example 'Yonge') streetNumber string Filter by the street number of the listing. style array of strings Filter by the property style of the listing. swimmingPool array of strings Filter listings by one of more values for swimmingPool. type array of strings Used to filter properties that are for sale or for lease.If not specified, will return listings of all types. Allowed values: sale, lease unitNumber string Filter by the unit number of the listing. updatedOn date Filter listings by a specific date that the listings were last updated on the MLS.Date format: YYYY - MM - DD waterSource array of strings Filter listings by one or more values for waterSource. sewer array of strings Filters listings by one or more values for sewer. yearBuilt array of strings Filter listings by one or more values for yearBuilt. zip string Filters listings by postal or zip code. zoning string Filter listings by zoning description. BODY PARAMS sewer array of strings Then, Im going to play as a client to ask you questions related to list searchings. You will extract informations from my {input} that can be placed into a url. Here is a example of that url: 'https://api.repliers.io/listings?listings=true&minBaths=5&minBeds=9&neighborhood=Central%20Coquitlam&operator=AND&sortBy=updatedOnDesc&status=A'"
    const key = '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'
    // console.log(req.body)

    const model = new OpenAI({
        openAIApiKey: key,
        temperature: 0,
        maxRetries: 10,
    })

    // Prompting
    const promptTemplate = new PromptTemplate({
        inputVariables: ['input'],
        template: assistantTemplate,
    })

    const chain = new LLMChain({
        llm: model,
        prompt: promptTemplate,
    })

    const ret = await chain.call({
        input: req.body.question
    })

    // Remove unnecessary line breaks and leading/trailing whitespace
    const formattedText = ret.text.trim();

    // Remove the leading '\n' and '+' characters
    const cleanedText = formattedText.replace(/^n\+/, '');
    console.log("OpenAI ret: ", cleanedText)
    //res.json(cleanedText)

    const options = {
        method: 'GET',
        url: cleanedText,

        headers: {
            accept: 'application/json',
            'REPLIERS-API-KEY': 'q6ntW7TP26D0NIE0Rl6skSV6GaoYOW'
        },
    };

    const funCall = async () => {
        if (isUrl(cleanedText)) {
            await axios
                .request(options)
                .then(function (response) {
                    //console.log(response.data)
                    res.json(response.data)
                })
                .catch(function (error) {
                    //console.log(error)
                    res.json(error)
                });
        } else {
            console.log('backend > ai.js says: not a valid url')
            res.json({
                error: 'Input invalid'
            })
        }
    }

    funCall()
}

export default {
    welcome,
    talk
}