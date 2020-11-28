.env 

```
HOST=0.0.0.0
PORT=8080
MONGO_URL=mongodb+srv:??
LOG_DIR=??
UPLOAD_DIR=???
```




```
mkdir restful-server
cd restful-server
restful-server npm init -y
```

global packages

``` 
    npm install nodemon -g
    npm install pm2 -g 



    npm install express


    npm install dotenv

    mongodb driver for node.js

    npm install mongodb

    ORM - Something similar to entity

    npm install mongoose 


    to log app specific errors

    npm install winston


    access log, apache access log, who made call, ip, method, time of the call,, headers....
    using morgon


    npm install morgan


    npm install multer


    node src/server.js

    npm start


```

node.js 
 using google v8 - browser engine
 doesn't support import completely
 using babel shall fix this issue


-- 

node.js api 

GET    /favorites
DELETE     /favotites/:favId
POST /favorites

models
    Favorite.js 
controllers
    favorite.controller.js
services
    favorite.service.js
routers
    favorite.router.js
import router into app/index.js

--

React
    screens
        FavoriteList.js
                remove from fav
    containers
        FavoriteList.js
Stack Navigator
        add Fav

