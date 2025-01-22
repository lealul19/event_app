<script>
	let { children } = $props();
</script>

<style>
	nav {
		background: linear-gradient(135deg, #6a0dad, #a45ee5);
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: space-around;
		margin: 0; 
	}

	a {
		color: white;
		text-decoration: none;
		font-weight: bold;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		position: relative; 
		transition: color 0.3s, transform 0.3s;
	}

	a::after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 0;
		height: 2px;
		background: white;
		transition: width 0.3s, left 0.3s;
	}

	a:hover {
		color: #e0e0e0; 
		transform: scale(1.05);
	}

	a:hover::after {
		width: 100%; 
		left: 0; 
	}

	ç
	a:focus {
		outline: 2px solid white;
		outline-offset: 2px;
	}
</style>

<nav>
	<a href="/admin/events">Events</a>
	<a href="/admin/locations">Location</a>
	<a href="/admin/categories">Categories</a>
</nav>

{@render children()}