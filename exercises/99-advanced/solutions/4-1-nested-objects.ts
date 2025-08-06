// 🧪 Exercise 4.1: Nested Objects for Test Configuration - SOLUTION

export {} // Ignore this line

// Solution:

// 1. DatabaseConfig type
type DatabaseConfig = {
    host: string
    port: number
    username: string
}

// 2. BrowserConfig type
type BrowserConfig = {
    name: string
    headless: boolean
    viewport: { width: number; height: number }
}

// 3. TestConfig type
type TestConfig = {
    environment: string
    timeout: number
    database: DatabaseConfig
    browser: BrowserConfig
}

// 4. Test configuration object
const testConfig: TestConfig = {
    environment: "staging",
    timeout: 30000,
    database: {
        host: "localhost",
        port: 5432,
        username: "testuser"
    },
    browser: {
        name: "chrome",
        headless: false,
        viewport: {
            width: 1920,
            height: 1080
        }
    }
}

// 5, 6, 7. Access nested properties and print with specific format
console.log("Environment:", testConfig.environment)
console.log(`Database: ${testConfig.database.host}:${testConfig.database.port}`)
console.log(
    `Browser: ${testConfig.browser.name} (${testConfig.browser.viewport.width}x${testConfig.browser.viewport.height})`
)

// 8. Validation function
function validateConfig(config: TestConfig): boolean {
    // Check timeout is greater than 0
    if (config.timeout <= 0) {
        console.log("Error: Timeout must be greater than 0")
        return false
    }

    // Check database port is between 1000 and 9999
    if (config.database.port < 1000 || config.database.port > 9999) {
        console.log("Error: Database port must be between 1000 and 9999")
        return false
    }

    // Check browser viewport dimensions are positive
    if (config.browser.viewport.width <= 0 || config.browser.viewport.height <= 0) {
        console.log("Error: Browser viewport dimensions must be positive")
        return false
    }

    return true
}

// 9. Test the validation function and print result
if (validateConfig(testConfig)) {
    console.log("Configuration is valid")
} else {
    console.log("Configuration has errors")
}
