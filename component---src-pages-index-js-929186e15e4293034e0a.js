(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(142),s=n(143),l=(n(138),n(166)),u=n.n(l),d=(n(167),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"All posts",keywords:["jared nielsen","problem solving"]}),o.a.createElement("img",{src:u.a}),o.a.createElement("div",{id:"mc_embed_signup"},o.a.createElement("form",{action:"https://jarednielsen.us14.list-manage.com/subscribe/post?u=7bb2004f13affd3cd65365d9e&id=fdf24030be",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},o.a.createElement("div",{id:"mc_embed_signup_scroll"},o.a.createElement("label",{htmlFor:"mce-EMAIL"},o.a.createElement("h2",null,"Programming is problem solving."),o.a.createElement("p",null,"I write a weekly newsletter about programming, problem solving and lifelong learning.")),o.a.createElement("input",{type:"email",value:"",name:"EMAIL",className:"email",id:"mce-EMAIL",placeholder:"Your email"}),o.a.createElement("div",{"aria-hidden":"true",style:{position:"absolute",left:"-5000px"}},o.a.createElement("input",{type:"text",name:"b_7bb2004f13affd3cd65365d9e_fdf24030be",tabIndex:"-1",value:""})),o.a.createElement("div",{className:"clear"},o.a.createElement("input",{type:"submit",value:"Join now",name:"subscribe",id:"mc-embedded-subscribe",className:"button"})))),o.a.createElement("p",{style:{textAlign:"center"}},"Skeptical? Here's a sample: ",o.a.createElement("a",{href:"https://jarednielsen.com/teach-adults-code/"},"How To Teach Adults to Code"))))},t}(o.a.Component));t.default=d;var m="2785444898"},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(137),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(139),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},140:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var a=n(145),r=n.n(a),i=n(146),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},141:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(138),s=n(140),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,r)},t}(o.a.Component);t.a=l},143:function(e,t,n){"use strict";var a=n(144),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(147),l=n.n(s),u=n(138);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},144:function(e){e.exports={data:{site:{siteMetadata:{title:"jarednielsen.com",description:"The work & play of Jared Nielsen.",author:"Jared Nielsen"}}}}},166:function(e,t,n){e.exports=n.p+"static/jared-nielsen-banner-58f3affa86516d8d73953a19d9f3fa58.png"},167:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-929186e15e4293034e0a.js.map