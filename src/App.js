/* eslint-disable */

import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from './components/Header';
import './App.css'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //filtrando apenas os filmes originais netflix
      let originals = list.filter(i => i.slug === 'originals');
      // gerando um numero aleatorio de acordo com o objeto de filmes originais
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      // pegando um filme aleatorio a partir do numero randomico
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      //console.log(originals, randomChosen, chosen, chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists"> 
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <span role="img" aria-label="coracao">❤</span> React Developer Diego Tauchert - Projeto com finalidade de estudo<br />
        Direito de Imagens para Netflix<br />
        Dados pegos do site themoviedb.org
      </footer>

      {movieList.length <= 0 && 
      <div className="loading">
        <img src="https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando" />
      </div>
      }
      
    </div>
  );
};
