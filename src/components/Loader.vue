<template>
  <div class="overlay">
    <div>
      <span>{</span>
      <span>}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    color: #000000;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 10vh;
    opacity: 0.8;
  }
  span {
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
    &:nth-child(odd) {
      animation-delay: 0.4s;
    }
  }
}
@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
