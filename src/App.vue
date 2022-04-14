<template>
    <div>
        <TodoList/>
    </div>
</template>

<script lang="ts">
import TodoList from './components/TodoList/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
      TodoList
  }
});
</script>

<style>

</style>
