import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SideNavigation from '../SideNavigation';
import brand from '../../static/text/brand';
import { useText } from '../../theme/common';
import useStyles from './banner-style';


function BannerNav(props) {
  const theme = useTheme();
  const text = useText();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const {
    onToggleDark,
    onToggleDir,
  } = props;

// useEffect(() => {
//   var camera, scene, renderer;
//   var mesh;

//   init();
//   animate();

//   function init() {

//   renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#canvas")});

//   camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
//   camera.position.z = 25;

//   scene = new THREE.Scene();

//   var geometry = new THREE.SphereGeometry(10, 100, 100);
//   var material  = new THREE.MeshPhongMaterial();

//   THREE.ImageUtils.crossOrigin = '';
//   material.map    = THREE.ImageUtils.loadTexture(earth)

//     mesh = new THREE.Mesh(geometry, material);
//     mesh.rotation.x -= 0.5;
//     scene.add(mesh);

//     var light1 = new THREE.AmbientLight( 0xffffff );
//     light1.position.set(100, 50, 100);
//     scene.add(light1);
//   }

//   function resize() {
//     var width = renderer.domElement.clientWidth;
//     var height = renderer.domElement.clientHeight;
//     renderer.setSize(width, height, false);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix(); 
//   }

//   function animate() {
//     resize();
//     mesh.rotation.y -= 0.0005;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
//   }
// }) 

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <SideNavigation />
            </Hidden>
          </Grid>
          <Grid item lg={10} xs={12}>
            <div className={classes.banner}>
              <div className={classes.cover}>
                {/* <div className={classes.figure}> */}
                {/* <canvas id="canvas" className={classes.globe}></canvas> */}
                <img src={brand.profile.cover} alt="cover" />
                  <div className={classes.overlay} />
                {/* </div> */}
              </div>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  Hi,
                </Typography>
                <Typography variant="h2" className={text.title}>
                  My name is&nbsp;Sean Droke,<br />Full Stack Software Engineer
                </Typography>
                <Hidden smDown>
                  <Typography variant="h5" className={text.subtitle2}>
                  I love to solve new and exciting problems. I am a passionate engineer, creator, and thinker. I am endlessly curious and constantly seeking a new way to do things.
                  </Typography>
                  <div className={classes.socmed}>
                    <IconButton onClick={() => window.open('https://www.instagram.com/seandroke/?hl=en', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-social-instagram" />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/seandroke/', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-social-linkedin" />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://github.com/seandroke', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-social-github" />
                    </IconButton>
                  </div>
                </Hidden>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default BannerNav;