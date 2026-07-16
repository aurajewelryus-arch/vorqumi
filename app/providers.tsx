'use client'

import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="vorqumi-theme"
    >
      {children}
    </ThemeProvider>
  )
}