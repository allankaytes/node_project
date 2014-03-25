
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.data = function(req, res){
  var data = {
    foo: 'bar',
    more: 'data'
  };

  res.writeHead(200, {
    'Content-Type': 'text/json' });
  res.end(JSON.stringify(data));
};