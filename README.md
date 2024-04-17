# NODE TYPESCRIPT MONGO MOCHA AND CHAI STEP BY STEP

## PROJECT STRUCTURE

![image](https://github.com/key-joshua/mocha-chai-node-typescript-server/assets/38179232/969a257d-d4d6-49fe-b26f-9086348dd2e5)


## SETUP NODEJS SERVER WITH TYPESCRIPT

- Create folder name
- Insert into created folder
- Run this command `npm init -y`
- Run this command `npm i`
- Run this command `npm i express typescript @types/express`
- Run this command `npm i ts-node-dev @types/node`
- Add this script in package.json `"dev": "tsnd --respawn ./src/index"`
- Test server by running `npm run dev`

## SETUP TESTS WITH MOCHA AND CHAI

- Create folder name (test) inside specific module
- Create file inside test (comment.spec.ts)
- Run this command `tsc --init`
- Run this command `npm i --save-dev ts-node chai-http chai @types/chai mocha @types/mocha`
- Add this script in package.json ` "test": "mocha --require ts-node/register 'src/modules/**/*.spec.ts' --timeout 300000 --exit"`
- Test tests by running `npm run test`

## SETUP COVERAGE TESTS WITH NYC

- Run this command `npm i  --save-dev nyc @istanbuljs/nyc-config-typescript`
- Add this JSON script below in package.json by configure coverage

````JSON
"nyc": {
  "extends": "@istanbuljs/nyc-config-typescript",
  "check-coverage": true,
  "all": true,
  "include": [
    "src/**/!(*.test.*).[tj]s?(x)"
  ],
  "exclude": [
    "src/_tests_/**/*.*",
    "src/database/**/*.*"
  ],
  "reporter": [
    "html",
    "lcov",
    "text",
    "text-summary"
  ],
  "report-dir": "coverage",
  "lines": 40
}
````
- Add this script in package.json ```"coverage": "nyc mocha --require ts-node/register 'src/modules/**/*.spec.ts' --timeout 300000 --exit"```
- Test tests by running `npm run coverage`


### GETTING DIFFICULTIES TO RUN TESTS
- Any blocker: [Guide](https://stackoverflow.com/questions/71893906/run-mocha-with-typescript-throws-typeerror-err-unknown-file-extension-unknow)
