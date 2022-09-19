import { Typography } from '@mui/material';
import { Page } from '../framework/pages';

function readingTime(text: string) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

export const ReadingTime: React.FC<Pick<Page, 'content'>> = ({ content }) => {
  const minutes = readingTime(content);
  const unitLabel = minutes === 1 ? 'minute' : 'minutes';
  return <Typography variant='subtitle2'>{`${minutes} ${unitLabel} reading time`} </Typography>
}