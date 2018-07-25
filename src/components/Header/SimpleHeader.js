

// import React from 'react'
// import './HeaderComponent.css'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';
// import classNames from 'classnames';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//     overrides: {
//       // Name of the component ⚛️ / style sheet
//       MuiButton: {
//         // Name of the rule
//         root: {
//           // Some CSS
//           background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//           borderRadius: 3,
//           border: 0,
//           color: 'white',
//           height: 48,
//           padding: '0 30px',
//           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         },
//       },
//       MuiAppBar: {
//         // Name of the rule
//         root: {
//           // Some CSS
//           background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         //   borderRadius: 3,
//         //   border: 0,
//           color: 'white',
//         //   height: 48,
//         //   padding: '0 30px',
//           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         },
//       },
//     },
//   });
//   const styles = {
//     root: {
//       flexGrow: 1,
//     },
//     flex: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginLeft: -12,
//       marginRight: 20,
//     },
//   };
//   class HeaderComponent extends React.Component {
//     state = {
//       auth: true,
//       anchorEl: null,
//     };
  

// handleMenu = event => {
//   this.setState({ anchorEl: event.currentTarget });
// };

// handleClose = () => {
//   this.setState({ anchorEl: null });
// };
  
// render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className={classes.root}>
//        <MuiThemeProvider theme={theme}>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//             }
//             label={auth ? 'Logout' : 'Login'}
//           />
//         </FormGroup>
//         <AppBar position="static">
//         <AppBar
//           position="absolute"
//           className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
//         >
//           <Toolbar disableGutters={!this.state.open}>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classNames(classes.menuButton, this.state.open && classes.hide)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//               Mini variant drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           classes={{
//             paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
//           }}
//           open={this.state.open}
//         >
//           <div className={classes.toolbar}>
//             <IconButton onClick={this.handleDrawerClose}>
//               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//             </IconButton>
//           </div>
//           <Divider />
//           <List>{mailFolderListItems}</List>
//           <Divider />
//           <List>{otherMailFolderListItems}</List>
//         </Drawer>




//           {/* <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton>
//             <MenuItem onTouchTap={this.closeLeftNav} value={'/'} primaryText="Home"/>
//             <Typography variant="title" color="inherit" className={classes.flex}>
//               Photos
//             </Typography>
//             {auth && (
//               <div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : null}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Drawer open={this.state.open}>
//             {/* <MenuItem onClick={}>Menu Item 1</MenuItem> */}
//             {/* <MenuItem >Menu Item 1</MenuItem>
//             <MenuItem >Menu Item 2</MenuItem>
//             <MenuItem >Menu Item 3</MenuItem>
//           </Drawer>

               
//                 <Button>Overrides CSS</Button>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
                
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//             )} */}
//           {/* </Toolbar>  */}
//         </AppBar>
//         </MuiThemeProvider>
//       </div>
//     );
//   }
// };



// HeaderComponent.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
//   export default withStyles(styles)(HeaderComponent);
  
// //   function HeaderComponent() {
// //     return (
// //       <MuiThemeProvider theme={theme}>
// //         <Button>Overrides CSS</Button>
// //       </MuiThemeProvider>
// //     );
// //   }
// // const HeaderComponent = () => (
// //     <div>
// //         <h1>Header</h1>
// //     </div>
// // )
// // export default HeaderComponent;