import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            href="https://github.com/Jaz0King"
            target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            href="https://linkedin.com/in/jaziel-ramírez-34a277217"
            target="_blank"
            >
               <LinkedInIcon />
            </IconButton> 
            <p>
                Create by Jaziel Ramírez only for a DevTest - © All Rights Reserved 
            </p> 
        </Container>
      </AppBar>
    );
  };
  export default Footer;