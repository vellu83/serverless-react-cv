
import { createTheme } from '@mui/material/styles';


export let theme = createTheme()
console.log(theme.breakpoints.down('xl'))

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
    width: '80%',
    marginTop: 30,
    marginBottom:30,
    maxWidth: 1200,
    minWidth: 450
  },

  header: {
    padding: 10,
    backgroundColor: '#ff3300',
    [theme.breakpoints.down('xl')]: {
      backgroundColor: 'black',
    },
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerItem: {
    display:'flex',
    paddingLeft:40,
    paddingRight:40,
    flexDirection:'row'
  },

  headerAvatar:{
    display:'flex',
    paddingRight:40,
    alignItems:'center',
  },

  headerText: {
    display:'flex',
    flexDirection:'column',
    paddingTop:6,
    paddingBottom:6
    
  },

  dataContainer :{
    flexDirection:'row',
    display:'flex',
    
    justifyContent:'center',
    flexWrap:'wrap'
    
  },

  dataColumn: {
    display: 'flex',
    width:400,
    flexDirection: 'column',
    justifyContent:'flex-start',
    //minWidth:400,
  },

  section: {
    display: 'flex',
    padding:40
  },

});
