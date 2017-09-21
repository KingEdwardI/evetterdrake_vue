<template>
  <div class="home">
    <div class="main">
      <router-link to="/inventory">
        <div 
          class="menu-item" 
          v-on:mouseover="isContinueHovered = true"
          v-on:mouseout="isContinueHovered = false"
        >
          <div class="pointer">
            <img 
              src="../assets/pointer.png" 
              class="pointer" 
              height="75px" 
              width="75px" 
              alt="pointer" 
              v-if="isContinueHovered"
            />
          </div>
          <img 
            class="menu-button"
            src="../assets/continue.png" 
            alt="continue"
          />
        </div>
      </router-link>
      <div id="btn_space"></div>
      <router-link to="/profile">
        <div 
          class="menu-item" 
          v-on:mouseover="isNewGameHovered = true"
          v-on:mouseout="isNewGameHovered = false"
        >
          <div class="pointer">
            <img 
              src="../assets/pointer.png" 
              class="pointer" 
              height="75px" 
              width="75px" 
              alt="pointer" 
              v-if="isNewGameHovered"
            />
          </div>
          <img 
            class="menu-button"
            src="../assets/newgame.png" 
            alt="newgame"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isContinueHovered: false,
      isNewGameHovered: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-right: 75px;
}
.home {
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin-top:0;
  padding-top:0;
  display: flex;
}

.pointer {
  height: 75px;
  width: 75px;
}

.menu-item {
  max-width: 100%;
  display: inline-flex;
}

.menu-button {
  height: 100px;
  width: 225px;
}
</style>
