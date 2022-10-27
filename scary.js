const style = document.createElement('style');
          style.innerHTML = `
          html body {
               animation: 5s infinite alternate mq;
          }

          @keyframes mq {
               0% {
                    background: url(https://images.unsplash.com/photo-1572453020814-972b244074d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
               }
               50% {
                    background: url(https://images.unsplash.com/photo-1602127642472-af608992566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80);
               }
               100% {
                    background: url(https://images.unsplash.com/photo-1572988276585-71035689a285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
               }
          }

          .fakeText {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 6vh;
          background: hsl(244deg 100% 50%);
          font-weight: 500;
          }
          `;
          document.head.append(style);

          const div = document.createElement('div');
          div.classList.add('fakeText');
          div.innerHTML = 'HELLO';
          document.body.append(div);

          window.onerror = null;

          function faketake(percent1) {
               if (percent1 < 100) {
                    percent1++;

                    div.innerText = "Upload of virus in progress: " + percent1 + "% complete";
                    fid1 = window.setTimeout(() => faketake(percent1), 100)



               } else {
                    //   alert("Upload of hard drive complete.  Thank you for your donation.\nNow deleting files...");
                    fid1 = window.setTimeout(() => fakeformat(0), 100);



               }
          }

          function fakeformat(percent) {
               if (percent < 100) {
                    percent++;
                    div.innerText = " Virus Upload complete - format of drive C:\\windows\\ in progress: " + percent + "% complete";
                    fid = window.setTimeout(() => fakeformat(percent), 78); // 900
               } else {
                    div.innerText = "Virus DeActivated... Closing Browser."; window.close()
               }
          }

          window.setTimeout(() => faketake(0), 200);
          
          playAdditionalSound('https://www.myinstants.com/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3')

          alert("ЗДАРОВА");
          alert("ЗАЧЕМ ТЫ СЮДА ЗАШЕЛ?");
          alert("ХОЧЕШЬ ПОИГРАТЬ СО МНОЙ?");
          alert("ТЫ СКАЧАЛ СБОРКУ И ПОЛУЧИЛ ВИРУС!");
          alert("ТАКЖЕ ВСЕ ТВОИ ДАННЫЕ УДАЛЯТЬСЯ С ЖЕСТКОГО ДИСКА!");
          alert("ТОЛЬКО НЕ ПЛАЧ!");
          alert("ПОСЛЕ ПОДГОТОВКИ ЭТА ВКЛАДКА ЗАКРОЕТСЯ И ВСЕ ТВОИ ДАННЫЕ УДАЛЯТСЯ ВМЕСТЕ С ВИНДОВС!");
          alert("ТОЛЬКО НЕ ЗАКРЫВАЙ ЭТУ ВКЛАДУ ИНАЧЕ ТВОЙ КОМПЬЮТЕР ВЫКЛЮЧИТСЯ И НЕ ВКЛЮЧИТСЯ");
          alert("НЕ ПЕРЕЖИВАЙ");
          alert("ПОНЕСЛАСЬ!");
