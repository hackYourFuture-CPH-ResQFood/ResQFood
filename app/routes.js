const ICON = {
	HOME: (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M3 10.5 12 3l9 7.5" />
			<path d="M5 9.5V21h5v-6h4v6h5V9.5" />
		</svg>
	),
	MAP: (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
			<path d="M9 3v15" />
			<path d="M15 6v15" />
		</svg>
	),
	STORES: (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M4 10h16l-1.5-6h-13L4 10Z" />
			<path d="M6 10v10h12V10" />
			<path d="M9 20v-5h6v5" />
		</svg>
	),
	FAVORITE: (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="m12 21-7-6.7C1 10.5 3.5 4 8.8 5.2 10.3 5.5 11.4 6.5 12 8c.6-1.5 1.7-2.5 3.2-2.8C20.5 4 23 10.5 19 14.3L12 21Z" />
		</svg>
	),
	INSTORE: (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
			<path d="M4 21a8 8 0 0 1 16 0" />
		</svg>
	),
};

export const navigationItems = [
	{
		name: "Home",
		icon: ICON.HOME,
	},
	{
		name: "Map",
		icon: ICON.MAP,
	},
	{
		name: "Stores",
		icon: ICON.STORES,
	},
	{
		name: "Favorite",
		icon: ICON.FAVORITE,
	},
	{
		name: "InStore",
		icon: ICON.INSTORE,
	},
];
