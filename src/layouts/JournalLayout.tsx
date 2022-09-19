import { Paper, Typography } from '@mui/material';
import { LayoutProps } from './LayoutProps';
import { TimeAgo } from '../components/TimeAgo';
import { References } from '../components/References';
import { ReadingTime } from '../components/ReadingTime';

export const JournalLayout: React.FC<LayoutProps> = ({ children, page }) => {
  const { title, createdAt, content, references } = page;

  return (
    <Paper
      elevation={0}
      sx={{
        margin: 2,
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <TimeAgo ago={createdAt} />
      <ReadingTime content={content} />
      {children}


      <References references={references} />
    </Paper>
  );
};