// at the top of our file, we are going to be importing open source packages, and other files. 
// for this file, we want to add in CSS, just like we would with a normal HTML File.
import './appStyles.css';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './config/theme';
import Form from './components/form';
import Table from './components/table';
import Sidebar from './components/sidebar';
// Look at this! A function! We know functions.

// This function actually returns HTML, which React handles perfectly. We can do cool things within 
// this function that would be very clunky in a normal HTML page. 
function App() {
  // with every function, we need to return something! That something could null, but that's a story for another day
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography>Hello Web Cohort! This is an unstyled page with just some text inside</Typography>
      </div>
    </ThemeProvider>
  );
}


// CHECK THIS OUT! So we have the function, but we need to tell JavaScript to make the function exportable so 
// that we can import this function into another part of the application.
export default App;
