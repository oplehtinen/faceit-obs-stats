import type { PlaywrightTestConfig } from '@playwright/test';

const PORT = process.env.PORT ? Number(process.env.PORT) : 4173;

const config: PlaywrightTestConfig = {
    testDir: 'e2e',
    timeout: 60_000,
    use: {
        baseURL: `http://localhost:${PORT}`,
        viewport: { width: 1920, height: 1080 },
        colorScheme: 'dark',
        screenshot: 'off',
        video: 'off'
    },
    webServer: [
        {
            command: 'npm run build && npm run preview -- --port ' + PORT,
            url: `http://localhost:${PORT}`,
            reuseExistingServer: !process.env.CI
        }
    ]
};

export default config;
