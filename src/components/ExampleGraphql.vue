<template>
  <div>
    {{allPosts[0].title}}
  </div>
</template>

<script>
export default {
  apollo: {
    allPosts: require('../graphql/allPosts')
  },
  data () {
    return {
      allPosts: [{}]
    }
  }
}
</script>
