<template>
  <div class="home">
    <div class="main">
      <div class="wrapper">
        <div class="menu">
          <router-link to="/inventory">
            <div 
              class="menu-item" 
              id="continue" 
              v-on:mouseover="continueHovered"
              v-on:mouseout="continueHovered"
            >
              <img 
                src="../assets/pointer.png" 
                class="pointer" height="75%" 
                width="75%" alt="pointer" 
                v-if="isContinueHovered"
              />
              <img 
                src="../assets/continue.png" 
                height="200%" 
                width="200%" 
                alt="continue"
              />
            </div>
          </router-link>
          <router-link to="/profile">
            <div 
              class="menu-item" 
              id="newgame" 
              v-on:mouseover="newGameHovered"
              v-on:mouseout="newGameHovered"
            >
              <img 
                src="../assets/pointer.png" 
                class="pointer" 
                height="75%" 
                width="75%" 
                alt="pointer" 
                v-if="isNewGameHovered"
              />
              <img 
                src="../assets/newgame.png" 
                height="200%" 
                width="200%" 
                alt="newgame"
              />
            </div>
          </router-link>
        </div>
      </div>
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
  },
  methods: {
    continueHovered: function() {
      this.isContinueHovered = !this.isContinueHovered
    },
    newGameHovered: function() {
      this.isNewGameHovered = !this.isNewGameHovered
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  position: absolute;
  left: -100px;
}

#continue {
  position: absolute;
  top: 25%;
  left: 35%;
}

#newgame {
  position: absolute;
  top: 50%;
  left: 35%;
}
</style>
