import Base64 from 'js-base64';

// This file was generated by Mendix Studio Pro.
/**
 * @param {string} base64
 * @returns {Promise.<string>}
 */
async function Base64Decode(base64) {
    // BEGIN USER CODE
    return Base64.decode(base64);
    // END USER CODE
}

export { Base64Decode };
