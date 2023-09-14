import { ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';


type SectionProps = {
  children: ReactNode
  title: string
}

export default function Section({children, title}: SectionProps) {
    return (
        <Box>
            <Typography variant="h2" sx={{ pt: 4, pb: 2 }}>
                {title}
            </Typography>
            {children}
        </Box>
    )
}