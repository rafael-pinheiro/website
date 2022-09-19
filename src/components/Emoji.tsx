import { Box } from '@mui/material';
import { default as EmojiComponent, EmojiProps } from 'a11y-react-emoji';

export const Emoji: React.FC<EmojiProps> = (props) => (
  <Box component={'span'} mr={.5} display='inline-block' className={props.className}>
    <EmojiComponent {...props} />
  </Box>
)