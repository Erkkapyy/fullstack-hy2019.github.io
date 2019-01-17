(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,a){"use strict";a.r(t);var n=a(475),i=a(138),s=a(0),l=a.n(s),r=a(176),o=a(139),c=a(144),m=a(159),u=a(153),d=a(178);t.default=function(){return l.a.createElement(m.a,null,l.a.createElement(u.a,{title:"FAQ"}),l.a.createElement(o.a,{className:"container link spacing spacing--after-small"},l.a.createElement(d.a,{className:"spacing--small spacing--after-small",headingLevel:"h1",text:"Usein kysytyt kysymykset"}),l.a.createElement(i.StaticQuery,{query:"10433134",render:function(e){var t=e.allFaqJson.edges;return l.a.createElement(l.a.Fragment,null,t.map(function(e){var t=e.node;return l.a.createElement(r.a,{key:t.title,title:t.title,content:t.text})}))},data:n})),l.a.createElement(c.a,null))}},144:function(e,t,a){"use strict";a(145);var n=a(138),i=a(0),s=a.n(i),l=a(156),r=a.n(l),o=a(157),c=a.n(o),m=a(139),u=a(150),d=a(160),p=[{src:r.a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(){return s.a.createElement(m.a,{id:"footer",className:"container spacing--after",flex:!0},s.a.createElement(m.a,{className:"col-5 col-10--mobile order-2--mobile footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return s.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},s.a.createElement(u.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),s.a.createElement(m.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile footer__navigation"},d.b.map(function(e){return s.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover col-10--mobile",style:{marginLeft:"4.5rem"}},e.text)})))}},145:function(e,t,a){},152:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(28),a(165);var n=a(140),i=a.n(n),s=(a(174),a(168)),l=a.n(s),r=a(161),o=a.n(r),c=a(4),m=a.n(c),u=a(0),d=a.n(u),p=a(175),g=a.n(p),h=a(139),y=function(e){var t=e.text,a=e.className,n=e.heading,s=e.headingFontSize,r=e.bold,c=e.centered,m=e.noPadding,u=i()(e,["text","className","heading","headingFontSize","bold","centered","noPadding"]),p=[];c&&p.push("centered"),r&&p.push("bold"),m&&p.push("body-text--no-padding");var y={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"github-logo"===a.class)return d.a.createElement(h.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},d.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),d.a.createElement("p",{style:{marginLeft:"0.611rem"}},o()(n,y)))}};return d.a.createElement("div",Object.assign({className:"body-text "+a},u),n.title&&function(){if(n){var e=n.level;return d.a.createElement(e,{className:"body-text__title",style:s?{fontSize:s}:{}},n.title)}return null}(),t&&"string"==typeof t?d.a.createElement("p",{className:"body-text__content "+p.join(" ")},t):t&&t.map(function(e){return d.a.createElement("div",{key:e,className:"body-text__content "+p.join(" ")},l()(e,y))}))};y.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},y.propTypes={heading:m.a.shape({text:m.a.string,level:m.a.string}),headingFontSize:m.a.string,text:m.a.oneOfType([m.a.string,m.a.array]),className:m.a.string,centered:m.a.bool,bold:m.a.bool,noPadding:m.a.bool}},153:function(e,t,a){"use strict";var n=a(158),i=a(138),s=a(4),l=a.n(s),r=a(0),o=a.n(r),c=a(198),m=a.n(c);function u(e){var t=e.description,a=e.lang,s=e.meta,l=e.keywords,r=e.title;return o.a.createElement(i.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(m.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(s)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Fullstack 2019",description:"",author:"Houston Inc. Consulting oy"}}}}},174:function(e,t,a){},175:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},176:function(e,t,a){"use strict";var n=a(6),i=a.n(n),s=(a(177),a(138)),l=a(4),r=a.n(l),o=a(0),c=a.n(o),m=a(152),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpened:!1},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},a.render=function(){var e=this,t=this.props,a=t.title,n=t.content,i=t.className,l=t.containerClassName,r=t.list,o=t.titleStyle,u=this.state.isOpened;return c.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+l},c.a.createElement("button",{className:"accordion accordion__title "+(u?"active":"")+" "+i,style:o,onClick:function(){return e.setState({isOpened:!u})}},a),c.a.createElement("div",{className:"panel",style:{padding:u?"2rem 18px":"",maxHeight:""+(u?"unset":0),transition:"max-height 0.2s ease-out"}},n&&c.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),r&&c.a.createElement("ul",null,r.map(function(e){return c.a.createElement("li",{key:e.text},c.a.createElement(s.Link,{to:e.href},e.text))}))))},t}(o.Component);u.propTypes={title:r.a.string.isRequired,content:r.a.oneOfType([r.a.string,r.a.array]),list:r.a.array,className:r.a.string,containerClassName:r.a.string,initiallyOpened:r.a.bool,titleStyle:r.a.object},u.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=u},177:function(e,t,a){},178:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(28);var n=a(140),i=a.n(n),s=(a(179),a(4)),l=a.n(s),r=a(0),o=a.n(r),c=function(e){var t=e.className,a=e.headingLevel,n=void 0===a?"h2":a,s=e.headingFontSize,l=e.text,r=i()(e,["className","headingLevel","headingFontSize","text"]),c=n;return o.a.createElement(c,Object.assign({className:"sub-header "+t,style:s?{fontSize:s}:{}},r),l)};c.propTypes={className:l.a.string,headingLevel:l.a.string,text:l.a.string.isRequired,headingFontSize:l.a.string},c.defaultProps={className:""}},179:function(e,t,a){},475:function(e){e.exports={data:{allFaqJson:{edges:[{node:{title:"Voinko laajentaa aiempaa kurssisuoritustani?",text:["Voit, lue lisää <a href='osa0/yleista#aiemmin-suoritetun-kurssin-taydentaminen'>täältä</a>"]}},{node:{title:"Minulla ei ole opinto-oikeutta Helsingin Yliopistoon, voinko suorittaa kurssin?",text:["Voit! Tosin suoritusmerkinnän voit saada vasta 15.3. alkavassa MOOC:issa, et myöskään voi palauttaa tehtäviä vielä. MOOCin ja kampuskurssin sisältö on sama, joten nyt tehty työ ei mene hukkaan."]}},{node:{title:"Tein muokata tekemääni palautusta?",text:["Et. Kaikki osan tehtävät on palautettava kerralla. Jos merkkasit tehtäviä vahingossa väärin tai typotit repositorin nimen, lähetä mailia mluukkai@cs.helsinki.fi"]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-faq-js-bb6e18b599fedbb06459.js.map