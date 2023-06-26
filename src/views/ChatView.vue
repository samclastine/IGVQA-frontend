<template>
  <div id="app-chat">
    <ChatBox class="chatbox"></ChatBox>
    <PlayGround class="image-container"></PlayGround>
  </div>
</template>
  
  <script>
import ChatBox from "../components/ChatBoxComponent.vue";
import PlayGround from "../components/PlayGroundComponent.vue"

export default {
  name: "ChatView",
  components: {
    ChatBox,
    PlayGround
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
  .chatbox{
    width: 30%;
    height: 100%;
  }
  .image-container{
    width: 70%;
    height: 100%;
  }

}
</style>