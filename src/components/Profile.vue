<template>
  <div id="profile">
    <div class="charMenu">
      <div class="charInfo">
        <div class="charPic">
          <div id="picWrap">
            <img src="../assets/8bitme.png" height="95px" width="95px" alt="me"/>
          </div>
        </div>
        <div class="charStats">
          <p id="charName" class="charStat">
            King Edward
          </p>
          <p id="charLvl" class="charStat">
            <span class="label"> LV </span> 2
          </p>
          <p id="charHp" class="charStat">
            <span class="label"> HP </span> 256/343
          </p>
          <p id="charMp" class="charStat">
            <span class="label"> MP </span> 223/273
          </p>
        </div>
        <div class="charExp">
          <p class="label"> Exp </p>
          <p class="charStat"> 73/235 </p>
          <img id="progress" src="../assets/progress.png" height="50px" width="300px">
        </div>
      </div>
      <div class="charDataWrap">
        <div class="charData">
          <h2 class="font"> Web Developer </h2>
          <h3 class="font"> edward.vetterdrake@gmail.com </h3>
          <a class="font" href="../assets/pdf/EdwardVetter-DrakeWebDeveloper.pdf">
            <img src="../assets/pdf.gif" height="50px" width="50px" />
            <p>Resume</p>
          </a>
          <br>
          <a class="font" href="https://evetterdrake.wordpress.com">
            <img src="../assets/wp.png" height="50px" width="50px" />
            <p>Blog</p>
          </a>
          <br>
          <a class="font" href="https://github.com/KingEdwardI">
            <img src="../assets/octocat.png" height="50px" width="50px" />
            <p>Github</p>
          </a>
          <br>
          <a class="font" href="https://linkedin.com/in/edward-vetter-drake">
            <img src="../assets/linkden8bit.png" height="50px" width="50px" />
            <p>LinkedIn</p>
          </a>
          <br>
          <a class="font" href="https://twitter.com/edvetterdrake">
            <img src="../assets/twitter.png" height="50px" width="50px" />
            <p>Twitter</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data: function() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style scoped>

#profile {
  background-image: url(../assets/ChronoTriggerOverworldMiddleAgesBG.png);
  background-size: cover;
  height: 100vh;
  padding-top: 50px;
}

.font {
  font-family: "V5Xtend";
}

.charMenu {
  height: 600px;
  width: 860px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  background-image: url('../assets/pokemon_border1.png');
  background-color: grey;
  background-size: cover;
  background-repeat: no-repeat;
  display: table;
  box-shadow: 20px 20px 13px 0px rgba(0,0,0,0.8);
}

.charInfo {
  display: table-row;
}

.charPic {
  padding-top: 40px;
  padding-left: 40px;
  display: table-cell;
  width: 110px;
  height: 110px;
}
#picWrap {
  width: 100px;
  height: 100px;
  padding-top: 5px;
  padding-left: 5px;
  background-image: url('../assets/pokemon_border.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.charStats {
  vertical-align: top;
  padding-left: 10px;
  padding-top: 15px;
  display: table-cell;
  font-family: "Pixel7";
  font-size: 66px;
  width: 250px;
}

.charStat {
  height: 40px;
}

.label {
  font-family: "V5Xtend";
  font-size: 28px;
  color: cyan;
}

.charStats p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

.charExp {
  display: table-cell;
  vertical-align: top;
  padding-top: 40px;
  font-family: "Pixel7";
  font-size: 66px;
}

.charExp p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

#progress {
  padding-top: 25px;
}

.charDataWrap {
  padding-left: 45px;
  width: 300px;
  position: absolute;
  display: table-row;
}

.charData {
  width: 300px;
  display: flex;
  display: table-cell;
}

.charData > a {
  display: inline-flex;
}
.charData img {
  display: inline-flex;
  margin-right: 10px;
}

</style>
