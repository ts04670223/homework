var name;
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
function gameplay() {
  Swal.fire({
    title: '這是一個找奶奶的故事，請輸入名字',
    input: 'text',
    inputValue: '小紅帽',
    showLoaderOnConfirm: true,
    confirmButtonText: '我取好了',
    cancelButtonText: '略過',
    showCancelButton: true,
    allowOutsideClick: false
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
      name = "小紅";
      Swal.fire({
        title: `不想輸入?我幫你取吧`,
        text: `那就叫你${name}吧，小紅開始找奶奶吧`,
        allowOutsideClick: false,
        imageUrl: 'files/00.png',
        imageHeight: 300
      }).then(start);
    }
    else {
      name = result.value;
      Swal.fire({
        title: `${name}這名字聽起來很棒！`,
        text: '請開始找奶奶',
        allowOutsideClick: false,
        imageUrl: 'files/01.png',
        imageHeight: 300
      }).then(start);
    }
  });
}
function start() {
  let mission;
  Swal.fire({
    title: `${name}，你即將邁向找奶奶的道路..`,
    text: "一旦走錯路就會迷失在森林，你要開始了嗎?",
    confirmButtonText: '出發!',
    cancelButtonText: '先不要..',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'files/01.png',
    imageHeight: 300,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `等你準備好找奶奶再來吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/11.jpg',
        imageHeight: 300
      });
    }
    else {
      Swal.fire({
        title: `開始找奶奶吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/12.jpg',
        imageHeight: 300
      }).then(function () {
        Swal.fire({//lv1
          title: "不明聲音",
          text: "遠處傳來砍木頭的聲音，要前往查看嗎?",
          confirmButtonText: '去看看!',
          cancelButtonText: '危險不去',
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: 'files/20.gif',
          imageHeight: 300,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              //B
              title: "GAME OVER",
              text: `因為不去，被隱藏的大野狼吃掉`,
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: "files/21.png",
              imageHeight: 300
            });
          }
          else {
            Swal.fire({ //G
              title: "過關",
              text: "原來是伐木工，跟他一起走躲過大野狼的追殺",
              allowOutsideClick: false,
              imageUrl: 'files/22.jpg',
              imageHeight: 300
            }).then(function () {
              Swal.fire({//lv2
                title: "遇到岔路",
                text: "要往左邊還是右邊",
                confirmButtonText: '左邊',
                cancelButtonText: '右邊',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'files/30.jpg',
                imageHeight: 300,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    //B
                    title: "GAME OVER",
                    text: "被大野狼吃掉",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "files/21.png",
                    imageHeight: 300
                  });
                }
                else {
                  Swal.fire({ //G
                    title: "過關",
                    text: "遇到熱心的叔叔帶路!",
                    allowOutsideClick: false,
                    imageUrl: 'files/32.gif',
                    imageHeight: 300
                  }).then(function () {
                    Swal.fire({//lv3
                      title: "下雨了",
                      text: "要躲進山洞還是冒雨趕路",
                      confirmButtonText: '躲進山洞',
                      cancelButtonText: '冒雨趕路',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'files/40.gif',
                      imageHeight: 300,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss !== 'cancel') {
                        Swal.fire({
                          //B
                          title: "GAME OVER",
                          text: "被大野狼吃掉",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: "files/21.png",
                          imageHeight: 300
                        });
                      }
                      else {
                        Swal.fire({ //G
                          title: "過關",
                          text: "遇到帶雨傘的好心大叔",
                          allowOutsideClick: false,
                          imageUrl: 'files/42.gif',
                          imageHeight: 300
                        }).then(function () {
                          Swal.fire({//lv4
                            title: "遇到小狗",
                            text: "要帶著它一起找奶奶嗎?",
                            confirmButtonText: '要',
                            cancelButtonText: '不要',
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'files/50.jpg',
                            imageHeight: 300,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                //B
                                title: "GAME OVER",
                                text: "狗是大野狼的同伴，被大野狼吃掉",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl:
                                  "files/21.png",
                                imageHeight: 300
                              });
                            }
                            else {
                              Swal.fire({ //G
                                title: "過關",
                                text: "狗生氣地跑走",
                                allowOutsideClick: false,
                                imageUrl: 'files/52.gif',
                                imageHeight: 300
                              }).then(function () {
                                Swal.fire({//lv5
                                  title: "進到奶奶家",
                                  text: "要跟奶奶擁抱嗎?",
                                  confirmButtonText: '擁抱',
                                  cancelButtonText: '拿出小刀殺了奶奶',
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: 'files/60.jpg',
                                  imageHeight: 300,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss === 'cancel') {
                                    Swal.fire(
                                      {
                                        //B
                                        title:"GAME OVER",
                                        text:"殺害親人，被關進大牢",
                                        confirmButtonText:"重新來過",
                                        allowOutsideClick: false,
                                        imageUrl:"files/61.gif",
                                        imageHeight: 300
                                      }
                                    );
                                  }
                                  else {
                                    Swal.fire({ //G
                                      title: "跟奶奶團圓",
                                      text: "你與奶奶擁抱再一起",
                                      allowOutsideClick: false,
                                      imageUrl: 'files/62.gif',
                                      imageHeight: 300
                                    }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}
function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('files/bg2.jpg')";
    mybtn.removeEventListener("click", start);
    mybtn.addEventListener("click", function(){
      location.reload();
    });
    mybtn.value = "恭喜完成找奶奶任務";
  }
}
gameplay();