<template>
    <div class="slide">
      <div class="text-container">
        <h1>Transform Your Data into Visual Insights</h1>
        <p>
          NLVI is an advanced AI tool that allows you to generate insightful charts
          and graphs simply by using natural language queries. Say goodbye to complex
          data visualization tools and hello to effortless insights.
        </p>
        <h3 class="learn-more">Learn More</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureSlide',
  };
  </script>
  
  <style scoped>
  .slide {
    background-color: #1e1e1e;
    color: #ffffff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .text-container h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #4caf50; /* Accent color */
  }
  
  .text-container p {
    font-size: 1.2em;
    color: #b0bec5;
    margin-bottom: 20px;
  }
  
  .learn-more {
    font-size: 1.2em;
    color: #4caf50; /* Accent color */
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;
  }
  
  .learn-more:hover {
    color: #81c784;
    transform: translateX(5px);
  }
  </style>
  