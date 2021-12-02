<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt3896198">
        <div class="img"></div>
        <div class="desc">
          프리티어(Prettier)는 코드 스타일을 정리해주는 도구입니다. ESLint와
          함께 사용하면 좀 더 개인 취향에 맞는 코드 스타일로 전체 코드를 정리할
          수 있습니다. VSCode(Visual Studio Code), Atom, Sublime 등 대중적인
          텍스트 편집기에서 이미 플러그인 형태로 지원하고 있으며 VSCode에서는
          아래와 같이 확장 플러그인으로 설치할 수 있습니다.
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />

      <div class="movies-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
          <router-link to="'/movie/' + movie.imdbID" class="movie-link">
            <div class="product-image">
              <img :src="movie.Poster" alt="Movie.poster" />
              <div class="type">{{ movie.Type }}</div>
            </div>
            <div class="detail">
              <p>{{ movie.Year }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        //console.log(search.value);
        fetch(
          "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            movies.value = data.Search;
            search.value = "";
            console.log(movies.value);
          });
      }
    };

    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss">
.img {
  width: 500px;
  height: 500px;
  background: #ccc;
  margin: 0 auto;
}
.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    &[type="text"] {
      width: 100%;
      color: #fff;
      background: #496583;
      font-size: 20px;
      padding: 10px 20px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;

      &::placeholder {
        color: #f3f3f3;
      }
      &:focus {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
    &[type="submit"] {
      width: 100%;
      max-width: 300px;
      background: #42b883;
      padding: 16px;
      border-radius: 8px;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4;
    }
  }
}
</style>
