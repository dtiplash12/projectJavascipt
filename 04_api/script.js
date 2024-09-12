
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  

 filterButtons.forEach( (button) => {
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            console.log(e);
            const filter = e.target.dataset.filter

            portfolioItems.forEach( (item) => {
                if(filter === 'all'){
                    item.style.display = 'block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                }
            })
        })
 })


   /* filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add active class to clicked button
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter');
  
        // Show all items if "All" is selected
        portfolioItems.forEach(item => {
          if (filter === 'all') {
            item.classList.add('show');
          } else {
            // Show the items that match the filter
            if (item.classList.contains(filter)) {
              item.classList.add('show');
            } else {
              item.classList.remove('show');
            }
          }
        });
      });
    });*/
  


    // Initially show all items
    portfolioItems.forEach(item => item.classList.add('show'));
  });
  