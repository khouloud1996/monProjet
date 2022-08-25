<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#section_new_post, #post-global {
  box-shadow: 5px 4px 11px 0px #757575;
}

p, h2 {
  margin: 0;
}

#nav {
  margin: 0;
  a {
    font-weight: bold;
    color: rgb(214, 214, 214);
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#delete-btn, #newPost-btn {
    transition-duration: 0.1s;
    transform: scale(1);       
}

#delete-btn:hover, #newPost-btn:hover {
    transform: scale(1.01);
}

</style>
