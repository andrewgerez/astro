import { defineConfig } from 'astro/config';
import installedIntegration from '@astrojs/react';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [installedIntegration(), react(), tailwind()]
});