function countPassingJsBasicsChecks(results) {

    let count = 0;

    for (let i = 0; i < results.length; i++) {

        // Convert to lowercase for case-insensitive check
        let value = results[i].toLowerCase();

        // Check if string contains "pass"
        if (value.includes("pass")) {
            count++;
        }
    }

    return count;
}