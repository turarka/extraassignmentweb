const message = document.getElementById("message")

//let theMostFrequentWord;
//let numberOfWordsInTheMessage = 0;


//console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
//console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)

const randomPhrases = ['A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey', 'We must all face the choice between what is right and what is easy. (c) Albus Dumbledore','You are a wizard, Harry (c) Hagrid'];

const randomPictures = ['https://pbs.twimg.com/media/EDOLVnWVAAAsPjL.jpg','https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg','https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg'];


function newQuote(){
	var randomQuotenumber = Math.floor(Math.random()*(randomPhrases.length));
	document.getElementById('phrase').innerHTML=randomPhrases[randomQuotenumber];
	document.getElementById('picture').src=randomPictures[randomQuotenumber];
	var array = message.split(' ');
	document.write(array[2]);
}