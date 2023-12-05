module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat", // A new feature
                "fix", // A bug fix
                "docs", // Documentation only changes
                "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                "refactor", // A code change that neither fixes a bug nor adds a feature
                "perf", // A code change that improves performance
                "test", // Adding missing tests or correcting existing tests
                "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
                "ci", // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
                "chore", // Other changes that don't modify src or test files
                "revert", // Reverts a previous commit
                //! Emojis
                ":fire:", // Remove code or files
                ":art:", // Improve structure / format of the code
                ":bug:", // Fix a bug
                ":sparkles:", // Introduce new features
                ":memo:", // Write docs
                ":rocket:", // Deploy stuff
                ":lipstick:", // Add or update the UI and style files
                ":tada:", // Begin a project
                ":white_check_mark:", // Add or update tests
                ":lock:", // Fix security issues
                ":apple:", // Fix something on macOS
                ":penguin:", // Fix something on Linux
                ":checkered_flag:", // Fix something on Windows
                ":robot:", // Fix or improve Android stuff
                ":green_apple:", // Fix or improve iOS stuff
                ":bookmark:", // Release / Version tags
                ":construction:", // Work in progress
            ],
        ],
    },
};
