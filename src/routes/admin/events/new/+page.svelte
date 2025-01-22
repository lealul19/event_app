<script>
	import { enhance } from '$app/forms';
    let {data} = $props();
</script>

<h1>Create a new event</h1>

<div class="container">
	<form method="POST" action="?/createEvent" use:enhance>
		<label class="label1" for="title">Title</label>
		<input type="text" placeholder="Title" name="title" />

		<label class="label2" for="description">Description</label>
		<textarea placeholder="Description" name="description"></textarea>

        <label for="url">URL</label>
        <input type="text" placeholder="URL" name="url">

        <label for="startDate">Start Date</label>
        <input type="date" name="startDate">

        <label for="endDate">End Date</label>
        <input type="date" name="endDate">

        <label for="startTime">Start Time</label>
        <input type="time" name="startTime">

        <label for="location">Location</label>
        <select name='locationId'>
           
            {#each data.locations as location (location.id)}
            <option value="{location.id}">{location.name}</option>
            {/each}
        </select>

		<label for="location">Categorie</label>
		<select name='categorieID'>
            
            {#each data.categories as categorie (categorie.id)}
            <option value="{categorie.id}">{categorie.name}</option>
            {/each}
        </select>
 

		<button type="submit">Create event</button>
	</form>
</div>

<style>
h1 {
    font-size: 36px;
    color: #2a2b55;
    text-align: center;
    margin-bottom: 24px;
    font-family: 'Poppins', sans-serif;
}

form {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f4f4f4;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

label {
    font-size: 18px;
    color: #555;
    margin-bottom: 8px;
}

input, textarea, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    background-color: #fff;
}

input:focus, textarea:focus, select:focus {
    border-color: #00788c;
    box-shadow: 0 0 8px rgba(0, 120, 140, 0.2);
}

button {
    background-color: #00788c;
    color: white;
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background-color: #005f6b;
}


</style>