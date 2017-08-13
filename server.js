var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
 article_one: { `<html>
    <title>article_one</title>
<body>
    <div>
        <a href='/'>Home</a>
    </div>
<h1 align="center"> Personal Information</h1>
<h1 align="center"> My name is Kartik Rao. I am pursuing chemical engineering <br />  @ <br /> Anurag Group Of insitutions</h1>
<ol>
<li> 1st year 76%</li>
<li>2nd year 72%</li> 
<li>3d year 66%</li>
</ol>
</body>
</html>
    

};
 
  article_two: {
     <html>
<title>Chemical Engineering</title>
<body>
    <meta name="viewport" content="width=device-width, initial scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
     
    <div class="container">
    <div>
        <a href="/">Freak</a>
        <a href="/ui/madi.png">Logo</a>
    </div>
<h1 align="center"> Chemical Engineering Subjects</h1>

<ul>
<li>CPC</li>
<li>HT</li>
<li>MTO</li>
<li>CET</li>
<li>MUO</li>
<h1>Chem engg life got hecked up</h1>
</ul>
</div>
</body>
</html>
 }

 };
 

function createtemplate(data){
    var title= data.title;
    var content= data.content;

 var htmltemplate=
`<html>
 ${title};
<body>
    <div>
      <a href='/'>Home</a>
    </div>
<h1 align="center"> Personal Information</h1>
<h1 align="center"> My name is Kartik Rao. I am pursuing chemical engineering <br />  @ <br /> Anurag Group Of insitutions</h1>
${content};
</body>
</html>`

;return htmltemplate;}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req,res) {
res.sendFile(createtemplate[articles[articleName]));
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
