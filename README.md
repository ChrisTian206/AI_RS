# AI_RS

This is a repo for startup Azula. Current features of this app is having AI to assist users searching for properties. Comparing the old way of list searching, using AI could greatly save time and efforts. 

Front end:
* React under Vite.js
* Deployed on Vercel

Backend:
* ExpressJs & NodeJS
* Deployed on Render
* API: POST /api/ai/talk, POST /api/listings/getProperty

# Notes:
Current deployment on both Vercel and Render are running on free tiers. Expect latency as Render will put inactive servers to sleep. Request to server and handling are running on spin cycle. Once upgrade, server speed will be improved.
