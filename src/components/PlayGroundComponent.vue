<template>
    <div class="hero-play">
        <div class="drop-zone" @dragover.prevent @drop="handleDrop">
            <template v-if="src">
                <VueDraggableResizable @dragging="onDrag" @resizing="onResize" :parent="true"
                    style="border: 1px solid black;">
                    <img ref="imgRef" src="../assets/logo.png" alt="no logo" width="200px" height="200px" />
                    <h3>Hello World!</h3>
                    <p>{{ x }} x {{ y }}</p>
                    <p>{{ width }} x {{ height }}</p>
                </VueDraggableResizable>
                <div v-for="item in src" :key="item.img" ref="src">
                    <VueDraggableResizable @dragging="onDrag" @resizing="onResize" :parent="false"
                        style="border: 1px solid black;">
                        <img ref="imgRef" :src="item.img" alt="no Picutres" width="200px" height="200px">
                    </VueDraggableResizable>
                </div>
                <!-- <input type="file" @change="onFileSelected"/> -->
            </template>
            <template v-else>
                <p>Drag and drop an image here</p>

            </template>
        </div>
    </div>
</template>
  
<script>
import VueDraggableResizable from "vue-draggable-resizable/src/components/vue-draggable-resizable.vue";
import '../../node_modules/vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
    name: "PlayGround",
    components: {
        VueDraggableResizable,
    },
    data() {
        return {
            src: [],
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        };
    },
    // methods: {
    //     handleDrop(event) {
    //         event.preventDefault();
    //         const file = event.dataTransfer.files[0];
    //         const reader = new FileReader();
    //         var tempImg = {}
    //         reader.onload = () => {
    //             tempImg.x = 500
    //             tempImg.y = 200
    //             tempImg.height = 100
    //             tempImg.width = 100
    //             tempImg.img = reader.result;
    //             this.src.push(tempImg)
    //             console.log(this.src);
    //         };
    //         reader.readAsDataURL(file);
    //     },
    //     onResize(x, y, width, height) {
    //         this.x = x
    //         this.y = y
    //         this.width = width
    //         this.height = height
    //         this.$refs.imgRef.width = width
    //         this.$refs.imgRef.height = height
    //         console.log(height);
    //     },
    //     onDrag(x, y) {
    //         this.x = x
    //         this.y = y
    //     },
    //     onFileSelected (e) {
    //   var files = e.target.files || e.dataTransfer.files
    //   if (!files.length) {
    //     return
    //   }
    //   this.createImage(files[0])
    // },
    //     createImage (file) {
    //   var reader = new FileReader()
    //   var tempImg = {}
    //   reader.onload = (e) => {
    //     tempImg.x = 500
    //     tempImg.y = 200
    //     tempImg.height = 100
    //     tempImg.width = 100
    //     tempImg.img = e.target.result
    //     this.src.push(tempImg)
    //   }
    //   reader.readAsDataURL(file)
    // }
  
    // },
};
</script>
  
<style lang="scss">
.hero-play {
    width: 100%;
    height: 100%;
}

.drop-zone {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}
</style>
  