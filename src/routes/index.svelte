<svelte:head>
	<title>Makers Club</title>
</svelte:head>
<div>
	<div class="main">
		<h1 class="main-heading">
			A Community within <a target="_blank" href="https://www.scesoc.ca">SCESoc</a> that Learns by Making
		</h1>
		<p>
			We're a community that comes together to work on personal and group projects. We support,
			provide feedback and share knowledge between us.
		</p>
		<p>
			Anyone can join! To join the Makers Club, type <code>#assign MAKER</code> in the
			<code>#roles</code>
			channel on
			<code><a target="_blank" href="https://www.scesoc.ca/discord">SCESoc's Discord</a></code>.
			Then you will get access to all the <code>Makers Club</code> channels on there.
		</p>
		<p>
			We'll be meeting up on <code
				><a target="_blank" href="https://www.scesoc.ca/discord">SCESoc's Discord</a></code
			>
			every <code>Saturday @11:00am</code>
		</p>
	</div>

	<div class="main">
		<h1>What is the Makers Club?</h1>
		<p>
			Traditionally SCESoc has hosted workshops to help members in the society learn skills outside
			of class. This year, we wanted to also focus on projects and build a community of makers.
			Projects are a great way to learn new skills and to get involved in the community. It is also
			very valued by companies in the industry.
		</p>
		<p>
			This year we're trying to bring people together to help motivate each other and learn by
			making. SCESoc is also going to host it's own project for the year to which anyone can
			contribute to and learn from.
		</p>
	</div>

	<div class="main">
		<h1>Things we do</h1>
		<ul class="grid">
			<li class="item">
				<h3>Meet up weekly on Discord to share what we're working on</h3>
			</li>
			<li class="item">
				<h3>Offer feedback and support</h3>
			</li>
			<li class="item">
				<h3>Hold each other accountable</h3>
			</li>
			<li class="item">
				<h3>Share knowledge</h3>
			</li>
		</ul>
	</div>
</div>

<style>
	p {
		font-size: 1.2rem;
	}

	.main {
		text-align: center;
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 3rem;
		margin: 0 auto;
		padding: 3rem 0;
	}

	.item {
		display: block;
		background: rgb(233, 234, 236);
		border-radius: 1rem;
		padding: 1rem 2rem;
		text-align: center;
		box-shadow: 0.5rem 0.5rem black, -0.3rem -0.3rem var(--scesoc-yellow);
	}

	.main-heading {
		font-size: 3em;
		font-weight: 900;
	}

	@media (min-width: 720px) {
		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			margin: 0 auto;
		}

		.main-heading {
			font-size: 5em;
			font-weight: 800;
		}

		.main {
			min-height: 80vh;
		}
	}
</style>
