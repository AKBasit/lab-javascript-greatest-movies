// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie)=>{
        return movie.director;
    });
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter((eachMovie)=>{
        return eachMovie.director === "Steven Spielberg" & eachMovie.genre.includes("Drama")
    })
    return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    } else{
        const scoresum = moviesArray.map((eachMovie)=>{
            return eachMovie.score || 0
        }).reduce((acc, movieScore)=>{
            return acc + movieScore
        }, 0)
        return Math.round(scoresum/moviesArray.length * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.map((eachMovie)=>{
        return eachMovie.genre.includes("Drama")
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearAsc = moviesArray.sort((a, b) =>{
        const nameA = a.year;
        const nameB = b.year
        if(nameA > nameB){
            return 1;
        }else if (nameA < nameB) {
            return -1;
        } else {
            return 0;
        }
    })

    const originalMovieArr = yearAsc.slice()
    return originalMovieArr;
}
// Solution

// function orderByYear(moviesArray) {
    const copyArray = [...moviesArray]
    const sortedMovies = copyArray.sort((a, b)=>{
        if(a.year < b.year){
            return 1
        } else if (a.year > b.year){
            return -1
        } else {
            if(a.title < b.title){
                return -1
            }
        }
    })


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleOnly = moviesArray.map((eachMovie)=>{
        return eachMovie.title
    }).sort((a, b)=>{
        if (a < b){
            return -1
        } else if(a < b){
            return 1
        } else {
            return 0
        }
    }).slice(0, 20)
    return titleOnly
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
