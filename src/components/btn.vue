<template lang="pug">
  div(:class="[btnClass,cname]")
    slot
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: "",
      },
    },
    data () {
      return {
        btnClass: "btn",
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/element.scss";
  .btn {
    @include btn;
  }
</style>
