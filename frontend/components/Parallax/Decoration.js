import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDeco() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            y={[-40, 40]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={845}
              height={1099}
              className={
                clsx(
                  classes.parallaxVertical,
                  classes.parallaxDot
                )
              }
            >
            </svg>
          </Parallax>
          <Parallax
            y={[-50, 50]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={902}
              height={1042}
              className={
                clsx(
                  classes.parallaxVertical,
                  classes.parallaxTriangle
                )
              }
            >
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
