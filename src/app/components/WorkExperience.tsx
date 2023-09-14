import React, { FC } from "react";
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

interface WorkExperienceProps {
    title: string;
    timespan: string;
    summary: string;
    achievements: string[]
}

const WorkExperience: FC<WorkExperienceProps> = ({title, timespan, summary, achievements}) => {
    return (
    <section>
    <Typography variant="h4" sx={{pt: 3}}>
      {title}
    </Typography>
    <Typography variant="h6">
      {timespan} 
    </Typography>
    <Typography variant="body1">
        {summary}
    </Typography>
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {achievements.map((element, idx) => (
            <ListItem sx={{ display: 'list-item', py: 0.1}} key={idx}> <ListItemText primary={element}/> </ListItem>
        ))}
    </List>
    </section>
)}

export default WorkExperience

