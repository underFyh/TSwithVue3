<template>
    <div>
        <input
            type="checkbox"
            :checked="item.status === FINISHED"
            @change="setStatus(item.id)"
        />
        <span>{{ item.content }}</span>
        <button @click="removeTodo(item.id)">删除</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {ITodo, TODO_STATUS} from "@/typing";

export default defineComponent({
    name: 'TodoListItem',
    props: {
      item: Object as  PropType<ITodo>
    },
    setup(props, { emit }) {
        const statusState = {
            WILLDO: TODO_STATUS.WILLDO,
            FINISHED: TODO_STATUS.FINISHED
        }

        const removeTodo = (id: number):void => {
            emit('removeTodo', id)
        }

        const setStatus = (id: number):void => {
            emit('setStatus', id)
        }

        return {
            ...statusState,
            removeTodo,
            setStatus
        }
    }
});
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
