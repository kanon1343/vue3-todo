import { defineStore } from "pinia";

export const useLoginStore = defineStore('login', () => {
    // state.
    const name: string = '';
    const password: string = '';
    const OK: boolean = true;

    // actions.
    function login(name: string, password: string) {
        console.log(name, password);
        return OK;
    }

    return {
        name,
        password,
        login,
    };    
})