// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Geist Mono",
			cssVariable: "--font-main",
		},
	],
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
