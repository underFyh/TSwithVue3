
import { ITodo, TODO_STATUS } from "@/typing";
// 引入store的类型
import { Store, useStore } from 'vuex';
import { watch } from 'vue';
import {REMOVE_TODO, SET_STATUS, SET_TODO, SET_TODO_LIST} from "@/store/actionsType";

export interface IUseTodo {
    setTodo: (todo: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number, state: string) => void;
}

interface ILocalStorage {
    getLocalStorage: () => ITodo[];
    setLocalStorage: (todo: ITodo[]) => void;
}

// !useTodo所有方法集合
export function useTodo(): IUseTodo {
    const store: Store<any> = useStore();
    const { getLocalStorage, setLocalStorage }: ILocalStorage = useLocalStorage();

    // 会产生多次监听
    watch(() => {
        return store.state.list
    }, (todoList) => {
        console.log(1);
        setLocalStorage(todoList)
    })

    function setTodo(todoValue: string):void {
        // 该方法在Input组件中使用
        const todo: ITodo = {
            id: new Date().getTime(),
            content: todoValue,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo);
        // setLocalStorage(store.state.list);
    }

    function setTodoList() {
        // 每次刷新的时候从storage获取数据存到store
        let todoList:ITodo[] = getLocalStorage()
        store.dispatch(SET_TODO_LIST, todoList);
    }

    function removeTodo(id: number) {
        store.dispatch(REMOVE_TODO, id);
        // setLocalStorage(store.state.list);
    }

    function setStatus(id: number) {
        store.dispatch(SET_STATUS, id);
        // setLocalStorage(store.state.list);
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus
    }

}

// 每一次更新都需要将数据保存到localStorage中去
function useLocalStorage():ILocalStorage {
    function getLocalStorage() {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocalStorage(todoList: ITodo[]) {
       localStorage.setItem('todoList', JSON.stringify(todoList));
    }


    return  {
        getLocalStorage,
        setLocalStorage
    }
}


