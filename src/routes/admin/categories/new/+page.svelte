<script>
	import { enhance } from '$app/forms';
    let {data} = $props();
</script>

<h1>Create a new Categorie</h1>

<div class="container">
	<form method="POST" action="?/createCategorie" use:enhance>

		<label class="label2" for="name">name</label>
		<textarea placeholder="Name" name="name"></textarea>

    
 
		<button type="submit">Create Categorie</button>
	</form>
</div>
<style>
h1 {
    font-size: 34px;
    color: #4b5d67;
    text-align: center;
    margin-bottom: 28px;
    font-weight: 800;
    font-family: 'Arial', sans-serif;
}

form {
    max-width: 550px;
    margin: 0 auto;
    padding: 36px;
    background-color: #f4f7fa;
    border-radius: 12px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    font-family: 'Verdana', sans-serif;
}

label {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #444;
    font-family: 'Verdana', sans-serif;
}

textarea {
    padding: 14px;
    font-size: 18px;
    border: 2px solid #ccc;
    border-radius: 6px;
    margin-bottom: 18px;
    font-family: 'Verdana', sans-serif;
}

textarea:focus {
    border-color: #6c9d9b;
    outline: none;
}

button {
    background-color: #4d96a5;
    color: #fff;
    padding: 14px 24px;
    font-size: 18px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 700;
    font-family: 'Arial', sans-serif;
}

button:hover {
    background-color: #3b7f7a;
    transform: scale(1.05);
}

button:active {
    transform: scale(1);
}
</style>