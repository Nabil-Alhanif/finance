<script setup>
	import { ref, watchEffect } from 'vue' // used for conditional rendering
	import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const isLoggedIn = ref(true)

	// runs after firebase is initialized
	onAuthStateChanged(getAuth(),function(user) {
			if (user) {
				isLoggedIn.value = true // if we have a user
			} else {
				isLoggedIn.value = false // if we do not
			}
	})

	const handleSignOut = () => {
		signOut(getAuth())
		router.push('/')
	}
</script>


<template>
	<div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <span v-if="isLoggedIn"> 
        <button @click="handleSignOut"> Logout </button> 
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
