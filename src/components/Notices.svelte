<div class="notices {positionClass}" bind:this={container} />

<script context="module">
	export const notices = {}
</script>

<script>
	export let position = 'top'

	let container
	let positionClass
	$: positionClass = position === 'top' ? 'is-top' : 'is-bottom'

	export function insert(el) {
		container.insertAdjacentElement('afterbegin', el)
	}
</script>
