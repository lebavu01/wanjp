import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { styled } from '@mui/material/styles'

const CustomUnfoldMoreIcon = styled(UnfoldMoreIcon)(({ theme }) => ({
  fontSize: '1.6rem'
}))
export function SelectItem({ label, options }) {
  const defaultOption = options.length > 0 ? options[0].value : ''

  return (
    <div>
      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel
            variant='standard'
            htmlFor='uncontrolled-native'
            sx={{
              color: 'black',
              fontWeight: 500,
              fontSize: 20,
              marginBottom: 20,
              '+ div, + .MuiInputBase-root': {
                marginTop: 3,
                '&:after': {
                  display: 'none!important'
                }
              }
            }}
          >
            {label}
          </InputLabel>
          <NativeSelect
            IconComponent={CustomUnfoldMoreIcon}
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.23)',
              paddingLeft: 1,
              borderRadius: 1,
              fontSize: '1.4rem',
              background: '#fff',
              paddingBlock: '7px',
              '&:before': {
                display: 'none!important'
              },
              '&:hover': {
                '&:before': {
                  display: 'none!important'
                }
              }
            }}
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
