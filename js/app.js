document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const save = document.querySelector('#new-movie-form')
    save.addEventListener('submit',handleSave)
});

const handleSave = function(event){
    event.preventDefault();

    //make new list item with h2, h3 & p in this.
    const newMovieListItem = document.createElement('li');
    const titleInput = document.createElement('h2');
    const releaseDateInput = document.createElement('h3');
    const genreInput = document.createElement('p');

    //append this to the ul already in the html
    newMovieListItem.appendChild(titleInput);
    newMovieListItem.appendChild(releaseDateInput);
    newMovieListItem.appendChild(genreInput);


    //create movieList
    //grab values from the form and put them in the list.
    //append the values to the movieList.

}
