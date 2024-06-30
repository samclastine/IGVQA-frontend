<template>
  <div class="chatbox" ref="chatbox">
    <div class="chatbox__messages" ref="chatctx">
      <!-- Display chat messages here -->
      <div v-for="message in messages" :key="message.id" class="chatbox__message">
        <div v-if="message.type === 'user'" class="chatbox__message--user">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="UserSquare">
            <path
              d="M21,19V5a2,2,0,0,0-2-2H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19A2,2,0,0,0,21,19ZM12,9a3,3,0,1,1-3,3A3,3,0,0,1,12,9ZM6.2966,19.5A3.9966,3.9966,0,0,1,10,17h4a3.9966,3.9966,0,0,1,3.7034,2.5Z"
              fill="#d85b53" class="color000000 svgShape"></path>
            </svg>
          </div>
          <div class="text-container">{{ message.text }}</div>

        </div>
        <!-- <div v-else-if="message.sender === 'BOT'" class="chatbox__message--assistant">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="bot">
            <linearGradient id="a" x1="774.004" x2="787.562" y1="-240.598" y2="-255.538"
              gradientTransform="matrix(3.0757 0 0 -3.0757 -2377.664 -739.209)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#d45985" class="stopColorec2579 svgShape"></stop>
              <stop offset="1" stop-color="#d85b53" class="stopColorf37721 svgShape"></stop>
            </linearGradient>
            <path fill="url(#a)"
              d="M10.1 0h27.7C43.5 0 48 4.5 48 10.1v27.7C48 43.5 43.5 48 37.9 48H10.1C4.5 48 0 43.5 0 37.9V10.1C0 4.5 4.5 0 10.1 0z">
            </path>
            <path fill="#9ae45f" d="M23.5 15.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M23.5 12.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zm-3 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M27 22.5h-7c-1.9 0-3.5-1.6-3.5-3.5v-1c0-1.9 1.6-3.5 3.5-3.5h7c1.9 0 3.5 1.6 3.5 3.5v1c0 1.9-1.6 3.5-3.5 3.5zm-7-7c-1.4 0-2.5 1.1-2.5 2.5v1c0 1.4 1.1 2.5 2.5 2.5h7c1.4 0 2.5-1.1 2.5-2.5v-1c0-1.4-1.1-2.5-2.5-2.5h-7z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M25 25.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zm-2.5-1h2v-2h-2v2z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M30 36.5H17c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5zm-13-11c-.3 0-.5.2-.5.5v9c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5H17zm-2 13c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M16 31.5h-2.5c-1.7 0-3-1.3-3-3s1.3-3 3-3H16c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zm-2.5-5c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4h-2z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M14 36.5c-.3 0-.5-.2-.5-.5v-4.5c-.3 0-.7-.1-1-.2V36c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5.5c0-.2.1-.4.3-.4s.4-.1.5 0c.4.3.8.4 1.2.4h.5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zm22 2c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .3-.2.5-.5.5zm-2.5-7H31c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h2.5c1.7 0 3 1.3 3 3s-1.3 3-3 3zm-2-1h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M35 36.5c-.3 0-.5-.2-.5-.5v-4.7c-.3.1-.7.2-1 .2V36c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h.5c.4 0 .8-.1 1.2-.4.2-.1.4-.1.5 0 .2.1.3.3.3.4V36c0 .3-.2.5-.5.5zm-7.5-4c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M28.5 28.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm-9 2h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H19v1z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M19.5 32.5h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H19v1zm4.5 1c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5zm0-4c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"
              class="colorffffff svgShape"></path>
          </svg>
          </div>

          <div class="image-container" v-if="this.vegaJson">
            
          </div>
          

        </div> -->
      </div>
      <div class="vega-container" v-if="this.vegaJson">
        <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="bot">
            <linearGradient id="a" x1="774.004" x2="787.562" y1="-240.598" y2="-255.538"
              gradientTransform="matrix(3.0757 0 0 -3.0757 -2377.664 -739.209)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#d45985" class="stopColorec2579 svgShape"></stop>
              <stop offset="1" stop-color="#d85b53" class="stopColorf37721 svgShape"></stop>
            </linearGradient>
            <path fill="url(#a)"
              d="M10.1 0h27.7C43.5 0 48 4.5 48 10.1v27.7C48 43.5 43.5 48 37.9 48H10.1C4.5 48 0 43.5 0 37.9V10.1C0 4.5 4.5 0 10.1 0z">
            </path>
            <path fill="#9ae45f" d="M23.5 15.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M23.5 12.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5zm-3 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M27 22.5h-7c-1.9 0-3.5-1.6-3.5-3.5v-1c0-1.9 1.6-3.5 3.5-3.5h7c1.9 0 3.5 1.6 3.5 3.5v1c0 1.9-1.6 3.5-3.5 3.5zm-7-7c-1.4 0-2.5 1.1-2.5 2.5v1c0 1.4 1.1 2.5 2.5 2.5h7c1.4 0 2.5-1.1 2.5-2.5v-1c0-1.4-1.1-2.5-2.5-2.5h-7z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M25 25.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zm-2.5-1h2v-2h-2v2z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M30 36.5H17c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5zm-13-11c-.3 0-.5.2-.5.5v9c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5H17zm-2 13c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M16 31.5h-2.5c-1.7 0-3-1.3-3-3s1.3-3 3-3H16c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zm-2.5-5c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4h-2z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M14 36.5c-.3 0-.5-.2-.5-.5v-4.5c-.3 0-.7-.1-1-.2V36c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5.5c0-.2.1-.4.3-.4s.4-.1.5 0c.4.3.8.4 1.2.4h.5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zm22 2c-.3 0-.5-.2-.5-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .3-.2.5-.5.5zm-2.5-7H31c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h2.5c1.7 0 3 1.3 3 3s-1.3 3-3 3zm-2-1h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M35 36.5c-.3 0-.5-.2-.5-.5v-4.7c-.3.1-.7.2-1 .2V36c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h.5c.4 0 .8-.1 1.2-.4.2-.1.4-.1.5 0 .2.1.3.3.3.4V36c0 .3-.2.5-.5.5zm-7.5-4c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M28.5 28.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm-9 2h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H19v1z"
              class="colorffffff svgShape"></path>
            <path fill="#9ae45f"
              d="M19.5 32.5h-1c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-.5-1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H19v1zm4.5 1c-.8 0-1.5-.7-1.5-1.5v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 .8-.7 1.5-1.5 1.5zm0-4c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"
              class="colorffffff svgShape"></path>
          </svg>
          </div>
        <div ref="vega"></div>
      </div>
      
    </div>
    <div class="chatbox__input">
      
      <!-- Input field and send button -->
      <input v-model="inputText" @keydown.enter="sendMessage" type="text" placeholder="Type your message..." />

      <svg @click="sendMessage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="send">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path
          d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
          fill="#d85b53" class="color000000 svgShape"></path>
      </svg>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import vegaEmbed from 'vega-embed';


export default {
  name: 'ChatBox',
  data() {
    return {
      inputText: '',
      messages: [],
      loading: true,
      vegaJson:null

    };
  },
  mounted() {
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  async created() {
    await this.fetchMessages();
    this.loading = false;
  },
  computed: {
    data() {
      return this.$store.state.Fdata;
    },
  },

  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get('https://ne0627gzr9.execute-api.us-east-1.amazonaws.com/messages');
        this.messages = response.data;
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    },
    async sendMessage() {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: this.inputText,
      };
      this.inputText = '';
      this.messages.push(userMessage);
      const formData = new FormData();
      var idx=0
      try {
        formData.append(idx+1,JSON.stringify(userMessage))
        await axios.post('https://ne0627gzr9.execute-api.us-east-1.amazonaws.com/messages',formData).then((response)=>{
          console.log(response.data);
          this.messages.push(response.data);
          console.log("im fro chat compo", this.data);
          let vegaSpec = JSON.parse(response.data.reply)
          vegaSpec['data']={ values: this.data }
          vegaSpec['$schema'] = 'https://vega.github.io/schema/vega-lite/v5.json'
          this.vegaJson = vegaSpec

          // vegaEmbed(this.$refs.vega, vegaSpec);
          
          
        }).then(()=>{
          console.log(this.vegaJson);
          // let json = JSON.parse(this.vegaJson)
          vegaEmbed(this.$refs.vega, this.vegaJson);

        })

      } catch (error) {
        console.error('Failed to send message:', error);
      }


      

      // Call API or process user message here and get response from ChatGPT
      // Simulating assistant response
      // const assistantMessage = {
      //   id: Date.now(),
      //   type: 'assistant',
      //   text: 'This is the assistant\'s response.',
      // };
      // setTimeout(() => {
      //   this.messages.push(assistantMessage);
      // }, 500);

    },
    // Scroll to the bottom of the chatbox
    scrollToBottom() {
      var chatContainer = this.$refs.chatctx;
      // console.log(chatContainer.scrollHeight);
      chatContainer.scrollTop = chatContainer.clientHeight + 120;
      // console.log("chatContainer.scrollTop", chatContainer.scrollTop);
      if (chatContainer) {
        // Use el.scrollIntoView() to instantly scroll to the element
        chatContainer.scrollIntoView({ behavior: 'smooth' });
      }

    }
  },
};
</script>
  
<style lang="scss" scoped>
*{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.chatbox {
  display: flex;
  flex-direction: column;
  border: 1px solid #302e2e;
  padding: 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: #2c2929;
  background-color: #1e1e1e;
  overflow-y: auto;
}

.chatbox__messages {
  flex: 1;
  overflow-y: auto;
  height: 90% !important;

}

.chatbox__messages::-webkit-scrollbar {
  width: 5px;
}
.vega-container {
  max-height: 400px; /* Adjust the maximum height as needed */
  overflow-y: auto;
  display: flex;
  background-color: #302e2e;
  padding: 15px;
  border-radius: 5px;
  .icon-container{
    width: 50px;
    height: 50px;
    background-color: None;
    padding-right: 14px;


    svg {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  }
}
  /* Add any other styles you want for the container here */

.chatbox__messages::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: #1d1b1b1c;
  border: 1px solid #3533330c;
}

.chatbox__messages::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #ad8e8e;
}


.chatbox__message {
  margin-bottom: 10px;
  box-sizing: border-box;
}

.chatbox__message--user {
  padding: 15px;
  border-radius: 5px;
  color: #f5f5f5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  .icon-container{
    width: 50px;
    height: 50px;
    background-color: None;


    svg {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  }
  .text-container{
    width: 90%;
    padding: 8px;

  }
  .image-container{
    width: 90%;
    padding: 8px;
    background-color: red;

  }


}

.chatbox__message--assistant {
  background-color: #302e2e;
  padding: 15px;
  border-radius: 5px;
  color: #f5f5f5;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;

  .icon-container{
    width: 50px;
    height: 50px;
    background-color: None;


    svg {
    height: 100%;
    width: 83%;
    box-sizing: border-box;
  }

  }
  .text-container{
    width: 90%;
    padding: 8px;

  }
}

.chatbox__input {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #302e2e;
  height: 7% !important;
  box-sizing: border-box;
  padding: 7px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  input {
    all: unset;
    width: 100%;
    color: #f5f5f5;
  }

  svg {
    height: 55.5%;
    padding-right: 1px;
    box-sizing: border-box;
  }
}

.chatbox__input button {
  padding: 5px 10px;
  border: none;
  color: #2c2929;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
}
</style>
  