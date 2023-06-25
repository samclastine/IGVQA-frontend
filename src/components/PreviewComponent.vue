<template>
  <div class="hero-table">
    <div class="text">
      <p>Preview</p>
    </div>

    <div class="container-table">
      <TableComponent></TableComponent>
    </div>
    <div class="next">
      <button class="button-85" role="button">Next</button>
    </div>
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
export default {
  name: "PreviewComponent",
  components: {
    TableComponent,
  },
};
</script>

<style lang="scss">
.hero-table {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 15px;
    height: 20%;
    background-color: #1e1e1e;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-size: 28px;
      font-weight: 500;
      text-align: left;
      color: white;
    }
  }

  .container-table {
    width: 100% !important;
    height: 70% !important;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 30px;
    box-shadow: rgba(7, 7, 7, 0.459) 3px 3px 6px 0px inset,
      rgba(8, 8, 8, 0.767) -3px -3px 6px 1px inset;
  }
  .next {
    height: 10%;
    width: 100%;
    background-color: #1e1e1e;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    align-items: center;
    

    /* CSS */
    .button-85 {
      height: 35px;
      width: 75px;
      padding: 0.6em 2em;
      border: none;
      outline: none;
      color: rgb(165, 163, 163);
      background: #111;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      box-sizing: border-box;
      margin-right: 5%;
    }

    .button-85:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      -webkit-filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing-button-85 20s linear infinite;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    @keyframes glowing-button-85 {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    .button-85:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #222;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
  }
}
</style>