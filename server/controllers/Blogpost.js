'use strict';

var utils = require('../utils/writer.js');
var Blogpost = require('../service/BlogpostService');

module.exports.addBlogPost = function addBlogPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  Blogpost.addBlogPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBlogPost = function deleteBlogPost (req, res, next) {
  var id = req.swagger.params['id'].value;
  Blogpost.deleteBlogPost(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBlogPostById = function getBlogPostById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Blogpost.getBlogPostById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBlogPost = function updateBlogPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  Blogpost.updateBlogPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
