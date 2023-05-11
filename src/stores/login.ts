import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('login', () => {
    // state.
    const isAuthenticated = ref(false);

    // actions.
    function login(name: string, password: string) {
        if(name === 'kanon' && password === 'harada') {
            isAuthenticated.value = true;
        } else {
            isAuthenticated.value = false;
        }
    }

    function logout() {
        return isAuthenticated.value = false;
    }

    return {
        isAuthenticated,
        login,
        logout,
    };    
},
{
    persist: true,
}
)