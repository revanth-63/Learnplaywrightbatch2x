function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {

    // Step 1 - Trim AND remove extra internal spaces
    let suite = suiteName.trim().replace(/\s+/g, " ");

    // Step 2 - Lowercase environment
    let env = environment.trim().toLowerCase();

    // Step 3 - Build label
    let build = "build-" + buildNumber;

    // Step 4 - Join correctly with single spaces
    return suite + " | " + env + " | " + build;
}