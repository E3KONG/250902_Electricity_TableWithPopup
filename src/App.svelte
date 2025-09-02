<script>
	import Header from './lib/Header.svelte';
	import Footer from './lib/Footer.svelte';
	import Table from './lib/Table.svelte';
	import { tableContent } from './assets/data-store.js';

	let title = "圖表標題";
	let subtitle;
	let footer = [
		"註：XXX",
		"資料來源：",
		"資料整理：",
		"設計："
	];
</script>

<Header {title} {subtitle}/>
<div class="chartContainer">
	<Table tableData={$tableContent} style={"base"}/>
</div>
<Footer {footer}/>
