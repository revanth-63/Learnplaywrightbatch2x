function filterSupportedJsBasicsTopics(topics) {

    // Step 1 - Alias mapping (VERY IMPORTANT)
    let aliasMap = {
        "node": "node",
        "runtime": "node",
        "v8": "v8",
        "engine": "v8",
        "npm": "npm"
    };

    let result = [];

    // Step 2 - Loop through input
    for (let i = 0; i < topics.length; i++) {

        // Normalize input
        let topic = topics[i].trim().toLowerCase();

        // Step 3 - Check if topic is valid using aliasMap
        if (aliasMap[topic]) {

            let canonical = aliasMap[topic];

            // Step 4 - Avoid duplicates
            if (!result.includes(canonical)) {
                result.push(canonical);
            }
        }
    }

    // Step 5 - Return result
    return result;
}