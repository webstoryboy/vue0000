import React, {useState, useEffect} from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import MoviesList from '../info/MoviesList';
import MoviesSearch from '../info/MoviesSearch';

function Script(){
    //let movie = "영화 목록";
    //useState("영화 목록"); [a,b]
    //[a,b] = [10, 100]
    const [movies, setMovie] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    const getMovieRequest = async () => {
        const url = "http://www.omdbapi.com/?s=starwars&apikey=23604196";

        const response = await fetch(url);
        const responsJson = await response.json();

        console.log(responsJson);
        setMovie(responsJson.Search);
    }

    useEffect(() => {
        getMovieRequest();
    }, [])

    return (
        <div>
            <Header />
            <Contents>
                <section id="scriptCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>Script</strong><em>Reference</em></h2>
                        </div>
                        <div className="script__cont">
                            <MoviesSearch search={search} />
                            <MoviesList movies={movies} />
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Script;