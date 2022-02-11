import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
      fontSize: 50,
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
  },
  header: {
    padding: 10,
    backgroundColor: '#ff3300',
    marginTop: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerItem: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  dataSheet: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    padding: 20,
  },
  leftColumn: {
    display: 'flex',
    flexGrow:1,
    backgroundColor:'#b3b3b3'
  },
  rightColumn: {
    display: 'flex',
    flexGrow:2
  },
});
