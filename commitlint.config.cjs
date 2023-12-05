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
                ":tada", // Initial commit
                ":fire:", // Remove code or files
                ":art:", // Improve structure / format of the code
                ":zap:", // Improve performance
                ":adhesive_bandage:", // Fix critical issues
                ":bug:", // Fix a bug
                ":sparkles:", // Introduce new features
                ":memo:", // Write docs
                ":bento:", // Add or update assets
                ":lock:", // Fix security issues
                ":construction:", // Work in progress
                ":truck:", // Move or rename files
                ":bulb:", // Add or update comments in the code
                ":mute:", // Remove logs or debugging statements
                ":wheelchair:", // Improve accessibility
                ":rocket:", // Deploy stuff
                ":white_check_mark:", // Add or update tests
                ":bookmark:", // Release / Version tags
                ":recycle:", // Refactor code
                ":wrench:", // Configuration changes
                ":package:", // Update dependencies
                ":twisted_rightwards_arrows:", // Merge branches
                ":loud_sound:", // Add logging
                ":alien:", // Update code due to external API changes
                ":globe_with_meridians:", // Internationalization and localization
                ":construction_worker:", // Add or update CI/CD pipeline
                ":building_construction:", // Make architectural changes
                ":chart_with_upwards_trend:", // Add analytics or tracking code
                ":goal_net:", // Catch errors or exceptions
                ":loudspeaker:", // Add or update announcements
            ],
        ],
    },
};
    

