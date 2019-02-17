<template>
<span>

</span>
</template>

<script>
export default {
  mounted() {      
    var devtools = /./;
    devtools.toString = () => this.inspecting = true;
    console.log("%c", devtools);
  }
};
</script>

<style scoped lang="scss">

</style>
