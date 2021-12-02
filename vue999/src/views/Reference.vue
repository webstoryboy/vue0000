<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="referCont">
        <div class="container">
          <WrapTitle name1="reference" name2="book" />
          <div class="refer__cont">
            <div class="table">
              <h3>HTML</h3>
              <ul>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
                <li>
                  <a href="referDetail.html">
                    <span class="num">1</span>
                    <span class="attr">&lt;a&gt;</span>
                    <span class="desc"
                      >&lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.</span
                    >
                    <span class="Inline">Inline Element</span>
                  </a>
                </li>
              </ul>
            </div>
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
import WrapTitle from '../components/WrapTitle.vue';
import ContInfo from '../components/ContInfo.vue';

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
    ContInfo,
  },
};
</script>

<style lang="scss">
#referCont {
  background-color: #000;
  color: #fff;
}
.refer__cont {
  padding-bottom: 300px;

  .table {
    border-bottom: 2px solid #000;
    margin-top: 1.2rem;

    h3 {
      padding-bottom: 10px;
    }
    ul {
      border-top: 1px solid #fff;
    }
    li {
      margin: 0;
      list-style: none;
      border-bottom: 1px solid #fff;
      position: relative;
      transition: all 0.3s;
      overflow: hidden;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      span {
        display: inline-block;
        float: left;
        padding: 25px 10px;
        font-size: 14px;
        font-family: 'S-CoreDream-3Light';
        box-sizing: border-box;

        &:nth-child(1) {
          width: 5%;
          text-align: center;
        }
        &:nth-child(2) {
          width: 10%;
        }
        &:nth-child(3) {
          width: 70%;
        }
        &:nth-child(4) {
          width: 15%;
          text-align: center;
        }
      }
    }
  }
}

.refer__detail {
  font-family: 'SCoreDream';
  font-weight: 300;
  margin-bottom: 300px;

  h3 {
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    background: #fff;
    padding: 22px 20px 20px 20px;
    margin-bottom: 10px;
    color: #000;
  }
  table {
    font-family: 'SCoreDream';
    width: 100%;
    border: 1px solid #dad8d1;
    text-align: left;
    color: #fff;

    td,
    th {
      font-weight: normal;
      padding: 14px 12px 12px 12px;
      line-height: 1.5;
      vertical-align: middle;
      border-bottom: 1px solid #dad8d1;
      border-right: 1px solid #dad8d1;
    }
  }
  li {
    list-style-type: disc;
    margin-left: 20px;
    line-height: 1.6;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 50px;
    background: #000;
    color: #fff;
    display: inline-block;
    padding: 3px 6px 1px 6px;
  }
  .list-btn {
    margin-top: 50px;
    border: 1px solid #dad8d1;
    text-align: center;
    display: block;
    font-family: 'SCoreDream';
    padding: 20px;
    transition: all 0.3s;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
.light .refer__cont .table {
  border-color: #000;
}
.light .refer__cont .table h3 {
  color: #000;
}
.light .refer__cont .table ul {
  border-top-color: #000;
}
.light .refer__cont .table li {
  border-bottom-color: #000;
}

.light .refer__cont .table li span {
  color: #000;
}
</style>
