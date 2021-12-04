const request = require('request-promise');
const cheerio = require('cheerio');
const link = 'https://www.vocabulary.com/lists/138436'
//h2__1Ly_Sza5xVS3yZl46_StcN
const fs = require('fs');
const writeStream = fs.createWriteStream('myFile.csv');

//Write headers for the CSV file
writeStream.write(`WORDS,DEFINITIONS \n`)

request(link, (err, res, html) =>{
    if(!err && res.statusCode == 200){
       const $ = cheerio.load(html);

       const header = $('.wordlist');
       const topicTitle = $('.word');
       const wordDefinition = $('.definition');





$('.entry').each((i, el) =>{
    const topic = $(el).find('.word').text();
    const wordDefinition =$(el).find('.definition').text();

    // Write Row to CSV
   writeStream.write(`${topic}, ${wordDefinition} \n`)
});

console.log("Scraping Done.....")

//        //This for the topic title
//              topicTitle.each((i, el) =>{
//             var title = $(el).text();
//             console.log(title);
//         })
// //This is the definitions of the words
//     wordDefinition.each((i, el)=>{
//         var word = $(el).text(); 
//          console.log(word)
//      });
    
}
})