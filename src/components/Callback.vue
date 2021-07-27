<template>
  <div>
    Loged In
  </div>
</template>

<script>
export default {
  name: "Callback",
  created() {
    let search = new URLSearchParams(this.$route.hash.replace('#', ''));
    this.$cookies.set('token', search.get('access_token'));
    this.$router.push('/');
  }
}
</script>

<style scoped>

</style>