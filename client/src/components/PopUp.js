import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';


function PopupComponent(props) {
    const {selectedMovie, movie1, movie2, oncloseHandler, scoreHandler, score, endGameHandler} = props;
    const [result, setResult] = React.useState(false);
  
    const handleClose = () => {
        oncloseHandler(false);
    };
  
    const getResult = () => {
        if(parseFloat(selectedMovie.BoxOffice.replace('$', '')) >= parseFloat(movie1.BoxOffice.replace('$', '')) &&  parseFloat(selectedMovie.BoxOffice.replace('$', '')) >= parseFloat(movie2.BoxOffice.replace('$', ''))){
            setResult(true);
            scoreHandler(score+1);
        }
        else{
            setResult(false);
            endGameHandler(true);
        }
    }

    React.useEffect(() => {
        getResult();
    },[]);

    const getAnswer = () => {
        if(result) {
            return <Typography variant="h8" component="h2">
                        Yay! Correct Answer
                   </Typography>;
        }
        else{
            return <Typography variant="h8" component="h2">
                        Sorry. Wrong Answer. Game ends here
                   </Typography>;
        }
    }

    return (
      <div>
        <Dialog open={true} onClose={handleClose}>
          <DialogContent>
            <DialogContentText>
              {getAnswer()}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default PopupComponent;
  