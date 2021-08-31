<template>
<header class="header">
    <div class="title"><h1>TCG-DUEL</h1>
      <div class="phrase">Find your Adversaire</div></div>
    <nav class="navigation">
      <ul>
        <li>
          <a href="/"><i class="fas fa-home"></i></a>
        </li>
        <li>
          <a href="/sign"><i class="fas fa-user actiflink"></i></a>
        </li>
        <li>
          <a href="#"><i class="fas fa-search"></i></a>
        </li>
      </ul>
    </nav>
  </header>
  
</template>

<script>
export default {
name: "topHeader"
}
</script>

<style>
.header {
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-around;
  align-items: baseline;
  background-color: #2E323B;
  /*background-color: #2F4372;*/
}
.title {
  display: flex;
  align-items: baseline;
  align-content: center;
  justify-content: center;
  width: 50%;
  color:#A8B3CC;
  background-color:  #3C4457;
  
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
}
.title h1{font-size: 2.1em
  }
.title .phrase{
  text-decoration: underline;
}
.navigation {
  display: flex;
  justify-content: space-around;
  width: 50%;
  
}

.navigation ul li {
  list-style: none;
  display: inline-block;
  margin: 0 10px;
}
.navigation ul li a {
  color: #A8B3CC;
  font-size: 2em;
}
.navigation ul li a:hover {
color: #7559D1;
text-shadow: 3px 3px #000 ;
}
.actiflink{
  color: #7559D1;
  text-shadow: 3px 3px #000 ;
}
.router-link-active{
  color: #7559D1;
  text-shadow: 3px 3px #000 ;
}


</style>