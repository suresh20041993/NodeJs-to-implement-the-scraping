var express = require('express');
var router = express.Router();
var request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');


router.get('/categorylist', function(req, res){

    const url = 'https://www.shakedeal.com/all-categories';
  
  axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html)
      const statsTable = $('.all_cat > div');
      const categoriesList = [];
  
      statsTable.each(function () {
        const categories = $(this).find(' > a > b').text();
        const categories_url = $(this).find(' > a').attr('href');
  
  
        categoriesList.push({
          categories,
          categories_url
        });
      });
  
      console.log(categoriesList);
      res.json(categoriesList);
    })
    .catch(console.error);
 })

 router.post('/productlist', function(req, res){

    var obj = req.body;
    const url = req.body.url;
  
    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.grid-list > div');
        const productList = [];
    
        statsTable.each(function () {
          const brand = $(this).find(' > div > form .top-part .brand > span').text();
          const price = $(this).find(' > div > form .top-part .prices-ratting .prices .new-price > span .ty-price .sd_price').text();
          const product_image = $(this).find(' > div > form .ty-grid-list__image  > a >img').attr('data-src');
          const product_name = $(this).find(' > div > form .top-part  > a ').text();
          const product_url= $(this).find(' > div > form .top-part  > a ').attr('href');
          const product_mrp = $(this).find(' > div > form .top-part .prices-ratting .prices .new-price > span .ty-price .sd_price').text();
    
    
          productList.push({
            brand,
            price,
            product_image,
            product_name,
            product_url,
            product_mrp

          });
        });
    

        res.json(productList);
      })
      .catch(console.error);
  
  })



module.exports = router;
