const axios = require('axios');
const htmlToText = require('html-to-text');
const showdown = require('showdown');
const converter = new showdown.Converter();
require('dotenv').config();

module.exports = axios.get((`${process.env.HOST}/articles`))
  .then(function (response) {
 
    // console.log(date)
    var articlesArray = [];
    response.data.forEach(data => {
      var artObj = {
        id: data.id,
        title: data.title,
        content: converter.makeHtml(data.content),
        summary: htmlToText.fromString(converter.makeHtml(data.content)).substring(0, 100),
        img: process.env.HOST + data.image.url,
        slug: data.slug,
        categories: data.categories,
        imgName: data.image.name,
        created: created(data.created_at)
      };
      articlesArray.unshift(artObj);
    });
    
    return articlesArray;

    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});


function created(time) {
  
    var d = new Date(time);
    var date = `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()} at ${d.getUTCHours()}:${d.getUTCMinutes()}`
    console.log(date);
    return date;
}

