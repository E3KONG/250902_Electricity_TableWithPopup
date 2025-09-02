import { writable } from 'svelte/store';

export let tableContent = writable([
	{
		"核能發展" : "Maria",
		"Favorite Subject" : "Math",
		"Age" : 14,
		"Subject" : "Math",
		"Tooltip": "This is a tooltip"
	},
	{
		"核能發展" : "Jose",
		"Favorite Subject" : "Science",
		"Age" : 13,
		"Subject" : "Science",
		"Tooltip": "This is also a tooltip"
	},
]);

