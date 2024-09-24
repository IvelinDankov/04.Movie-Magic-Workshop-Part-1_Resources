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
