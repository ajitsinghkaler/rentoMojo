# Mojo

This project was generated with Express generator

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

Keep your mongo server up and running

Add a few stories using db.stories.insertMany([{"title":"This is 1","author":"Ajit Singh","totalComments":20,"createdAt":"2019-10-06T15:24:40.842Z","updatedAt":"2019-10-06T15:24:40.842Z"},{"title":"This is 2","author":"Ajit Singh","totalComments":20,"createdAt":"2019-10-06T15:24:43.336Z","updatedAt":"2019-10-06T15:24:43.336Z"},{"title":"This is 3","author":"Ajit Singh","totalComments":20,"createdAt":"2019-10-06T15:24:44.592Z","updatedAt":"2019-10-06T15:24:44.592Z"},{"title":"This is 4","author":"Ajit Singh","totalComments":20,"createdAt":"2019-10-06T15:24:45.432Z","updatedAt":"2019-10-06T15:24:45.432Z",}]) in mongo shell


## Things left to do

Adding Unit Tests

Adding Stories

Editing Stories

In delete db santity is not maintained

Cors for specific urldevelopment

Username check in delete and editing comments
(Add req.user.username = (comment.author from db) check)

Mongo used in old way
