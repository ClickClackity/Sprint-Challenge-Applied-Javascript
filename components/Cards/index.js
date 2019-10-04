// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const createCard = (title, authImg, authName) => {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        authorIC = document.createElement('div'),
        authI = document.createElement('img'),
        authN = document.createElement('span');
    //
    headline.textContent = title;
    authI.src = authImg;
    authN.textContent = authName;
    //
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authorIC.classList.add('authorIC');
    //
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(authorIC);
    authorIC.appendChild(authI);
    author.appendChild(authN);
    //
    document.querySelector('.cards-container').appendChild(card);
};


axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    for (a in response.data.articles) {
        response.data.articles[a].forEach(article => {
            createCard(article["headline"], article.authImg, article.authName);
        });
    }
}).catch(error => {
    console.log(`Error: ${error}`);
});