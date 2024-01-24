// Excercise 1 - Modify the addCard function from the previous slide so that you can pass the content for the card dynamically.

function addCard(cardTitle, cardText) {
    // Clone the template
    const template = document.getElementById("card-template").content.cloneNode(true);
  
    // Populate the template with dynamic content
    template.querySelector('.card-title').innerText = cardTitle;
    template.querySelector('.card-text').innerText = cardText;
  
    // Include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
  }
  
  // Call addCard with dynamic content
  addCard('Dynamic Card Title', 'This is a dynamically created card.');
  
// Excercise 2: Call addCard repeatedly so that your cards are automatically generated based on data from an array. This way you will create as many cards as you need to display all the data in the array.
const data = [
    { name: 'bob', age: 23 },
    { name: 'alice', age: 39 }
  ];
  
  function addCard(cardData) {
    // Clone the template
    const template = document.getElementById("card-template").content.cloneNode(true);
  
    // Populate the template with dynamic content from the cardData object
    template.querySelector('.card-title').innerText = cardData.name;
    template.querySelector('.card-text').innerText = `Age: ${cardData.age}`;
  
    // Include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
  }
  
  // Call addCard for each object in the data array
  data.forEach(card => {
    addCard(card);
  });
  

  // Excercise 3: Generate multiple templates and populate the page dynamically. Create an artist profile card and generate cards representing the items in an artist's portfolio.
  const artist = {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
      },
      {
        title: "sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
      },
    ]
  };
  
  function addArtistCard(artist) {
    // Clone the template
    const template = document.getElementById("artist-card-template").content.cloneNode(true);
  
    // Populate the artist name in the template
    template.querySelector('.artist-name').innerText = artist.name;
  
    // Create and append portfolio cards for each item in the artist's portfolio
    const portfolioContainer = template.querySelector('.portfolio-container');
    artist.portfolio.forEach(item => {
      const portfolioTemplate = document.getElementById("portfolio-item-template").content.cloneNode(true);
      portfolioTemplate.querySelector('.portfolio-title').innerText = item.title;
      portfolioTemplate.querySelector('.portfolio-image').src = item.url;
      portfolioContainer.appendChild(portfolioTemplate);
    });
  
    // Include the populated artist card into the page
    document.querySelector('#artist-list').appendChild(template);
  }
  
  // Call addArtistCard for the artist object
  addArtistCard(artist);
  