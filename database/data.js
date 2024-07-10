var data = {
  "_id": 1,
  "BannerNav": {
    "title": "My name is Sean Droke, Full Stack Software Engineer",
    "bio": "I love to solve new and exciting problems. I am a passionate engineer, creator, and thinker. I am endlessly curious and constantly seeking a new way to do things."
  },
  "Education": {
    "heading": "EDUCATION",
    "img": "/api/uploads/files/education-logo.png",
    "degree": "BS, Computer Science",
    "tenure": "2017-2020"
  },
  "Experience": {
    "WorkExperience": [
      {
        "title": "Software Engineer",
        "company": "Penn Entertainment",
        "location": "Wyomissing, PA",
        "tenure": "April 2021 - Present"
      },
      {
        "title": "Full Stack Software Engineer",
        "company": "Comcast",
        "location": "Philadelphia, PA",
        "tenure": "February 2020 - April 2021"
      },
      {
        "title": "Full Stack Web Developer",
        "company": "Tierney Communications",
        "location": "Philadelphia, PA",
        "tenure": "August 2019 - February 2020"
      },
      {
        "title": "Network & Automation Engineering Intern",
        "company": "The Interpublic Group",
        "location": "New York, NY",
        "tenure": "October 2018 - March 2019"
      },
      {
        "title": "Systems Administration Intern",
        "company": "Tierney Communications",
        "location": "Philadelphia, PA",
        "tenure": "June 2018 - October 2018"
      }
    ],
    "Languages": [
      {
        "language": "Python",
        "proficiency": 85,
        "logo": "/api/uploads/files/languages/python.png"
      },
      {
        "language": "JavaScript",
        "proficiency": 75,
        "logo": "/api/uploads/files/languages/js.png"
      },
      {
        "language": "PHP",
        "proficiency": 75,
        "logo": "/api/uploads/files/languages/php.png"
      },
      {
        "language": "Java",
        "proficiency": 65,
        "logo": "/api/uploads/files/languages/java.png"
      },
      {
        "language": "C/C++",
        "proficiency": 50,
        "logo": "/api/uploads/files/languages/cpp.png"
      }
    ],
    "WebFrameworks": {
      "BackEnd": [
        {
          "technology": "Django",
          "logo": "/api/uploads/files/frameworks/django.png"
        },
        {
          "technology": "GraphQL",
          "logo": "/api/uploads/files/frameworks/graphql.png"
        },
        {
          "technology": "Spring Boot",
          "logo": "/api/uploads/files/frameworks/spring.png"
        },
        {
          "technology": "Laravel",
          "logo": "/api/uploads/files/frameworks/laravel.png"
        }
      ],
      "FrontEnd": [
        {
          "technology": "React",
          "logo": "/api/uploads/files/frameworks/react.png"
        }
      ],
      "CSS": [
        {
          "technology": "Bootstrap",
          "logo": "/api/uploads/files/frameworks/bootstrap.png"
        },
        {
          "technology": "Material UI",
          "logo": "/api/uploads/files/frameworks/mui.png"
        }
      ]
    },
    "DataEngineering": {
      "SQL": [
        {
          "technology": "MySQL",
          "logo": "/api/uploads/files/databases/mysql.png"
        },
        {
          "technology": "Microsoft SQL",
          "logo": "/api/uploads/files/databases/mssql.png"
        },
        {
          "technology": "Hive SQL",
          "logo": "/api/uploads/files/databases/hive.png"
        },
        {
          "technology": "PostgreSQL",
          "logo": "/api/uploads/files/databases/postgresql.png"
        }
      ],
      "BigData": [
        {
          "technology": "Spark",
          "logo": "/api/uploads/files/databases/spark.png"
        },
        {
          "technology": "Hadoop",
          "logo": "/api/uploads/files/databases/hadoop.png"
        }
      ],
      "NoSQL": [
        {
          "technology": "MongoDB",
          "logo": "/api/uploads/files/databases/mongo.png"
        }
      ]
    },
    "CloudProviders": {
      "AWS": [
        {
          "technology": "Lambda",
          "logo": "/api/uploads/files/cloud_providers/lambda.png"
        },
        {
          "technology": "ECS",
          "logo": "/api/uploads/files/cloud_providers/ecs.png"
        },
        {
          "technology": "Kinesis",
          "logo": "/api/uploads/files/cloud_providers/kinesis.png"
        },
        {
          "technology": "EC2",
          "logo": "/api/uploads/files/cloud_providers/ec2.png"
        },
        {
          "technology": "RDS",
          "logo": "/api/uploads/files/cloud_providers/rds.png"
        },
        {
          "technology": "S3",
          "logo": "/api/uploads/files/cloud_providers/s3.png"
        },
        {
          "technology": "SNS",
          "logo": "/api/uploads/files/cloud_providers/sns.png"
        },
        {
          "technology": "Timestream",
          "logo": "/api/uploads/files/cloud_providers/timestream.png"
        },
        {
          "technology": "ElastiCache",
          "logo": "/api/uploads/files/cloud_providers/elasticache.png"
        }
      ],
      "Azure": [
        {
          "technology": "Entra ID",
          "logo": "/api/uploads/files/cloud_providers/entra.png"
        },
        {
          "technology": "Virtual Machines",
          "logo": "/api/uploads/files/cloud_providers/azure_vms.png"
        }
      ],
      "GCP": [
        {
          "technology": "Firebase",
          "logo": "/api/uploads/files/cloud_providers/firebase.png"
        }
      ]
    },
    "DevOps": {
      "Containerization": [
        {
          "technology": "Docker",
          "logo": "/api/uploads/files/devops/docker.png"
        },
        {
          "technology": "Kubernetes",
          "logo": "/api/uploads/files/devops/kubernetes.png"
        }
      ],
      "CICD": [
        {
          "technology": "Jenkins",
          "logo": "/api/uploads/files/devops/jenkins.png"
        },
        {
          "technology": "Rundeck",
          "logo": "/api/uploads/files/devops/rundeck.png"
        }
      ]
    }
  },
  "Projects": [
    {
      "company": "Penn Entertainment",
      "title": "Software Engineer",
      "logo": "/api/uploads/files/companies/penn.png",
      "Projects": [
        {
           "name":"Full Stack Administrative Applicaton",
           "description":"Built a full stack application to consolidate and expand utilities leveraged across the full breadth of Penn's property portfolio and I-Casino offerings. Completed the full SDLC, from ideation to release. As the lead project engineer, I was in charge of system design and architecture. Based on available developer resources and modern practices, the application technology stack was chosen to be Laravel, React, and NGINX connected to existing PostgreSQL and MySQL data stores. Inertia.js was selected as middleware to facilitate Laravel server side rendering of the front end to increase developer full stack productivity and reduce implementation time. The application was containerized for Docker and Kubernetes deployment, and a robust Jenkins pipeline was built out for advanced CI/CD. The application is currently leveraged by about 1000 property and I-Casino level administrators."
        },
        {
           "name":"Rundeck Initiative",
           "description":"Led a POC and later full scale deployment of a proprietary Rundeck instance to provide a centralized platform for maintaining chron jobs. Prior to the release of this utility, jobs were fragmented across different servers, documented in clunky excel spreadsheets. Rundeck provides functionality to act as an advanced server manager and job scheduler. As the resource lead, I was responsible for maintaining the instance, onboarding fellow team members and integrating their existing jobs, implementing and peer reviewing custom Java plugins, and providing documentation and other resources for the technology."
        },
        {
           "name":"Microservice Refactoring",
           "description":"Adopted a project due to developer resource constraints surrounding refactoring a Laravel codebase into disjointed PHP slim microservices needed as a result of regulatory changes and planned enhancements to the core application load balancer. As the inherited project lead, it was my responsibility to debug and refactor the existing work that had been completed as well as implementation of the remaining microservice architecture needed to fulfill requirements."
        },
        {
          "name": "Real Time Event Processing - Serverless AWS Infrastructure",
          "description": "Both participated in and led expansion of our growing technology infrastructure into Amazon Web Services. Handled primary oversight of our real time event processing technology stack. Built and scaled Kinesis streams pipelining multiple producer origins creating a low latency and high volume event provider. These streams ingest hundreds of thousands of real time JSON structured events that provide an essential data source for over 50 downstream independent applications and serverless functions within the organization. \n\n\n\nCurrently, I maintain status as the primary lead developer over expansion of our serverless technology stack. We've built multiple essential Python Lambda Services supplying our portfolio of property staff and digital representatives with critical information regarding our customer base and expanding our customer loyalty offerings. The output of this serverless infrastructure either directly interacts with or supplements both our player and property host mobile applications and has resulted in over 100,000 real time notifications delivered via AWS SNS and Firebase."
        }
     ]
    },
    {
      "company": "Comcast",
      "title": "Full Stack Software Engineer",
      "logo": "/api/uploads/files/companies/comcast.png",
      "Projects": [
        {
          "name": "Big Data Natural Language Parser",
          "description": "Built a python parser for automating the identification of specific elements within a teradata database based on user defined parameters. Project involved optimizing existing queries to be as time/space efficient as possible on larger data sets (100TB+) as well as integrating results with a tensorflow based natural language processor to identify elements of relevant meaning with an acceptable degree of confidence."
        },
        {
          "name": "PySpark Translations",
          "description": "Ongoing work on refactoring/translating an existing Hive SQL codebase, used to aggregate big data warehouses, to the PySpark/DataFrame syntax. PySpark enables for enhanced developer readability, easier data science integration, and increased performance and speed."
        },
        {
          "name": "GraphQL Back-End Web Infrastructure",
          "description": "Worked on a GraphQL back end web application providing an intermediary layer between underlying big data sources and business facing front end dashboards. Built out pre-aggregated table architecture and utilized Presto query fabric to reduce data availability access times."
        },
        {
          "name": "AWS & Hybrid Cloud Data Migration",
          "description": "Part of an ongoing effort to migrate petabytes of hadoop structured data lakes and warehouses to AWS and Databricks. Efforts invlove system architecture and process planning, S3 bucket provisioning, and use of various code-based methods to safely migrate tables."
        }
      ]
    },
    {
      "company": "Tierney Communications",
      "title": "Full Stack Developer",
      "logo": "/api/uploads/files/companies/tierney.png",
      "Projects": [
        {
          "name": "Development Practice Overhaul",
          "description": "Promoted to assist in development of internal business process applications, customer facing full stack web projects, refactoring of the existing agency codebase, designing new coding standards, and leading an agile initiative. Day to day responsibilities included client facing site maintenance and feature implementation, working closely with project managers and product owners on new and existing business, and implementing new development strategies to increase personal and team productivity. Began an iteration of a better organized SDLC to redesign the agency website with a more capable back end interface with CMS integration."
        }
      ]
    },
    {
      "company": "Comcast",
      "title": "Network & Automation Engineering Intern",
      "logo": "/api/uploads/files/companies/comcast.png",
      "Projects": [
        {
          "name": "Pre-Configuration Template Generator",
          "description": "Built a full stack, React/Django, web application for automating template based, network device configuration file development. Created a user friendly form based UI to reduce errors made in the configuration process thereby reducing network outages and limiting necessary quality assurance."
        },
        {
          "name": "Multi-Device Change Deployment Tool",
          "description": "Built an additional React/Django full stack web app to replace an internal tool used for automating the deployment of changes to multiple network devices at scale. Tool enables the internal change control team to automate company wide changes via a streamlined user interface thereby lessening engineer time spent and eliminating the pre-existing software sources of error."
        }
      ]
    },
    {
      "company": "The Interpublic Group",
      "title": "Software Engineering Intern",
      "logo": "/api/uploads/files/companies/ipg.png",
      "Projects": [
        {
          "name": "Encrypted Device Reporting Tool",
          "description": "Trained as a full stack developer working primarily on back end projects related to an internal IT Management and Reporting platform. Technology stack of JavaScript, PHP, SQL Server, and C/C++. Experience with the agile workflow, wireframing, test driven development, Unix based server manipulation, internal code standards, and design documentation. Notable contributions to back end PHP benefitting an Encrypted Device reporting tool for upper level administrators to oversee subsidiary compliance."
        }
      ]
    }
  ],
  "AboutMe": {
    "bio": [
      "I am 26 years old, born and raised in the Greater Philadelphia Area. For the majority of my life, I have called Medford, New Jersey home. I am the eldest of three boys, born of two math teachers, yet I was always partial to the sciences.",
      "I'm known to always be looking for a different way to solve something, and not stopping until I find an answer to the problems I face. I have always been fascinated with computers, and I can't think of a career with more new and exciting problems than that which I have found in Software Engineering. I am endlessly eager to learn that which I don't know and love to meet and collaborate with new faces along the way.",
      "Outside of that, I am well known for falling down deep YouTube rabbit holes to satisfy my ever growing curiosity, and I love to embrace my creativity with personal projects just like this site! I enjoy spending quality time with friends and loved ones, and of course, watching my fair share of the Eagles."
    ]
  },
  "Location": {
    "location": "Philadelphia, PA",
    "description": "I am living and working remotely from Philly!",
    "img": "/api/uploads/files/locations/love-park.jpg",
    "x": 125,
    "y": 110,
    "availability": "Part Time",
    "status": "Right now, I am fully employed as a Software Engineer. However, I do consider part time, freelance/contract work, outside of traditional working hours. I am always open to chat about all possible opportunities!"
  },
  // "Location": {
  //   "location": "St. Petersburg, FL",
  //   "description": "I am living and working from Tampa!",
  //   "img": "/api/uploads/files/locations/florida.jpeg",
  //   "x": 118,
  //   "y": 137,
  //   "availability": "Part Time",
  //   "status": "Right now, I am fully employed as a Software Engineer. However, I do consider part time, freelance/contract work, outside of traditional working hours. I am always open to chat about all possible opportunities!"
  // },
  "Footer": {
    "name": "Sean Droke",
    "title": "Software Engineer",
    "phone": "+1 609 500 3961",
    "email": "drokesean@gmail.com"
  }
}