<template>
<div class="main-content">
  <h1>{{ msg }}</h1>
  <md-layout :md-gutter="16">
    <md-layout md-column md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <md-card>
        <md-card-media>
          <img src="http://www.planetware.com/photos-large/CAY/caribbean-best-beaches-punta-cana.jpg" alt="">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
      </md-card>
    </md-layout>

    <md-layout md-column md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
      <md-card>
        <md-card-media>
          <img src="http://www.planetware.com/photos-large/CAY/caribbean-best-beaches-punta-cana.jpg" alt="">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>
      </md-card>
    </md-layout>
  </md-layout>
</div>
</template>

<script>
export default {
  name: 'food',
  data() {
    return {
      msg: 'Food Page',
    };
  },
};
</script>

<style>
</style>