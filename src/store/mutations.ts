import {REMOVE_TODO, SET_STATUS, SET_TODO, SET_TODO_LIST} from "@/store/actionsType";
import {IState, ITodo, TODO_STATUS} from "@/typing";

export default  {
    [SET_TODO](state: IState, todo: ITodo): void {
        // state.list.unshift(todo);
        state.list = [todo, ...state.list]
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item) => {
            return item.id !== id
        })
    },
    [SET_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item) => {
            if (item.id === id) {
                item.status = (item.status === TODO_STATUS.FINISHED ? TODO_STATUS.WILLDO : TODO_STATUS.FINISHED)
            }
            return item;
        })
    }
}
