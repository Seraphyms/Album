(self.modernJsonp=self.modernJsonp||[]).push([["71671"],{721350:function(e,t,n){n.d(t,{Z:()=>r});var i=n(496102);let a=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,i.Ll)([a]),animation:"pulsing 2s infinite"}},261954:function(e,t,n){n.r(t),n.d(t,{default:()=>I});var i=n(686659),a=n(667294),r=n(20256),o=n(2171),l=n(230201),s=n(817468);function u(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let m={},d=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){u(this,"idMap",new Map),u(this,"objMap",new WeakMap)}get(e){let t=d(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=d(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=d(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function c(e,t){return"number"==typeof e?e:"lg1"===t?e[t]??e.lg??1:e[t]??1}var h=n(309947),f=n(589172),y=n(721350),g=n(440077),x=n(59111),b=n(785893);let{css:v,animation:w}=y.Z,C={backgroundColor:g.zsO,animation:w,borderRadius:g.saV};function _({data:e}){(0,a.useEffect)(()=>{(0,i.Z)("SkeletonPin","/app/common/react/components/SkeletonLoadingStates/SkeletonPin.tsx")},[]);let{height:t}=e;return(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(x.Z,{unsafeCSS:v}),(0,b.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:C},"data-test-id":"skeleton-pin",children:(0,b.jsx)(r.xu,{height:t})})]})}var $=n(806513),M=n(501010),S=n(774838),R=n(739405),k=n(767415),j=n(354139),W=n(177433);function I(e){(0,a.useEffect)(()=>{(0,i.Z)("Masonry","/app/packages/gestaltExtensions/Masonry/Masonry.tsx")},[]);let{align:t,cacheKey:n,id:u,isFetching:d,isGridCentered:y=!0,items:g,layout:v,loadItems:w,masonryRef:C,optOutFluidGridExperiment:I=!1,renderItem:G,scrollContainerRef:E,virtualize:P=!0,getColumnSpanConfig:A,_getResponsiveModuleConfigForSecondItem:Z,isLoadingStateEnabled:F,initialLoadingStatePinCount:O,isLoadingAccessibilityLabel:T,isLoadedAccessibilityLabel:D}=e,H=(0,R.ZP)(),X=(0,S.B)(),{isAuthenticated:z,isRTL:L,userAgent:B,stage:N}=X,{browserName:Q,platform:J}=B,{logContextEvent:V}=(0,l.u)(),Y=(0,M.Z)(),q="desktop"===H,K=(0,W.Zv)(),U=(0,j.DB)(),ee=((0,a.useRef)(g.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),q&&!I),{experimentalColumnWidth:et,experimentalGutter:en}=(0,h.Z)(ee),ei=e.serverRender??!!q,ea="flexible"===v||"uniformRowFlexible"===v||"desktop"!==H||ee,er=(ea&&v?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(ei?"serverRenderedFlexible":"flexible"),eo=e.columnWidth??et??$.yF;ea&&(eo=Math.floor(eo));let el=e.gutterWidth??en??(q?$.oX:1),es=e.minCols??$.yc,eu=((0,a.useRef)(0),eo+el),em=function(e){if(null==e)return;let t=function(e){let t=m[e];return t&&t.screenWidth===window.innerWidth||(m[e]={screenWidth:window.innerWidth}),m[e]}(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(n),ed=(0,a.useCallback)(()=>E?.current||window,[E]),ep=(0,a.useRef)(!0),{anyEnabled:ec,group:eh}=Y.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:ef}=Y.checkExperiment("visual_search_stl_eligibility_check_migration_gss_css",{dangerouslySkipActivation:!0}),ey=y&&ep.current?"centered":"",{className:eg,styles:ex}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let i=e[n];return null==i||"object"==typeof i||"function"==typeof i?t:"boolean"==typeof i?t+(i?"t":"f"):t+i},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:i,isRTL:a,itemWidth:r,maxColumns:o,minColumns:l,items:s,getColumnSpanConfig:u,_getResponsiveModuleConfigForSecondItem:m}=e,d=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+i,h=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let h,f,y=e===l?0:e*p,g=e===o?null:(e+1)*p-.01;u&&m&&s.length>1&&(h=u(s[0]),f=m(s[1]));let{styles:x,numberOfVisibleItems:b}=d.reduce((a,o)=>{let{columnSpanConfig:l}=o,u=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:i,secondItemResponsiveModuleConfig:a}){let r=e<=2?"sm":e<=4?"md":e<=6?"lg1":e<=8?"lg":"xl",o=c(t,r);if(i){let t=c(n,r);o="number"==typeof a?a:a?Math.max(a.min,Math.min(a.max,e-t)):1}return o}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!f&&o===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:f??1}),e),m=null!=o.index&&a.numberOfVisibleItems>=u+o.index,d=n?100/e*u:r*u+i*(u-1),{numberOfVisibleItems:p}=a;return m?p-=u-1:o.index<p&&(p+=1),{styles:a.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:i,width:a,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:m,width:d,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),v=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:y,maxWidth:g,styles:`
      .${t} .static:nth-child(-n+${b}) {
        position: static !important;
        visibility: visible !important;
        float: ${a?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${i/2}px;
      }

      ${v}

      ${x}
    `}}),f=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),g=`
    ${f.join("")}
    @supports not (container-type: inline-size) {
      ${y.join("")}
    }
  `;return{className:t,styles:`
    .masonryContainer:has(.${t}) {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${g}
  `}}({gutterWidth:el,flexible:ea,items:g,isRTL:L,itemWidth:eo,maxColumns:e.maxColumns??Math.max(g.length,$.g5),minColumns:es,getColumnSpanConfig:A,_getResponsiveModuleConfigForSecondItem:Z}),eb=`${ey} ${eg}`.trim(),{anyEnabled:ev,expName:ew,group:eC,isMeasureAllEnabled:e_}=(0,f.Z)(),e$=((0,a.useRef)(void 0),(0,a.useRef)(g.length)),eM=(0,a.useRef)(0),eS=(0,a.useRef)(null);(0,a.useEffect)(()=>{e$.current=g.length,eM.current+=1},[g]),(0,a.useEffect)(()=>{if(ep.current&&(ep.current=!1),window.earlyGridRenderStats){let e={...(0,j.M3)({earlyHydrationConfig:U,handlerId:K,requestContext:X}),status:window.earlyGridRenderStats.status??"unknown"};(0,k.nP)(`earlyHydrationDebug.masonry.earlyGridRender.status.${window.earlyGridRenderStats.status}`,{tags:e}),(0,k.LY)("earlyHydrationDebug.masonry.earlyGridRender.init",window.earlyGridRenderStats.init,{tags:e}),window.earlyGridRenderStats.start&&(0,k.LY)("earlyHydrationDebug.masonry.earlyGridRender.start",window.earlyGridRenderStats.start,{tags:e}),window.earlyGridRenderStats.end&&(0,k.LY)("earlyHydrationDebug.masonry.earlyGridRender.end",window.earlyGridRenderStats.end,{tags:e})}},[]),(0,a.useEffect)(()=>()=>{},[]);let eR=(0,a.useCallback)(e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length,i={experimentalMasonryGroup:eC||"unknown",handlerId:K,isAuthenticated:z,multiColumnItemSpan:e.length,browserName:Q,platform:J,stage:N||"unknown"};(0,k.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:i}),(0,k.S0)("webapp.masonry.multiColumnWhitespace.average",n,{sampleRate:1,tags:{...i,minCols:es}}),V({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),V({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),V({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(e=>{e>=50&&((0,k.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:i}),V({event_type:16261,component:14468})),e>=100&&((0,k.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:i}),V({event_type:16262,component:14468}))})},[Q,eC,K,z,V,es,J,N]),{_items:ek,_renderItem:ej}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:r,isLoadingStateEnabled:o}){let l=+(i.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0),s=o&&n,u=(0,a.useMemo)(()=>Array.from({length:i.length>l?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[i.length,l,t,e]);return{_items:(0,a.useMemo)(()=>s?[...i,...u]:i,[s,i,u]),_renderItem:(0,a.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,b.jsx)(_,{data:n},n.key):r(e)}:r,[o,r,i.length])}}({isLoadingStateEnabled:F,items:g,renderItem:(0,a.useCallback)(e=>(0,b.jsx)(s.Z,{name:"MasonryItem",children:G(e)}),[G]),isFetching:d,initialLoadingStatePinCount:O}),eW=F&&d,eI=(0,a.useRef)(new Set);(0,a.useEffect)(()=>{if(!ec)return;let e={isAuthenticated:z,isDesktop:"desktop"===H,handlerId:K,experimentalMasonryGroup:eC||"unknown",overlapCalculationAndLoggingGroup:eh||"unknown",visualSearchSTLexperiment:ef?"true":"false",browserName:Q,platform:J,stage:N||"unknown"},t=1e3;if(eh?.startsWith("enabled_")){let e=eh.split("enabled_")[1];e&&(t=parseInt(e,10))}let n=setTimeout(()=>{requestAnimationFrame(()=>{let t=Array.from(eS.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===t.length)return;let n=t.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),i=0,a=0,r=0,o=0,l=0,s=0;for(let e=0;e<n.length;e+=1){let t=n[e]?.rect,u=n[e]?.itemIdx;for(let m=e+1;m<n.length;m+=1){let e=n[m]?.rect,d=n[m]?.itemIdx;if(t&&e&&u&&d){let n=[u,d].sort().join("|");if(!eI.current.has(n)&&t.right>=e.left&&t.left<=e.right&&t.bottom>=e.top&&t.top<=e.bottom&&t.height>0&&e.height>0){eI.current.add(n),i+=1;let u=Math.max(0,Math.min(t.right,e.right)-Math.max(t.left,e.left))*Math.max(0,Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top));u>8e4?s+=1:u>4e4?l+=1:u>1e4?o+=1:u>5e3?r+=1:u>2500&&(a+=1)}}}}i>0&&(0,k.QX)("webapp.masonry.pinOverlapHits",i,{tags:e}),a>0&&(0,k.QX)("webapp.masonry.pinOverlap.AreaPx.over2500",a,{tags:e}),r>0&&(0,k.QX)("webapp.masonry.pinOverlap.AreaPx.over5000",r,{tags:e}),o>0&&(0,k.QX)("webapp.masonry.pinOverlap.AreaPx.over10000",o,{tags:e}),l>0&&(0,k.QX)("webapp.masonry.pinOverlap.AreaPx.over40000",l,{tags:e}),s>0&&(0,k.QX)("webapp.masonry.pinOverlap.AreaPx.over80000",s,{tags:e})})},t);return()=>{clearTimeout(n)}},[Q,H,eC,z,ec,K,J,eh,N,ef]);let eG=(0,o.Z)(),eE=(0,a.useCallback)(e=>{C&&(C.current=e)},[C]);return(0,b.jsxs)(a.Fragment,{children:[F&&!ep.current&&(0,b.jsx)(r.xu,{"aria-live":"polite",display:"visuallyHidden",children:eW?T:D}),(0,b.jsx)("div",{ref:eS,"aria-busy":F?!!eW:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:u,style:ee?{padding:`0 ${el/2}px`}:void 0,children:(0,b.jsxs)("div",{className:eb,children:[ei&&ep.current?(0,b.jsx)(x.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ex}):null,(0,b.jsx)(r.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?eu*e.maxColumns:void 0,children:ev?(0,b.jsx)(r.GX,{ref:eG?eE:e=>{C&&(C.current=e)},_dynamicHeights:!0,_getResponsiveModuleConfigForSecondItem:Z,_logTwoColWhitespace:eR,_measureAll:e_,align:t,columnWidth:eo,getColumnSpanConfig:A,gutterWidth:el,items:ek,layout:ea?er:v??"basic",loadItems:w,measurementStore:em,minCols:es,renderItem:ej,scrollContainer:ed,virtualBufferFactor:.3,virtualize:P}):(0,b.jsx)(r.Rk,{ref:eG?eE:e=>{C&&(C.current=e)},_dynamicHeights:!0,_fluidResize:!0,_getResponsiveModuleConfigForSecondItem:Z,_logTwoColWhitespace:eR,align:t,columnWidth:eo,getColumnSpanConfig:A,gutterWidth:el,items:ek,layout:ea?er:v??"basic",loadItems:w,measurementStore:em,minCols:es,renderItem:ej,scrollContainer:ed,virtualBufferFactor:.3,virtualize:P})})]})})]})}},309947:function(e,t,n){n.d(t,{Z:()=>i});function i(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/71671-4d058cb2bf6adc8a.mjs.map