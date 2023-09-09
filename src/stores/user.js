import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
	state: () => ({
		displayName: null,
		email: null,
	}),
	getters: {
	},
	actions: {
	},
});

export default useUserStore;
