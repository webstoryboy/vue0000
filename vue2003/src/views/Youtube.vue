<template>
  <div>
    <Header />
    <main id="main">
      <section id="youtubeCont">
        <div class="container">
          <WrapTitle name1="youtube" name2="reference" />
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
                  <a
                    :href="'https://www.youtube.com/embed/' + movie.id.videoId"
                    target="_blank"
                  >
                    <img
                      :src="movie.snippet.thumbnails.medium.url"
                      :alt="movie.snippet.title"
                    />
                    <p class="title">{{ movie.snippet.title }}</p>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ContInfo />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import WrapTitle from "@/components/WrapTitle.vue";
import ContInfo from "@/components/ContInfo.vue";
import { ref } from "vue";

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
    ContInfo,
  },

  setup() {
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${search.value}&type=video&key=AIzaSyAuTqa0-EWmo7QcS0lDxPVE45QJSRE1pp0`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.items;
            search.value = "";
            console.log(data.items);
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
#youtubeCont {
  background-color: #000;
  color: #fff;
  padding-bottom: 400px;
  font-family: "SCoreDream";
}
.youtube__cont {
  color: #fff;

  h2 {
    border-bottom: 1px solid #fff;
    margin-bottom: 40px;
  }
  .youtube {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      flex: 0 0 24%;
      margin-bottom: 2%;

      .title {
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    input {
      flex: 0 0 79%;
      background: transparent;
      border: 0;
      color: #fff;
      border: 1px solid #fff;
      font-family: "SCoreDream";
      padding: 5px 10px;
      outline: #fff;

      &::placeholder {
        color: #fff;
      }
    }
    button {
      flex: 0 0 20%;
      border: 0;
      font-family: "SCoreDream";
      background: #fff;
      padding: 10px;
    }
  }
}
</style>
