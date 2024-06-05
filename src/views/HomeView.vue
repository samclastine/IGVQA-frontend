<template>
  <div id="global">
    <div id="nav-home">
      <NavBar />
      <router-view></router-view>
    </div>
    <div class="parent-container">
      <div id="slide1" class="slides">
        <div class="text-container">
          <h1>NLVI - AI for Data Visualization</h1>
          <p>Powered by Vegalite</p>
        </div>
        <div class="button-container">
          <button @click="action" >Get Started</button>
          <h3>Learn More →</h3>
        </div>
      </div>
      <div id="slide2" class="slides">
        <div class="feature-tiles">
          <FeatureTile
            title="Natural Language Query"
            description="Generate charts by simply typing your query in natural language"
            :icon="['fas', 'text-height']"
          />
          <FeatureTile
            title="AI-Powered Data Visualization"
            description="Leverage the power of AI to create insightful visualizations from your data"
            :icon="['fas', 'brain']"
          />
          <FeatureTile
            title="Vegalite Integration"
            description="Utilize the capabilities of vegalite for creating interactive and customizable charts"
            :icon="['fas', 'chart-bar']"
          />
          <FeatureTile
            title="Easy Chart Generation"
            description="Effortlessly create a variety of charts without the need for complex coding"
            :icon="['fas', 'chart-pie']"
          />
        </div>
      </div>
      <div id="slide3" class="slides">
        <featureSlide></featureSlide>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavbarComponent.vue';
import FeatureTile from '../components/FeatureTile.vue';
import FeatureSlide from '../components/FeatureSlide.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FeatureTile,
    FeatureSlide
  },
  methods:{
    action(){
        this.$router.push('/selection')
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}


#global {
  height: 100vh;
  display: flex;
  flex-direction: column;
  

  #nav-home {
    display: flex;
    flex-direction: column;
  }
}

.parent-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;
  


  #slide1 {
    width: 100%;
    background-color: #121212;
    color: #ffffff;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text-container {
      h1 {
        padding: 20px;
        margin: 0;
        font-size: 2.5em;
        color: #4caf50; /* Accent color */
      }

      p {
        font-size: 1.2em;
        color: #b0bec5;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        background-color: #4caf50; /* Accent color */
        color: #ffffff;
        border: none;
        padding: 10px 20px;
        font-size: 1.2em;
        border-radius: 5px;
        margin-right: 20px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;

        &:hover {
          background-color: #388e3c;
          transform: scale(1.05);
        }
      }

      h3 {
        font-size: 1.2em;
        color: #4caf50; /* Accent color */
        cursor: pointer;
        transition: color 0.3s, transform 0.2s;

        &:hover {
          color: #81c784;
          transform: translateX(5px);
        }
      }
    }
  }

  #slide2 {
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .feature-tiles {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      background-color: #121212;
      padding: 20px;
    }
  }

  #slide3 {
    width: 100%;
    height: 35vh;
  }
}
</style>
