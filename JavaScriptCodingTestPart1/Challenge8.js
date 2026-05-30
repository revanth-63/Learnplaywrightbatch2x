function mergeJsBasicsConfig(defaultConfig, overrideConfig) {

    // Step 1: Merge both objects (override wins)
    let result = {
        ...defaultConfig,
        ...overrideConfig
    };

    // Step 2: Ensure retries exists (default = 0)
    if (result.retries === undefined) {
        result.retries = 0;
    }

    // Step 3: Return final config
    return result;
}