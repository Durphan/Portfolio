import { Grid, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'




export const Input = ({id, type, variant, label}) =>{
    return(
        <>
        <Grid item style={{marginTop:"30px"}} textAlign="center" width="500px">
            {label}
        <TextField
          id={id}
          type={type}
          variant={variant}
          size='small'
          sx={{
              marginLeft:"25px",
              width:"50%",
            "& .MuiInputBase-input":{
                height:"10px",
            }
          }}
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
        <Grid item style={{marginTop:"30px"}} textAlign="center" alignItems="center" >
            Rubro:
        <TextField
          id="item"
          select
          defaultValue="services"
          size='small'
          sx={{
            marginLeft:"25px",
        "& .MuiSelect-select":{
            height:"5px",
            width:"120px"
        }
      }}
          >
            {
                options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
            </Grid>
        </>
    )
}