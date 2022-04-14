interface ITodo {
    id: number;
    content: string;
    // 此时状态要使用枚举来进行规范
    status: TODO_STATUS;
}



enum TODO_STATUS {
    WILLDO = 'willdo',
    FINISHED = 'finished',
}

// 并且定义vuex state类型是一个ITodo的数组
interface IState {
    list: ITodo[];
}


export {
    ITodo,
    IState,
    TODO_STATUS
}
