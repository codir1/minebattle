(this.webpackJsonpminebattle=this.webpackJsonpminebattle||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/double.65c72b15.png"},198:function(e,t,a){e.exports=a(318)},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);a(199),a(225),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267);var n=a(0),r=a.n(n),o=a(124),i=a.n(o),c=a(23),l=a.n(c),s=a(47),m=a.n(s),u=a(79),d=a(152),h=a(56),p=a(125),f=a(126),E=a(21),b=a(154),g=a(153),v=a(127),k=a.n(v),y=a(1),w=(a(316),a(317),a(80)),S=a.n(w),C=a(141),A=a.n(C),z=a(140),x=a.n(z),M=a(82),j=a.n(M),_=a(83),O=a.n(_),D=a(147),T=a.n(D),P=a(143),R=a.n(P),V=a(144),B=a.n(V),I=a(81),W=a.n(I),U=a(149),q=a.n(U),K=a(148),L=a.n(K),X=a(145),G=a.n(X),F=a(146),N=a.n(F),J=a(320),H=a(321),Q=a(322),Z=a(323),Y=a(150),$=a.n(Y),ee=a(142),te=a.n(ee),ae=a(139),ne=a.n(ae),re=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).events=function(e){e.on("connect",(function(){n.setState({connected:!0}),console.info("\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")})),e.on("disconnect",(function(){n.setState({connected:!1}),console.info("\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u043b\u043e\u0441\u044c")})),e.on("offer",(function(e){"subscribe"===e&&n.setState({activeModal:"subscribe"}),"ads"===e&&n.setState({activeModal:"ads"})})),e.on("profile",(function(e){n.setState({profile:e})})),e.on("globalData",(function(e){n.setState({globalData:e})})),e.on("online",(function(e){n.setState({online:e})})),e.on("birzha",(function(e){n.setState({birzha:e})})),e.on("top",(function(e){n.setState({top:e})})),e.on("done2",(function(e){n.openDoneSnackbar(e)})),e.on("done",(function(e){n.openDoneAlert(e)})),e.on("error2",(function(e){n.openErrorSnackbar(e)})),e.on("error",(function(e){n.openErrorAlert(e)})),e.on("limit",(function(){n.setState({activeModal:"limit"})})),e.on("paymentLink",(function(e){window.location.href=e})),e.on("bet",(function(e){n.setState(Object(h.a)({},Object.keys(e)[0],e[Object.keys(e)[0]]))})),e.on("newBet",(function(e){n.setState({gameBets:[].concat(Object(d.a)(n.state.gameBets),[e])})}))},n.onChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.connect=function(){window.socket=k.a.connect("https://mmnn.host:7777",{autoConnect:!0,secure:!0,timeout:5e3,reconnection:!0,reconnectionDelay:1e3,reconnectionDelayMax:2e3,reconnectionAttempts:1/0,query:window.location.search.substring(1),transports:["websocket"]}),n.events(window.socket),window.socket.connect()},n.openErrorSnackbar=function(e){n.setState({snackbar:r.a.createElement(y.x,{duration:1e3,layout:"vertical",onClose:function(){return n.setState({snackbar:null})},before:r.a.createElement(y.b,{size:24,style:{backgroundColor:"orange"}},r.a.createElement(x.a,{fill:"#fff",width:14,height:14}))},e)})},n.openErrorAlert=function(e){n.setState({popout:r.a.createElement(y.a,{actions:[{title:"\u041e\u041a",autoclose:!0}],onClose:function(){return n.setState({popout:null})}},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("p",null,e))})},n.openDoneAlert=function(e){n.setState({popout:r.a.createElement(y.a,{actions:[{title:"\u041e\u041a",autoclose:!0}],onClose:function(){return n.setState({popout:null})}},r.a.createElement("h2",null,"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),r.a.createElement("p",null,e))})},n.openDoneSnackbar=function(e){n.setState({snackbar:r.a.createElement(y.x,{duration:1e3,layout:"vertical",onClose:function(){return n.setState({snackbar:null})},before:r.a.createElement(y.b,{size:24,style:{backgroundColor:"green"}},r.a.createElement(A.a,{fill:"#fff",width:14,height:14}))},e)})},n.getAvatarUrl=function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo",{user_id:t});case 2:return a=e.sent,e.abrupt("return",a.photo_100);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onStoryChange=function(e){n.setState({activeStory:e.currentTarget.dataset.story})},n.publishStory=function(){var e=new Image;e.src="https://sun9-35.userapi.com/impg/6CeuDujXH0wgkaSTpqwj7689XZ9b8rhGVAijTQ/c-rmOnFIkEo.jpg?size=1080x1920&quality=96&proxy=1&sign=07aedf5d7dfc0e1bed878e98b9f2c85f",e.crossOrigin="anonymous";var t=document.createElement("canvas");document.body.appendChild(t),t.style.display="none";var a=t.getContext("2d");e.onload=function(){t.width=e.width,t.height=e.height,a.drawImage(e,0,0,e.width,e.height),a.font="900 128px sans-serif",a.fillStyle="#00000",a.fillText("".concat(n.state.profile.diamonds,"\u20bd"),e.width/2-a.measureText("".concat(n.state.profile.diamonds,"\u20bd")).width/2,e.height/2+40),t.toBlob((function(e){e.crossOrigin="anonymous";var t=new FileReader;t.readAsDataURL(e),t.onload=function(){var e=t.result;n.setState({canStory:!0}),l.a.send("VKWebAppShowStoryBox",{background_type:"image",blob:e,locked:!0,attachment:{url:"https://vk.com/app7670769",type:"url",text:"go_to"}})}}))}},n.state={activeStory:"main",activePanel:"main",activeModal:null,activeTab:"passive",connected:!1,popout:null,snackbar:null,platform:"",profile:{},globalData:{active:[],passive:[],cases:[]},fetchedUser:{},online:0,top:[],birzha:[],canWatchAds:!1,clickTimer:Date.now(),rotate:0,troll:!1,transferAmount:0,transferLink:"",donateAmount:0,promocode:"",birzhaDiamonds:0,birzhaRub:0,qiwi:"",withdrawAmount:0,gameAmount:0,gameBets:[],gameTimer:0,isGame:!1,gameRotate:0,gameLength:10},n.onStoryChange=n.onStoryChange.bind(Object(E.a)(n)),n.events=n.events.bind(Object(E.a)(n)),n.connect=n.connect.bind(Object(E.a)(n)),n.openErrorSnackbar=n.openErrorSnackbar.bind(Object(E.a)(n)),n.openDoneSnackbar=n.openDoneSnackbar.bind(Object(E.a)(n)),n.getAvatarUrl=n.getAvatarUrl.bind(Object(E.a)(n)),n.publishStory=n.publishStory.bind(Object(E.a)(n)),n.click=n.click.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.transfer=n.transfer.bind(Object(E.a)(n)),n.replenish=n.replenish.bind(Object(E.a)(n)),n.activePromo=n.activePromo.bind(Object(E.a)(n)),n.createAd=n.createAd.bind(Object(E.a)(n)),n.openErrorAlert=n.openErrorAlert.bind(Object(E.a)(n)),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.search;new URLSearchParams(t);l.a.send("VKWebAppGetUserInfo",{}).then((function(t){e.setState({fetchedUser:t})})),l.a.supports("VKWebAppShowNativeAds")&&this.setState({canWatchAds:!0}),this.connect()}},{key:"UNSAFE_componentWillMount",value:function(){l.a.subscribe((function(e){"VKWebAppViewHide"===e.detail.type&&window.socket.disconnect(),"VKWebAppViewRestore"===e.detail.type&&window.socket.connect()}))}},{key:"click",value:function(){this.state.clickTimer+50>Date.now()||(this.setState({clickTimer:Date.now(),rotate:this.state.rotate+10}),window.socket.emit("click"))}},{key:"onChange",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(Object(h.a)({},a,n))}},{key:"transfer",value:function(){window.socket.emit("transfer",{user:this.state.transferLink,amount:this.state.transferAmount})}},{key:"replenish",value:function(){window.socket.emit("replenish",this.state.donateAmount)}},{key:"activePromo",value:function(){window.socket.emit("promo",this.state.promocode)}},{key:"createAd",value:function(){window.socket.emit("createAd",{diamonds:this.state.birzhaDiamonds,rub:this.state.birzhaRub})}},{key:"render",value:function(){var e=this,t=r.a.createElement(y.p,{activeModal:this.state.activeModal},r.a.createElement(y.m,{id:"subscribe",onClose:function(){return e.setState({activeModal:null})},icon:r.a.createElement(S.a,null),header:"150\ud83d\udc8e \u0437\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u043d\u0430\u0441!",caption:"\u0410\u043b\u043c\u0430\u0437\u044b \u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043d\u0430 \u0412\u0430\u0448\u0435\u043c \u0431\u0430\u043b\u0430\u043d\u0441\u0435",actions:[{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c 150\ud83d\udc8e",mode:"positive",action:function(){l.a.send("VKWebAppJoinGroup",{group_id:200485232}),l.a.send("VKWebAppAllowMessagesFromGroup",{group_id:200485232})}}]}),r.a.createElement(y.m,{id:"ads",onClose:function(){return e.setState({activeModal:null})},icon:r.a.createElement(S.a,null),header:"500\ud83d\udc8e \u0437\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0440\u0435\u043a\u043b\u0430\u043c\u044b!",caption:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 500\ud83d\udc8e \u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e",actions:[{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c 500\ud83d\udc8e",mode:"commerce",action:function(){e.setState({activeModal:null}),l.a.send("VKWebAppShowNativeAds",{ad_format:"reward"}).then(function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){window.socket.emit("ads",t)}),5e3);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){e.setState({activeModal:"ads"}),e.openErrorAlert("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443")}))}}]}),r.a.createElement(y.m,{id:"birzhaBuy",onClose:function(){return e.setState({activeModal:null})},icon:r.a.createElement(W.a,null),header:"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043a\u0440\u044b\u0442",caption:"\u0414\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u043c\u0435\u043d\u0430 \ud83d\udc8e \u043d\u0430 \u20bd \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c VIP \u0441\u0442\u0430\u0442\u0443\u0441.",actions:[{title:"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 VIP",mode:"commerce",action:function(){e.setState({activeModal:"vip"})}}]}),r.a.createElement(y.n,{id:"vip",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 VIP")},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"\u0427\u0442\u043e \u0434\u0430\u0451\u0442 VIP?"),r.a.createElement("br",null),r.a.createElement("p",null,"\u2022 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0438\u0440\u0436\u0435 \u0430\u043b\u043c\u0430\u0437\u043e\u0432"),r.a.createElement("p",null,"\u2022 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c"),r.a.createElement("p",null,"\u2022 \u0434\u043e\u0431\u044b\u0447\u0430 \u0430\u043b\u043c\u0430\u0437\u043e\u0432 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0430 \u043d\u0430 30%"),r.a.createElement("p",null,"\u2022 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u0431\u0435\u0441\u0435\u0434\u0443 VIP \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),r.a.createElement("br",null),r.a.createElement("p",null,"\ud83c\udf81 \u041f\u0420\u0418 \u041f\u041e\u041a\u0423\u041f\u041a\u0415 \u0412 \u041f\u041e\u0414\u0410\u0420\u041e\u041a \u0412\u042b\u0414\u0410\u0401\u041c 2 \u0410\u041b\u041c\u0410\u0417\u041d\u042b\u0425 \u041a\u0415\u0419\u0421\u0410 \ud83c\udf81")),r.a.createElement(y.f,{style:{display:"flex"}},r.a.createElement(y.c,{mode:"commerce",stretched:!0,size:"xl",href:"https://vk.com/app6887721_-200485232#donate_149&op_2",target:"_blank"},"\u041a\u0443\u043f\u0438\u0442\u044c VIP \u0437\u0430 149 \u0440."))),r.a.createElement(y.m,{id:"limit",onClose:function(){return e.setState({activeModal:null})},icon:r.a.createElement(W.a,null),header:"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d!",caption:"\u0411\u0435\u0437 VIP \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u043e 200 000\ud83d\udc8e",actions:[{title:"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 VIP",mode:"commerce",action:function(){e.setState({activeModal:"vip"})}}]}),r.a.createElement(y.n,{id:"transfer",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434")},r.a.createElement(y.h,null,r.a.createElement(y.l,{top:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0412\u041a",name:"transferLink",value:this.state.transferLink,onChange:this.onChange}),r.a.createElement(y.l,{top:"\u0421\u0443\u043c\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430",name:"transferAmount",value:this.state.transferAmount,onChange:this.onChange}),r.a.createElement(y.c,{mode:"commerce",size:"xl",before:r.a.createElement(j.a,null),stretched:!0,onClick:this.transfer},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"))),r.a.createElement(y.n,{id:"boosters",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u0423\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u0438")},r.a.createElement(y.A,{mode:"buttons"},r.a.createElement(y.B,{id:"passive",selected:"passive"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"passive"})},after:r.a.createElement(y.e,{size:"s"},this.state.globalData.passive.length)},"\u041f\u0430\u0441\u0441\u0438\u0432\u043d\u044b\u0435"),r.a.createElement(y.B,{id:"active",selected:"active"===this.state.activeTab,onClick:function(){return e.setState({activeTab:"active"})},after:r.a.createElement(y.e,{size:"s"},this.state.globalData.active.length)},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435")),"passive"===this.state.activeTab?this.state.globalData.passive.map((function(t){return r.a.createElement(y.w,{disabled:!0,after:e.state.profile.diamonds>=t.price?r.a.createElement(y.c,{mode:"commerce",onClick:function(){return window.socket.emit("buyBoosterPassive",t)}},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",t.price,"\ud83d\udc8e"):r.a.createElement(y.c,{disabled:!0},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",t.price,"\ud83d\udc8e"),description:"".concat(t.speed,"\ud83d\udc8e \u0432 \u0447\u0430\u0441")},t.name)})):this.state.globalData.active.map((function(t){return r.a.createElement(y.w,{disabled:!0,after:e.state.profile.diamonds>=t.price?r.a.createElement(y.c,{mode:"commerce",onClick:function(){return window.socket.emit("buyBoosterActive",t)}},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",t.price,"\ud83d\udc8e"):r.a.createElement(y.c,{disabled:!0},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",t.price,"\ud83d\udc8e"),description:"+".concat(t.speed,"\ud83d\udc8e \u043a \u043a\u043b\u0438\u043a\u0443")},t.name)}))),r.a.createElement(y.n,{id:"cases",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441: ",this.state.profile.rub," \ud83d\udcb0")},this.state.globalData.cases.map((function(e){return r.a.createElement(y.w,{disabled:!0,after:r.a.createElement(y.c,{mode:"commerce",onClick:function(){return window.socket.emit("buyCase",e)}},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",e.price,"\ud83d\udcb0"),description:"\u0432\u044b\u043f\u0430\u0434\u0430\u0435\u0442 \u0434\u043e ".concat(e.max,"\ud83d\udc8e")},e.name)}))),r.a.createElement(y.n,{id:"referrals",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u0414\u0440\u0443\u0437\u044c\u044f")},r.a.createElement(y.h,null,r.a.createElement(y.c,{size:"xl",stretched:!0,onClick:this.publishStory,before:r.a.createElement(J.a,null)},"\u0412 \u0438\u0441\u0442\u043e\u0440\u0438\u044e"))),r.a.createElement(y.n,{id:"donate",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u0414\u043e\u043d\u0430\u0442")},r.a.createElement(y.h,null,r.a.createElement(y.l,{name:"donateAmount",onChange:this.onChange,value:this.state.donateAmount,top:"\u0421\u0443\u043c\u043c\u0430",bottom:"\u0412\u0437\u0430\u043c\u0435\u043d \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435: ".concat(1*this.state.donateAmount," \ud83d\udcb0")}),this.state.donateAmount>0?r.a.createElement(y.c,{size:"xl",onClick:this.replenish},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"):r.a.createElement(y.c,{size:"xl",disabled:!0},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"))),r.a.createElement(y.n,{id:"promo",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434")},r.a.createElement(y.h,null,r.a.createElement(y.l,{name:"promocode",onChange:this.onChange,value:this.state.promocode,top:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"}),""!==this.state.promocode?r.a.createElement(y.c,{size:"xl",onClick:this.activePromo},"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"):r.a.createElement(y.c,{size:"xl",disabled:!0},"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))),r.a.createElement(y.n,{id:"createAd",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435")},r.a.createElement(y.h,null,r.a.createElement(y.l,{name:"birzhaDiamonds",onChange:this.onChange,value:this.state.birzhaDiamonds,top:"\u041a\u043e\u043b-\u0432\u043e \ud83d\udc8e"}),r.a.createElement(y.l,{name:"birzhaRub",onChange:this.onChange,value:this.state.birzhaRub,top:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),this.state.birzhaDiamonds>0&&this.state.birzhaRub>0?r.a.createElement(y.c,{size:"xl",onClick:this.createAd},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"):r.a.createElement(y.c,{size:"xl",disabled:!0},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))),r.a.createElement(y.n,{id:"withdraw",onClose:function(){return e.setState({activeModal:null})},header:r.a.createElement(y.o,{right:r.a.createElement(y.t,{onClick:function(){return e.setState({activeModal:null})}})},"\u0412\u044b\u0432\u043e\u0434")},r.a.createElement(y.h,null,r.a.createElement(y.l,{name:"qiwi",onChange:this.onChange,value:this.state.qiwi,top:"\u041d\u043e\u043c\u0435\u0440 QIWI \u041a\u043e\u0448\u0435\u043b\u044c\u043a\u0430"}),r.a.createElement(y.l,{name:"withdrawAmount",onChange:this.onChange,value:this.state.withdrawAmount,top:"\u0421\u0443\u043c\u043c\u0430 \u0432\u044b\u0432\u043e\u0434\u0430"}),this.state.profile.rub2>0?r.a.createElement(y.c,{size:"xl",onClick:function(){return window.socket.emit("withdraw",{amount:e.state.withdrawAmount,qiwi:e.state.qiwi})}},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"):r.a.createElement(y.c,{size:"xl",disabled:!0},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"))));return r.a.createElement(y.g,{activeStory:this.state.activeStory,tabbar:r.a.createElement(y.y,null,r.a.createElement(y.z,{onClick:this.onStoryChange,selected:"game"===this.state.activeStory,"data-story":"game",text:"\u0418\u0433\u0440\u0430"},r.a.createElement(H.a,null)),r.a.createElement(y.z,{onClick:this.onStoryChange,selected:"main"===this.state.activeStory,"data-story":"main",text:"\u0428\u0430\u0445\u0442\u0430"},r.a.createElement(te.a,null)),r.a.createElement(y.z,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more",text:"\u0415\u0449\u0451"},r.a.createElement(Q.a,null)))},r.a.createElement(y.C,{id:"main",activePanel:this.state.activePanel,popout:this.state.popout?this.state.popout:this.state.fetchedUser&&this.state.connected&&this.state.profile?null:r.a.createElement(y.v,null),modal:t},r.a.createElement(y.q,{id:"main"},r.a.createElement(y.r,{left:r.a.createElement(y.b,{size:36,src:this.state.fetchedUser.photo_100}),separator:!1},"MineBattle"),r.a.createElement(y.i,{separator:!1},r.a.createElement("div",{className:"balance"},r.a.createElement("p",null,"\u0432\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"),r.a.createElement("h1",null,Math.floor(this.state.profile.diamonds),r.a.createElement("small",null,"\ud83d\udc8e"))),r.a.createElement("img",{onClick:this.click,style:{alignContent:"center",display:"block",maxWidth:150,margin:"20px auto",transform:"rotate(".concat(this.state.rotate,"deg)"),transition:"all 0.25s ease 0s"},src:"https://www.nicepng.com/png/full/154-1548006_minecraft-diamond-minecraft-diamond-pixel-art.png"}),r.a.createElement(y.i,{header:r.a.createElement(y.j,{mode:"secondary"},this.state.online," \u043e\u043d\u043b\u0430\u0439\u043d")},r.a.createElement(y.f,{style:{display:"flex"}},r.a.createElement(y.c,{mode:"commerce",before:r.a.createElement(j.a,null),stretched:!0,style:{marginRight:8},size:"xl",onClick:function(){return e.setState({activeModal:"transfer"})}},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"),r.a.createElement(y.c,{mode:"commerce",before:r.a.createElement(R.a,null),size:"xl",stretched:!0,href:"https://vk.com/app6887721_-200485232",target:"_blank"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},r.a.createElement(y.c,{mode:"destructive",before:r.a.createElement(B.a,null),size:"xl",stretched:!0,onClick:function(){if(!e.state.profile.vip)return e.setState({activeModal:"birzhaBuy"});e.setState({activePanel:"birzha"})}},"\u0411\u0438\u0440\u0436\u0430")),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(G.a,null),size:"xl",stretched:!0,style:{marginRight:8},onClick:function(){return e.setState({activeModal:"boosters"})}},"\u0423\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u0438"),r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(N.a,null),size:"xl",stretched:!0,onClick:function(){return e.setState({activeModal:"cases"})}},"\u041a\u0435\u0439\u0441\u044b")),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},this.state.canWatchAds?r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(O.a,null),size:"xl",stretched:!0,style:{marginRight:8},onClick:function(){return e.setState({activeModal:"ads"})}},"\u0411\u043e\u043d\u0443\u0441"):r.a.createElement(y.c,{size:"xl",disabled:!0,before:r.a.createElement(O.a,null),style:{marginRight:8}},"\u0411\u043e\u043d\u0443\u0441"),r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(T.a,null),size:"xl",stretched:!0,onClick:function(){return e.setState({activeModal:"referrals"})}},"\u0414\u0440\u0443\u0437\u044c\u044f")),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(L.a,null),size:"xl",stretched:!0,style:{marginRight:8},onClick:function(){return e.setState({activeModal:"promo"})}},"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"),r.a.createElement(y.c,{mode:"primary",before:r.a.createElement(q.a,null),size:"xl",stretched:!0,onClick:function(){return e.setState({activePanel:"top"})}},"\u0422\u043e\u043f")))),this.state.snackbar),r.a.createElement(y.q,{id:"top"},r.a.createElement(y.r,{left:r.a.createElement(y.s,{onClick:function(){return e.setState({activePanel:"main"})}})},"\u041b\u0443\u0447\u0448\u0438\u0435 \u0448\u0430\u0445\u0442\u0451\u0440\u044b"),this.state.top.map((function(e,t){return r.a.createElement(y.w,{disabled:!0,before:r.a.createElement(y.b,{size:48,src:e.avatar}),description:"".concat(t+1," \u043c\u0435\u0441\u0442\u043e"),after:"".concat(Math.floor(e.diamonds)," \ud83d\udc8e")},e.first_name," ",e.last_name)}))),r.a.createElement(y.q,{id:"birzha"},r.a.createElement(y.r,{left:r.a.createElement(y.s,{onClick:function(){return e.setState({activePanel:"main"})}})},"\u0411\u0438\u0440\u0436\u0430"),r.a.createElement(y.i,null,r.a.createElement(y.w,{disabled:!0,before:r.a.createElement(y.b,{size:48,src:this.state.fetchedUser.photo_100}),description:"\u0411\u0430\u043b\u0430\u043d\u0441 \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043e\u043a: ".concat(this.state.profile.rub,"\ud83d\udcb0\n\u0411\u0430\u043b\u0430\u043d\u0441 \u0432\u044b\u0432\u043e\u0434\u0430 \u0441 \u0431\u0438\u0440\u0436\u0438: ").concat(this.state.profile.rub2,"\u20bd"),after:r.a.createElement(y.c,{size:"m",onClick:function(){return e.setState({activeModal:"withdraw"})}},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438")},this.state.fetchedUser.first_name," ",this.state.fetchedUser.last_name),r.a.createElement(y.f,{style:{display:"flex"}},r.a.createElement(y.c,{before:r.a.createElement($.a,null),onClick:function(){return e.setState({activeModal:"createAd"})},style:{marginRight:8}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))),r.a.createElement(y.i,{separator:!0,header:r.a.createElement(y.j,{mode:"secondary"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f")},this.state.birzha.map((function(t){return r.a.createElement(y.w,{disabled:!0,before:r.a.createElement(y.b,{src:t.avatar,size:48}),description:"".concat(t.count,"\ud83d\udc8e \u0437\u0430 ").concat(t.price," \u0440. \ud83d\udcb0"),after:e.state.profile.rub>t.price?r.a.createElement(y.c,{onClick:function(){return window.socket.emit("buyBirzha",t)}},"\u041a\u0443\u043f\u0438\u0442\u044c"):r.a.createElement(y.c,{disabled:!0},"\u041a\u0443\u043f\u0438\u0442\u044c")},t.first_name," ",t.last_name)}))))),r.a.createElement(y.C,{id:"game",activePanel:"main",popout:this.state.popout?this.state.popout:this.state.connected&&this.state.profile?null:r.a.createElement(y.v,null),modal:t},r.a.createElement(y.q,{id:"main"},r.a.createElement(y.r,null,"\u0418\u0433\u0440\u0430"),r.a.createElement(y.k,{header:"".concat(this.state.gameTimer," \u0441.")},r.a.createElement(y.u,{value:Math.floor(this.state.gameTimer/.15)})),r.a.createElement(y.f,{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement(Z.a,null),r.a.createElement("img",{style:{alignContent:"center",display:"block",maxWidth:300,margin:"20px auto",transform:"rotate(".concat(this.state.gameRotate,"deg)"),transition:"all ".concat(this.state.gameLength,"s ease 0s")},src:ne.a})),r.a.createElement(y.l,{name:"gameAmount",value:this.state.gameAmount,top:"\u0421\u0443\u043c\u043c\u0430 \u0441\u0442\u0430\u0432\u043a\u0438",onChange:this.onChange}),r.a.createElement(y.f,{style:{display:"flex"}},this.state.profile.diamonds>=this.state.gameAmount&&!this.state.gameBets.find((function(t){return t.id==e.state.profile.id}))?r.a.createElement(y.c,{mode:"overlay_secondary",size:"l",style:{marginRight:8},stretched:!0,onClick:function(){return window.socket.emit("bet",{color:"black",amount:e.state.gameAmount})}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u0447\u0451\u0440\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X2")):r.a.createElement(y.c,{disabled:!0,mode:"overlay_secondary",size:"l",style:{marginRight:8},stretched:!0},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u0447\u0451\u0440\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X2"))),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},this.state.profile.diamonds>=this.state.gameAmount&&!this.state.gameBets.find((function(t){return t.id==e.state.profile.id}))?r.a.createElement(y.c,{mode:"destructive",size:"l",style:{marginRight:8},stretched:!0,onClick:function(){return window.socket.emit("bet",{color:"red",amount:e.state.gameAmount})}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u043a\u0440\u0430\u0441\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X2")):r.a.createElement(y.c,{disabled:!0,mode:"destrucitve",size:"l",style:{marginRight:8},stretched:!0},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u043a\u0440\u0430\u0441\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X2"))),r.a.createElement(y.f,{style:{display:"flex",paddingTop:0}},this.state.profile.diamonds>=this.state.gameAmount&&!this.state.gameBets.find((function(t){return t.id==e.state.profile.id}))?r.a.createElement(y.c,{mode:"commerce",size:"l",style:{marginRight:8},stretched:!0,onClick:function(){return window.socket.emit("bet",{color:"green",amount:e.state.gameAmount})}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u0437\u0435\u043b\u0451\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X5")):r.a.createElement(y.c,{disabled:!0,mode:"commerce",size:"l",style:{marginRight:8},stretched:!0},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",this.state.gameAmount," \ud83d\udc8e \u043d\u0430 \u0437\u0435\u043b\u0451\u043d\u043e\u0435 ",r.a.createElement("strong",null,"X5"))),r.a.createElement(y.i,{header:r.a.createElement(y.j,{mode:"secondary"},"\u0421\u0442\u0430\u0432\u043a\u0438")},this.state.gameBets.map((function(e){return r.a.createElement(y.w,{before:r.a.createElement(y.b,{size:28,src:e.avatar}),after:"".concat(e.amount,"\ud83d\udc8e"),description:"black"===e.color?"\u0427\u0451\u0440\u043d\u044b\u0439":"red"===e.color?"\u041a\u0440\u0430\u0441\u043d\u044b\u0439":"\u0417\u0435\u043b\u0451\u043d\u044b\u0439"},e.first_name," ",e.last_name)}))))),r.a.createElement(y.C,{id:"more",activePanel:"main"},r.a.createElement(y.q,{id:"main"},r.a.createElement(y.r,null,"\u0415\u0449\u0451"),r.a.createElement(y.d,{href:"https://vk.com/minebattlegame",target:"_blank"},"\u041d\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430"),r.a.createElement(y.d,{href:"https://vk.me/minebattlehelp",target:"_blank"},"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"),r.a.createElement(y.d,{href:"https://vk.com/@minebattlegame-howplay",target:"_blank"},"\u041f\u043e\u043c\u043e\u0449\u044c \u043f\u043e \u0438\u0433\u0440\u0435"),r.a.createElement(y.d,{href:"https://vk.com/@minebattlegame-faq",target:"_blank"},"\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"))))}}]),a}(r.a.Component),oe=a(151);a.n(oe).a.init({}),l.a.send("VKWebAppInit"),i.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.ed70053e.chunk.js.map