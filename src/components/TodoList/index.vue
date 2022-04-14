<template>
    <div>
        <TodoInput/>
        <TodoList :todoList="todoList"/>
    </div>
</template>

<script lang="ts">
import TodoInput from './Subs/Input/index.vue';
import TodoList from './Subs/List/index.vue';
import { defineComponent, onMounted, computed } from 'vue';
import { Store, useStore } from 'vuex';
import { useTodo, IUseTodo } from "@/components/TodoList/hooks";

export default defineComponent({
    name: 'TodoListWrap',
    components: {
        TodoInput,
        TodoList
    },
    setup() {
        const { setTodoList }:IUseTodo  = useTodo();
        const store:Store<any> = useStore();
        onMounted(() => {
            setTodoList();
        })

        return {
            todoList: computed(() => store.state.list)
        }
    }
});
</script>

<style>

</style>
