function summarizeJsBasicsResults(results) {

    let passed = 0;
    let failed = 0;
    let skipped = 0;

    // Total items
    let total = results.length;

    for (let i = 0; i < results.length; i++) {

        // Convert to lowercase
        let value = results[i].toLowerCase();

        if (value.includes("pass")) {
            passed++;
        }
        else if (value.includes("fail")) {
            failed++;
        }
        else if (value.includes("skip")) {
            skipped++;
        }
    }

    return {
        total: total,
        passed: passed,
        failed: failed,
        skipped: skipped
    };
}