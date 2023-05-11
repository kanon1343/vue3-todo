import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('login', () => {
    // state.
    const isAuthenticated = ref(true);

    // actions.
    function login(name: string, password: string) {
        if(name === 'kanon' && password === 'harada') {
            return isAuthenticated.value = true;
        } else {
            return isAuthenticated.value = false;
        }
    }

    return {
        isAuthenticated,
        login,
    };    
})