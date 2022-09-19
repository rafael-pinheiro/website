import { Link, LinkProps } from './Link';
import { get } from '../framework/pages';
import { Box, Paper, Popper } from '@mui/material';
import { useMemo, useState } from 'react';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const isOpenAtom = atom(false);

interface Props extends Omit<LinkProps, 'to'> {
  path: string;
}

export const LinkWithPreview: React.FC<Props> = ({ path, ...props }) => {
  const page = useMemo(() => get(path), [path]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (isOpen) {
      return null;
    }
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  useEffect(() => () => handleClose());

  return (
    <Box
      component='span'
      display={'inline-block'}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="right-start"
        sx={{
          backgroundColor: 'white'
        }}
      >
        <Paper>
          <page.Component />
        </Paper>
      </Popper>
      <Link
        {...props}
        to={page.path}
      />
    </Box>
  )
}