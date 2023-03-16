<script lang="ts">
	import google_icon from "@/lib/assets/google.svg";
</script>

<div class="h-full flex gap-3 flex-col items-center">
	<div class="flex-1 flex items-center justify-center">
		<form action="?/signinWithGoogle" method="POST">
			<button type="submit" class="flex gap-1 bg-white rounded-md p-3 text-black">
				<img src={google_icon} alt="google_logo" class="w-6 h-6" />
				Sign in with Google
			</button>
		</form>
	</div>
</div>
