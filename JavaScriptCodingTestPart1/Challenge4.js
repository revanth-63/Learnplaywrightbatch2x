function getJsBasicsKeywordMeaning(term) {

    // Step 1 - Normalize input (trim + lowercase)
    let key = term.trim().toLowerCase();

    // Step 2 - Create mapping object
    let map = {
        "node": "runtime",
        "v8": "engine",
        "npm": "package-manager"
    };

    // Step 3 -  Return mapped value or "unknown"
    if (map[key]) {
        return map[key];
    } else {
        return "unknown";
    }
}