import { Select as RawSelect, MenuItem, } from '@mui/material';
import styled from '@emotion/styled';

const Select = styled(RawSelect)`
  box-sizing: border-box;
  width: 400px;
  background: white;

  &:hover .MuiOutlinedInput-notchedOutline {
    border: 2px solid #20cc20;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 2px solid #20cc20;
  }
`;

type OptionItem = {
  value: string;
  visual: string;
};

interface DropdownProps {
  options: OptionItem[];
}

function Dropdown({ options }: DropdownProps) {
  const renderedOptions = options.map(({ value, visual }) => (
    <MenuItem value={value}>
      { visual }
    </MenuItem>
  ));

  return (
    <Select
      defaultValue='koishi'
    >
      { renderedOptions }
    </Select>
  );
}

export default Dropdown;
