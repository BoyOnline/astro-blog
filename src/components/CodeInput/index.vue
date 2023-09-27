<template>
  <section class="w-[242px]">
    <h2 class="font-medium text-lg text-[#1a2556]">身份验证</h2>
    <p class="text-slate-500 mt-2 mb-5">
      在此输入4位密码，以确认你是否有权读取或写入
    </p>
    <fieldset class="border-none -mx-[7px]">
      <legend>
        <!-- HINT : write something here for more accesability  -->
      </legend>
      <input
        type="text"
        id="verification_input_1"
        class="verification__input shadow-md"
        v-model="codeVal[0]"
        @input="handleInput(1, $event as InputEvent)"
        @keydown="handleFocusDirection(1, $event as KeyboardEvent)"
        placeholder="-"
        maxlength="1"
      />
      <input
        type="text"
        id="verification_input_2"
        class="verification__input shadow-md"
        v-model="codeVal[1]"
        @input="handleInput(2, $event as InputEvent)"
        @keydown="handleFocusDirection(2, $event as KeyboardEvent)"
        placeholder="-"
        maxlength="1"
      />
      <input
        type="text"
        id="verification_input_3"
        class="verification__input shadow-md"
        v-model="codeVal[2]"
        @input="handleInput(3, $event as InputEvent)"
        @keydown="handleFocusDirection(3, $event as KeyboardEvent)"
        placeholder="-"
        maxlength="1"
      />
      <input
        type="text"
        id="verification_input_4"
        class="verification__input shadow-md"
        v-model="codeVal[3]"
        @input="handleInput(4, $event as InputEvent)"
        @keydown="handleFocusDirection(4, $event as KeyboardEvent)"
        placeholder="-"
        maxlength="1"
      />
    </fieldset>
    <button class="btn" @click="verifcationPassword(codeVal.join(''))">
      确认
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface Props {
  size: number;
}

// const props = defineProps<Props>();

const codeVal = reactive(["", "", "", ""]);

const handleInput = (digit: number, e: InputEvent) => {
  if (e.inputType === "insertText") {
    if (digit <= 3) {
      document.querySelector(`#verification_input_${digit + 1}`)!.focus()!;
    }
    if (digit >= 4) {
      verifcationPassword(codeVal.join(""));
    }
  } else if (e.inputType === "deleteContentBackward") {
    if (digit >= 2) {
      document.querySelector(`#verification_input_${digit - 1}`)!.focus()!;
    }
  }
};

const handleFocusDirection = (digit: number, e: KeyboardEvent) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    if (digit >= 2) {
      document.querySelector(`#verification_input_${digit - 1}`)!.focus();
    }
  } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    if (digit <= 3) {
      document.querySelector(`#verification_input_${digit + 1}`)!.focus();
    }
  }
};

const verifcationPassword = async (password: string) => {
  const res = await fetch("http://localhost:8000/api/timeline/verifcation", {
    method: "GET",
    headers: {
      Authorization: password,
    },
  });
  const resJson = await res.json();
  if (resJson.status === "success") {
    sessionStorage.setItem("timeline_password", password);
  } else if (resJson.status === "error") {
    console.log("密码错误");
  }
};
</script>

<style lang="css" scoped>
.verification__input {
  width: 50px;
  height: 50px;
  background-color: #dde6f3;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  margin: 0 7px;
  border-radius: 8px;
}

.verification__input::placeholder {
  color: #757575;
}

.btn {
  width: 100%;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  margin-top: 24px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
}
.btn:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn:hover {
  color: #fff;
}
.btn:hover:after {
  top: 0;
  height: 100%;
}
.btn:active {
  top: 2px;
}
</style>
