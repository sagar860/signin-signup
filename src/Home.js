import React,{useState,useEffect} from 'react';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: theme.spacing(4),
  }
}));

function Home() {
const[posts,setPosts]=useState([]);

useEffect(()=>{
  axios.get("https://restcountries.com/v3.1/all")
  .then(res=>{
    console.log(res)
    setPosts(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])
const classes = useStyles();
  return (
    <>
    
    <main>
        <div className={classes.content}>
          <Container maxWidth='sm'>
           
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' component={RouterLink} to='/signin'>
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' component={RouterLink} to='/signup'>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    <div style={{display:"flex"}}>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.name.common}</li>)
        }
      </ul>
      <br/>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.capital}</li>)
         
        }
      </ul>
      <br/>
      <ul>
        {
          posts.map(post => <li key={post.id}>{}</li>)
        }
      </ul>
    </div>
    </>
    
  )
}

export default Home
