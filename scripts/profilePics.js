//simple script using sharp to resize all images of members to 250x250
const sharp = require('sharp');
const fs = require('fs');

const memberDir = '../images/profiles/';

const members = fs.readdirSync(memberDir);



members.forEach(function(member) {
    const str = member.slice(0,-4);
    console.log(str);
    sharp(memberDir + member)
        .png({ progressive: false, force: true })
		.resize(250, 250)
		.toFile('./compressed-member-pics/' + str + ".png", function(err, info) {
			if (err) {
				console.log('error', err)
			}
			if (info) {
				console.log('info:', info)
			}
		})
})



