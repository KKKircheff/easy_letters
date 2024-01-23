import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import theme from '../../styles/theme'


const Home = () => {
    return (
        <Box sx={{ width: '100vw', m: 0, p: 0 }}>
            <h1>Home</h1>
            <Button variant='outlined' color='primary'>Hello world</Button>
        </Box>
    )
}

export default Home