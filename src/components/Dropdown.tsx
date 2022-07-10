import { Select as RawSelect, MenuItem as RawMenuItem } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';

import { ReactComponent as RawDownArrow } from '../assets/down-arrow-svgrepo-com.svg';

const SelectRow = styled.div`
  width: 400px;
  position: relative;
`;

interface SelectProps {
  isOpen: boolean;
}

const Select = styled(RawSelect)<SelectProps>`
  box-sizing: border-box;
  width: 400px;
  background: white;

  &.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1px solid #00cccc;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: 2px solid #20cc20;
  }

  &.Mui-focused {
    border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0' : '4px')};
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0' : '4px')};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: ${({ isOpen }) => (isOpen ? '2px solid #20cc20' : '1px solid #00cccc')};
    border-bottom: ${({ isOpen }) => (isOpen ? 'none' : '')};
  }

  &.Mui-focused:hover .MuiOutlinedInput-notchedOutline {
    border: 2px solid #20cc20;
  }

  & .MuiSvgIcon-root {
    display: none;
  }
`;

const MenuItem = styled(RawMenuItem)`
  box-sizing: border-box;
  height: 50px;

  &.Mui-selected {
    background: white;
  }

  &:hover, &.Mui-selected:hover {
    background: gray;
  }
`;

interface DownArrowProps {
  isOpen: boolean;
}

const DownArrow = styled(RawDownArrow)<DownArrowProps>`
  position: absolute;
  top: 23px;
  right: 10px;
  width: 10px;
  height: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'scale(-1)' : 'scale(1)')};
  pointer-events: none;
`;

type OptionItem = {
  value: string;
  visual: string;
};

interface DropdownProps {
  options: OptionItem[];
}

function Dropdown({ options }: DropdownProps) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const renderedOptions = options.map(({ value, visual }) => (
    <MenuItem value={value}>
      { visual }
    </MenuItem>
  ));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectRow>
      <Select
        isOpen={isOpen}
        open={isOpen}
        onClick={toggleOpen}
        defaultValue='koishi'
        MenuProps={{
          MenuListProps: {
            sx: {
              border: '2px solid #20cc20',
              borderTop: 'none',
              maxHeight: '200px',
              overflowY: 'scroll',
              boxShadow: 0,
              padding: 0,
            },
          },
          transitionDuration: 0,
          sx: { boxShadow: 0 },
          PaperProps: {
            sx: {
              boxShadow: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
          },
        }}
      >
        { renderedOptions }
      </Select>
      <DownArrow isOpen={isOpen} />
    </SelectRow>
  );
}

export default Dropdown;
