<template>
  <div id="app-chat">
    <SidebarComponent class="sidebar-container"></SidebarComponent>
    <ChatBox class="chatbox"></ChatBox>
    
  </div>
</template>
  
  <script>
import ChatBox from "../components/ChatBoxComponent.vue";
// import PlayGround from "../components/PlayGroundComponent.vue"
import SidebarComponent from '@/components/SidebarComponent.vue'


export default {
  name: "ChatView",
  components: {
    ChatBox,
    SidebarComponent 
   },
};
</script>
  <style lang="scss">
#app-chat {
  width: 100%;
  height: 100vh;
  color: white;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  .sidebar-container{
    width: 20%;
    height: 100%;
  }
  .chatbox{
    width: 80%;
    height: 100%;
  }



}
</style>