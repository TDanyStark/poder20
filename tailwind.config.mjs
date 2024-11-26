/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rosado-wh-abbott': '#d787b5',
				'morado-wh-abbott': '#772583',
			},
			backgroundImage: {
        'abbott-gradient-wh': 'linear-gradient(45deg, #5b2094, #a950a5 55%, #e99ab0);',
      },
      fontFamily: {
        georgia : ['Georgia', 'ui-serif'],
        brandon: ['Brandon', 'ui-serif']
      }
		},
	},
	plugins: [],
}
