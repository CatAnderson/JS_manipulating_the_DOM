document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const saveForm = document.querySelector('#new-movie-form')
    saveForm.addEventListener('submit',handleSave)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll)

});

const handleSave = function(event){
    event.preventDefault();

    //make new list item with h2, h3 & p in this.
    const newMovieListItem = document.createElement('li');
    const titleInput = document.createElement('h2');
    const releaseDateInput = document.createElement('h3');
    const genreInput = document.createElement('p');
    const seenInput = document.createElement('h3')

    // console.dir(event)

    //append this to the ul already in the html
    newMovieListItem.appendChild(titleInput);
    newMovieListItem.appendChild(releaseDateInput);
    newMovieListItem.appendChild(genreInput);
    newMovieListItem.appendChild(seenInput)


    //create movieList
    const movieList = document.querySelector('#movie-list');


    //grab values from the form and put them in the list.
    // newMovieListItem.className = "movie-item"
    newMovieListItem.classList.add("movie-item")
    titleInput.textContent = this.title.value;
    releaseDateInput.textContent = this.date.value;
    genreInput.textContent = this.genre.value;
    seenInput.textContent = this.seen.value;


    //append the values to the movieList.
    movieList.appendChild(newMovieListItem);

    event.target.reset();
};

const handleDeleteAll = function(){
    const movieList = document.querySelector('#movie-list');
  movieList.innerHTML = '';
};
