<h1>Create a new Location!</h1>

<form method="POST" action="?/createLocation">
	<label for="title">"Title"</label>
	<input type="text" placeholder="Title" name="name" />

	<label for="description">"Description"</label>
	<textarea placeholder="Description" name="Description"></textarea>

    <label for="startDate">Start Date</label>
    <input type="date" name="startDate"/>



    <label for="endDate">End Date</label>
    <input type="date" name="endDate"/>

	<button type="submit">Create Event</button>
</form>
<style>

h1 {
    font-size: 40px;
    color: #3a3f91;
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
}

form {
    max-width: 650px;
    margin: 0 auto;
    padding: 35px;
    background: #f9f9f9;
    border-radius: 14px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

label {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
    color: #444;
}

input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 24px;
    border: 1px solid #bbb;
    border-radius: 8px;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

input:focus, textarea:focus {
    border-color: #0d9f98;
    outline: none;
    background-color: #e5f7f4;
}

button {
    background-color: #0d9f98;
    color: #fff;
    font-size: 20px;
    padding: 12px 18px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #087d74;
    transform: scale(1.07);
}

</style>

