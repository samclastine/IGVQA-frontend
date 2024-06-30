<template>
  <div class="modal-container">
    <div class="modal-header">
      <h2 class="modal-title">{{ title }}</h2>
      <button @click="closeModal" class="modal-close">X</button>
    </div>
    <div class="modal-content">
      
      <div class="drop-zone" @dragenter="dragEnter" @dragover.prevent @dragleave="dragLeave" @drop="handleDrop">
        <p class="drop-message">{{ dropMessage }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
import Papa from 'papaparse';
import { mapActions } from 'vuex';
import axios from 'axios';
import * as d3 from "d3";
// import vegaEmbed from 'vega-embed';






export default {
  name: 'ModalComponent',
  props: {
    title: String,
  },
  data() {
    return {
      dropMessage: 'Drag and drop a CSV file here',
      vegaSpec: null,
    };
  },
  methods: {
    ...mapActions(['loadCSVData']),
    closeModal() {
      this.$emit('close');
    },
    dragEnter(event) {
      event.preventDefault();
      this.dropMessage = 'Drop the CSV file';
    },
    dragLeave() {
      this.dropMessage = 'Drag and drop a CSV file here';
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        if (file.type === 'text/csv') {
          // Handle the CSV file here

          this.processCSVFile(file);

        } else {
          this.dropMessage = 'Please drop a valid CSV file';
        }
      }
    },
    processCSVFile(file) {
      const reader = new FileReader();
      reader.onload = async() => {
        const csvData = reader.result;
        // Process the CSV data
        const result = Papa.parse(csvData, { header: true });
        this.loadCSVData(result);
        const filename = file.name;
        console.log(filename);
        const formData = new FormData();
        
        
        for ( var key in result ) {
          const js =  JSON.stringify(result[key])
          formData.append(key, js);
        }
        axios.post('https://ne0627gzr9.execute-api.us-east-1.amazonaws.com/postcsv', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
        this.$router.push('/preview')
        // Create a Blob with the CSV data
        console.log("***************************",this);
        const _this = this
        const csvBlob = new Blob([csvData], { type: 'text/csv' });
        d3.csv(URL.createObjectURL(csvBlob)).then(function(data) {
          // // const vegaSpec = {
          // //   $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
          // //   width: 400,
          // //   height: 200,
          // //   mark: 'point',
          // //   encoding: {
          // //     x: { field: 'Rotten Tomatoes Rating', type: 'quantitative' },
          // //     y: { field: 'IMDB Rating', type: 'quantitative' },
          // //   },
          //   data: { values: data },
          // };
          // vegaEmbed(_this.$refs.vega, vegaSpec);
          // console.log(data);
          _this.$store.dispatch('updateData', data);
        });



      };
      reader.readAsText(file);
    },
    processData(data) {
  // Process and format the data as needed
  // This function depends on the structure of your data file
    return data;
    }
  },
};
</script>
  
<style lang="scss" scoped>
.modal-container {

  background-color: white;
  border: 1px solid #ccc;
  position: absolute;
  left: 30%;
  top: 27%;
  z-index: 1;
  height: 40%;
  width: 40%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

}

.modal-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  font-size: large;
  box-sizing: border-box;
  height: 15%;
}

.modal-content {
  height: 85%;
  box-sizing: border-box;
  padding: 15px;

}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  float: right;
  color: #777;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 70%;
  border-radius: 20px;
}

.drop-message {
  color: #777;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  text-align: center;
}
</style>
  