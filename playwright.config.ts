import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

require('dotenv').config()

export default defineConfig<TestOptions>({
  timeout: 40000,
  globalTimeout: 60000,
  // expect: {
  //   timeout: 30000
  // },



  // retries: process.env.CI ? 2 : 0,
  reporter: [['allure-playwright'],
             ['html']
            ],

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    globalURL: 'https://demo.ospree.io/',
    baseURL: process.env.DEV === '1' ? 'https://analytics-v3.onrender.com/'
      : process.env.STAGING == '1' ? 'https://demo.ospree.io/'
        : 'https://app.ospree.io/login',

    trace: 'on-first-retry',
    // actionTimeout: 30000,
    // navigationTimeout: 30000,

  },

  projects: [ //thiS is not about the browser

    {
      name: 'chrome',
      use:
      {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        baseURL: 'https://analytics-v3.onrender.com/'
      }
    },
    {
      name: 'firefox',
      use:
      {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        baseURL: 'https://analytics-v3.onrender.com/'
      }
    },
    {
      name: 'demo',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://demo.ospree.io/'
      },
    },
  ],
});
