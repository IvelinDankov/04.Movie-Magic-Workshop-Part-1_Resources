## Steps

1. Make file git ignore and install new project 
2. Install all bibliothecas.
3. Make all folder and files views and layouts and files index.hbs, main.hbs this is main layout. 
4. Add static folder and clear all src paths.
5. Render HomePage with all css files. 
6. Creating partial folder for each movie
    - Routes 
7. Making controllers start with homeController
8. Import Router from express and add to home route after that import homeController. 
9. Create routes.js file in src and import router from express and homeController from controllers in the end export router import router in index.js and use in app.use(router);
10. In homeController copy router and get statement and render about page. This page put into home. 
11. Start partials .. in homeController make movies array to put all movies. 
12. go to index.hbs and put all title, imageUrl, description, genre, with handlebars syntax. Don't forget to render object movies in homeController. 
13. Let's go back to partial template. - creating in views folder another folder partials and movie.hbs as a partial.
14. cut partial and put in movie.hbs. How to use it? Just write {{>movie}} 'partial name'. 
15. Add new layer 3-layer architecture. 
* controllers 
* services
* data layers
16. Creating folder Service and inside file movieService.js take all movies from homeController and put it to movieService.js this will not be last destination for movies. Insert movies in homeController
17. Start fs process .. creating folder data inside movieData.js in src folder creating db.json all movies will be save into it. 
18. In movieData make some function for reading and writing., import at first fs/promises - import as well path, after in fun getAllMovies take all json movies 
this happen with path.release() give path to json file and then with fs.readFile read this file and return JSON parse this data. /not well clear / export get movies in an object. 
19. import all in movesServices as movieData import and give it to movieData.getMovies()
20. flow of 3 layer architecture first req.. go to. router.. go to. homeController.. go to. movieService.. go to. movieData. 
21. Let' go to create page. 

