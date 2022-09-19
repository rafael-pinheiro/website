import { timeAgo } from '../framework/timeAgo';
import { Typography } from '@mui/material';

export const TimeAgo: React.FC<{ ago: Date }> = ({ ago }) => (
  <Typography variant="subtitle2">{timeAgo(ago)}</Typography>
);