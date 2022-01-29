import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { FunctionComponent } from 'react';
import SignaturePad from 'react-signature-canvas';
import { SignatureProps } from './types';

const Signature: FunctionComponent<SignatureProps> = ({ onTrim }) => {
  const [showSignCanvas, setShowSignCanvas] = React.useState(false);
  let sigRef: any = {};

  const trim = () => {
    const x = {
      trimmedDataURL: sigRef.getTrimmedCanvas()
        .toDataURL('image/png')
    };
    onTrim(x);
  }

  return (
    <Box width="100%" height="150px" display={"flex"} alignItems="center" justifyContent="center" sx={{
      border: "1px solid",
      borderStyle: "dashed",
    }}
    >
      {showSignCanvas ?
        <SignaturePad penColor='black'
          ref={x => sigRef = x}
          onEnd={() => trim()}
          canvasProps={{ width: 300, height: 150, className: 'sigCanvas', placeholder: "Aseel" }} /> :
        <Button onClick={() => setShowSignCanvas(true)} sx={{
          color: "black"
        }}>Signature</Button>

      }
    </Box>
  );
};

export default Signature;
