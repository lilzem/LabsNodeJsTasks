module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": ["eslint:recommended",
        'plugin:sonarjs/recommended'
    ],
    "plugins":["sonarjs"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
