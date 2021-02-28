# Live Demo
checkout the deployed frontend app: [Makespace Frontend](http://makespace.canadacentral.azurecontainer.io)


checkout the deployed api swagger: [Makespace Api](http://20.151.29.24:8080/api-docs/)

# Design
## Overall architecture

![image](https://user-images.githubusercontent.com/27816290/109424278-0d0c1500-79b1-11eb-8324-19bacf56c3f0.png)

## Frontend architecture
![image](https://user-images.githubusercontent.com/27816290/109424304-257c2f80-79b1-11eb-8216-a8e44fdf1718.png)

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
