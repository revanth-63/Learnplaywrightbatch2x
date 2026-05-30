function normalizeJsBasicsLabel(label) {
    // Step 1 - Trim spaces
    let result = label.trim();

    // Step 2 - Convert to lowercase
    result = result.toLowerCase();

    // Step 3 -  Replace non-alphanumeric groups with "-"
    result = result.replace(/[^a-z0-9]+/g, "-");

    // Step 4 - Remove leading/trailing hyphens (edge cases)
    result = result.replace(/^-+|-+$/g, "");

    // Step 5 - Add prefix
    return "js-basic-" + result;
}