fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById('results-container');
    
    data.forEach(item => {
      const category = item.category;
      const score = item.score;
      const icon = item.icon;

      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('row', category.toLowerCase());

      const leftDiv = document.createElement('div');
      leftDiv.classList.add('row-name-icon', category.toLowerCase());
      leftDiv.innerHTML = `<img src="${icon}" alt="" class="icon">${category}`;
      categoryDiv.appendChild(leftDiv);

      const rightDiv = document.createElement('div');
      rightDiv.classList.add('row-result');
      rightDiv.innerHTML = `<span>${score}</span><span> / 100</span>`;
      categoryDiv.appendChild(rightDiv);


      resultsContainer.appendChild(categoryDiv);
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors du chargement du JSON :', error);
  });