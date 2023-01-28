import React from 'react';
import { FormControl, FormControlLabel, Checkbox } from '@mui/material';
import { useField } from 'formik';
import { getFieldLabel } from '../../../utils';

const DEFAULT_FIELD_KEY = 'boolean-field-key';

const Boolean: React.FC<{ name?: string }> = ({ name }) => {
  const [, , { setValue }] = useField(name || DEFAULT_FIELD_KEY);
  const label = getFieldLabel(name);

  return (
    <FormControl fullWidth>
      <FormControlLabel
        name={name}
        control={<Checkbox onChange={(e) => setValue(e.target.checked)} />}
        label={label}
      />
    </FormControl>
  );
};

export default Boolean;
