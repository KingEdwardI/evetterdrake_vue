<template>
  <div id="inventory">
    <div class="itemWrap">
      <div class="itemMenu">
        <div class="itemDesc menu">
          <img src="../assets/pokemon_border2.png" alt='border' class="wrapper"/>
          <div  v-if="activeItem">
            <div class="description">
              <span> {{ activeItem.title }} </span>
              <br/>
              <span> {{ activeItem.desc }} </span>
            </div>
            <div class="preview">
              <a :href="activeItem.github" target="_blank"><img :src="activeItem.image" height="100px" width="100px" alt="python" /> </a>
            </div>
          </div>
          <div v-else>
            <div class="description">
              <span> Select an Item from the Menu </span>
            </div>
          </div>
        </div>
        <div class="itemUse menu">
          <img src="../assets/pokemon_border2.png" alt='border' class="wrapper"/>
          <div class="use" v-if="activeItem">
            <div v-on:click="goToItem">View</div>
            <div v-if="activeItem.demo" v-on:click="goToDemo">Demo</div>
            <div>Three</div>
          </div>
        </div>
        <div class="itemList menu">
          <img src="../assets/pokemon_border2.png" alt='border' class="wrapper"/>
          <div class="itemLi">
            <div class="item" v-for="(item, i) in listItems" v-on:click="selectItem(i)">
              <img :src="item.image" height="45px" width="45px"/>
              <span> {{ item.title }} </span> <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data: function() {
    return {
      listItems: [
        {
          title: 'PyXm',
          desc: 'Batch download music tracks from youtube, utilizing the Spotify API v1',
          github: 'https://github.com/KingEdwardI/pyxm',
          image: 'https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/headphone-512.png'
        },
        {
          title: 'HypemDL',
          desc: 'Batch download all of your favorited tracks from Hypem.com.',
          github: 'https://github.com/KingEdwardI/hypem-dl',
          image: 'https://lh5.ggpht.com/gYGGodXsQ1O9X4QrR-I6AvJjIoxvW9dkJoH9tSaYxsM7wp2k_KJxAp0aqOsN_Qnj4FY=w300'
        },
        {
          title: 'gedcom-to-JSON',
          desc: 'Parse gedcom files into JSON; Primarily for use with a private project which is no longer in production',
          github: 'https://github.com/KingEdwardI/gedcom-to-JSON',
          image: 'https://cdn4.iconfinder.com/data/icons/document-file-types-black/347/extention_file_type_black_142-2-512.png',
        },
        {
          title: 'Student Portal',
          desc: 'A student portal implementation for use at CodeCraft School Of Technology.',
          github: 'https://students.codecraftschool.com',
          image: 'https://pixel.wp.com/g.gif?v=ext&j=1%3A5.2.1&blog=103198269&post=35&tz=-6&srv=www.codecraftschool.com&host=www.codecraftschool.com&ref=&rand=0.3172180836536478'
        },
        {
          title: 'WiggleWhere',
          desc: 'A social networking application for music lovers and festival-goers',
          github: 'http://wigglewhere.com',
          image: 'https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/17884058_314840202252739_6680548501225783387_n.jpg?oh=30d1fca752b0c73764bd69c83d9c0dc4&oe=5A579B2E'
        }
      ],
      activeItem: null
    }
  },
  methods: {
    selectItem: function(index) {
      this.activeItem = this.listItems[index]
    },
    goToItem: function() {
      window.open(this.activeItem.github, '_blank')
    },
    goToDemo: function() {
      window.open(this.activeItem.demo, '_blank')
    }
  }
}
</script>

<style scoped>
#inventory {
  background-image: url(http://www.finalfantasykingdom.net/chrono/ccworldmap.png);
  background-size: cover;
  height: 100vh;
}
.itemWrap {
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 2px;
  height: 100%;
  width: 90%;
}

.itemMenu {
  padding: 3%;
  border-radius: 3px;
}

.wrapper {
  height: 100%;
  width: 100%;
  border-radius: 4px;
  z-index: -1;
}

.menu {
  margin: 20px 0;
  position: relative;
  background-color: grey;
  box-shadow: 20px 20px 13px 0px rgba(0,0,0,0.8);
}

.itemDesc {
  height: 200px;
  border-radius: 4px;
}

.preview {
  position: absolute;
  top: 20px;
  right: 50px;
}

.description {
  font-family: "Pixel7";
  font-size: 40px;
  position: absolute;
  top: 20px;
  left: 35px;
  width: 65%;
}

.itemUse {
  height: 100px;
}

.use {
  font-family: "Pixel7";
  font-size: 70px;
  position: absolute;
  top: 15px;
  left: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 90%;
}

.use > div {
  display: flex;
  align-self: center;
  margin: auto;
}

.itemList {
  height: 300px;
}

.itemLi {
  position: absolute;
  top: 20px;
  left: 35px;
}

.item {
  font-family: "Pixel7";
  font-size: 50px;
  display: inline-flex;
  height: 50px;
  width: 275px;
}
</style>

