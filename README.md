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
