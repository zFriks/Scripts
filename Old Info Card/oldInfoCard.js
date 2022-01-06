const oldInfoCard = {
     gameTextInterval: null,
     openOldInfoCard(params, interfaceName) {
          params = JSON.parse(params);
          let houseTypes = ["Эконом класс", "Деревенски дом", "Средни класс", "Премиум класс", "Элитны дом", "Эконом класс", "VIP класс", "Квартира"];
          
          let type = interfaceName == "Business" ? 1 : 0;
          let name = type == 0 ? params[1] : params[2];
          let roomAmount = type == 0 ? params[4] : params[6];
          let owner = type == 0 ? params[2] : params[3];
          let price = type == 0 ? params[6] : params[5];
          let rent = type == 0 ? params[5] : params[4];
          let paramType = type == 0 ? houseTypes.indexOf(params[3].replace('й', '').replace('й', '').replace('+', '')) : params[1];
          
          params = JSON.stringify([type, name, roomAmount, owner, price, rent, paramType]);
          
          window.openInterface('InfoCard', params);

          if (name.toLocaleLowerCase().includes('киоск')) setTimeout(() => {
               interface('InfoCard').$el.children[0].children[0].children[1].children[0].children[1].className = 'text';
               interface('InfoCard').$el.children[0].children[0].children[1].children[0].children[1].innerHTML = `<span style="color: hsl(336deg 28% 67%)">Свободных полок: ${roomAmount}<span>`;
               interface('InfoCard').$el.children[0].children[1].children[1].children[0].children[1].innerText = 'Налог на продажу'
               interface('InfoCard').$el.children[0].children[1].children[1].children[0].children[0].innerText = `${rent} %`;
          }, 50);

          if (interfaceName == 'Appartament') setTimeout(() => {
               interface('InfoCard').$el.children[0].children[1].children[0].children[0].innerHTML = `<span style="color:${owner.toLocaleLowerCase() == 'государство' ? 'hsl(120deg 100% 39%)' : 'FFFFFF'}">${owner}</span>`
               interface('InfoCard').$el.children[0].children[0].children[1].children[0].children[0].innerHTML = `<span style="color:${owner.toLocaleLowerCase() == 'государство' ? 'hsl(120deg 100% 39%)' : 'FFFFFF'}">${name}</span>`
          }, 50);
     },
     hookAndReplaceNewInfoCard() {
          App.$children[0].$refs['Appartament'] = [{
               close() {
                    clearInterval(oldInfoCard.gameTextInterval);
                    interface('GameText').add(`[3,\"~w~Для взаимодействия нажмите ~g~alt\",500,0,0,0]`)
                    window.closeInterface('InfoCard');
               }
          }];

          App.$children[0].$refs['Business'] = [{
               close() {
                    clearInterval(oldInfoCard.gameTextInterval);
                    interface('GameText').add(`[3,\"~w~Для взаимодействия нажмите ~g~alt\",500,0,0,0]`)
                    window.closeInterface('InfoCard');
               }
          }];

          window.openInterface = new Proxy(window.openInterface, {
               apply(target, thisArgs, args) {

                    try {
                         if (args[0] === 'Business' || args[0] === 'Appartament') {
                              interface('GameText').add(`[3,\"~w~Для взаимодействия нажмите ~g~alt\",3000,0,0,0]`);
                              oldInfoCard.gameTextInterval = setInterval(() => interface('GameText').add(`[3,\"~w~Для взаимодействия нажмите ~g~alt\",3000,0,0,0]`), 2000)
                              oldInfoCard.openOldInfoCard(args[1], args[0]);
                              return 0;
                         }
                    } catch (error) { }

                    return Reflect.apply(target, thisArgs, args);
               }
          });
     }
}

oldInfoCard.hookAndReplaceNewInfoCard();