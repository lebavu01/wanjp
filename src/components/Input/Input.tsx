import { TextField, Box } from '@mui/material'

export function Input(inputs) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <TextField
        sx={{
          width: '100%',
          background: '#fff',
          // // height: '45px',
          input: {
            height: '45px',
            lineHeight: '45px',
            padding: '0'
          },
          label: {
            top: '-5px',
            '&.MuiInputLabel-shrink': {
              top: 0
            }
          }
        }}
        id={inputs.id}
        label={inputs.label}
        variant='outlined'
      />
    </Box>
  )
}
