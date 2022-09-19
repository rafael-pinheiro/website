import { Stack, Typography } from "@mui/material";
import { Emoji } from './Emoji';
import { LinkWithPreview } from "./LinkWithPreview";
import { Page } from '../framework/pages';

export const References: React.FC<Pick<Page, 'references'>> = ({ references }) => {
  if (references.length === 0) {
    return null;
  }

  return (
    <Stack>
      <Typography variant='h6'>
        <Emoji symbol='🔗' label='Image for link/chain' />
        {'References'}
      </Typography>
      <ul>
        {references.map(ref => <li key={ref.path}><LinkWithPreview path={ref.path}>{ref.title}</LinkWithPreview></li>)}
      </ul>
    </Stack>
  )
}