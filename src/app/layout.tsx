import './globals.css'
import type { Metadata } from 'next'
import {Container, Box} from '@mui/material'



export const metadata: Metadata = {
  title: 'Portfolio App',
  description: 'Zachary Thatcher, Senior Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Box sx={{bgcolor: "Beige"}}>
          <Container >
            {children}
          </Container>
        </Box>
      </body>
    </html>
  )
}
