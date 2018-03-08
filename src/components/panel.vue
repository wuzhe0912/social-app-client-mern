<template lang="pug">
  section(:class="[panelClass,cname]")
    h4 {{ title }}
    slot
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
    },
    data () {
      return {
        panelClass: "panel",
      }
    }
  }
</script>
