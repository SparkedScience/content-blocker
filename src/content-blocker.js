let data;
let lang;
/**
 *  Constructor for contentFilter object
 *  @param {string} input: The string to filter
 *  @param {string} language: The language to filter
 */
function contentBlocker(input, language) {
    if (input === undefined) {
        throw new Error('No input provided');
    } else {
        data = input;
    }
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

    console.log(lang);
    import swears from '/swears/en.js';
    console.log(swears);
}


/**
 *  Filter the input string
 *  @return {boolean} true if the input string contains a swear, false if not
 */

contentBlocker.prototype.check = function() {
    const raw_data = data.split(' ')
    for (let i = 0; i < raw_data.length; i++) {

    }
    return raw_data.join(' ')
}

export {
    contentBlocker
}