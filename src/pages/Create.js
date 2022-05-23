import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControlLabel, FormLabel, FormControl } from '@mui/material';

const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [category, setCategory] = useState('todos')

    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit =(e)=> {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if( title === '') setTitleError(true)
        if( details === '') setDetailsError(true)

        if(title && details){
            fetch('http://localhost:10000/memos', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({title, details, category})
            }).then(() => navigate('/'))
        }
    }
    return (
        <Container>
        <Typography 
            variant='h6'
            color='textSecondary'
            component='h2'
            gutterBottom
        >
            Create a New Memo
        </Typography>

        <form noValidate autoComplete='off' action="" onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => setTitle(e.target.value)}
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: 'block'
                }}
                variant='outlined' 
                label="Memo Title"
                color='secondary'
                fullWidth
                required
                error={titleError}
            />
            <TextField 
                onChange={(e) => setDetails(e.target.value)}
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: 'block'
                }}
                variant='outlined' 
                label="Memo Details"
                color='secondary'
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />

            <FormControl 
                sx={{
                    color: 'secondary', 
                    marginTop: 2,
                    marginBottom: 2
                }}>
                <FormLabel>Memo Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value='money' control={<Radio color='secondary' />} label='Money'/>
                    <FormControlLabel value='todos' control={<Radio color='secondary'/>} label='ToDos'/>
                    <FormControlLabel value='reminders' control={<Radio color='secondary'/>} label='Reminders'/>
                    <FormControlLabel value='gym' control={<Radio color='secondary'/>} label='Gym'/>
                    <FormControlLabel value='work' control={<Radio color='secondary'/>} label='Work'/>
                </RadioGroup>
            </FormControl>

            <br />

            <Button 
                variant='contained' 
                color='secondary' 
                type='submit'
                endIcon={<ArrowForwardIosIcon />}
            >   
                Submit
            </Button>
        </form>
        </Container>
    );
}
 
export default Create;