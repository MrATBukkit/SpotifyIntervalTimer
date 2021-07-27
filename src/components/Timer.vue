<template>
  <div>
    <div>
      <template v-if="interval.type === 'work'">
        Trainig
      </template>
      <template v-else-if="interval.type === 'pause'">
        Pause
      </template>
    </div>
    <div>{{ interval.currentTime }}</div>
    <input v-model="interval.playing">
    <input v-model="interval.pause">
    <div>
      <template v-if="isRunning">
        <button @click="stop">
          Stop
        </button>
      </template>
      <template v-else>
        <button @click="start">
          Start
        </button>
      </template>

    </div>
  </div>
</template>

<script>
let SpotifyWebApi = require('spotify-web-api-js');

export default {
  name: "Timer",
  data() {
    return {
      spotifyApi: null,
      playing: false,
      interval: {
        currentTime: 0,
        type: 'pause',
        playing: 30,
        pause: 10
      },
      timer: null,
    }
  },
  mounted() {
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken(this.$cookies.get("token"));
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.interval.currentTime--;
        if (this.interval.currentTime <= 0) {
          if (this.interval.type === 'pause') {
            this.interval.type = 'work';
            this.spotifyApi.play();
            this.interval.currentTime = this.interval.playing;
          } else if (this.interval.type === 'work') {
            this.interval.type = 'pause';
            this.spotifyApi.pause();
            this.interval.currentTime = this.interval.pause;
          }
        }
      }, 1000)
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
      this.interval.currentTime = 0;
      this.interval.type = 'pause';
    }
  },
  computed: {
    isRunning() {
      return this.timer !== null;
    }
  }
}
</script>

<style scoped>

</style>