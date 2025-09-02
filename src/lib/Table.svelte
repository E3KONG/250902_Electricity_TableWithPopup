<script>
	export let tableData = [
		{
			vitae : "dolorem",
			lectus : "ipsum",
			quisquam : "quia"
		},
		{
			vitae : "amet",
			lectus : "consectetur",
			quisquam : "adipisci"
		}
	];
	export let style;

	const columns = tableData.length
		? Object.keys(tableData[0]).filter((k) => k !== "Tooltip")
		: [];
</script>

<table class={style}>
	<thead>
	<tr>
		{#each columns as columnHeading}
			<th>{columnHeading}</th>
		{/each}
	</tr>
	</thead>
	<tbody>
	{#each tableData as row}
		<tr>
			{#each columns as col}
				<td data-tooltip={row.Tooltip ?? undefined}>{row[col]}</td>
			{/each}
		</tr>
	{/each}
	</tbody>
</table>