<template>
  <div class="hero-sidebar">
    <p class="logo">IGVQA</p>
    
    <div class="container">
        <div class="text-con-cont">
            <span id="connection-text">Connections</span>
            <span class="add">+</span>


        </div>
        <div class="connections-container">
            
        </div>
        <p>Sheets</p>
        <div class="sheets-container">
            
        </div>
        <p>Table</p>
        <div class="table-container">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"SidebarComponent"

}
</script>

<style lang="scss">
.hero-sidebar{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: rgb(37, 37, 38);
    .logo{
            font-family: sans-serif;
            font-weight: 700;
            font-size: 35px;
            color: white;
            padding: 20px;
            margin: 0;

    }

    .container{
        width: 100%;
        height: 89%;
        display: flex;
        flex-direction: column;
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 400;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 15px;

        p{
            margin-bottom: 15px;
        }
        .text-con-cont{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            #connection-text{
                font-size: 24px;
                font-weight: 450;

            }
            span{
                font-size: 30px;
                font-weight: 900;
                cursor: pointer;

            }
            

        }

        .connections-container{
            width: 100%;
            height: 10%;
            border-block-end: 1px rgb(85, 84, 84) solid;

        }
        .sheets-container{
            width: 100%;
            height: 10%;
            border-block-end: 1px rgb(85, 84, 84) solid;

        }
        .table-container{
            width: 100%;
            height: 20%;

        }
    }
}

</style>