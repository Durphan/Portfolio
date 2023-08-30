import Container from '@mui/material/Container'
import { Form } from './components/form'
import { Navbar } from './components/navbar'


export const LoginProviders = () =>{
    return(
        <>
        <Container maxWidth="xl" style={{margin:"10pt"}}>
        <Navbar title={"Alta de proveedores"}/>
        <Form/>
        </Container>
        </>
    )
}