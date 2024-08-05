<template>
  <h1>todos:</h1>
  <ul>
    <template v-if="pending">
      <li>Loading...</li>
    </template>
    <template v-else>
      <template v-if="todos?.length">
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
      </template>
      <template v-else>
        <span>표시할 todo가 없습니다.</span>
      </template>
    </template>
    <li>
      <input type="text" v-model="newTodo" :id="id" class="border" />
      <button @click="addTodo()">전송</button>
    </li>
  </ul>
</template>
<script setup>
const id = useId();
const { data: todos, pending, error, refresh } = await useFetch(`/api/todos`);

const newTodo = ref(null);
const addTodo = async () => {
  await $fetch(`/api/todos`, {
    method: "POST",
    body: {
      text: newTodo.value,
      created_at: new Date().toISOString(),
    },
  });
  newTodo.value = "";
  refresh();
};
</script>

<style lang="postcss" scoped></style>
