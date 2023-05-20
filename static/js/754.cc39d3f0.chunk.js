"use strict";(self.webpackChunkfollower=self.webpackChunkfollower||[]).push([[754],{7754:function(e,t,o){o.r(t),o.d(t,{default:function(){return S}});var r,n=o(9439),s=o(2791),l=o(8402),a=o(168),i=o(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  left: 30px;\n  bottom: -40px;\n"]))),c=o(184),d=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(l.s5,{strokeColor:"#5CD3A8",strokeWidth:"4",animationDuration:"1",width:"120",visible:!0})})},u=o(5048),x=o(6895),p=o(873),f=function(e){return e.filter},m=function(e){return e.users.currentUsers},h=(0,p.P1)([f,m],(function(e,t){switch(e){case"-1":return t;case"0":return t.filter((function(e){return!1===e.following}));case"1":return t.filter((function(e){return!0===e.following}))}})),g=function(){var e=(0,u.v9)(f),t=(0,u.I0)();return(0,c.jsx)("div",{className:"flex items-center justify-center px-6 py-3 text-[#373737]  bg-[#5736A3] z-50 shadow-md ",children:(0,c.jsx)("form",{className:"h-[40px] flex items-center   overflow-hidden bg-[#EBD8FF] rounded-xl",children:(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{className:"mx-4 bg-[#EBD8FF] font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]",children:"Show"}),(0,c.jsxs)("select",{value:"".concat(e),onChange:function(e){t((0,x.T)(e.target.value))},title:"Select user state",name:"filter",className:"inline-block w-[220px] px-1 outline-none  font-semibold uppercase text-lg/[22px] text-[#373737] bg-[#EBD8FF]",children:[(0,c.jsx)("option",{className:"bg-[#5CD3A8] ",value:"-1",children:"All user"}),(0,c.jsx)("option",{className:"bg-[#5CD3A8]  ",value:"1",children:"followings user"}),(0,c.jsx)("option",{className:" bg-[#5CD3A8] ",value:"0",children:"follow user"})]})]})})})},v=o(2007),w=o.n(v),b=o(5176),j=o(5218),N=new URL(o(5501),o.b).href,F=function(e){var t=e.userInfo,o=(0,b.WE)(),r=(0,n.Z)(o,1)[0];return(0,c.jsx)("div",{className:"  w-[380px] h-[460px] rounded-[20px] shadow-[-3px_7px_21px_rgba(0,0,0,0.23)] bg-gradient-to-br from-[#471CA9] from-0% via-[#5736A3] via-55% to-[#4B2A99] to-80%  transition-all duration-300 hover:shadow-[0px_4px_15px_5px_#2503415a]",children:(0,c.jsxs)("div",{style:{"--image-url":"url(".concat(N,")")},className:"  w-full h-full bg-[image:var(--image-url)] rounded-[20px] flex  items-center flex-col justify-end",children:[(0,c.jsx)("img",{className:"w-[64px] h-64[px] mb-8 rounded-full",src:t.avatar?t.avatar:"https://via.placeholder.com/80x80/cccccc/db0404.jpg?text=NA",width:66,height:66,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="https://via.placeholder.com/80\u044580/cccccc/db0404.jpg?text=NA"},alt:"".concat(t.name),title:"".concat(t.name)}),(0,c.jsx)("p",{className:"mb-4 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]",children:"tweets ".concat(t.tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," ")}),(0,c.jsx)("p",{className:"mb-7 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]",children:"followers ".concat(t.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),(0,c.jsx)("button",{onClick:function(){return e=t.id,void j.ZP.promise(r({id:e,followers:t.followers-2*t.following+1}).unwrap(),{loading:"wait...",success:t.following?"".concat(t.name," is talking shit"):"".concat(t.name," says thank you"),error:function(e){var t;return" Error ".concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._message)}});var e},style:{"--isFolloving":t.following?"#5CD3A8":"#EBD8FF"},className:"mb-9  w-[196px] h-[50px] bg-[var(--isFolloving)] rounded-xl font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]    hover:shadow-mm hover:shadow-[2px_4px_6px_2px_#1d0136cc] hover:scale-[1.01]",children:t.following?"Following":"Follow"})]})})};F.prototype={userInfo:w().shape};var C=F,_=function(e){var t=e.title,o=void 0===t?null:t,r=e.users;return(0,c.jsxs)(c.Fragment,{children:[o&&(0,c.jsx)("h1",{className:" mt-4 text-center text-2xl font-semibold text-stone-800",children:o}),(0,c.jsx)("ul",{className:"gap-6 grid pt-6  grid-cols-1 lg:grid-cols-2   xl:grid-cols-3 ",children:r.map((function(e){return(0,c.jsx)("li",{className:" justify-center mx-auto ",children:(0,c.jsx)(C,{userInfo:e})},e.id)}))})]})};_.prototype={title:w().string,films:w().array.isRequired,location:w().shape};var E=_,k=o(7689),y=o(861),A=o(8174),B=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=function(e){var o=e.closeToast,r=e.errorMessage;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{children:["Error: ",r]}),t&&(0,c.jsx)("button",{onClick:o,className:"rounded-md border border-black border-solid px-2",children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u0443\u0442\u0438\u0441\u044f \u0434\u043e \u043f\u043e\u0448\u0443\u043a\u0443"})]})};A.Am.error((0,c.jsx)(o,{errorMessage:e,errorClose:t}),{closeButton:!1,onClose:function(e){return e.errorClose&&e.errorClose()},autoClose:5e3,transition:A.LG,pauseOnFocusLoss:!1,position:A.Am.POSITION.TOP_CENTER})},D=o(7907),M=o(5667),S=function(){var e,t=M.animateScroll,o=(0,k.TH)(),r=(0,k.s0)(),l=null!==(e=o.pathname.from)&&void 0!==e?e:"/",a=(0,s.useState)(1),i=(0,n.Z)(a,2),x=i[0],p=i[1],f=(0,b.zQ)(x),v=f.data,w=f.isLoading,j=f.isFetching,N=f.isError,F=(0,u.v9)(h),C=(0,u.v9)(m),_=(0,s.useState)(!0),A=(0,n.Z)(_,2),S=A[0],T=A[1],Z=!w&&!N,P=(j||w)&&!N,I="Load user card  ".concat(C.length," : Show user card ").concat(F.length);(0,s.useEffect)((function(){(null===v||void 0===v?void 0:v.length)<3&&T(!1),N&&B("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}),[v,N]);return(0,c.jsxs)("div",{className:"w-full mx-auto text-center",children:[(0,c.jsx)(g,{}),Z&&(0,c.jsx)(E,{title:I,users:F}),(0,c.jsxs)("div",{className:"flex gap-10 justify-center",children:[(0,c.jsxs)(D.ZP,{link:function(){return r(l)},children:[" ",(0,c.jsx)("span",{className:"text-[30px]",children:(0,c.jsx)(y.owl,{})}),"Go home"]}),(0,c.jsxs)("button",{disabled:!S,onClick:function(e){e.target.blur(),p(x+1),t.scrollToBottom()},style:{"--isloadMore":S?"#EBD8FF":"","--isNoloadMore":S?"#5CD3A8":""},className:"mb-9 mt-9 w-[196px] h-[50px] bg-[var(--isloadMore)] hover:bg-[var(--isNoloadMore)] rounded-xl font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]   hover:shadow-mm  hover:shadow-[#373737] hover:scale-[1.01] ",children:[S?"Load":"No"," more",P&&(0,c.jsx)(d,{})]}),(0,c.jsxs)(D.ZP,{link:function(){return t.scrollToTop()},children:["Go top",(0,c.jsx)("span",{className:"text-[30px]",children:(0,c.jsx)(y.q2E,{})})]})]})]})}},5501:function(e,t,o){e.exports=o.p+"static/media/following.836f779de3b07196f4ec.png"}}]);
//# sourceMappingURL=754.cc39d3f0.chunk.js.map