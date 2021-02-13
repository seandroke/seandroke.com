import React, { useRef, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useText } from '../../theme/common';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './projects-style';
import COMCAST from '../../static/images/comcast.png';
import TIERNEY from '../../static/images/tierney_logo.png';
import IPG from '../../static/images/ipg.png';
import Button from '@material-ui/core/Button';

const services = [
  {
    icon: COMCAST,
    name: 'Comcast',
    desc: 'Full Stack Software Engineer',
    projectOverview: [{projectNumber: 1, projectName: 'Big Data Natural Language Parser', projectDescription: 'Built a python parser for automating the identification of specific elements within a teradata database based on user defined parameters. Project involved optimizing existing queries to be as time/space efficient as possible on larger data sets (100TB+) as well as integrating results with a tensorflow based natural language processor to identify elements of relevant meaning with an acceptable degree of confidence.'}, 
    {projectNumber: 2, projectName: 'PySpark Translations', projectDescription: 'Ongoing work on refactoring/translating an existing Hive SQL codebase, used to aggregate big data warehouses, to the PySpark/DataFrame syntax. PySpark enables for enhanced developer readability, easier data science integration, and increased performance and speed.'},
    {projectNumber: 3, projectName: 'GraphQL Back-End Web Infrastructure', projectDescription: 'Worked on a GraphQL back end web application providing an intermediary layer between underlying big data sources and business facing front end dashboards. Built out pre-aggregated table architecture and utilized Presto query fabric to reduce data availability access times.'},
    {projectNumber: 4, projectName: 'AWS & Hybrid Cloud Data Migration', projectDescription: 'Part of an ongoing effort to migrate petabytes of hadoop structured data lakes and warehouses to AWS and Databricks. Efforts invlove system architecture and process planning, S3 bucket provisioning, and use of various code-based methods to safely migrate tables.'}]
  },
  {
    icon: TIERNEY,
    name: 'Tierney Communications',
    desc: 'Full Stack Developer',
    projectOverview: [{projectNumber: 1, projectName: 'Development Practice Overhaul', projectDescription: 'Promoted to assist in development of internal business process applications, customer facing full stack web projects, refactoring of the existing agency codebase, designing new coding standards, and leading an agile initiative. Day to day responsibilities included client facing site maintenance and feature implementation, working closely with project managers and product owners on new and existing business, and implementing new development strategies to increase personal and team productivity. Began an iteration of a better organized SDLC to redesign the agency website with a more capable back end interface with CMS integration.'},]
  },
  {
    icon: COMCAST,
    name: 'Comcast',
    desc: 'Network & Automation Engineering Intern',
    projectOverview: [{projectNumber: 1, projectName: 'Pre-Configuration Template Generator', projectDescription: 'Built a full stack, React/Django, web application for automating template based, network device configuration file development. Created a user friendly form based UI to reduce errors made in the configuration process thereby reducing network outages and limiting necessary quality assurance.'}, 
    {projectNumber: 2, projectName: 'Multi-Device Change Deployment Tool', projectDescription: 'Built an additional React/Django full stack web app to replace an internal tool used for automating the deployment of changes to multiple network devices at scale. Tool enables the internal change control team to automate company wide changes via a streamlined user interface thereby lessening engineer time spent and eliminating the pre-existing software sources of error.'}]
  },
  {
    icon: IPG,
    name: 'The Interpublic Group',
    desc: 'Software Engineering Intern',
    projectOverview: [{projectNumber: 1, projectName: 'Encrypted Device Reporting Tool', projectDescription: 'Trained as a full stack developer working primarily on back end projects related to an internal IT Management and Reporting platform. Technology stack of JavaScript, PHP, SQL Server, and C/C++. Experience with the agile workflow, wireframing, test driven development, Unix based server manipulation, internal code standards, and design documentation. Notable contributions to back end PHP benefitting an Encrypted Device reporting tool for upper level administrators to oversee subsidiary compliance.'},]
  }
];

function Projects(props) {
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  const [toggler, setToggler] = useState(false);
  const [renderContent, setRenderContent] = useState(null);

  let detailedWork = null;

  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  if(toggler) {
    detailedWork = (<div className={classes.SubInfo}>{renderContent.map((item, index) => (
    <div>
      <h3 style={{paddingTop: '5%'}} className={text.subtitle2}><b>Project Name: <i>{item.projectName}</i></b></h3>
      <p className={text.paragraph}>{item.projectDescription}</p>
    </div>))}</div>)
  }

  return (
    <div className={classes.root}>
      <div className={classes.inBetween}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>
            Projects
          </strong>
        </Title>
        <Typography className={text.paragraph}>
          An overview of what I have accomplished at these great organizations.
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <div>
                <IconTextCard
                  icon={item.icon}
                  text={item.name}
                  desc={item.desc}
                />
                </div>
                <div className={classes.CenterButton}>
                  <Button onClick={() =>{setToggler(!toggler); setRenderContent(item.projectOverview);}}>Read More</Button>
                </div>
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={clsx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
      <div>
        {detailedWork}
      </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
};

export default Projects;
