const generateMemeButton = document.querySelector('.generate-meme-btn');
const  memeTitle = document.querySelector('.meme-generator .meme-title')
const  memeImage = document.querySelector('.meme-generator img')
const  memeAuthor = document.querySelector('.meme-generator .meme-author')


const updateMeme = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innnerHTML = title;
    memeAuthor.innerHTML = author;
} 

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then( (response) => response.json() ).then( (data) => {
        updateMeme(data.url, data.title, data.author)
    })
}

generateMemeButton.addEventListener("click", generateMeme)

generateMeme()