import { fade, makeStyles } from '@material-ui/core/styles';


const FooterStyles = makeStyles((theme) => ({      
      title: {
        display: 'none',
        padding:'25px',
        margin: '28px 0px 0px -12px',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
}));
export { FooterStyles };