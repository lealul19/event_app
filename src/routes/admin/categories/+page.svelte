<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';
	let { data,form } = $props();
</script>

<div class="container">
	<h1>Categorie</h1>

	<a href="/admin/categories/new">Create a new categorie</a>
</div>
 
{#if form && !form.success}
	<div class="warning">
		<Warning message ={form.message}/>
	</div>
{/if}

{#each data.categories as categorie (categorie.id)}
	<div class="box" transition:slide>
		<p>{categorie.id} - {categorie.name}</p>

		<form action="?/deleteCategorie" method="POST" use:enhance>
			<input type="hidden" name="id" value={categorie.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}
<style>
.box {
    border: 1px solid #f2f2f2;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.1);
    transition: 0.6s;
    background-color: #fafafa;
}

.box:hover {
    transform: scale(1.05);
    box-shadow: 5px 8px 15px rgba(0, 0, 0, 0.2);
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #e8f0f2;
    padding: 20px;
    border-radius: 8px;
}

.container a {
    text-decoration: none;
    color: #ff6347;
    font-family: 'Courier', monospace;
    font-size: 22px;
    transition: color 0.3s;
}

.container a:hover {
    color: #ff4500;
}

.container h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 55px;
    color: #2e3b4e;
    animation: animateh1 3s infinite;
}

@keyframes animateh1 {
    0% {
        transform: scale(1.05);
    }
    25% {
        transform: scale(1.12);
    }
    50% {
        transform: scale(1.18);
    }
    75% {
        transform: scale(1.12);
    }
    100% {
        transform: scale(1.05);
    }
}

.box p {
    font-family: 'Georgia', serif;
    font-size: 18px;
    color: #444;
    line-height: 1.6;
}

.box button {
    font-family: 'Arial', sans-serif;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.box button:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

footer {
    height: 70px;
    width: 100%;
    background-color: #32cd32;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Tahoma', sans-serif;
    color: white;
    font-size: 18px;
}

</style>

