import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { teal } from '@mui/material/colors';
import '@/styles/Home.module.css'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        CRM-web
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    {/* enviar por server a json o almacenar en array de usuarios */}
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

const signIn = () => {
  window.location.assign('/dashboard');
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{ bgcolor: teal[600] }}
        >
          <Card sx={{ width: 400, height: 150, my: 30, mx: 23, bgcolor: 'transparent', alignItems: 'center'}}>
          <SvgIcon sx={{ width: 400, height: 150}}>
          <svg version="1.1" id="crm-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="100%" viewBox="0 0 800 592" enable-background="new 0 0 800 592">
<path fill="#034040" opacity="1.000000" stroke="none" 
	d="
M552.198853,360.345520 
	C547.416199,361.051208 545.249512,358.981445 543.405151,355.135681 
	C528.500183,324.056702 513.383972,293.079010 498.290955,262.090515 
	C497.681519,260.839203 497.412964,259.257294 495.824646,258.500916 
	C494.908264,260.293152 495.377533,262.133850 495.375366,263.891266 
	C495.338623,293.712189 495.350861,323.533142 495.344391,353.354095 
	C495.342865,360.335449 495.329407,360.342285 488.158478,360.345642 
	C482.161011,360.348419 476.161987,360.249756 470.166687,360.359497 
	C467.086121,360.415863 466.112000,359.037170 466.163849,356.116669 
	C467.112915,302.646942 466.454651,249.172485 466.494843,195.700180 
	C466.497833,191.698532 467.719604,190.450836 471.598572,190.602020 
	C477.919739,190.848404 484.270264,190.915955 490.583435,190.584030 
	C494.558411,190.375046 496.555908,191.975342 498.213745,195.400574 
	C513.520020,227.025146 528.952454,258.588684 544.367737,290.160431 
	C549.175537,300.007111 554.042664,309.824799 559.090942,320.078888 
	C561.343872,318.254791 561.932617,315.977783 562.866821,313.986633 
	C581.468262,274.338165 600.075500,234.692276 618.541260,194.980637 
	C620.036316,191.765549 621.870239,190.482544 625.368958,190.600891 
	C631.858948,190.820435 638.368469,190.851471 644.856201,190.604004 
	C648.944153,190.448074 650.402100,191.859985 650.357300,196.022644 
	C650.179626,212.513870 650.284302,229.008148 650.284790,245.501297 
	C650.285889,281.652954 650.196106,317.805084 650.393555,353.955688 
	C650.420959,358.973267 649.062805,360.820435 643.936584,360.440460 
	C638.303101,360.023010 632.598328,360.073456 626.955811,360.423248 
	C622.192810,360.718506 620.631714,359.126312 620.665588,354.260162 
	C620.866089,325.440186 620.769592,296.618134 620.773010,267.796783 
	C620.773254,265.535767 620.773010,263.274719 620.029785,260.859253 
	C612.154297,277.683899 604.267517,294.503265 596.406677,311.334747 
	C589.572205,325.968689 582.674805,340.574646 576.014221,355.287567 
	C574.371826,358.915527 572.414612,360.773773 568.154541,360.441437 
	C563.021851,360.040955 557.833984,360.346710 552.198853,360.345520 
z"/>
<path fill="#034040" opacity="1.000000" stroke="none" 
	d="
M427.184296,216.977158 
	C435.446381,235.298264 435.237396,252.806152 423.800323,269.372894 
	C418.413086,277.176361 410.396698,281.693329 401.739899,285.119568 
	C400.214203,285.723389 398.681366,286.309235 396.224701,287.263519 
	C411.262695,311.383209 426.076080,335.142609 440.791138,358.744293 
	C439.160675,360.961151 437.354736,360.300507 435.816895,360.314331 
	C427.984894,360.384979 420.145752,360.161499 412.321869,360.422577 
	C408.640228,360.545410 406.624939,359.085083 404.767731,356.064148 
	C392.377991,335.911133 379.825775,315.857971 367.316406,295.778564 
	C364.349304,291.015961 354.850342,288.200500 349.954620,290.576721 
	C347.734558,291.654266 348.385742,293.697174 348.381134,295.412537 
	C348.329926,314.577454 348.342651,333.742523 348.333771,352.907562 
	C348.330353,360.332642 348.325256,360.338745 341.102692,360.345795 
	C335.269867,360.351471 329.434631,360.239471 323.605133,360.377075 
	C320.498108,360.450378 318.994354,359.409546 319.000092,356.116638 
	C319.052856,325.952698 319.059692,295.788605 319.014404,265.624634 
	C319.009125,262.110260 320.699768,260.959839 323.954224,261.003113 
	C330.565948,261.091003 337.179657,261.029388 343.619019,261.029388 
	C344.346832,258.365875 342.957031,257.165436 342.109161,255.820786 
	C335.533356,245.392181 329.010162,234.928162 322.259674,224.613190 
	C319.968292,221.111877 318.834656,217.568741 318.986633,213.378464 
	C319.204010,207.386978 319.113708,201.380325 319.008820,195.382690 
	C318.950104,192.024109 320.255798,190.640610 323.738770,190.663757 
	C341.569794,190.782242 359.423737,190.193863 377.226868,190.912979 
	C391.890350,191.505280 405.805603,195.482101 417.461731,205.193817 
	C421.349365,208.432922 424.494751,212.273834 427.184296,216.977158 
M402.186188,233.530243 
	C399.830231,228.142105 395.495728,224.941437 390.207001,222.897034 
	C378.837036,218.501846 367.081329,220.858734 354.377716,220.163086 
	C362.249786,232.798050 369.433441,244.332779 376.625122,255.862488 
	C377.240662,256.849304 377.897644,257.811096 378.556946,258.769653 
	C379.481689,260.114014 380.752075,260.814056 382.396606,260.566162 
	C396.364441,258.460510 407.271881,248.518997 402.186188,233.530243 
z"/>
<path fill="#034040" opacity="1.000000" stroke="none" 
	d="
M172.991989,209.981598 
	C193.271225,192.122971 216.706345,186.264435 242.797470,189.489136 
	C260.048553,191.621277 274.818848,199.010651 287.842255,210.333115 
	C290.692200,212.810837 290.805267,214.513229 288.021790,217.082443 
	C283.374664,221.371841 278.861481,225.832672 274.594635,230.498154 
	C271.910553,233.432953 270.092804,233.613342 266.879669,230.897583 
	C247.973129,214.917755 220.134644,213.175537 199.400101,226.674438 
	C186.164169,235.291519 179.315186,248.196686 176.754761,263.410370 
	C174.263809,278.211426 175.666565,292.716614 183.004364,306.030640 
	C199.479095,335.923126 240.009048,343.076141 266.463776,320.752258 
	C270.016357,317.754425 271.992859,317.847565 274.933380,321.132416 
	C279.038025,325.717773 283.412018,330.088501 287.940369,334.258240 
	C290.686707,336.787048 290.743561,338.520630 287.952728,341.063782 
	C276.980286,351.062469 264.228790,357.549408 249.812698,360.773987 
	C217.591324,367.981171 181.714844,356.860138 161.876236,328.443970 
	C152.321182,314.757568 147.553436,299.471100 146.477173,282.740234 
	C145.224030,263.260101 148.713486,245.045197 158.388885,228.064499 
	C162.212738,221.353485 167.093719,215.483978 172.991989,209.981598 
z"/>
</svg>
          </SvgIcon>
          </Card>

        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 9,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, mb: 3, bgcolor: teal[700], width: '80px', height:'80px' }} />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color='default' sx={{ color: teal[300] }}/>}
                label="Remember account"
              />
              <Button
                onClick={ () => signIn() }
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: teal[500] }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: teal[300] }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2" sx={{ color: teal[300] }}> {/* renderizado a pagina de registro sencillo */}
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}




// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import NextLink from 'next/link';
// import Link from '@mui/material/Link'
// import { Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-mui';

// const styles = {
  
//   loginContainer: {
//     minWidth: 320,
//     maxWidth: 400,
//     height: 'auto',
//     position: 'absolute' as any,
//     top: '20%',
//     left: 0,
//     right: 0,
//     margin: 'auto',
//   },
//   formHeader: {
//     color: 'blue',
//     fontColor: 'navy',
//     fontSize: 20,
//     maxWidth: 500,
//   },
//   ListSubheader: {
//     color: 'navy',
//     fontColor: 'navy',
//     fontSize: 16,
//     maxWidth: 500,
//   },
//   paper: {
//     padding: 20,
//     overflow: 'auto',
//   },
//   loginBtn: {
//     float: 'right' as any,
//   },
// };

// interface SignInPageProps {
//   onSignInClick: (credential: any) => void;
//   // errorMessage?: string;
// }

// interface SignInState {
//   canSubmit: boolean;
//   username: string;
//   password: string;
//   formError: string;
//   errorMessage?: string;
// }


// function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//       <Box sx={{ width: '100%', mr: 1 }}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgressWithLabel value={progress} />
//     </Box>
//   );
// }




// const defaultTheme = createTheme();

// const SignInPage: React.FC<SignInPageProps> = ({
//   //  errorMessage,
//   onSignInClick,
// }) => {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <div>
//         <div style={styles.loginContainer}>
//           <Paper style={styles.paper}>
//             <p style={styles.formHeader}>React Redux CRM</p>
//             <p style={styles.ListSubheader}>Version 2.0.0</p>
//             <Formik
//               initialValues={{
//                 username: 'admin@test.com',
//                 password: 'password',
//               }}
//               validate={values => {
//                 const errors: Partial<SignInState> = {};
//                 if (!values.username) {
//                   errors.username = 'Required';
//                 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
//                   errors.username = 'Invalid email address';
//                 }

//                 if (!values.password) {
//                   errors.password = 'Required';
//                 }
//                 return errors;
//               }}
//               onSubmit={(values, { setSubmitting }) => {
//                 onSignInClick(values);

//               }}
//             >
//               {({ submitForm, isSubmitting }) => (
//                 <Form>
//                   <div>
//                     <Field
//                       variant="outlined"
//                       component={TextField}
//                       placeholder="test@test.com"
//                       name="username"
//                       label="Login ID"
//                       fullWidth={true}
//                       required
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <Field
//                       variant="outlined"
//                       component={TextField}
//                       placeholder="Password"
//                       name="password"
//                       label="Password"
//                       fullWidth={true}
//                       type="password"
//                       required
//                     />
//                   </div>
//                   {isSubmitting && <LinearProgress />}
//                   <br />
//                   <div>
//                     <NextLink href='/login' passHref>
//                       <Link>
//                         SignIn
//                       </Link>
//                     </NextLink>
//                   </div>
//                </Form>
//               )}
//             </Formik>
//           </Paper>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default SignInPage;