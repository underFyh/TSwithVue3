<template>
    <input type="text"
           v-model="todoValue"
           @keyup="setTodoValue"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodo } from "@/components/TodoList/hooks";

export default defineComponent({
    name: 'TodoInput',
    setup() {
        // !ref类型使用泛型来定义
        const todoValue = ref<string>('');
        // 使用自定义hooks
        const { setTodo } = useTodo();

        const setTodoValue = (e: KeyboardEvent): void => {
            // 必须使用value来读取值
            let val = todoValue.value;
            if (e.keyCode === 13 && val.trim().length > 0) {
                console.log(val);
                setTodo(val);
                todoValue.value = '';
            }
        }

        return {
            todoValue,
            setTodoValue
        }
    }
});
</script>

<style>

</style>
