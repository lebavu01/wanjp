import { useState, useRef } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { capitalize } from '@mui/material'
import UploadImage from '@/assets/upload.png'

const DragDropFiles = () => {
  const [files, setFiles] = useState(null)
  const inputRef = useRef()

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setFiles(event.dataTransfer.files)
  }

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData()
    formData.append('Files', files)
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  }

  if (files)
    return (
      <Box>
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <Box>
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </Box>
      </Box>
    )
  return (
    <Box>
      <Typography sx={{ marginBottom: 2 }} variant='h3' gutterBottom>
        File Upload
      </Typography>
      <Box
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{ textAlign: 'center', background: '#fff', padding: '7rem 3rem 3rem', border: '1px dashed #999' }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: '6rem', marginInline: 'auto' }}>
            <img src={UploadImage} className='w-full' alt='upload' />
          </Box>
          <Typography sx={{ marginTop: 3 }} variant='h3' gutterBottom>
            Drag and drop files here
          </Typography>
        </Box>
        <Typography sx={{ marginTop: 3 }} variant='h3' gutterBottom>
          or
        </Typography>
        <input
          type='file'
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept='image/png, image/jpeg'
          ref={inputRef}
        />
        <Stack spacing={2} direction='row' justifyContent='center' sx={{ marginTop: 3 }}>
          <Button
            variant='contained'
            size='large'
            sx={{ textTransform: 'capitalize' }}
            onClick={() => inputRef.current.click()}
          >
            Browse
          </Button>
        </Stack>
        <Typography
          variant='body2'
          gutterBottom
          sx={{
            marginTop: 2,
            paddingBottom: 2,
            backgroundImage: 'linear-gradient(to right, #000000 100%,transparent 0%)',
            backgroundSize: '4rem 1.5px',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        >
          Accepted file formats:
        </Typography>
      </Box>
    </Box>
  )
}

export default DragDropFiles
