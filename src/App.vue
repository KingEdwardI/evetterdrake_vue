<template>
  <div id="app" v-on:click="bodyClick">
    <header class="site-top-header">
      <div class="row">
        <div id="logo" class="dropdown">
          <img id="bitdown" v-on:click="clickImage" src="./assets/8bitdown.png" height="32px" width="22px" alt="logo">
          <div id="dropdownWrap">
            <div v-if="isMenuShowing" class="dropdown-content">
              <a href="/resume.pdf"><p>Resume</p></a>
              <a href="https://github.com/KingEdwardI"><p>Github</p></a>
              <a href="https://linkedin.com/in/edward-vetter-drake"><p>LinkedIn</p></a>
              <a href="https://twitter.com/edvetterdrake"><p>Twitter</p></a>
              <a href="https://evetterdrake.wordpress.com"><p>Blog</p></a>
            </div>
          </div>
        </div>
        <router-link to="/">
          <div id="nav1" class="nav-item">
            <p class="nav-text"> Menu </p>
          </div>
        </router-link>
        <router-link to="/profile">
            <div id="nav2" class="nav-item">
              <p class="nav-text"> Character </p>
          </div>
          </router-link>
          <router-link to="/inventory">
            <div id="nav2" class="nav-item">
              <p class="nav-text"> Inventory </p>
            </div>
        </router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      isMenuShowing: false,
    }
  },
  methods: {
    bodyClick: function(evt) {
      if (evt.target.id != 'bitdown') {
        this.isMenuShowing = false
      }
    },
    clickImage: function() {
      this.isMenuShowing = !this.isMenuShowing
      //console.log('stuff');
    }
  }
}
</script>

<style>
@font-face {
  font-family: "PressStart";
  src: url(./assets/fonts/PressStart2P.ttf);
}
@font-face {
  font-family: "Pixel7";
  src: url('./assets/fonts/Pixel7.ttf');
}
@font-face {
  font-family: "V5Xtend";
  src: url('./assets/fonts/V5Xtende.ttf');
}

html, body {
  margin: 0;
  padding-top: 0;
  background-color: purple;
  color: black;
}


#app {
  height: 100vh;
  padding-top: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-top-header {
  top: 0;
  position: fixed;
  background: linear-gradient(blue, black, blue);
  width: 100vw;
  height: 50px;
  box-shadow: 0px 8px 4px 0px rgba(0,0,0,0.8);
  display: inline-flex;
  z-index: 1000;
}

.dropdown {
  position: relative;
  display: inline-flex;
}

.dropdown-content {
  white-space: nowrap;
  position: absolute;
  left: -2px;
  display: block;
  padding: 2px;
  margin-left: 34%;
  margin-top: 60px;
  width: auto;
  background-color: #808080;
  box-shadow: inset -2px -2px 2px 0px rgba(0,0,0,0.8), 6px 8px 16px 0px rgba(0,0,0,0.6);
  z-index: 100;
}

.dropdown-content p {
  font-family: "PressStart";
  font-size: 12px;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  color: black;
  padding: 1px;
  text-decoration: none;
  display: block;
}

.dropdown-content p:hover {
  background-color: red;
  box-shadow: inset -2px -2px 2px 0px rgba(0,0,0,0.5), inset 2px 2px 2px 0px rgba(0,0,0,0.5);
}

.show { display:block; }

#bitdown {
  display: inline-flex;
  padding-top: 34%;
  padding-left: 34%;
}

.row {
  display: table-row;
}

#bitdown:active { transform: translate(2px, 1px); }

.nav-item {
  font-family: "PressStart";
  font-size: 12px;
  color: white;
  text-shadow: -2px -2px 1px rgba(50,50,50,0.8);
  padding: 0 5px;
  background-color: #808080;
  position: relative;
  display: inline-flex;
  height: 65%;
  margin-top: 11px;
  box-shadow: inset -1px -1px 1px 0px rgba(0,0,0,0.8), inset 1px 1px 1px 0px rgba(200,200,200,0.8);
  vertical-align: top;
}

.nav-item:active { transform: translate(2px, 1px); }

a {
  text-decoration: none;
  color: white;
}


#nav2 {
}

</style>
