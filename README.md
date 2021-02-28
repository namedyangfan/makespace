# Live Demo
checkout the deployed frontend app: [Makespace Frontend](http://makespace.canadacentral.azurecontainer.io)


checkout the deployed api swagger: [Makespace Api](http://20.151.29.24:8080/api-docs/)

# Design
## Overall architecture
<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/27K1domKbkeyXC9W85BgGm@LUSUr8hW5n5fziD5v7"></iframe>

## Frontend architecture
<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/56jyeze3FAwH42GufCJm1M@2Ux7TurymN6B6HaNkTLB"></iframe>

## Run app locally

### First: start the backend server
Git repo for the backend server [makespace api](https://github.com/namedyangfan/makespaceApi) to view it in the browser.
```
git clone git@github.com:namedyangfan/makespaceApi.git
cd makespaceApi
npm i
npm start
```
Open [http://localhost:8080/api-docs](http://localhost:8080/api-docs) to view the swagger documentation.

### Second: start this react app
```
git clone git@github.com:namedyangfan/makespaceReact.git
cd makespaceReact
npm i
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## Key Packages
 - Redux: state management
 - Reacter Router: switch between different pages
 - React Bootstrap
 - Axios: api request 

## Future Implementation
  - User authentication
  - Error handling and loading page
  - Tips and explanation  (to increase convergent rate)
  - Navigation to switch between storage plan page and checkout
  - Connect to the checkout api
  - CDN for caching the image returned from Blob Storage