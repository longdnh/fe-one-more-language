// Type declarations for environment variables
// Add new env vars here to get full TypeScript autocompletion

declare namespace NodeJS {
  interface ProcessEnv {
    // App
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_APP_NAME: string
    readonly NEXT_PUBLIC_APP_URL: string

    // API
    readonly NEXT_PUBLIC_API_URL: string

    // Auth (server-side only)
    readonly NEXTAUTH_SECRET?: string
    readonly NEXTAUTH_URL?: string
  }
}
