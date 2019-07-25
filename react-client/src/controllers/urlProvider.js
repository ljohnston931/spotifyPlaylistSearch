module.exports.getUrl = function getUrl(searchQueryTerms) {
    const endpoint = "https://www.googleapis.com/customsearch/v1";
    const key = "AIzaSyCOGP3HS2hh4HJSn85dCAN4VTboDZbxLg0";
    const customEngine = "005897178697180786271:bbo-wqqna2c";

    let searchString = "inurl:playlist";
    searchQueryTerms.forEach(queryTerm => {
        searchString += createSearchString(queryTerm);
    })
    searchString = encodeURIComponent(searchString);
    searchString = replaceSpaces(searchString);
    return endpoint + "?key=" + key + "&cx=" + customEngine + "&q=" + searchString;
};

function createSearchString(queryTerm) {
    let searchString = '';
    if (queryTerm.artist) {
        searchString += " \"" + queryTerm.artist + "\""; 
    }
    if (queryTerm.song) {
        searchString += " \"" + queryTerm.song + "\"";
    }
    return searchString;
}

function replaceSpaces(searchString) {
    return searchString.split("%20").join("+");
}