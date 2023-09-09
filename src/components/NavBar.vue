<script setup>
	import { getAuth, signOut } from 'firebase/auth';

	import useUserStore from '../stores/user.js';

	const user = useUserStore();

	const handleSignOut = () => {
		signOut(getAuth()).then(() => {
			user.$reset();
		}).catch((error) => {
			console.log(error);
		});
		router.push('/');
	}
</script>

<template>
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<span class="navbar-brand" href="#">:D</span>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to='/' class="nav-link active" aria-current="page"> Home </router-link>
					</li>
				</ul>
				<div class="dropdown">
					<a class="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Account
					</a>

					<ul class="dropdown-menu">
						<li><router-link to="/register" class="dropdown-item"> Register </router-link></li>
						<li v-if="user.email"><button @click="handleSignOut"> Logout </button></li>
						<li v-else><router-link to="/sign-in" class="dropdown-item"> Login </router-link></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>
