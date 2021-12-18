'use strict'

const newBizInfo = {
     isOpenNewBizInfo: false,
     openNewBizInfo(args) {
          this.isOpenNewBizInfo = true;

          args = JSON.parse(args);

          let name = args[1],
               owner = args[3],
               bizPrice = args[4],
               enterPrice = args[5],
               isBizOpen = args[6],
               resultParams = [];

          isBizOpen >= 1 ? isBizOpen = 1 : isBizOpen = 0;

          resultParams = JSON.stringify([isBizOpen, name, owner, enterPrice, bizPrice]);

          window.openInterface('Business', resultParams);
     },
     closeNewBizInfo() {
          try {
               this.isOpenNewBizInfo = false;

               window.interface('Business').close();

               setTimeout(() => {
                    window.closeInterface('Business');
               }, 500);

               return
          } catch (error) { return }
     },
     hookGameText() {
          setTimeout(() => {
               window.App.$children[0].$refs["GameText"][0].add = new Proxy(window.App.$children[0].$refs["GameText"][0].add, {
                    apply(target, thisArg, args) {

                         setTimeout(() => {
                              if (newBizInfo.isOpenNewBizInfo) {
                                   return false
                              }

                              target.apply(thisArg, args);
                         }, 50)

                         return true
                    }
               })
          }, 1000);
     },
     start() {
          window.openInterface = new Proxy(window.openInterface, {
               apply(target, thisArg, args) {

                    let componentName = args[0];

                    if (componentName == 'InfoCard') {
                         let propertyId = JSON.parse(args[1])[0];

                         propertyId == 1 ? newBizInfo.openNewBizInfo(args[1]) : target.apply(thisArg, args);
                         return
                    }

                    if (componentName == 'GameText') {
                         newBizInfo.hookGameText();
                    }

                    target.apply(thisArg, args);
                    return
               }
          })

          window.closeInterface = new Proxy(window.closeInterface, {
               apply(target, thisArg, args) {

                    let componentName = args[0];

                    if (componentName == 'InfoCard') {
                         newBizInfo.isOpenNewBizInfo ? newBizInfo.closeNewBizInfo() : target.apply(thisArg, args);
                         return
                    }

                    target.apply(thisArg, args);
                    return
               }
          })
     }
}

newBizInfo.start();