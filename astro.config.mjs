// @ts-check
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Geist Mono",
			cssVariable: "--main-font",
		},
	],
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
	},
})
