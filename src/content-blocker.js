let lang;
let swears = [];
/**
 *  Constructor for contentFilter object
 *  @param {string} language: The language to filter
 */
function contentBlocker(language) {
    if (language === undefined) {
        lang = 'en';
    } else {
        let languages = ['en', 'es', 'it', 'id'];
        lang = language.toLowerCase();
        if (languages.includes(lang)) {
            lang = language;
        } else {
            throw new Error('Language not supported, please use one of the following: ' + languages.join(', '));
        }
    }
    swears = getSwears();
}

/**
 *  Function to get and clean the swear words for the language
 *  @return {array} The swear words
 */
function getSwears() {
    readJson("./src/swears/" + lang + '.json', function(text){
        let data = text.split(',');
        data[0] = data[0].substring(11,data[0].length-1);
        for (let i = 0; i < data.length; i++) {
            data[i] = data[i].replace(/"/g, '');
            data[i] = data[i].replace(/\[/g, '');
            data[i] = data[i].replace(/]/g, '');
            data[i] = data[i].replace(/{/g, '');
            data[i] = data[i].replace(/}/g, '');
        }
        swears = data;
    });
}

/**
 * Get the list of swear words from the json file
 * @param file The file to read
 * @param callback The callback function
 */
function readJson(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
            callback(rawFile.responseText);
    }
    rawFile.send(null);
}


/**
 *  Filter the input string
 *  @return {boolean} true if the input string is clean, false if it contains a swear
 */

contentBlocker.prototype.check = function(text) {
    const raw_data = text.split(' ')
    for (let i = 0; i < raw_data.length; i++) {
        if(swears.includes(raw_data[i])) {
            return false;
        }
    }
    return true;
}

export {
    contentBlocker
}