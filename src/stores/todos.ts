import { ref, computed } from 'vue'
import { defineStore } from "pinia";

type FilterType = "all" | "finished" | "unfinished";
type TODO = {
    id: number;
    label: string;
    finished: boolean;
}

// defineStore 関数を用いてストアを作成する
// 第一引数 "todos" はアプリケーション全体でストアを特定するためのユニークキー
export const useTodoStore = defineStore("todos", () => {
    // state.
    const filter = ref("all" as FilterType);
    const todos = ref([] as TODO[]);
    const nextId = ref(0);

    // getters.
    const findTodo: any = computed((id: number) => todos.value.find((todo) => todo.id === id));
    const finishedTodos = computed(() => todos.value.filter((todo: TODO) => todo.finished));
    const unfinishedTodos = computed(() => todos.value.filter((todo: TODO) => !todo.finished));
    const filteredTodos = computed(() => {
        switch (filter.value) {
            case "finished":
                return finishedTodos.value;
            case "unfinished":
                return unfinishedTodos.value;
            default:
                return todos.value;
        }
    });

    // actions.
    function addTodo(label: string) {
        todos.value.push({
            id: nextId.value++,
            label,
            finished: false,
        });
        console.log(todos.value, label);
    };

    function toggleTodo(id: number) {
        const todo: any = todos.value.find((todo: TODO) => todo.id === id);
        // const todo = findTodo.value(id);
        todo.finished =!todo.finished;
    };

    return {
        filter,
        todos,
        nextId,
        findTodo,
        finishedTodos,
        unfinishedTodos,
        filteredTodos,
        addTodo,
        toggleTodo,
    };
});