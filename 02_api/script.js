const accessKey = "43e1WSr1eaVfgPpKhjz2-hnLi9tB-328B0t7PJXKKak";

const blogContainer = document.getElementById('blog-container')
const formEl = document.querySelector('form')
const inputText  = document.getElementById('inputText')
// const buttonSearch = document.getElementById('buttonSearch')
const showmore = document.getElementById('showmore')


let inputData = '';
let pageNumber = 1;

async function searchImage(){
    inputData = inputText.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputData}&client_id=${accessKey}`
    
    const response = await fetch(url)
     const data = await response.json();

     const results =  data.results;
     console.log(results);
     
      if(pageNumber === 1){
        blogContainer.innerHTML = '';
      }
      results.map( (result) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add('cart-item');
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target =  "_blank";
        imageLink.textContent = result.alt_description;

        blogCard.appendChild(img);
        blogCard.appendChild(imageLink)
        blogContainer.appendChild(blogCard)
      })
      pageNumber ++

      if (pageNumber > 1){
        showmore.style.display = "block"
      }
}

formEl.addEventListener('submit', (e) =>{
     e.preventDefault();
     pageNumber = 1;
    searchImage()
})
showmore.addEventListener('click', () =>{
    searchImage()
})