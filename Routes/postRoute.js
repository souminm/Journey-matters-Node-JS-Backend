const express = require('express');
const post_route = express();
const cors = require('cors');
const bodyParser = require('body-parser');
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended:true}));
post_route.use(express.static('public'));

const postController = require('../Controllers/PostController');

post_route.post('/create-listing',postController.createPost);
post_route.get('/get-listing',postController.getListings);
post_route.use(cors({ origin: true }));

module.exports = post_route; 