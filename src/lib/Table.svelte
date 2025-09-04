<script>
	import { membersIdentityByName } from '../assets/data-store.js';

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
  const columns = tableData.length ? Object.keys(tableData[0]): [];

	function identityTooltipFor(name) {
		if (!name) return null;
		const match = $membersIdentityByName && $membersIdentityByName.get
			? $membersIdentityByName.get(name)
			: null;
		if (!match) return null;
		const parts = [match.name, match.party, match.group].filter(Boolean);
		return parts.join('\n');
	}
</script>

<table class={style}>
	<thead>
	<tr>
		<th>議題</th>
		<th colspan={tableData.length}>立法委員</th>
	</tr>
	</thead>
	<tbody>
	{#each columns as col}
		<tr>
			<th>{col}</th>
			{#each tableData as row}
				<td data-tooltip={
				    identityTooltipFor(row[col]) || undefined
				}>{row[col]}</td>
			{/each}
		</tr>
	{/each}
	</tbody>
</table>