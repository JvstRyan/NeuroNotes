import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ChakraProvider} from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { theme } from './theme.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
)


