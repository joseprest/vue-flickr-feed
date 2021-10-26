<template>
  <v-footer
    class="wrapper black lighten-1 white--text text-center flex-container"
  >
    <div>
      <div class="copyright">
        COPYRIGHT 2021. ALL RIGHTS RESERVED.
      </div>
      <div class="social">
        <v-btn icon a target="_blank" href="">
          <v-icon light>fab fa-instagram </v-icon>
        </v-btn>
        <v-btn icon a target="_blank" href="">
          <v-icon light>fab fa-twitter </v-icon>
        </v-btn>
        <v-btn icon a target="_blank" href="">
          <v-icon light>fab fa-facebook</v-icon>
        </v-btn>
        <v-btn icon a target="_blank" href="">
          <v-icon light>fab fa-youtube </v-icon>
        </v-btn>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #1b1b1b;

  display: flex;
  // flex-flow: column nowrap;

  justify-content: center;

  height: 110px;
  width: 100%;
}

.policy {
  display: flex;
  flex-flow: row nowrap;

  justify-content: center;
  align-items: center;

  .separator {
    margin: 0.25rem;
  }
}

.policy,
.copyright {
  font-family: Inter;
  color: #c3c3c3;
}

.copyright {
  font-family: Inter;
  text-align: center;
}

.social {
  color: #242424;
  display: flex;
  flex-flow: row nowrap;

  justify-content: center;
}

.social > * {
  margin: 0 0.25rem;
}

.title--underline {
  font-weight: 100;
  display: inline-block;
  border-bottom: 1px solid;
  padding-bottom: 9px;
}
</style>
