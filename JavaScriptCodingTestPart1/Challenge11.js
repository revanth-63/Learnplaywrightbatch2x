function summarizeJsBasicsMatrix(matrix) {

    let total = 0;
    let passed = 0;
    let failed = 0;
    let failedCases = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            let value = matrix[i][j].toLowerCase();

            total++;

            if (value.includes("pass")) {
                passed++;
            }
            else if (value.includes("fail")) {
                failed++;
                failedCases.push(matrix[i][j]);
            }
        }
    }

    return {
        total: total,
        passed: passed,
        failed: failed,
        failedCases: failedCases
    };
}