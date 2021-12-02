<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="youtubeCont">
        <div class="container">
          <WrapTitle name1="Movie" name2="reference" />
          <div class="youtube__cont">
            <form @submit.prevent="SearchMovies()">
              <div class="search">
                <label for="search" class="sr-only">검색하기</label>
                <input
                  type="search"
                  id="search"
                  placeholder="검색하기"
                  v-model="search"
                />
                <button type="submit" value="search">검색</button>
              </div>
              <div class="youtube">
                <div v-for="movie in movies" :key="movie.id.videoId">
                  <a href="">
                    <img
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
                      "
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ContInfo />
      </section>
      <!-- //aboutCont -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WrapTitle from '@/components/WrapTitle.vue';
import ContInfo from '@/components/ContInfo.vue';
import { ref } from 'vue';

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
    ContInfo,
  },

  setup() {
    const search = ref('');
    const movies = ref([]);
    //const youtubeAPI = process.env.VUE_APP_YOUTUBE_KEY;

    const SearchMovies = () => {
      if (search.value != '') {
        fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=9278d13f704ad0fe53c2263b692efd89&language=en-US&page=1`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            search.value = '';
            console.log(data.results);
          })
          .catch((error) => console.log('error', error));
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
.youtube__cont {
  .youtube {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 200px;

    div {
      flex: 0 0 19%;

      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-family: 'SCoreDream';
        margin: 10px 0 50px;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    input {
      flex: 0 0 79%;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #000;
      font-family: 'SCoreDream';
      padding: 15px 10px;
      outline: #000;
      color: #000;

      &::placeholder {
        color: #000;
      }
    }
    button {
      flex: 0 0 20%;
      font-family: 'SCoreDream';
      background: #000;
      border: 1px solid #000;
      color: #fff;
    }
  }
}
</style>
