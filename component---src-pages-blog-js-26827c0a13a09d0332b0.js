(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(6),r=a.n(n),i=a(0),s=a.n(i),o=a(138),l=(a(150),a(142)),c=a(143),d=a(140),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(l.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:"Jared Nielsen",keywords:["blog","jared nielsen","problem solving","lifelong learning"]}),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},s.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(s.a.Component);t.default=u;var f="2785444898"},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(137),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(139),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(29);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},139:function(e,t,a){var n;e.exports=(n=a(141))&&n.default||n},140:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var n=a(145),r=a.n(n),i=a(146),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,c=o.scale},141:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(47),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},142:function(e,t,a){"use strict";a(28);var n=a(6),r=a.n(n),i=a(0),s=a.n(i),o=a(138),l=a(140),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,r)},t}(s.a.Component);t.a=c},143:function(e,t,a){"use strict";var n=a(144),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(147),c=a.n(l),d=a(138);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},144:function(e){e.exports={data:{site:{siteMetadata:{title:"jarednielsen.com",description:"The work & play of Jared Nielsen.",author:"Jared Nielsen"}}}}},150:function(e,t,a){"use strict";a(151);var n=a(153),r=a(0),i=a.n(r),s=a(138),o=a(154),l=a.n(o),c=a(140);var d="4260391210";t.a=function(){return i.a.createElement(s.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author;return t.social,i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Want to level up your problem solving skill? I write a weekly newsletter where I share articles about programming, problem solving and lifelong learning."," ",i.a.createElement("a",{href:"http://eepurl.com/cP8CMn",target:"_blank",rel:"noopener"},"Join now")))},data:n})}},151:function(e,t,a){"use strict";a(152)("fixed",function(e){return function(){return e(this,"tt","","")}})},152:function(e,t,a){var n=a(23),r=a(21),i=a(22),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},153:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:50,src:"/static/0cdc03efc5a69bac4bd7922ebc9f22b8/66382/jared-nielsen.png",srcSet:"/static/0cdc03efc5a69bac4bd7922ebc9f22b8/66382/jared-nielsen.png 1x,\n/static/0cdc03efc5a69bac4bd7922ebc9f22b8/18a61/jared-nielsen.png 1.5x,\n/static/0cdc03efc5a69bac4bd7922ebc9f22b8/f52d2/jared-nielsen.png 2x"}}},site:{siteMetadata:{author:"Jared Nielsen",social:{twitter:"jarednielsen"}}}}}},154:function(e,t,a){"use strict";var n=a(7);t.__esModule=!0,t.default=void 0;var r,i=n(a(6)),s=n(a(46)),o=n(a(148)),l=n(a(149)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!0,i=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,i=!0),"undefined"==typeof window&&(n=!1,r=!1),t.critical&&(n=!0,r=!1,i=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:r,IOSupported:i,fadeIn:o,hasNoScript:d,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,w="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),I={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var j=h;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(b,(0,l.default)({src:j.base64},I)),j.tracedSVG&&c.default.createElement(b,(0,l.default)({src:j.tracedSVG},I)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(b,{alt:a,title:t,src:j.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},j))}}))}if(g){var x=g,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete k.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(b,(0,l.default)({src:x.base64},I)),x.tracedSVG&&c.default.createElement(b,(0,l.default)({src:x.tracedSVG},I)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(b,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-blog-js-26827c0a13a09d0332b0.js.map