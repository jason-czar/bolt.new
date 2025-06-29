import { env } from 'node:process';

export function getAPIKey(cloudflareEnv?: any) {
  /**
   * For Netlify deployment, prioritize process.env
   * The `cloudflareEnv` is only used when deployed on Cloudflare or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.ANTHROPIC_API_KEY || 
         env.VITE_ANTHROPIC_API_KEY || 
         cloudflareEnv?.ANTHROPIC_API_KEY;
}