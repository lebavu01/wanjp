import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'

const CustomExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  fontSize: '2rem'
}))
export function SelectItem({ label, options }) {
  const defaultOption = options.length > 0 ? options[0].value : ''

  return (
    <div>
      <Box sx={{ minWidth: 120, marginTop: '2rem' }}>
        <FormControl fullWidth>
          <InputLabel
            variant='standard'
            htmlFor='uncontrolled-native'
            sx={{
              color: 'black',
              fontWeight: 400,
              fontSize: '1.96rem',
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
            IconComponent={CustomExpandMoreIcon}
            sx={{
              border: '1px solid #000',
              paddingLeft: 1,
              borderRadius: '.5rem',
              fontSize: '1.4rem',
              background: '#fff',
              padding: '0 0 0 1.5rem',
              height: '3.6rem',
              '> select': {
                padding: 0,
                fontSize: '1.4rem'
              },
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
