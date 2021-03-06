# Sector Catalog
## Getting started for users
You can use directly via [demo](https://sectorcatalog.4brokers.be)

## Getting started for developers
- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/openSource4Brokers/sectorcatalog.git`.
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app
- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app
- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap`

## styles.css
For use of bootstrap, add into styles.css:
```
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

## Important2: web.config
To prevent errors when the client refreshes a page, building for Microsoft IIS hosting needs installing web.config. Save a copy of this file inside your src directory:
```
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
    </staticContent>
  </system.webServer>
</configuration>
```
Do not forget to mention the location of web.config in angular.json "assets" when building: 
```
"assets": [... , "src/web.config"],
```