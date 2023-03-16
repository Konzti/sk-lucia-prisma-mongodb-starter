<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="flex flex-col p-3">
	{#if data.user}
		<h1 class="my-3 text-2xl">Hi, {data.user.name}</h1>
		<img src={data.user.image} alt="user_avatar" class="w-14 h-14 rounded-full" />
	{:else}
		<h1 class="my-3 text-2xl">Hi, stranger</h1>
	{/if}
</div>
