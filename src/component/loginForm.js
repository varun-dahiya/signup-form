import React from 'react'
import {Grid,Paper,TextField,} from'@material-ui/core'
import Button from '@mui/material/Button';

const loginForm=()=>{

  const paperStyle={padding:20,height:'60vh',width:280,margin:"20px auto"}
  const btnStyle={margin:"10px 0px -5px"}
  // const txtStyle
  
  return(
      <Grid>
           <Paper  elevation={10} style={paperStyle}>
            <Grid align='left'>
            <h1>Sign up</h1>
            </Grid>
          <TextField id="margin-dense" margin="dense"  label='Full Name' variant= 'outlined'placeholder='Enter Full Name' fullwidth required/>
          <TextField id="margin-dense" margin="dense" label='Email' variant= 'outlined' placeholder='Enter your Email' fullwidth required/>
          <TextField id="margin-dense" margin="dense"  label='Password' variant= 'outlined'placeholder='Enter your password'  type='password' fullwidth required/>
          <Button type='submit' fullwidth variant='contained' color='success' style={btnStyle} >Create an account</Button> 
          <div>
            <p>
              Already have an account?
              <a href="https://www.youtube.com">Login</a>
            </p>
          </div>
           </Paper>
      </Grid>
  )

}
export default loginForm