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
    const [category, setCategory] = useState('')

    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit =(e)=> {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if( title === '') setTitleError(true)
        if( details === '') setDetailsError(true)

        if(title && details){
            fetch('https://hello-memo-api.herokuapp.com/memos', {
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
            Write your Message
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
                label="Message Title"
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
                label="Your Message"
                color='secondary'
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />

            {/* <FormControl 
                sx={{
                    color: 'secondary', 
                    marginTop: 2,
                    marginBottom: 2
                }}>
                <FormLabel>Message Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value='emotional' control={<Radio color='secondary' />} label='Emotional'/>
                    <FormControlLabel value='dedicated' control={<Radio color='secondary'/>} label='Dedicated'/>
                    <FormControlLabel value='hateful' control={<Radio color='secondary'/>} label='Hateful'/>
                </RadioGroup>
            </FormControl> */}

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