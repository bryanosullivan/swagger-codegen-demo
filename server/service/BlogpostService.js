'use strict';


/**
 * Add a blog post
 *
 * body BlogPost New blog post
 * returns BlogPost
 **/
exports.addBlogPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "title" : "My Blog Post",
  "body" : "This is my blog about Swagger"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a blog post
 * 
 *
 * id Long ID of the blog post to delete
 * no response value expected for this operation
 **/
exports.deleteBlogPost = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find blog post by ID
 * Returns a single blog post
 *
 * id Long ID of blog post to return
 * returns BlogPost
 **/
exports.getBlogPostById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "title" : "My Blog Post",
  "body" : "This is my blog about Swagger"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing blog post
 *
 * body BlogPost Blog post object to be updated
 * no response value expected for this operation
 **/
exports.updateBlogPost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

