(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("3nLz");var r=a("FKa1"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("9eSz"),l=a.n(o),d=a("p3AD");var c="4260391210";t.a=function(){return n.a.createElement(s.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),n.a.createElement("p",null,"Want to level up your problem solving skill? I write a weekly newsletter where I share articles about programming, problem solving and lifelong learning."," ",n.a.createElement("a",{href:"http://eepurl.com/cP8CMn",target:"_blank",rel:"noopener"},"Join now")))},data:r})}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(A,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},A=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,I=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:x?1:0,transition:z?"opacity "+b+"ms":"none"},o),k="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&C,{},o,{},f),R={title:t,alt:this.state.isVisible?"":a,style:N,className:g,itemProp:E};if(p){var W=p,J=W[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(J.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/J.aspectRatio+"%"}}),k&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),J.base64&&d.default.createElement(j,{src:J.base64,spreadProps:R,imageVariants:W,generateSources:w}),J.tracedSVG&&d.default.createElement(j,{src:J.tracedSVG,spreadProps:R,imageVariants:W,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(A,{alt:a,title:t,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},J,{imageVariants:W}))}}))}if(m){var T=m,G=T[0],D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete D.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},k&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},z&&C)}),G.base64&&d.default.createElement(j,{src:G.base64,spreadProps:R,imageVariants:T,generateSources:w}),G.tracedSVG&&d.default.createElement(j,{src:G.tracedSVG,spreadProps:R,imageVariants:T,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,S(T),d.default.createElement(A,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},G,{imageVariants:T}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:z,sizes:V,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=x;t.default=k},FKa1:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,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","width":50,"height":50,"src":"/static/0cdc03efc5a69bac4bd7922ebc9f22b8/352e5/jared-nielsen.png","srcSet":"/static/0cdc03efc5a69bac4bd7922ebc9f22b8/352e5/jared-nielsen.png 1x,\\n/static/0cdc03efc5a69bac4bd7922ebc9f22b8/aae31/jared-nielsen.png 1.5x,\\n/static/0cdc03efc5a69bac4bd7922ebc9f22b8/47c2b/jared-nielsen.png 2x"}}},"site":{"siteMetadata":{"author":"Jared Nielsen","social":{"twitter":"jarednielsen"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("E5k/");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),o=a("Bl7J"),l=a("vrFN"),d=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(s.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},r}(i.a.Component);t.default=c;var u="3654438753"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-88881b7100d9a79aecc4.js.map