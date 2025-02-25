
/**
 * Gets the amount if it exists, otherwise returns null
 * @returns {number || null} the amount as a number, or null if empty
 */
function getAmount() {
    // TODO: Get the actual amount!
    return 0;
}

/**
 * Gets the from unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getFromUnit() {
    // TODO: Get the actual unit!
    return "Fl Oz";
}

/**
 * Gets the to unit if it is specified, otherwise returns null
 * @returns {string || null} the unit as a string, or null if unspecified
 */
function getToUnit() {
    // TODO: Get the actual unit!
    return "Fl Oz";
}

/**
 * This function is called whenever the user presses the "Convert!" button.
 * It should alert the user if any of the fields are null or if the amount is negative.
 * Otherwise, it should call getResult and alert the user of the result.
 * e.g. "2 Pint is equal to 4 Cup"
 */
function convert() {
    // TODO: Call your 3 data grabbing functions, check if they have values,
    //       pass them to getResult, and alert the user of the conversion!
    alert("I should do the conversion!")
}

/**
 * This function should take the amount, fromUnit, and toUnit, and
 * return the result of the conversion. You should use the
 * getUnitInFlOz function in your calculation.
 * 
 * e.g. arguments of 2, "Pint", "Cup" should return 4
 * 
 * @param {number} amount The amount to convert
 * @param {string} fromUnit The unit we are coming from
 * @param {string} toUnit The unit we are going to
 * @returns {number} the resulting amount, in toUnit units
 */
function getResult(amount, fromUnit, toUnit) {
    // TODO: Return the actual result!
    return 0;
}

/**
 * Gets the number of fl oz in the given unit
 * @param {string} unit the unit, e.g. "Fl Oz", "Cup", etc.
 * @returns {number || null} the number of fl oz or null if invalid unit
 */
function getUnitInFlOz(unit) {
    if (unit === 'Fl Oz') {
        return 1;
    } else if (unit === 'Cup') {
        return 8;
    } else if (unit === 'Pint') {
        return 16;
    } else if (unit === 'Quart') {
        return 32;
    } else if (unit === 'Gallon') {
        return 128;
    } else {
        return null;
    }
}


