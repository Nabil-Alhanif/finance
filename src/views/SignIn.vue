<script setup>
	import { ref } from 'vue';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { useRouter } from 'vue-router';

	import useUserStore from '../stores/user.js';

	const user = useUserStore();

	const email = ref('');
	const password = ref('');
	const errMsg = ref();

	const router = useRouter();

	const signIn = () => {
		signInWithEmailAndPassword(getAuth(), email.value, password.value)
		.then((data) => {
			console.log('Successfully logged in!');
			user.$patch({
				displayName: data.user.displayName,
				email: data.user.email,
			});
			router.push('/');
		})
		.catch(error => {
			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'Invalid email';
					break;
				case 'auth/user-not-found':
					errMsg.value = 'No account with that email was found';
					break;
				case 'auth/wrong-password':
					errMsg.value = 'Incorrect password';
					break;
				default:
					errMsg.value = 'Email or password was incorrect';
					break;
			}
		});
	};
</script>

<template>
	<h1> Login to Your Account </h1>
	<p> <input type='text' placeholder='Email' v-model='email' /> </p>
	<p> <input type='password' placeholder='Password' v-model='password' /> </p>
	<p v-if='errMsg'> {{ errMsg }} </p>
	<p> <button @click='signIn'> Submit </button> </p>
</template>
