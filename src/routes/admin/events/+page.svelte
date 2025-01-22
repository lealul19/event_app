<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	let { data } = $props();
</script>

<div class="container">
	<h1>Events</h1>

	<a href="/admin/events/new">Create a new event</a>
</div>

{#each data.events as event (event.id)}
	<div class="box" transition:slide>
		
		<p>{event.id} - {event.title} - {event.locationName} - {event.start_date}</p>

		<form action="?/deleteEvent" method="POST" use:enhance>
			<input type="hidden" name="id" value={event.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
{/each}


<style>
	.box {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container a {
    text-decoration: none;
    color: #007bff;
    font-family: 'Georgia', serif;
    font-size: 22px;
}

.container h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 55px;
    animation: animateh1 3s infinite;
}

@keyframes animateh1 {
    0% {
        transform: scale(1.05);
    }
    25% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.15);
    }
    75% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1.05);
    }
}

.box {
    padding: 15px;
    margin: 20px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
    transition: 0.7s;
}

.box:hover {
    transform: scale(1.03);
}

.box p {
    font-family: 'Arial', sans-serif;
}

.box button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 8px 16px;
    background-color: #ff7f50;
    color: white;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s ease;
}

.box button:hover {
    background-color: #ff6347;
}

footer {
    height: 60px;
    width: 100%;
    background-color: #4caf50;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>