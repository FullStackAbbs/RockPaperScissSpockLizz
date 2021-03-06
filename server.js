const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/calculateWinner') {
    if('playerChoice' in params){
       let pick = Math.ceil(Math.random()*2)
       let headsOrTails;
       if (pick === 1){
       headsOrTails = "heads"
       }else{
        headsOrTails ="tails"
       }
       let response;
       if(params['playerChoice']===headsOrTails){
       response = true
       }else{
       response = false
       }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(response));
    }
  }else if(page == '/css/style.css'){
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }else{
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    };
})
  server.listen(8000);
