// actions定义类型
import { IState, ITodo } from "@/typing";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS } from './actionsType'

interface ICtx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        console.log(todoList);
        commit(SET_TODO_LIST, todoList)
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id)
    },
    [SET_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_STATUS, id)
    },
}


