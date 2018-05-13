webpackJsonp([0],{"+aM5":function(t,e){t.exports=[{title:"Chat-Cat",content:"This application is a network TCP chat server that I built as an exercise while I was at Pennapps in the Spring of 2018. The main goal of this project was to improve my skills in both network development and writing code with Go (Google's Language). The application itself consists of a multi-threaded server written in Go that accepts connections and serves the clients. The client application is written using electronjs which is a platform for writing desktop applications using web technologies (html, css, javascript). The application allows the user to have multiple conversations going on simultaneously and also group conversations with multiple parties. A feature that I did not have the chance to get to is secure communication such as session keys over which users can communicate securely. Perhaps, I will have that implemented in the application by the end of this year",link1:"https://github.com/eminkin97/Chat-Cat",link2:"https://devpost.com/software/chat-cat-3iwp1q",imgsrc:"bear.jpg"},{title:"RU Autonomous Central Control Server",content:"Since my 1st year at Rutgers, I've been involved as a member of a team competing in the association for unmanned vehicle systems international's (AUVSI) Student Unmanned Air Systems Competition. Our team represents Rutgers and is tasked with building a drone along with an autonomous system that is able to fly to certain waypoints, detect targets on the ground, and use optical image recognition to classify those targets into certain categories. I work on the team that manages the Central Control Server through which all images taken by the drone are processed. This past year, I was made the team leader and led a team of 5 developers as we improved and maintained the system. The system consists of a manual interface which allows the user to crop pictures sent to the Control Server manually and fill in their characteristics such as description, orientation, color, etc. manually as well. Then, there is also an autonomous side on the drone itself which sends targets that already have been cropped autonomously and that have had their characteristics and attributes decided through optical image recognition software that another team works on. There is a master editing page where one can view all targets that hae been submitted and can edit/delete them as well. The server itself was written using the Django Rest framework which is a restful api and web framework written in python.",link1:"https://github.com/RUAIAA",link2:"None",imgsrc:"None"},{title:"WingMan",content:"This application was built at the Pennapps Spring Hackathon in 2017. A two word summary of this app would be Celebrity Tinder. The team consisted of 4 developers including myself that I met at the Hackathon and based off the idea of one of the team members, we decided to undergo a deep learning classification project and after much debate, we eventually decided to do a web-based celebrity tinder. The client-side of the application is built using ReactJS as it's a single page application and React allows for dynamic rendering and real-time updates. The user is presented with an image on a web page of a celebrity and a like or a dislike. The user clicks like or dislike to indicate that he or she finds the person in the image attractive and the image changes and the process repeats. However, as the user continues to click and like or dislike certain images, the images of the celebrities begin to get more like the user's tastes. For example, if the user only liked women with red hair, then the images that would start to appear would be women with red hair. On the backend of this application, an optical face recognition library called Openface along with our stochastic gradient descent classification algorithm are working to present the user with images attuned to his/her tastes. Thus, the interface in this application may appear simple but what's happenning on the backend is anything but. The server itself is written using the Django web framework which uses python. Check out the project at the links below and let us know what you think!",link1:"https://github.com/herosang/WingMan",link2:"https://devpost.com/software/wingman-5fm728",imgsrc:"None"},{title:"SMS-RemindMe",content:"This application is a scheduler that works via SMS text. Using the Twilio API (https://www.twilio.com/), our team of 3 rutgers students was able to build a server that is linked to a phone number which can receive SMS text messages. Then, a user can simply text a request for an appointment reminder to the number and after receiving confirmation that the text was received, the server will send a text message back to the user, at a specified time interval before the appointment, to remind the user that the appointment is happenning. For example I could text 'Pick up groceries 2pm' to the number and at 2pm i'll receive a text message indicating that I need to pick up groceries. The convenience of this application is that it works over SMS so no data charges or internet connection is necessary. The application server itself is built using the Python Flask framework. Check out the project at the links below!",link1:"https://github.com/AustinTsa1/HackRU-Submission",link2:"https://devpost.com/software/hackru-submission",imgsrc:"None"},{title:"Classmate!",content:"This applicaion is meant to enable communication between students in college classes. The inspiration for this app was to have an application similar to GroupMe but one that every college student could join or participate in. In this spirit, this application is meant to be licensed by a school or educational institution that sets up chat rooms for all the classes that are offered at that institution. Students are, thus, free to join these chat rooms and communicate with their fellow peers to study together, work together on assignments, ask questions, etc. This app is built for the students meaning that professors are not allowed to participate in the chat room. The application itself was built for IOS using Swift and it uses a Django python Web server on the backend that the app can communicate with. Check out the project at the links below!",link1:"https://github.com/eminkin97/Classmate-",link2:"://devpost.com/software/classmate-fbnid8",imgsrc:"None"},{title:"YouTube Chrome Extension",content:"This application is a Google Chrome Browser Extension meant to make listening to music on youtube an easier process if one is also browsing the web at the same time. Now, when the user switches to another tab in chrome (away from the youtube video) a small dropdown appears that enables the user to pause, mute, skip, or move the scrubber in a youtube video. The extension handles multiple tabs so if the user has two youtube videos in two different tabs, then the extension will have two tabs as well. This extension makes listening to music and videos on youtube a much more user-friendly experience. The application is built with web technologies (javascript, html, css, bootstrap). Check it out at the Link below!",link1:"https://github.com/davidt314159/YouTube-Player-Chrome-Extension",link2:"None",imgsrc:"None"},{title:"Simple OS dev",content:"This application is the culmination of my work in cs416: Operating Systems at Rutgers university. This project contains a threading library implemented in the C programming library which models the functions and scheduler used in the pthread.h library. The part of this project contains a dynamic memory allocator that handles memory for a multi-threaded process. It does this by allocating page nodes in memory for each of these threads and continually swapping the page nodes out when a new thread is swapped into execution. The final part of this project contains a simple file system implemented (also in the C programming language) with the fuse library which reroutes system calls to functions that I wrote. The project consists of creating the main linux terminal commands (cd, ls, mkdir, rmdir, rm, touch, etc.) and allocating space for newly created files through the use of inodes in a flatfile that is treated as memory. Check out this enormous project at the link below!",link1:"https://github.com/eminkin97/Simple-os-dev-projs",link2:"None",imgsrc:"None"},{title:"This Site!",content:"This site was built entirely by me from the ground up using web technologies (html, css) and the vuejs web framework (https://vuejs.org/). It took me a fair amount of time so I hope you like it!",link1:"None",link2:"None",imgsrc:"None"}]},"24kv":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"header"}},[n("h1",{on:{click:t.redirectToHome}},[t._v("Eli Minkin's site")]),t._v(" "),n("div",{attrs:{id:"search"}},[t._m(0),t._v(" "),n("span",{on:{click:t.scrollToBottom}},[t._v("Contact")])])]),t._v(" "),n("div",{attrs:{id:"inner_content"}},[n("Navbar"),t._v(" "),n("router-view",{attrs:{id:"view"}})],1),t._v(" "),t._m(1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{method:"get",action:"http://www.google.com/search"}},[n("input",{attrs:{type:"text",name:"q"}}),t._v(" "),n("input",{attrs:{type:"submit",name:"Submit",value:"Search"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("p",[t._v("Website created by Eli Minkin")]),t._v(" "),n("p",[t._v("For all questions, please contact Eli Minkin at eminkin99@gmail.com")]),t._v(" "),n("p",[t._v("Last Updated: 5/11/18")])])}],o={render:i,staticRenderFns:a};e.a=o},"8yQt":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.projects,function(t){return n("Project",{attrs:{title:t.title,content:t.content,link1:t.link1,link2:t.link2,imgsrc:t.imgsrc}})}))},a=[],o={render:i,staticRenderFns:a};e.a=o},"9OxT":function(t,e){},BcJX:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{attrs:{id:"date"}},[t._v(" "+t._s(t.date)+" ")]),t._v(" "),n("img",{attrs:{src:"/static/"+t.imgsrc}}),t._v(" "),n("p",{attrs:{id:"content"}},[t._v(t._s(t.content))])])},a=[],o={render:i,staticRenderFns:a};e.a=o},CHQz:function(t,e,n){"use strict";var i=n("DoT9"),a=n.n(i),o=n("r2Tp");e.a={name:"Blog",data:function(){return{blogentries:a.a.reverse()}},components:{Blogentry:o.a}}},CvnX:function(t,e){},DoT9:function(t,e){t.exports=[{title:"The Beginning",imgsrc:"bear.jpg",date:"May 12th, 2018",content:"Hi! Welcome to the Blog part of this site. To be honest, I'm not really sure why I even added a blog ... i've never really been a blogger ... but i've built it and it's already here so I might as well use it. I'm not really sure what I'm going to write about yet so bear (Ha ha! that's why I put in the bear photo ... lol get it) with me please. I apologize in advance for all the spelling errors. Anyway, hope you enjoy the site!"},{title:"Entry 1: The Code Book",imgsrc:"cryptomeme.png",date:"May 13th, 2018",content:"For the first post, I think I'm going to briefly discuss what I thought of The Code Book by Simon Singh. I read the codebook this past March as a suggested reading to supplement a cryptography class I was taking and, compared to all the other non-fiction I've read which usually puts me to slip, I think that Singh managed to make the history of secure communication interesting, suspenseful, and actually fun to read. It starts with the origin of the use of secure communication and the first known methods for communicating securely. One of the interesting one's I thought was shaving the messenger's head, writing the message on his skull, and then waiting for the hair to grow back; then, the messenger can go along and deliver the message by shaving his head again and guards would never think to look under his hair. That one is definitely the coolest/craziest way of communicating securely but a more pivotal method is called the Caesar Cipher which was employed in Julius Caesar's time. Although this cipher was simple enough (it consists of just shifting every letter in the passage by a fixed number 1-26), it served Caesar well in his time since people weren't very mathematically inclined and when they saw the seemingly nonsensical combination of letters, they had no idea what it could possible mean. From then on, people became aware of the incredible usefulness that cryptography could play and it became an essential tool for military communication. Singh progresses through the book talking about many more ciphers including the substitution cipher (substituting each letter in the alphabet by another one), the Vignere cipher (a polyalphebetic substitution cipher), the Enigma cipher, etc. and as well talks about other applications of cryptography including the decipherment of ancient languages such as Egyptian hieroglyphics and Linear B. I actually wrote my final paper for the class on the former (got an A nbd). There is a long section on the cracking of the Enigma cipher during World War II by the cryptogtaphy team at Bletchley Park and its importance to the Allied forces victory. Thought this part was particularly interesting since I've seen the movie 'The Imitation Game' and it turns out that historically things happenned a bit differently. Lastly, the final section of the book talks briefly about modern cryptographic schemes such as AES and DES and RSA. He also discusses the future of quantum cryptanalysis and cryptography and how the invention of quantum computers is bound to change secure communication as we know it. Overall, it's a great read for anyone who's interested in the subject and doesn't contain too much math or fancy language making it relatively easy to understand, even for someone who's not from a technical background. Best nonfiction book I've read hands down. It actually inspired me to read another one of Singh's works about the Big Bang (even though I really hate physics). Hopefully, that one ends up being interesting as well"}]},Drc2:function(t,e,n){"use strict";e.a={name:"Navbar"}},Fs8J:function(t,e,n){"use strict";e.a={name:"Home"}},GX6u:function(t,e){},"Ga7+":function(t,e){},Kw7b:function(t,e,n){"use strict";e.a={name:"Project",props:["title","content","link1","link2","imgsrc"],data:function(){return{link1_status:!1,link2_status:!1}},mounted:function(){"None"!=this.link1&&(this.link1_status=!0),"None"!=this.link2&&(this.link2_status=!0)}}},M93x:function(t,e,n){"use strict";function i(t){n("fHxO")}var a=n("xJD8"),o=n("zDuO"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),o=n("YaEn");i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},PcHo:function(t,e,n){"use strict";var i=n("wa3q"),a=n("+aM5"),o=n.n(a);e.a={name:"Projects",components:{Project:i.a},data:function(){return{projects:o.a}}}},SGec:function(t,e,n){"use strict";function i(t){n("euJb")}var a=n("CHQz"),o=n("ZFJX"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-9265c43c",null);e.a=c.exports},UbcC:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("div",[n("p",[t._v(t._s(t.content))])]),t._v(" "),t.link1_status?n("a",{attrs:{href:t.link1}},[t._v("Check out the project on Github!")]):t._e(),t._v(" "),t.link2_status?n("a",{attrs:{href:t.link2}},[t._v("Check out the project on Devpost!")]):t._e()])},a=[],o={render:i,staticRenderFns:a};e.a=o},VjAK:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"/static/eli.jpg"}}),t._v(" "),n("p",[t._v("Hi! my name is Eli Minkin and this is my site. A little bit about me: I'm a senior undergraduate student at Rutgers University studying Mathematics and Computer Science. I feel like my interests are pretty dynamic; they change a lot. This past year I've been into folk music and rock climbing among other things. This website is both for myself and for those interested in checking out some of my work. I can't promise that I'll update the blog consistently but if you check back every couple months (or years) or so, there'll probably be a couple new posts about tech, food, my favorite books (HARRY POTTER), etc. Or if you just clicked the wrong link and happenned to end up here .... well, you know where the back button is. Thanks!")]),t._v(" "),n("p",[t._v("-Eli")]),t._v(" "),n("a",{attrs:{href:"https://github.com/eminkin97"}},[t._v("Link to my github")]),t._v(" "),n("a",{attrs:{href:"https://devpost.com/eminkin97"}},[t._v("Link to my devpost")])])}],o={render:i,staticRenderFns:a};e.a=o},W47M:function(t,e){},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),a=n("/ocq"),o=n("lO7g"),s=n("x1is"),r=n("c27y"),c=n("uwSr"),h=n("SGec");i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/content",name:"Content",component:s.a,children:[{path:"about",name:"About",component:r.a},{path:"projects",name:"Projects",component:c.a},{path:"blog",name:"Blog",component:h.a}]}]})},YyGJ:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",{staticClass:"title"},[t._v("Eli Minkin")]),t._v(" "),n("div",{staticClass:"sections"},[n("h4",{staticClass:"section"},[n("router-link",{attrs:{to:"/content/about"}},[t._v("About Me")])],1),t._v(" "),n("h4",{staticClass:"section"},[n("router-link",{attrs:{to:"/content/projects"}},[t._v("Projects")])],1),t._v(" "),n("h4",{staticClass:"section"},[n("router-link",{attrs:{to:"/content/blog"}},[t._v("Blog")])],1)])])},a=[],o={render:i,staticRenderFns:a};e.a=o},ZFJX:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.blogentries,function(t){return n("Blogentry",{attrs:{title:t.title,date:t.date,content:t.content,imgsrc:t.imgsrc}})}))},a=[],o={render:i,staticRenderFns:a};e.a=o},Zs8U:function(t,e,n){"use strict";e.a={name:"About"}},b86T:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bar"}},[n("h4",{staticClass:"link"},[n("router-link",{attrs:{to:"/content/about"}},[t._v("About Me")])],1),t._v(" "),n("h4",{staticClass:"link"},[n("router-link",{attrs:{to:"/content/projects"}},[t._v("Projects")])],1),t._v(" "),n("h4",{staticClass:"link"},[n("router-link",{attrs:{to:"/content/blog"}},[t._v("Blog")])],1)])},a=[],o={render:i,staticRenderFns:a};e.a=o},c27y:function(t,e,n){"use strict";function i(t){n("Ga7+")}var a=n("Zs8U"),o=n("VjAK"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-c9380006",null);e.a=c.exports},euJb:function(t,e){},eyXx:function(t,e){},fHxO:function(t,e){},"fd+u":function(t,e){},iMkl:function(t,e,n){"use strict";e.a={name:"Blogentry",props:["title","date","content","imgsrc"]}},lO7g:function(t,e,n){"use strict";function i(t){n("W47M")}var a=n("Fs8J"),o=n("YyGJ"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-7d7e06c2",null);e.a=c.exports},lfLh:function(t,e,n){"use strict";function i(t){n("GX6u")}var a=n("Drc2"),o=n("b86T"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-71d59950",null);e.a=c.exports},r2Tp:function(t,e,n){"use strict";function i(t){n("fd+u")}var a=n("iMkl"),o=n("BcJX"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-03374500",null);e.a=c.exports},uwSr:function(t,e,n){"use strict";function i(t){n("CvnX")}var a=n("PcHo"),o=n("8yQt"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-36b946ba",null);e.a=c.exports},wa3q:function(t,e,n){"use strict";function i(t){n("9OxT")}var a=n("Kw7b"),o=n("UbcC"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-1a6bcb89",null);e.a=c.exports},x1is:function(t,e,n){"use strict";function i(t){n("eyXx")}var a=n("xZxk"),o=n("24kv"),s=n("VU/8"),r=i,c=s(a.a,o.a,!1,r,"data-v-3b3f04e9",null);e.a=c.exports},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},xZxk:function(t,e,n){"use strict";var i=n("lfLh");e.a={name:"Content",components:{Navbar:i.a},methods:{scrollToBottom:function(t){window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"})},redirectToHome:function(t){document.location.href="/"}}}},zDuO:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={render:i,staticRenderFns:a};e.a=o}},["NHnr"]);
//# sourceMappingURL=app.b01a6ca6d8adbd363365.js.map