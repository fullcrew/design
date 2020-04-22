<label ref="label" class="switch {size}" bind:this={label}>
	<input type="checkbox" bind:checked bind:this={input} on:input on:click />

	<div class="check {newBackground}" />

	<span class="control-label">
		<slot />
	</span>
</label>

<script>
	/** Binding for whether the switch to "on" or not
	 * @svelte-prop {Any} [checked=false]
	 * */
	export let checked = false

	/** Type (color of control)
	 * @svelte-prop {String} [type] - Type (color of control)
	 * @values $$colors$$
	 * */
	export let type = 'is-primary'

	/** Size of switch
	 * @svelte-prop {String} [size]
	 * @values $$sizes$$
	 * */
	export let size = ''

	/** Whether switch is disabled or not
	 * @svelte-prop {Boolean} [disabled=false]
	 * */
	export let disabled = false

	let label
	let input

	$: newBackground =
		(type && type.replace(/^is-(.*)/, 'has-background-$1')) || ''

	$: {
		if (input) {
			if (disabled) {
				label.setAttribute('disabled', 'disabled')
				input.setAttribute('disabled', 'disabled')
			} else {
				label.removeAttribute('disabled')
				input.removeAttribute('disabled')
			}
		}
	}
</script>
