import { Stack } from '@mui/material';
import { Menu } from './Menu';
import { menus } from '../../menu';
import { Emoji } from '../Emoji';

export const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ pl: 2, pr: 3 }}>
      {menus.map(({ title, emoji, emojiAlt, pages }) => (
        <Menu key={emoji} title={title} emoji={<Emoji symbol={emoji} label={emojiAlt} />} items={pages} />
      ))}
    </Stack>
  );
}