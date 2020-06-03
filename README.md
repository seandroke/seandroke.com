# seandroke.com - A Personal & Professional Portfolio

## Project Description
<a href="https://seandroke.com" target="_blank">https://seandroke.com</a>
<br /><br />
One of my biggest initiatives upon the conclusion of my degree, was pushing out a personal web portfolio as a sort of
culmination of my academic and professional experience. The goal was fairly simple. To, "from scratch", build a front end application as to
be a digital representation of myself, while also demonstrating the knowledge and skillset I have gained in Software Engineering.
<br /><br />
The complete implementation of this solution can be found in the wiki of this repository, but I will also provide a brief description now.
In the investigative phase I surmized that using a site builder felt very impersonal and counterproductive as a means of demonstrating any
kind of technical skillset. It seemed almost counterintuitive for a full stack engineer to build a portfolio using a GUI, regardless of how much
time that would have saved me :) So alas, I chose the fully custom route.
<br /><br />
Early steps then involved determining a technology stack, where I ended up landing on a MEAN implementation, less the robust back end which
I plan on implementing in a version two. The decision to not include the back end in the initial build came down to time. I was very eager to build
a back end and adjacent CMS admin panel, but I realized much of the content was, for the time being, static and I thus felt delivering the portfolio and
iterating later was slightly more important.
<br /><br />
With this in mind I began to tackle architecture of the front end and wanted to ensure developer accessibility. I built the application in terms of
components, such that I could easily reference individual sections of the site as needed. After this, I was off to developing. I went section by section through
the site and referenced a few key CSS libraries for design, most prominatly Material UI. When I felt the site was done, and I tested using a few different
devices and browsers I then had to tackle hosting.
<br /><br />
In the work place, I have become very familar with AWS. But I wanted to be mindful of cost. As such, I went with a lightsail instance, which promises just that.
For a low monthly fee, I am promised the concurrency, redundancy, and availability offered by AWS. Configuration, particularly with apache proxy passing to the
application was a challenge, but eventually the application was live and DNS/SSL configured. All bases covered.
<br /><br />
Future sprints/versions of this project will consist of new technology and you can find the future plans below. If you'd like to use this site as your own portfolio,
I ask that you only reference the creator :)


## Installation
| Dependency | Version | Description |
| :--------: | :-----: | ----------- |
| Node.js | 12.16.1 | This is the core of the application. The Node runtime environment was installed by default on the Bitnami Lightsail instance. There was no need for me to manually install it. |
| NPM | NA | The node package manager can be used to install all of the remaining dependencies but, I will list a few key ones below. |
| Material UI | 4.3.2 | The core Material UI library. This is a bootstrap alternative that I think feels a little more modern. |
| React | 16.8.6 | React handles the content routing and allows for the component based, single page application. |
| Next | 9.0.2 | Next is a framework based on react that allows for scalable front end applications. |
| Express | 4.17.1 | Express is the application server. It has a robust feature set, but for this implementation we focus on the serving capabilities. |
<br />
<i><strong>This is not a complete list of NPM dependencies and running "npm install" will download everything you need.</i></strong>

## Application Structure
----> <strong>Root</strong>:<i> The base of the repository.</i>
<br /><br />
--------><strong>index.js</strong>:<i> Root index file, calls upon the server. </i>
<br /><br />
--------><strong>server.js</strong>:<i> Serves the application. </i>
<br /><br />
--------><strong>components</strong>:<i> Directory for the source code of each component module.</i>
<br /><br />
------------><strong>"Insert Component Name"</strong>:<i> Any of the sub components.</i>
<br /><br />
----------------><strong>"index.js"</strong>:<i> Base router file.</i>
<br /><br />
----------------><strong>"ComponentName.js"</strong>:<i> Most of the component logic.</i>
<br /><br />
----------------><strong>"ComponentName-Style.js"</strong>:<i> Styling file.</i>
<br /><br />
--------><strong>pages</strong>:<i> Router files referencing components. Key file listed below.</i>
<br /><br />
------------><strong>"index.js"</strong>:<i> Router file that handles component references.</i>
<br /><br />
--------><strong>static</strong>:<i> Any static text and imagery</i>
<br /><br />
--------><strong>theme</strong>:<i> Commonly referenced/universal styles</i>
<br /><br />
--------><strong>theme</strong>:<i> Commonly referenced/universal styles</i>

## Usage

1. Clone the repository
2. npm install
3. node index.js
4. You will see the application running on localhost port 3000
<br /><br />
<strong><i>To further configure your site with a proper domain and apache. I will have a Lightsail specific guide likely in the repository wiki soon.</strong></i>
