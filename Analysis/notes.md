#### TS Project Setup 


- https://ultimatecourses.com/blog/setup-typescript-nodejs-express
- https://medium.com/@kesavan.keshav/mastering-advanced-concepts-in-node-js-with-typescript-and-express-framework-part-1-1a06300af58

- https://dev.to/he110/typescript-advanced-project-setup-4l04
- https://khalilstemmler.com/blogs/typescript/node-starter-project/ 

#### Eslint 
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ]
}


####  Paths
```
        "baseUrl": ".",
        "paths": {
            "$controller": ["./src/controller"],
            "$helper": ["./src/helper"],
            "$assets/*": ["./src/assets/*"],
            "$assets": ["./src/assets"],
            "$data": ["./src/data"],
            "$logs": ["./src/log"],
            "$middleware": ["./src/middleware"],
            "$model": ["./src/model"],
            "$npmModules": ["./src/npmModules"],
            "$router": ["./src/router"],
            "$services": ["./src/service"],
            "$utils": ["./src/utils"],
            "$reqSchema": ["./src/validationSchema"],
            "$lib": ["./src/lib"],
            "$src/*": ["./src/*"],
            "$static/*": ["./static/*"],
            "$root/*": ["./*"]
        }
```