function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        article.classList.add("photographer_card");
        article.classList.add(id);
        

        const photograph = `
        <a href="./photographer.html?id=${id}" tabindex="0">
          <div class="photographer_img">
            <img src="${picture}" alt="">
            <h2>${name}</h2>
          </div>
        </a>
        <div class="photographer_info" tabindex="0">
          <p class="city">${city + ", " + country}</p>
          <p class="tagline">${tagline}</p>
          <p class="price">${price + "&euro;" + "/jour"}</p>
        </div>
        `;
    
        article .innerHTML = photograph;
    
        return article ;
    }
    return {id, name, portrait, city, country, tagline, getUserCardDOM }
}