import Typography from '@mui/material/Typography'
import "../styles/link.css"
export const Link = ({labelLink, link}) => {
    return(
        <>
        <a href={link}>
            <Typography variant="h4" color="#636262" >{labelLink}</Typography>
        </a>
        </>
    )
}