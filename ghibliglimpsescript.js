async function searchFilms() {
  const query = document.getElementById('search-bar').value.trim().toLowerCase();
  
  // Fetches the search results from the server
  const response = await fetch(`/search?q=${query}`);
  const results = await response.json();
  
  // Gets the containers for films and search results
  const filmsContainer = document.getElementById('films-container');
  const resultsContainer = document.getElementById('search-results');
  const navLinks = document.getElementById('nav-links');
  const aboutSection = document.getElementById('about-section');
  const homeSection = document.getElementById('landing-page');
  
  // Clears the previous results
  resultsContainer.innerHTML = '';

  // If the search bar is empty, the page will be restored to its normal state
  if (query === '') {
    // Show all sections
    filmsContainer.style.display = 'grid'; // Films container
    resultsContainer.style.display = 'none'; // Hide search results
    navLinks.style.display = 'flex'; // Show navbar
    aboutSection.style.display = 'block'; // Show about section
    homeSection.style.display = 'block'; // Show home section

    // Show all film cards
    const allFilmCards = filmsContainer.querySelectorAll('.film-card');
    allFilmCards.forEach(card => card.style.display = 'block');
  } else {
    // When searching, hide the films container and other sections
    filmsContainer.style.display = 'none'; // Hide films
    resultsContainer.style.display = 'grid'; // Show results container
    navLinks.style.display = 'none'; // Hide navbar
    aboutSection.style.display = 'none'; // Hide about section
    homeSection.style.display = 'none'; // Hide home section

    // Show only the search results
    if (results.length > 0) {
      results.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('film-card');
        filmCard.innerHTML = `
          <img src="${film.image_url}" alt="${film.title}">
          <h2>${film.title}</h2>
          <p><strong>Release Date:</strong> ${film.release_date}</p>
          <p class="description">${film.description}</p>
        `;
        resultsContainer.appendChild(filmCard);
      });
    } else {
      resultsContainer.innerHTML = '<p>No films found.</p>';
    }
  }
}

  // Select the hamburger menu and navbar links
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  // Add click event listener to the hamburger menu
  hamburgerMenu.addEventListener("click", function() {
    // Toggle the "active" class on the navbar links to show/hide
    navLinks.classList.toggle("active");

    // Toggle the "active" class on the hamburger menu for animation
    hamburgerMenu.classList.toggle("active");
  });






