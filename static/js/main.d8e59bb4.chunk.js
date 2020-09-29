(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=a(2),o=a.n(s),l=a(4),u=a(3),m="9f637a757e27787397137fc6194fb0a6",d=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return a=e.sent,n=a.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/discover/tv?with_network=213&language=".concat("pt-BR","&api_key=").concat(m));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,d("/trending/all/week?language=".concat("pt-BR","&api_key=").concat(m));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,d("/movie/top_rated?language=".concat("pt-BR","&api_key=").concat(m));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,d("/discover/movie?with_genres=28&language=".concat("pt-BR","&api_key=").concat(m));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,d("/discover/movie?with_genres=35&language=".concat("pt-BR","&api_key=").concat(m));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,d("/discover/movie?with_genres=27&language=".concat("pt-BR","&api_key=").concat(m));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,d("/discover/movie?with_genres=10749&language=".concat("pt-BR","&api_key=").concat(m));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,d("/discover/movie?with_genres=99&language=".concat("pt-BR","&api_key=").concat(m));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,d("/movie/".concat(t,"?language=").concat("pt-BR","&api_key=").concat(m));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,d("/tv/".concat(t,"?language=").concat("pt-BR","&api_key=").concat(m));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},f=(a(22),a(12)),p=a.n(f),v=a(14),h=a.n(v),b=function(e){var t=e.title,a=e.items,c=Object(n.useState)(0),i=Object(u.a)(c,2),s=i[0],o=i[1];return r.a.createElement("div",{className:"movieRow"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"movieRow--left",onClick:function(){var e=s+Math.round(window.innerWidth/2);e>0&&(e=0),o(e)}},r.a.createElement(p.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--right",onClick:function(){var e=s-Math.round(window.innerWidth/2),t=150*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),o(e)}},r.a.createElement(h.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--listarea"},r.a.createElement("div",{className:"movieRow--list",style:{marginLeft:s,width:150*a.results.length}},a.results.length>0&&a.results.map((function(e,t){return r.a.createElement("div",{key:t,className:"movieRow--item"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title,title:e.original_title}))})))))},w=(a(28),function(e){var t=e.item,a=new Date(t.first_air_date),n=[];for(var c in t.genres)n.push(t.genres[c].name);var i=t.overview;return i.length>200&&(i=i.substring(0,200)+"..."),r.a.createElement("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")}},r.a.createElement("div",{className:"featured--vertical"},r.a.createElement("div",{className:"featured--horizontal"},r.a.createElement("div",{className:"featured--name"},t.original_name),r.a.createElement("div",{className:"featured--info"},r.a.createElement("div",{className:"featured--points"},t.vote_average),r.a.createElement("div",{className:"featured--year"},a.getFullYear()),r.a.createElement("div",{className:"featured--seasons"},t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":"")),r.a.createElement("div",{className:"featured--description"},i),r.a.createElement("div",{className:"featured--buttons"},r.a.createElement("a",{href:"/watch/".concat(t.id),title:"\u25b6\ufe0e Assistir",className:"featured--watchbutton"},"\u25b6\ufe0e Assistir"),r.a.createElement("a",{href:"/addList/".concat(t.id),title:"+ Minha Lista",className:"featured--mylistbutton"},"+ Minha Lista")),r.a.createElement("div",{className:"featured--genres"},r.a.createElement("strong",null,"G\xeaneros:")," ",n.join(", ")))))}),E=(a(29),function(e){var t=e.black;return r.a.createElement("header",{className:t?"black":""},r.a.createElement("div",{className:"header--logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://www.tmf-group.com/-/media/images/logos/case-study-logos/netflix.png",alt:"Nexflix"}))),r.a.createElement("div",{className:"header--user"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",alt:"User"}))))}),k=(a(30),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),v=p[0],h=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getHomeList();case 2:return t=e.sent,c(t),a=t.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(a[0].items.results.length-1)),r=a[0].items.results[n],e.next=9,g.getMovieInfo(r.id,"tv");case 9:i=e.sent,d(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>10?h(!0):h(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(E,{black:v}),m&&r.a.createElement(w,{item:m}),r.a.createElement("section",{className:"lists"},a.map((function(e,t){return r.a.createElement(b,{key:t,title:e.title,items:e.items})}))),r.a.createElement("footer",null,r.a.createElement("span",{role:"img","aria-label":"coracao"},"\u2764")," React Developer Diego Tauchert - Projeto com finalidade de estudo",r.a.createElement("br",null),"Direito de Imagens para Netflix",r.a.createElement("br",null),"Dados pegos do site themoviedb.org"),a.length<=0&&r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:"https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif",alt:"Carregando"})))});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d8e59bb4.chunk.js.map