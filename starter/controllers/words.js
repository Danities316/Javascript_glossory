const Words = require('../models/words');

const getAllWordsStatic = async (req, res) =>{
    const words = await Words.find({
        words: 'words'
    });
    res.status(200).json({words, nbHits: words.length });
};

const getAllWords = async (req, res) =>{
    const { word } = req.query;
    const queryObj = {};

    if(words){
        queryObj.words = words ==='true'? true : false;
    };

    console.log(queryObj);
    const words = await Words.find(queryObj);
    res.status(200).json({words, nbHits: words.length })
};


module.exports = {
    getAllWords,
    getAllWordsStatic,
}

