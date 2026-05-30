function isValidJsBasicsIdentifier(name) {

    // Step 1 - Trim spaces
    let value = name.trim();

    // Step 2 - Must not be empty
    if (value.length === 0) {
        return false;
    }

    // Step 3 - Reject reserved words
    let reserved = ["let", "const", "var", "class", "function", "return"];
    if (reserved.includes(value)) {
        return false;
    }

    // Step 4 - Validate using regex
    let regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    return regex.test(value);
}