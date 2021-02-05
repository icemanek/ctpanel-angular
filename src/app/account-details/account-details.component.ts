import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent{
  constructor(public auth: AuthService) {}

  discordMessage() {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://discord.com/api/webhooks/775461982832164925/oSUgvfrbiDMp1S5n4bLzaMaUxOEPbD_24CPY_Dwc_J-oMkAKlDEIlqXwmnNnmytGhqNv');

    request.setRequestHeader('Content-type', 'application/json');
    const myEmbed = {
      author: {
        name: 'managerSpotkan'
      },
      title: 'Spotkanie',
      description: '@everyone' + 'This is a cool-looking Discord embed, sent directly from Angular!',
      color: '16744479',
      allowed_mentions: 'everyone'
    };

    const params = {
      username: 'Przypomnienie',
      embeds: [ myEmbed ],
      mention_everyone: true
    };
    request.send(JSON.stringify(params));
  }

//
//   var axios = require('axios@0.19.2');
//   const botToken = 'Njk5NTMxMTY3NDU1NjQxNjkx.XqXRjQ.SjD2ePsT_cghTKks5Lqiq6FLbTQ';
//   const codingTreeGuildId = '627055978067525632';
//
//   axios
// .get('https://discordapp.com/api/users/@me', {
//   headers: {
//     Authorization: 'Bearer ' + access_token,
//   },
// })
// .then((response) => response.data)
//   .then((userInfo) => {
//     const {
//       id,
//       username,
//       avatar,
//       discriminator,
//       email
//     } = userInfo;
//     const profile = {
//       id: id,
//       user_id: id,
//       discord_id: id,
//       username: username,
//       picture: `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`,
//       discriminator: discriminator,
//       email: email,
//     };
//
//     axios
//       .get(`https://discordapp.com/api/guilds/${codingTreeGuildId}/members/${id}`, {
//         headers: {
//           Authorization: 'Bot ' + botToken,
//         },
//       })
//       .then((response) => response.data)
//       .then((codingTreeGuildInfo) => {
//         profile.is_member = true;
//         profile.roles = codingTreeGuildInfo.roles;
//         console.log(profile);
//         callback(null, profile);
//       })
//       .catch((err) => {
//         profile.isMember = false;
//         console.error(err);
//         callback(null, profile);
//       });
//   })
//   .catch((err) => {
//     console.error(err);
//     callback(err);
//   });
// }
}
