const apiKey = "a661f32ec6ee4fa7a236d3ea4a63b62c"
const blogContainer = document.getElementById('blog-container')
const inputText  = document.getElementById('inputText')
const buttonSearch = document.getElementById('buttonSearch')


buttonSearch.addEventListener('click', async () =>{
    const query = inputText.value.trim()
    if (query !== ''){
        try {
            const articles = await fetchNewsQuery(query);
            displayBlog(articles);
        } catch (error) {
            console.error('Error fetching query on search : ', error);
            
        }
    }
   
})
async function fetchNewsQuery(query){
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`
        const respose = await fetch(apiUrl);
        const data = await respose.json();
        console.log(data);
        return data.articles

    } catch (error) {
        console.error('Error fetching data : ', error);
        return []
    }
}

 async function fetchRandomnews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
        const respose = await fetch(apiUrl);
        const data = await respose.json();
        console.log(data);
        return data.articles

    } catch (error) {
        console.error('Error fetching data : ', error);
        return []
    }
}



function displayBlog(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add('cart-item');
        const img= document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h3");
        const trunatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = trunatedTitle;
        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', () =>{
            window.open(article.url, "_blank")
        })

        blogContainer.appendChild(blogCard)

    });
}



(async () =>{
    try {
       const articles =  await fetchRandomnews()
       displayBlog(articles);
       
    } catch (error) {
        console.error('Error fetching data : ', error);
    }
})();