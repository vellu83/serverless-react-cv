
import { createTheme } from '@mui/material/styles';


export let theme = createTheme()

theme = createTheme(theme, {
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
  },
  typography: {
    body1: {
      fontSize: 13,
      color: 'white',
    },
    body2: {
      fontSize: 15,
      color:'black'
    },
    h1: {
      color: 'white',
      fontSize: 65,
      fontWeight: 'bold',
    },
    h2:{
      color:'black',
      fontSize:27,
      fontWeight:'bold'
    },
    h3: {
      color:'black',
      fontSize:22,
    },
    h4: {
      color:'#595959',
      fontSize:19,
    },
    h5: {
      color:'white',
      fontSize:19,
      fontWight:'bold'
    }
  },
  palette: {
    background: {
      default: '#f2f2f2',
    },
  },
  maincontainer: {
    backgroundColor: 'rgb(255,255,245)',
    marginTop: 30,
    marginBottom:30,
    maxWidth: 1200,
    minWidth: 360
  },

  header: {
    backgroundColor: '#ff3300',
    marginTop: 15,
    marginBottom:15
   
  }




});
