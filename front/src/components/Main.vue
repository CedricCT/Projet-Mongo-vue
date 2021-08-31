<template>
  <main class="articlelist">
<article class="player" v-for="(user, key) in info" :key="key" >
      <div class="title_article">{{ user.name }}</div>
      <div class="main_article">{{ user.biography }}</div>
      <div class="footer_article">
        <a href=""><i class="fas fa-heart"></i></a>
        <a href="">{{ user.email }}</a>
        <a href=""><i class="fas fa-comment-alt"></i></a>
      </div>
    </article>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      info: "banana",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3050/")
      .then((response) => (this.info = response.data.test));
  },
};
</script>

<style>
.articlelist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.player {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 5px;
  border: 1px solid black;
  border-radius: 20px 5px;
  width: 15%;
  height: 230px;
  overflow: hidden;
}
.player:hover{
  transform: scale(1.1);
}
.articlelist .title_article {
  display: flex;
  font-weight: bold;
  color: #fff;
  justify-content: space-around;
  align-items: center;
  background-color: #3c4457;
  height: 15%;
}
.articlelist .main_article {
  height: 75%;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  color: #fff;
  background-color: #2e323b;
  text-align: top;
  padding: 6px;
}
.articlelist .footer_article {
  display: flex;
  justify-content: space-evenly;
  background-color: #3c4457;
  height: 10%;
  font-size: 1.2em;
  color: #a8b3cc;
  padding: 2px 4px;
}
.footer_article a {
  color: #a8b3cc;
  text-shadow: 1px 1px black;
}

.articlelist .footer_article .fas:hover {
  color: #7559d1;
  text-shadow: 1px 1px black;
  cursor: pointer;
}
</style>