<template>
    
<div class="w-100 " style="z-index: 9999; position: fixed;top: 0;bottom: 0;left: 0;width: 100%;height: 100vh;" >
<v-card flat rounded="0" width="100%" height="" class="px-4 text-center" color="myred" style="position: fixed;bottom: 0;left: 0;">
 <h1 class="py-12">
    Mobile version coming soon, Open in desktop to view the demo

 </h1>
</v-card>
</div>
</template>
<script>
export default {
  name: "demoblocker",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      alert('Please open in desktop to view the demo')
    },
  },
};

</script>