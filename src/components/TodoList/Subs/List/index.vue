<template>
    <div>
        <h1>Todo-List</h1>
        <ListItem
            v-for="item of todoList"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ListItem from './ListItem.vue'
import {ITodo} from "@/typing";
import {IUseTodo, useTodo} from "@/components/TodoList/hooks";

export default defineComponent({
    name: 'TodoList',
    props: {
        todoList: Array as PropType<ITodo[]>
    },
    components: {
        ListItem
    },
    setup() {
        // hooks解构并且返回给视图使用
        const { removeTodo, setStatus }:IUseTodo = useTodo();
        return {
            removeTodo,
            setStatus
        }
    }
});
</script>

<style>

</style>
