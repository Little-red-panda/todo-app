import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  value?: string;
  name?: string;
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[];
}
