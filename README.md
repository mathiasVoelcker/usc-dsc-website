# USC DSC Website

# Table of Contents

- [Getting Started](#getting-started)
    - [Deploying the Website to the Cloud](#deploying-the-website-to-the-cloud)
- [FAQ](#faq)
- [Authors](#authors)
- [Contributors](#contributors)
- [How to run locally](#how-to-run-locally)


# Getting Started

## Deploying the Website to the Cloud

This app automatically deploys the project to the cloud when a new commit is pushed to it. The current domain of the website is dscusc.com and www.dsc-usc.appspot.com. 

# Authors
"Ziyi Wu" ziyiwu@usc.edu  
"DK Lee"  

# Contributors
A massive thank you to the original creators of this template at CSUSM:  
"Alexander Garcia" garci877@cougars.csusm.edu  
"Ace Gabriel Figueroa" figue032@cougars.csusm.edu  

# How to run locally
1 - download google-cloud-sdk from [this link](https://cloud.google.com/sdk/docs/install)
2 - extract the google-cloud-sdk folder and move it to the same folder where the usc-dsc-website folder is
3 - outside the usc-dsc-website folder, run the command:
    [path to dev_appserver.py] [path to usc-dsc-website]
    in other words:
    google-cloud-sdk/bin/dev_appserver.py usc-dsc-website/
4 - Open your web browser and visit http://localhost:8080/
