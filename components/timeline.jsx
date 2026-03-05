import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScienceIcon from '@mui/icons-material/Science';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import JavascriptIcon from '@mui/icons-material/Javascript';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const milestones = [
    {
        year: '2023 - September',
        icon: <SchoolIcon />,
        color: 'primary',
        title: 'Started Undergraduate Studies',
        description: 'Enrolled in Computer Science at Noida International University.',
    },
    {
        year: '2024 - May',
        icon: <MenuBookIcon />,
        color: 'secondary',
        title: 'Core Coursework',
        description: 'Completed Data Structures, Algorithms, and OOP with distinction.',
    },
    {
        year: '2024 - August',
        icon: <JavascriptIcon />,
        color: 'primary',
        title: 'Dived into Development',
        description: 'Built First YouTube Clone',
    },
    {
        year: '2025 - February',
        icon: <EmojiEventsIcon />,
        color: 'secondary',
        title: 'Won Hackathon',
        description: 'Won the CodeFest 2025 in the category of Web Development.',
    },
    {
        year: '2025 - October',
        icon: <ScienceIcon />,
        color: 'primary',
        title: 'First Project',
        description: 'Developed and deployed my first full-stack web application.',
    },
    {
        year: '2025 — Present',
        icon: <RocketLaunchIcon />,
        color: 'secondary',
        title: 'Open Source Contributions',
        description:
            'Actively contributing to open source projects and maintaining personal repositories.',
    },
];

export default function TimeLine() {
    return (
        <div>
            <span className="flex justify-center font-semibold text-2xl pb-20 text-neutral-500 uppercase tracking-widest">
                How It Started. Where It's Going.
            </span>
            <Timeline position="alternate">
                {milestones.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {item.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '30px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {item.title}
                            </Typography>
                            <Typography>{item.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}
