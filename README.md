# Chrome extension react starter kit
This repo is a starter kit for chrome extension using React tech stack. It includes demo code for popup, content script and backgroud pages of the demo extension.

The content script will display a fixed top header in red background color for all webpages. 

## Pros
1. Automatically chrome extension auto reload when code changes
2. Automatically web page refresh for current tab (For content script development)
3. Write code with latest frontend techs, code will be transpiled with [webpack](https://webpack.js.org/)
4. Sourcemap enabled for easy debugging
5. Leverage [React-jss](https://github.com/cssinjs/react-jss) to avoid style confliction between webpage and extension
6. Eslint enabled

## Get Started
1. `$ yarn install`
2. `$ yarn start` to start webpack dev server
3. Load unpacked extension: Open chrome browser -> chrome://extensions -> Load unpacked
4. Replace `%YOUR_UNPACKED_EXTENSION_ID%` in `./src/dev/index.html` with the new loaded extensionId
5. Change code in `./src/background`, `./src/content-script`, `./src/popup` based on your business logic
6. The webpack dev server is configable in webpack.config.js

## For production
For production build, you probably want to change the manifest.json, such as: 
1. Remove "externally_connectable" (this field is be added for extension auto reload)
2. Change the sourcemap config
3. exclude unnecesssary dev code

## License
MIT
