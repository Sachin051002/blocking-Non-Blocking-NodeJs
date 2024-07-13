# blocking-Non-Blocking-NodeJs
Express Server Blocking vs. Non-Blocking Example

This repository contains an example of an Express server demonstrating the difference between blocking and non-blocking endpoint implementations using Node.js worker threads.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Addition](#additional)

## Installation

## 1. Clone the repository:
   git clone https://github.com/Sachin051002/blocking-Non-Blocking-NodeJs.git
   cd blocking-Non-Blocking-NodeJs

## 2. Install dependencies:
npm install

## Usage

## 3. Testing the Blocking Script
Start the server with the blocking script:
npm run start1

## Access the endpoints:

http://localhost:3001/non-blocking - Should respond immediately with "It is the Non-blocking thread.".

http://localhost:3001/blocking - Will perform a blocking operation and cause the server to be unresponsive. Due to which non-blocking service also get delayed.

http://localhost:3001/blocking-worker - Will offload the heavy computation to a worker thread, allowing the server to remain responsive.

# Additional

Also added an extra file to show how to reduce time to perform heavy computation to a worker thread.

# check Difference

# Execute the first server: npm run start1

# run: 
Measure-Command { & "curl.exe" --get http://localhost:3001/blocking } (Window User)
time curl --get http://localhost:3001/blocking (Linux User)

# expected output: 
Days              : 0
Hours             : 0
Minutes           : 0
Seconds           : 24
Milliseconds      : 916
Ticks             : 249169190
TotalDays         : 0.000288390266203704
TotalHours        : 0.00692136638888889
TotalMinutes      : 0.415281983333333
TotalSeconds      : 24.916919
TotalMilliseconds : 24916.919

# Execute the second server : npm run start2

# run: 
Measure-Command { & "curl.exe" --get http://localhost:3001/blocking } (Window User)
time curl --get http://localhost:3001/blocking (Linux User)

# expected output:

Days              : 0
Hours             : 0
Minutes           : 0
Seconds           : 4
Milliseconds      : 294
Ticks             : 42948284
TotalDays         : 4.9708662037037E-05
TotalHours        : 0.00119300788888889
TotalMinutes      : 0.0715804733333333
TotalSeconds      : 4.2948284
TotalMilliseconds : 4294.8284

# Conclusion
The second server makes it 4-5 times faster than the first one.