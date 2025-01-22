<script>
	import {flip} from 'svelte/animate';
	let { data } = $props();
	let filteredEvents = $state(data.events);
	let selectedCategory = $state('all');

	function filterEvents(){
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter(e => e.category_id === selectedCategory.id);
		}
	}
</script>
<div>
	{#if data.user}

	<p>Welcome back,{data.user.username}</p>

	<form action="/logout?/logout" method="POST">
		<button class="btn logout" type="submit">Logout</button>
	</form>
	<form action="/logout?/deleteAccount" method="POST">
		<button class="btn logout" type="submit">Delete</button>
	</form>
	

	{:else}
	<p>
		You are not logged in, 
	</p>
	<p>
		<a href="/login">login</a>
		or
		<a href="/register">register</a>
	</p>
	
	{/if}
	</div>

<h1>My Lea App</h1>
<p>Here are the correct events</p>

<select name="" id="" bind:value={selectedCategory} onchange={filterEvents}>
	<option value="all">All</option>
	{#each data.categories as category}
		<option value={category}>{category.name}</option>
	{/each}
</select>

{#each filteredEvents as event (event.id)}
	<p animate:flip>{event.id} {event.title}</p>
{/each}

<style>
	body {
	  background-color: #f3f3f3;
	  font-family: Arial, sans-serif;
	  margin-left: 20px; 
	}
  
	h1 {
	  color: #6a4c9c; 
	}
  
	p {
	  color: #4b2e83; 
	  font-size: 18px;
	}
  
	select {
	  background-color: #e0c3fc; 
	  color: #6a4c9c;
	  padding: 10px;
	  border-radius: 5px;
	  border: 1px solid #6a4c9c;
	  width: 200px;
	  margin-top: 20px;
	}
  
	option {
	  background-color: #f1e7fc; 
	  color: #6a4c9c;
	}
  
	select:focus {
	  outline: none;
	  box-shadow: 0 0 10px rgba(106, 76, 156, 0.5);
	}
  </style>

  