<template>
    <div ref="otpCont" class="otp-container">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        type="text"
        class="digit-box"
        v-model="digits[index]"
        maxlength="1"
        @keydown="handleKeyDown($event, index)"
        :class="{ bounce: digit !== null }"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "OTP",
    props: {
      digitCount: {
        type: Number,
        required: true
      },
      default: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        digits: Array(this.digitCount).fill(''),
      };
    },
    mounted() {
      if (this.default && this.default.length === this.digitCount) {
        for (let i = 0; i < this.digitCount; i++) {
          this.digits[i] = this.default.charAt(i);
        }
      }
    },
    methods: {
      handleKeyDown(event, index) {
        if (event.key !== "Tab" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
          event.preventDefault();
        }
  
        if (event.key === "Backspace") {
          this.digits[index] = '';
          if (index > 0) {
            this.$refs.otpCont.children[index - 1].focus();
          }
          return;
        }
  
        if (/^[0-9]$/.test(event.key)) {
          this.digits[index] = event.key;
          if (index < this.digitCount - 1) {
            this.$refs.otpCont.children[index + 1].focus();
          }
          this.$emit('update:otp', this.digits.join(''));
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .otp-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .digit-box {
    height: 2rem;
    width: 1rem;
    border: 1px solid black;
    display: inline-block;
    border-radius: 5px;
    margin: 5px;
    padding: 15px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  .digit-box:focus {
    outline: 3px solid black;
  }
  
  .bounce {
    animation: pulse 0.3s ease-in-out alternate;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  </style>
  