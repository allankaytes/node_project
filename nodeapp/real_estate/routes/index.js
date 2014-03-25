/*
 * GET home page.
 */
fs = require('fs');
_ = require('underscore');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.randomName = function(req, res){
  res.render('index', { title: 'Exprkjhkjjess' });
};

exports.fileupload = function(req, res){
  fs.rename(req.files['file-input'].path, 
            req.app.get('imageStorage') + req.files['file-input'].originalFilename,
            function (err) {
    if (err) return console.log(err);
    res.redirect('/pictures');
  });
};

exports.listing_pictures = function(req, res){
  // get a list of the images
  // maybe use this: http://nodejs.org/api/path.html
  
  fs.readdir(req.app.get('imageStorage'), function(err, files) {
    if (err) throw err;
    var images = _.filter(files, function(file) {
      var firstChar = file.charAt(0);
      return firstChar != '.';
    });
    res.render('listing_pictures',
      { 
        title: 'Pictures',
        images: images
      });
  });
};
