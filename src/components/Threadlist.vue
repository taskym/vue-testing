<template>
	<div>
      <input id="threadlist" name="threadlist" :value="this.msg">
  </div>
</template>

<script>
  export default {
    name: 'Threadlist',
    msg: 'Shit',
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>
