<script lang="ts">
	import "../app.css";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="flex flex-col w-full max-w-[1900px] mx-auto h-screen">
	<header class="flex justify-between items-center p-3 bg-black ">
		<div>Logo</div>
		<div class="flex gap-3 text-xl py-3">
			<a href="/">Home</a>
		</div>
		{#if data.session}
			<form method="POST" action="/logout">
				<button type="submit" class="p-3 bg-red-400 rounded-md">Logout</button>
			</form>
		{:else}
			<a href="/signin" class="p-3 rounded-md bg-blue-600">Login</a>
		{/if}
	</header>
	<div class="flex-1 flex flex-col">
		<slot />
	</div>
	<footer class="p-3 bg-black">This is the footer</footer>
</div>
