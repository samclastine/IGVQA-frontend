<template>
  <div class="parent">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SidebarComponent id="sidebar-component"></SidebarComponent>
    <PreviewComponent id="preview-component"></PreviewComponent>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewComponent from '@/components/PreviewComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'

export default {
  name: 'DataPreviewView',
  components: {
    PreviewComponent,
    SidebarComponent
    
  }
}
</script>

<style lang="scss">
.parent{
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  #sidebar-component{
    width:20%;

  }
  #preview-component{
    width:80%;
    height: 100%;
    background-color: white;
  }

}



</style>
