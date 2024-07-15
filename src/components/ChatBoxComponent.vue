<template>
  <div class="chatbox" ref="chatbox">
    <div class="chatbox__messages" ref="chatctx">
      <div v-for="message in chatStore" :key="message.id" class="chatbox__message">
        <div v-if="message.type === 'user'" class="chatbox__message--user">
          <div class="icon-container">
            <!-- User icon SVG -->
          </div>
          <div class="text-container">{{ message.text }}</div>
          
          <div v-if="message.vegaSpec" :ref="'vega-' + message.id" class="vega-container"></div>
        </div>
      </div>
    </div>
    <div class="chatbox__input">
      <input v-model="inputText" @keydown.enter="sendMessage" type="text" placeholder="Type your message..." />
      <svg @click="sendMessage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="send">
        <!-- Send icon SVG -->
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
      chatStore: [],
    };
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    async sendMessage() {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: this.inputText,
      };
      this.inputText = '';
      this.chatStore.push(userMessage);

      const formData = new FormData();
      var idx = 0
      formData.append(idx+1, JSON.stringify(userMessage));

      try {
        const response = await axios.post(`${process.env.VUE_APP_ROOT_API}/messages`, formData);
        const assistantMessage = response.data;
        this.chatStore.push(assistantMessage);

        if (assistantMessage.reply) {
          const vegaSpec = JSON.parse(assistantMessage.reply);
          vegaSpec['data'] = { values: this.$store.state.Fdata };
          vegaSpec['$schema'] = 'https://vega.github.io/schema/vega-lite/v5.json';

          // Append Vega spec to the user message
          userMessage.vegaSpec = vegaSpec;

          // Render Vega chart after Vue.js has updated the DOM
          this.$nextTick(async () => {
            try {
              const vegaContainerRef = this.$refs[`vega-${userMessage.id}`];
              if (vegaContainerRef) { 
                console.log(vegaContainerRef);
                await vegaEmbed(vegaContainerRef[0], vegaSpec);
              } else {
                console.error('Vega container ref not found for message:', userMessage);
              }
            } catch (error) {
              console.error('Failed to embed Vega chart:', error);
            }
          });
        }
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    },
    scrollToBottom() {
      const chatContainer = this.$refs.chatctx;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
* {
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
  max-height: 400px;
  /* Adjust the maximum height as needed */
  overflow-y: auto;
  display: flex;
  background-color: #302e2e;
  padding: 15px;
  border-radius: 5px;

  .icon-container {
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

  .icon-container {
    width: 50px;
    height: 50px;
    background-color: None;


    svg {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

  }

  .text-container {
    width: 90%;
    padding: 8px;

  }

  .image-container {
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

  .icon-container {
    width: 50px;
    height: 50px;
    background-color: None;


    svg {
      height: 100%;
      width: 83%;
      box-sizing: border-box;
    }

  }

  .text-container {
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