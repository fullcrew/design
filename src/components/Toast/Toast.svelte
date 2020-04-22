<Notice {...filterProps($$props)}>
	<div class="toast {type} {newBackground}" role="alert">
		<div class="text">
			<!-- NOTE: this extra div is for dynamic text styling with background-clip -->
			{@html message}
		</div>
	</div>
</Notice>

<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { fly, fade } from 'svelte/transition'
	import Notice, { filterProps } from '../Notice.svelte'

	/** Text or html message for toast
	 * @svelte-prop {String} message
	 * */
	export let message

	/** Duration toast will remain on screen
	 * @name duration
	 * @kind member
	 * @svelte-prop {Number} [duration=2000]
	 * */

	/** Where the toast will show on the screen
	 * @name position
	 * @kind member
	 * @svelte-prop {String} [position=is-top]
	 * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
	 * */

	/** Type (color)
	 * @svelte-prop {String} [type=is-dark]
	 * @values $$colors$$
	 * */
	export let type = 'is-dark'

	/** Background type (any of the Bulma <code>has-background-</code> classes will work)
	 * @svelte-prop {String} [background]
	 * @values <code>has-background-*</code>
	 * */
	export let background = ''

	$: newBackground = background || type.replace(/^is-(.*)/, 'has-background-$1')
</script>
