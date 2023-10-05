Make sure you have mysql running on localhost or use a cloud provider

Install all the server/client npm packages npm install --save

Running the app 
client = npm start 
server = nodemon server.js

my mysql db name is todo_db

create table todo_list (id int primary key AUTO_INCREMENT,name varchar(255),
priority varchar(255)  , todo varchar(255));