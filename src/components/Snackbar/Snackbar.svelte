<Notice {...props} bind:this={notice} transitionOut={true}>
	<div
		class="snackbar {background}"
		class:has-background-dark={!background}
		role="alert"
	>
		<div class="text">
			<!-- NOTE: this extra div is for dynamic text styling with background-clip -->
			{@html message}
		</div>

		{#if actionText}
			<div class="action" on:click={action}>
				<button class="button {newType}">{actionText}</button>
			</div>
		{/if}
	</div>
</Notice>

<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { fly, fade } from 'svelte/transition'
	import Notice, { filterProps } from '../Notice.svelte'

	/** Text or html message for snackbar
	 * @svelte-prop {String} message
	 * */
	export let message

	/** Duration snackbar will remain on screen
	 * @svelte-prop {Number} [duration=3500]
	 * */
	export let duration = 3500

	/** Where the snackbar will show on the screen
	 * @svelte-prop {String} [position=is-bottom-right]
	 * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
	 * */
	export let position = 'is-bottom-right'

	/** Type (color)
	 * @svelte-prop {String} [type=is-dark]
	 * @values $$colors$$
	 * */
	export let type = 'is-primary'

	/** Background type (any of the Bulma <code>has-background-</code> classes will work)
	 * @svelte-prop {String} [background]
	 * @values <code>has-background-*</code>
	 * */
	export let background = ''

	export let actionText = 'OK'

	export let onAction = () => {}

	let notice

	function action() {
		Promise.resolve(onAction()).then(() => notice.close())
	}

	onMount(() => {
		if (typeof onAction !== 'function')
			throw new Error(`onAction ${onAction} is not a function`)
	})

	// $: newBackground = background
	$: newType = type && type.replace(/^is-(.*)/, 'has-text-$1')
	$: props = { ...filterProps($$props), position, duration }
</script>
