/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Professional theme: black base + electric blue accent
		themes: [
			{
				pro: {
					"primary": "#2f7bff",
					"primary-content": "#ffffff",
					"secondary": "#5aa9ff",
					"secondary-content": "#020814",
					"accent": "#9fd0ff",
					"accent-content": "#020814",
					"neutral": "#111522",
					"neutral-content": "#e8eefc",
					"base-100": "#05070d",
					"base-200": "#0b0f1a",
					"base-300": "#141a2a",
					"base-content": "#e8eefc",
					"info": "#5aa9ff",
					"success": "#4ade80",
					"warning": "#fbbf24",
					"error": "#f87171",
					"--rounded-box": "1.25rem",
					"--rounded-btn": "999px",
					"--rounded-badge": "999px",
				},
			},
		],
		darkTheme: "pro",
		logs: false,
	},
}
