<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
</script>

<header>
<h1>Locations</h1>
<a href="/admin/locations/new">Create a new location!</a>
</header>

{#if form && !form.success}
<Warning message={form.message}/>
{/if}

{#each data.locations as location (location.id)}
	<div class="box" transition:slide>
		<p>{location.id} {location.name}</p>

		<form action="?/deleteLocation" method="POST" use:enhance>
			<input type="hidden" name="id" value={location.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}

<style>
	h1 {
    font-size: 40px;
    text-align: center;
    color: #333;
    margin-bottom: 25px;
    font-family: 'Arial', sans-serif;
}

.warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    padding: 12px 18px;
    margin: 25px auto;
    text-align: center;
    border-radius: 8px;
    max-width: 450px;
}

.box {
    background-color: #fafafa;
    border: 1px solid #ccc;
    padding: 25px;
    border-radius: 12px;
    margin: 20px auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.box:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

p {
    font-size: 20px;
    color: #444;
    font-family: 'Open Sans', sans-serif;
}

button {
    background-color: #e74c3c;
    color: #fff;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}

a {
    background-color: #007bff;
    color: #fff;
    padding: 12px 22px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

a:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}


</style>