(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[295],{295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var i=n(43),a=n(551),r=n(579);const s=e=>{let{data:t}=e;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:t.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:t.link,children:t.school}),", ",(0,r.jsx)("span",{children:"Grade:"})," ",t.grade,", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),t.map((e=>(0,r.jsx)(s,{data:e},e.school)))]})};o.defaultProps={data:[]};const c=o;var l=n(446),u=n.n(l),d=n(574);const h=e=>{let{data:{name:t,position:n,url:i,startDate:a,endDate:s,summary:o,highlights:c}}=e;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:i,children:t})," - ",n]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",u()(a).format("MMMM YYYY")," -"," ",s?u()(s).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,r.jsx)(d.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,r.jsx)("ul",{className:"points",children:c.map((e=>(0,r.jsx)("li",{children:e},e)))}):null]})},m=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,r.jsx)(h,{data:e},`${e.name}-${e.position}`)))]})};m.defaultProps={data:[]};const g=m,y=e=>{let{handleClick:t,active:n,label:i}=e;return(0,r.jsx)("button",{className:"skillbutton "+(n[i]?"skillbutton-active":""),type:"button",onClick:()=>t(i),children:i})},p=e=>{let{data:t,categories:n}=e;const{category:i,competency:a,title:s}=t,o={background:n.filter((e=>i.includes(e.name))).map((e=>e.color))[0]},c={...o,width:`${String(Math.min(100,Math.max(a/5*100,0)))}%`};return(0,r.jsxs)("div",{className:"skillbar clearfix",children:[(0,r.jsx)("div",{className:"skillbar-title",style:o,children:(0,r.jsx)("span",{children:s})}),(0,r.jsx)("div",{className:"skillbar-bar",style:c}),(0,r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};p.defaultProps={categories:[]};const f=p,v=e=>{let{skills:t,categories:n}=e;const a=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[s,o]=(0,i.useState)(a),c=e=>{const t=Object.keys(s).reduce(((t,n)=>({...t,[n]:e===n&&!s[n]})),{});t.All=!Object.keys(s).some((e=>t[e])),o(t)};return(0,r.jsxs)("div",{className:"skills",children:[(0,r.jsx)("div",{className:"link-to",id:"skills"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h3",{children:"Skills"}),(0,r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,r.jsx)("div",{className:"skill-button-container",children:Object.keys(s).map((e=>(0,r.jsx)(y,{label:e,active:s,handleClick:c},e)))}),(0,r.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(s).reduce(((e,t)=>s[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,r.jsx)(f,{categories:n,data:e},e.title)))})()})]})};v.defaultProps={skills:[],categories:[]};const b=v,S=e=>{let{data:t,last:n}=e;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("a",{href:t.link,children:[(0,r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};S.defaultProps={last:!1};const D=S,k=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,r.jsx)(D,{data:t,last:n===e.length-1},t.title))),j=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:k(t)})]})};j.defaultProps={data:[]};const x=j;var M=n(475);const $=()=>(0,r.jsxs)("div",{className:"references",children:[(0,r.jsx)("div",{className:"link-to",id:"references"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)(M.N_,{to:"/contact",children:(0,r.jsx)("h3",{children:"References are available upon request"})})})]}),w=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],E=[{school:"Indian Institute of Technology Guwahati (IITG)",degree:"Master of Technology (M.Tech) in Signal Processing and Machine Learning (EEE)",grade:"9.24/10.00",link:"https://www.iitg.ac.in/",year:2020},{school:"Kalyani Government Engineering College (KGEC)",degree:"Bachelor of Technology (B.Tech) in Electrical Engineering (EE)",grade:"8.60/10.00",link:"https://www.kgec.edu.in/",year:2017}],N=[{name:"Valuence Technologies(VT) Japan",position:"AI Engineer",url:"https://www.valuence.inc/en/group/technologies/",startDate:"2023-01-01",summary:"Valuence Technologies is a subsidiary of Valuence Holdings, a luxury goods retailer company in Japan. \n    VT is a technology company that provides AI solutions to various business problems of its other subsidiaries and also outside clients.\n    I am part of the AI team that develops and deploys AI solutions for clients.",highlights:["Developed and deployed AI solutions for various business problems.","Worked on NLP, Computer Vision, and Time Series Forecasting problems.","Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis, etc."]},{name:"Valuence Technologies(VT) Japan",position:"Assitant AI Engineer",url:"https://www.valuence.inc/en/group/technologies/",startDate:"2021-01-01",endDate:"2022-12-31",highlights:["Developed and deployed AI solutions for various business problems.","Worked on NLP, Computer Vision, and Time Series Forecasting problems.","Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis, etc."]},{name:"Valuence Technologies(VT) Japan",position:"Trainee AI Engineer",url:"https://www.valuence.inc/en/group/technologies/",startDate:"2020-07-01",endDate:"2020-12-31",highlights:["Worked on various AI projects.","Learned about AI technologies and how to develop and deploy AI solutions."]},{name:"Tata Consultancy Services(TCS)",position:"ML Engineer Intern",url:"https://www.tcs.com/",startDate:"2019-05-25",endDate:"2019-07-30",summary:"Tata Consultancy Services is an Indian multinational information technology services and consulting company.\n    I worked as a Machine Learning Engineer Intern in the AI and Cognitive Sciences team of TCS Research and Innovation.",highlights:["Worked on a project to develop a Machine Learning model for a business problem.","Developed and deployed a Machine Learning model for the project.","Worked on a variety of projects like Image Classification, Object Detection, Named Entity Recognition, Sentiment Analysis"]}],C=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Next.JS",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"FastAPI",competency:3,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]},{title:"Dagster",competency:2,category:["Data Engineering","Python","ML Engineering"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((e=>({...e,category:e.category.sort()}))),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=[...new Set(C.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:L[t]}))),A={Education:()=>(0,r.jsx)(c,{data:E}),Experience:()=>(0,r.jsx)(g,{data:N}),Skills:()=>(0,r.jsx)(b,{skills:C,categories:T}),Courses:()=>(0,r.jsx)(x,{data:w}),References:()=>(0,r.jsx)($,{})},I=()=>(0,r.jsx)(a.A,{title:"Resume",description:"Bishal Kr. Shaw's Resume. AI Engineer at Valuence Technologies.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:"Resume"}),(0,r.jsx)("div",{className:"link-container",children:Object.keys(A).map((e=>(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:`#${e.toLowerCase()}`,children:e})},e)))})]})}),Object.entries(A).map((e=>{let[t,n]=e;return(0,r.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",a="second",r="minute",s="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},f=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+f(i,2,"0")+":"+f(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,l),r=n-a<0,s=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-a)/(r?a-s:s-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:s,m:r,s:a,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=p;var D="$isDayjsObject",k=function(e){return e instanceof $||!(!e||!e[D])},j=function e(t,n,i){var a;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();S[r]&&(a=r),n&&(S[r]=n,a=r);var s=t.split("-");if(!a&&s.length>1)return e(s[0])}else{var o=t.name;S[o]=t,a=o}return!i&&a&&(b=a),a||!i&&b},x=function(e,t){if(k(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},M=v;M.l=j,M.i=k,M.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function p(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(g);if(i){var a=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!(this.$d.toString()===m)},f.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,i=!!M.u(t)||t,u=M.p(e),m=function(e,t){var a=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?a:a.endOf(o)},g=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,p=this.$M,f=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?m(1,0):m(31,11);case l:return i?m(1,p):m(0,p+1);case c:var b=this.$locale().weekStart||0,S=(y<b?y+7:y)-b;return m(i?f-S:f+(6-S),p);case o:case h:return g(v+"Hours",0);case s:return g(v+"Minutes",1);case r:return g(v+"Seconds",2);case a:return g(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var n,c=M.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[s]=u+"Hours",n[r]=u+"Minutes",n[a]=u+"Seconds",n[i]=u+"Milliseconds",n)[c],g=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var y=this.clone().set(h,1);y.$d[m](g),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[M.p(e)]()},f.add=function(i,u){var h,m=this;i=Number(i);var g=M.p(u),y=function(e){var t=x(m);return M.w(t.date(t.date()+Math.round(e*i)),m)};if(g===l)return this.set(l,this.$M+i);if(g===d)return this.set(d,this.$y+i);if(g===o)return y(1);if(g===c)return y(7);var p=(h={},h[r]=t,h[s]=n,h[a]=e,h)[g]||1,f=this.$d.getTime()+i*p;return M.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),r=this.$H,s=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,a,r){return e&&(e[n]||e(t,i))||a[n].slice(0,r)},h=function(e){return M.s(r%12||12,e,"0")},g=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(y,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return o+1;case"MM":return M.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return M.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(r,s,!0);case"A":return g(r,s,!1);case"m":return String(s);case"mm":return M.s(s,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(i,h,m){var g,y=this,p=M.p(h),f=x(i),v=(f.utcOffset()-this.utcOffset())*t,b=this-f,S=function(){return M.m(y,f)};switch(p){case d:g=S()/12;break;case l:g=S();break;case u:g=S()/3;break;case c:g=(b-v)/6048e5;break;case o:g=(b-v)/864e5;break;case s:g=b/n;break;case r:g=b/t;break;case a:g=b/e;break;default:g=b}return m?g:M.a(g)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return S[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=j(e,t,!0);return i&&(n.$L=i),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),w=$.prototype;return x.prototype=w,[["$ms",i],["$s",a],["$m",r],["$H",s],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,$,x),e.$i=!0),x},x.locale=j,x.isDayjs=k,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}()}}]);
//# sourceMappingURL=295.a85b13b5.chunk.js.map