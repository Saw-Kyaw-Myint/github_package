<template>
  <button
    :style="{
      padding: '15px',
      fontSize: '25px',
      background: background,
      color: color,
      borderRadius: '30px',
      border: 'none',
      boxShadow: '3px 8px #c2c2c2',
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "VueElegantButton",
  props: {
    background: {
      default: "#456099",
    },
    color: {
      default: "#fff",
    },
    text: {
      default: "My Button",
    },
  },
};
</script>
