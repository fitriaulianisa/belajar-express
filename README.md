# belajar-express
- ejs: res.render
- bin/www untuk tambahin:
// menambahkan log untuk URL di console
console.log(`Server is running on http://localhost:${port}`); dibagian bawah 

di terminal:
- npm install -g express-generator (38)
- express --view=ejs semangat-app
- npm install --save-dev nodemon
- npm install express-ejs-layouts
- npm install mongoose

di app.js:
- const expressLayout = require("express-ejs-layouts");
- app.use(expressLayout);
- app.set('views', path.join(__dirname,'app_server', 'views'));
- var indexRouter = require('./app_server/routes/index');
- var usersRouter = require('./app_server/routes/users');
- 
