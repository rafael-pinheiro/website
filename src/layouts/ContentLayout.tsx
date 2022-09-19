import { Paper, Typography } from '@mui/material';
import { LayoutProps } from './LayoutProps';
import { References } from '../components/References';
import { ReadingTime } from '../components/ReadingTime';

export const ContentLayout: React.FC<LayoutProps> = ({ children, page }) => {
  const { title, content, references } = page;

  return (
    <Paper
      elevation={0}
      sx={{
        margin: 2,
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <ReadingTime content={content} />
      {children}


      <References references={references} />
    </Paper>
  );
};