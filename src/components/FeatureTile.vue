<template>
  <div class="feature-tile">
    <FontAwesomeIcon :icon="icon" class="icon" />
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartPie, faBrain, faChartBar, faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faChartPie, faBrain, faChartBar, faTextHeight);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>

<style scoped>
.feature-tile {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  transition: transform 0.2s;
  width: 90%;
  max-width: 300px;
  height: 40vh; /* Set initial height using viewport height */
}

.feature-tile:hover {
  transform: scale(1.05);
}

.icon {
  font-size: 2.5em;
  color: #4caf50;
  margin-bottom: 10px;
}

.title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.description {
  font-size: 1em;
  color: #b0bec5;
}

/* Responsive design */
@media (min-width: 768px) {
  .feature-tile {
    width: 45%;
    height: 35vh; /* Adjust height for larger screens */
  }
}

@media (min-width: 1024px) {
  .feature-tile {
    width: 30%;
    height: 50vh; /* Adjust height for even larger screens */
  }
}
</style>
