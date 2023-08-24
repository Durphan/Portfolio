import { Grid, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'




export const Input = ({id, type, variant, label}) =>{
    return(
        <>
        <Grid item style={{marginTop:"25px"}}>
        <TextField
          id={id}
          type={type}
          variant={variant}
          size='small'
          style={{marginLeft:"30px", marginBottom:"20px"}}
          placeholder={label}
          />
          </Grid>
        </>
    )
}

export const InputSelect = () =>{

    const options = [
        {
            value:"services",
            label:"Servicios"
        },
        {
            value:"products",
            label:"Productos"
        }
    ]

    return(
        <>
        <TextField
          id="item"
          select
          defaultValue="services"
        >
            {
                options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
        </>
    )
}