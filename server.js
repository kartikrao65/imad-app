var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 article-one: {
     title: 'Article one|kartik rao',
     heading: 'article one',
     date: 'aug 9, 2017',
     content:
     ` <p>
                   New article,New article,New article,New article,New article,New article,New article,New article,New article,New articl e,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article,New article
               </p>`,
    
},
 article-two: {
    title: 'Article two|kartik rao',
     heading: 'article two',
     date: 'aug 9, 2017',
     content:
     ` <p>
                   Article two content
               </p>`,
    },
 article-three: {
    title: 'Article three|kartik rao',
     heading: 'article three',
     date: 'aug 8, 2018',
     content:
     ` <p>
                   This is my third article.
               </p>`,
    }
};

function createTemplate (data)
{
          var title= data.title;
          var heading= data.heading;
          var date= data.date;
          var content= data.content;
          
          
          var htmlTemplate = 
    `<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale-1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <a href='/'>home</a>
        <div class="container">
        <div>
            <h1>
                ${heading}
            </h1>
            <a href='/ui/madi.png'>Madi</a>
        </div>
          <div>
              <h3>
                  ${date}
              </h3>
          </div>
          <div>
              ${content}
          </div>
          </div>
    </body>
</html>`
;
return htmlTemplate;
}

app.get('/:article-Name', function(req, res){
var article-Name = req.params.article-Name;
    res.send(createTemplate(articles[article-Name]));
});

//app.get('/article-one',function(req,res){
  //  res.send(createTemplate(articleOne));
//});

/*app.get('/article-two',function(req,res){
res.send(createTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
res.send(createTemplate(articleThree));
});*/


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
