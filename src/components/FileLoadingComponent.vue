<template>
  <div class="container" :class="{ 'modal-open': isModalOpen }">
    <div class="body" >
      <div class="logo" >
        <span :class="{ 'modal-open-logo': isModalOpen }">IGVQA</span>
      </div>
      <div class="content" >
        
        <div class="box" @click="showModal">Upload File</div>
        <transition name="fade" appear>
          <ModalComponent v-if="isModalOpen" @close="closeModal"   class="modal">
        </ModalComponent>
        </transition>

      </div>

    </div>
  </div>
</template>

<script>
import ModalComponent from "./ModalComponent.vue"
export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  

}
</script>

<style lang="scss">
body{
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  padding: 0;
  margin: 0;

}

.container{
  width: 100%;
  height: 100%;
  .body{
    width: 100%;
    height: 100%;
    padding: 40px;
    box-sizing: border-box;


    .logo{
      width: 100px;
      height:70px;
      span{
        font-family: sans-serif;
        font-weight: 700;
        font-size: 35px;
        color: white;
      }
    }
    .content{
      margin-top: 8%;
      width: 100%;
      height: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
      .box{
        width: 10%;
        height: 120px;
        text-align: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        color: white;
        border-radius: 7px;
        background: #333333;
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 10px;
        cursor: pointer;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      }
      .box:active{
        color: #acacac;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
      }

    }

  }
}
.modal-open {
  background-color: rgba(54, 54, 54, 0.021); /* Example: Semi-transparent overlay */

}
.modal-open-logo{

  color: rgba(214, 212, 212, 0.445)!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>