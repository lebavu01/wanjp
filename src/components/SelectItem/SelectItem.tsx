import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import styles from './SelectItem.module.scss'
import { styled } from '@mui/material/styles'

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  color: 'yellow'
}))
export function SelectItem({ label, options }) {
  const defaultOption = options.length > 0 ? options[0].value : ''
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth className={styles.formControl}>
          <CustomInputLabel variant='standard' htmlFor='uncontrolled-native'>
            {label}
          </CustomInputLabel>
          <NativeSelect
            className={styles.customSelect}
            defaultValue={defaultOption}
            inputProps={{
              name: label,
              id: 'uncontrolled-native'
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {' '}
                {option.label}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  )
}
