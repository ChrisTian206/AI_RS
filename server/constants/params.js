import { Document } from "@langchain/core/documents";

export const paramDocument = new Document({
    pageContent: `
    agent: [array of strings] - Filters listings by agent name or agent ID, supports multiple values.
    aggregates: [string] - Aggregates values and counts for specified fields, useful for displaying possible values for listing filters.
    aggregateStatistics: [boolean] - If true, groups requested statistics by requested aggregates.
    amenities: [array of strings] - Filters listings by amenities.
    area: [string] - Filters by geographical area of the listing.
    balcony: [array of strings] - Filters listings by balcony values.
    basement: [array of strings] - Filters listings by basement description.
    boardId: [array of int32s] - Filters by boardId, required for accounts with access to multiple MLS.
    brokerage: [string] - Filters results by brokerage name.
    businessSubType: [array of strings] - Filters by business subtype.
    businessType: [array of strings] - Filters by business type.
    city: [array of strings] - Filters listings by city.
    class: [array of strings] - Filters listings by class (e.g., condo, residential, commercial).
    clusterFields: [string] - List of fields provided for clusters containing a single listing.
    cluster: [boolean] - If true, provides listing clusters for maps.
    clusterLimit: [int32] - Limits the amount of clusters returned when map is specified in aggregates.
    clusterPrecision: [int32] - Adjusts the granularity of map clusters.
    clusterStatistics: [boolean] - If true, calculates statistics separately for each cluster.
    den: [string] - Filters listings by den description.
    displayAddressOnInternet: [string] - Filters listings by address display on the internet.
    displayInternetEntireListing: [string] - Filters listings permitted for display on internet portals.
    displayPublic: [string] - Filters listings by public display.
    district: [string] - Filters by geographical district of the listing.
    driveway: [array of strings] - Filters listings by driveway values.
    exteriorConstruction: [array of strings] - Filters listings by exterior construction.
    fields: [string] - Limits the response to certain fields only.
    garage: [array of strings] - Filters listings by garage description.
    hasAgents: [boolean] - Filters listings by whether they have a listing agent assigned.
    hasImages: [boolean] - Filters listings by whether they have images.
    heating: [array of strings] - Filters listings by heating values.
    lastStatus: [array of strings] - Filters listings by the last status.
    lat: [string] - Accepts latitude value, must be used with radius parameter.
    listDate: [date] - Filters listings by specific date they were added to the MLS.
    listings: [boolean] - If false, the listings object will be empty.
    locker: [array of strings] - Filters listings by locker values.
    long: [string] - Accepts longitude value, must be used with radius parameter.
    map: [json] - An array of polygons arrays for filtering listing results.
    mapOperator: [string] - Changes condition for multi-polygon filtering.
    maxBaths: [int32] - Filters listings by maximum number of bathrooms.
    maxBeds: [int32] - Filters listings by maximum number of bedrooms.
    maxBedsPlus: [int32] - Filters listings by maximum number of additional bedrooms.
    maxKitchens: [int32] - Filters listings by maximum number of kitchens.
    maxListDate: [date] - Filters listings listed on or before a specific date.
    maxMaintenanceFee: [int32] - Filters listings by maximum maintenance fee.
    maxOpenHouseDate: [date] - Filters listings with an open house on or before a specific date.
    maxPrice: [int32] - Filters listings by maximum price.
    maxRepliersUpdatedOn: [date] - Filters listings with repliersUpdatedOn same or less than supplied DateTime.
    maxSoldDate: [date] - Filters listings sold/leased on or before a specific date.
    maxSoldPrice: [int32] - Filters listings by maximum sold price.
    maxSqft: [int32] - Filters listings by maximum square footage.
    maxTaxes: [int32] - Filters listings by maximum annual tax amount.
    maxUnavailableDate: [date] - Filters listings that became unavailable on or before a specific date.
    maxUpdatedOn: [date] - Filters listings updated on or before a specific date.
    maxYearBuilt: [int32] - Filters listings by maximum year built.
    minBaths: [int32] - Filters listings by minimum number of bathrooms.
    minBeds: [int32] - Filters listings by minimum number of bedrooms.
    minBedsPlus: [int32] - Filters listings by minimum number of additional bedrooms.
    minGarageSpaces: [int32] - Filters listings by minimum number of garage spaces.
    minKitchens: [int32] - Filters listings by minimum number of kitchens.
    minListDate: [date] - Filters listings listed on or after a specific date.
    minOpenHouseDate: [date] - Filters listings with an open house on or after a specific date.
    minParkingSpaces: [int32] - Filters listings by minimum number of parking spaces.
    minPrice: [int32] - Filters listings by minimum price.
    minRepliersUpdatedOn: [date] - Filters listings with repliersUpdatedOn same or greater than supplied DateTime.
    minSoldDate: [date] - Filters listings sold/leased on or after a specific date.
    minSoldPrice: [string] - Filters listings by minimum sold price.
    minSqft: [int32] - Filters listings by minimum square footage.
    minUnavailableDate: [date] - Filters listings that became unavailable on or after a specific date.
    minUpdatedOn: [date] - Filters listings updated on or after a specific date.
    minYearBuilt: [string] - Filters listings by minimum year built.
    mlsNumber: [array of strings] - Filters listings by one or more MLS numbers.
    neighborhood: [array of strings] - Filters by geographical neighborhood.
    officeId: [string] - Filters listings by the office ID of the listing brokerage.
    operator: [string] - Sets condition for listing matching.
    pageNum: [int32] - Indexes a specific page in the results set.
    propertyType: [array of strings] - Filters listings by property types.
    radius: [int32] - Accepts a value for radius in KM, must be used with lat and long parameters.
    resultsPerPage: [int32] - The amount of listings to return in each page of the results set.
    search: [string] - Keywords to filter the results by.
    searchFields: [string] - Limits keyword search to specific fields.
    sortBy: [string] - The attribute that the listings will be sorted by.
    sqft: [array of strings] - Filters listings by square footage.
    statistics: [string] - Provides statistical information about listings.
    status: [array of strings] - Retrieves listings based on status (active, unavailable, or both).
    streetDirection: [string] - Filters by street direction of the listing.
    streetName: [string] - Filters by street name of the listing.
    streetNumber: [string] - Filters by street number of the listing.
    style: [array of strings] - Filters by property style of the listing.
    swimmingPool: [array of strings] - Filters listings by swimming pool values.
    type: [array of strings] - Filters properties for sale or for lease.
    unitNumber: [string] - Filters by unit number of the listing.
    updatedOn: [date] - Filters listings by specific date they were last updated on the MLS.
    waterSource: [array of strings] - Filters listings by water source.
    repliersUpdatedOn: [date] - Filters listings with repliersUpdatedOn on a specific date.
    sewer: [array of strings] - Filters listings by sewer values.
    state: [string] - Filters by address state of the listing.
    streetSuffix: [string] - Filters by street suffix of the listing.
    waterfront: [string] - Filters listings by waterfront status.
    yearBuilt: [array of strings] - Filters listings by year built.
    zip: [string] - Filters listings by postal or zip code.
    zoning: [string] - Filters listings by zoning description.
    `
})

