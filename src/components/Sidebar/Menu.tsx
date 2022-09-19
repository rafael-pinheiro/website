import { Box, Typography, Stack } from '@mui/material';
import { Link } from '../Link';
import type { Page } from '../../framework/pages';


interface Props {
  title: string;
  items: Page[]
  emoji?: React.ReactNode;
}

export const Menu: React.FC<Props> = ({ title, items, emoji }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Stack spacing={1}>
        <Typography variant='h6'>
          <>
            {emoji}
            {title}
          </>
        </Typography>
        <nav>
          <Stack spacing={1} ml={3}>
            {items.map(item => <Link key={item.path} to={item.path}>{item.title}</Link>)}
          </Stack>
        </nav>
      </Stack>
    </Box>
  );
}