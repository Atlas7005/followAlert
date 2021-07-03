# followAlert
Custom Follow Alert for Twitch.
## Note
You need to have [Ngrok](https://ngrok.com) installed to use this!
## Usage
1. Clone the repo.
2. Install dependencies `$ npm install`.
4. Edit `.env.example` to fit your credentials.
5. Then rename it to `.env`
6. If you want a different sound, replace the `sound.mp3` file.
7. Start using Node.js `$ node app.js`.
8. Open `index.html` file to test.
9. Add Browser Source in SLOBS or OBS Studio, or whatever you're using.
10. Set Browser Source to the file, or if you have nginx, host the file(s) using that and set the source to the link.
11. Profit.
## Customization
There are no easy way to customize this, but if you know CSS, you can go inside the `index.html` file and edit to your needs.
Keep in mind, I will not help you if you f\*cked something up when customizing.
## License
[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
