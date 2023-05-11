<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { useTodoStore } from "@/stores/todos";
import { useLoginStore } from "@/stores/login";

const state = reactive({ newTodoLabel: "" });

// useTodoStore を呼び出すだけで、グローバルストアへのアクセスが可能
const todoStore = useTodoStore();
const loginStore = useLoginStore();

// ストア内の State や Getters はリアクティブオブジェクトなので、
// リアクティブを失わずに取り出す場合は storeToRefs を用いる
const { filteredTodos, filter } = storeToRefs(todoStore);

function logout() {
  loginStore.logout();
  router.push('/login');
}


const ref_ul = ref();
const ref_li = ref();
const ref_h1 = ref();

onMounted(() => {
  ref_h1.value.innerHTML = 'Updated title!';
  const ul = ref_ul.value;
  const li = ref_li.value[0];

  console.log(ul.clientWidth, li.clientWidth);
})

class Person {
  name: string;
  id: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.id = age;
  }

  sayHello = () => {
    console.log(`My name is ${this.name}, and I'm ${this.id} years old.`);
  }
}

const person = new Person("Alice", 25);
person.sayHello(); // My name is Alice, and I'm 25 years old.

const toggleTodo = (id: number) => todoStore.toggleTodo(id);
const addTodo = () => {
  if (state.newTodoLabel !== "") {
    todoStore.addTodo(state.newTodoLabel);
    state.newTodoLabel = "";
  }
};

import axios from 'axios'
import router from "@/router";

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
})

</script>

<template>
  <input v-model="state.newTodoLabel" />
  <button @click="addTodo">add</button>

  <input id="all" type="radio" v-model="filter" value="all" />
  <label for="all">すべて</label>
  <input id="finished" type="radio" v-model="filter" value="finished" />
  <label for="finished">完了済み</label>
  <input id="unfinished" type="radio" v-model="filter" value="unfinished" />
  <label for="unfinished">未完了</label>
  <h1 ref="ref_h1">todos</h1>

  <ul>
    <li
      :class="{ todo: true, finished: todo.finished }"
      :key="todo.label"
      v-for="todo in filteredTodos"
      v-text="todo.label"
      @click="toggleTodo(todo.id)"
    />
  </ul>

  <ul ref="ref_ul">
    <li
      ref="ref_li"
      v-for="n in 5"
      :key="n"
      v-text="n"
    ></li>
  </ul>
  <button @click="logout">ログアウト</button>
</template>

<style scoped>
.todo {
  user-select: none;
  cursor: pointer;
}
.todo.finished {
  text-decoration: line-through;
  color: gray;
}
</style>