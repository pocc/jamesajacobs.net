window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme23"]=window.wsb["Theme23"]||window.radpack("@widget/LAYOUT/bs-layout23-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-180826\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-180829\",\"targetId\":\"logo-text-180830\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"yellowtail\",\"default\",\"\"],\"colors\":[\"#5F0B35\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"25e8abf6-7173-4bbb-b678-76b0c77c6a0d\":{\"pageId\":\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\",\"widgetId\":null,\"routePath\":\"/books\"},\"e53e22d6-4f4d-4b89-b38f-0b615f903d76\":{\"pageId\":\"c04d5b63-e6a9-47e8-905e-b719b256825a\",\"widgetId\":null,\"routePath\":\"/\"},\"671e541f-e98d-4779-a1a6-9233d3a0e18e\":{\"pageId\":\"24763356-ae6c-4e32-9659-8448cd432116\",\"widgetId\":null,\"routePath\":\"/sea-level-rise\"}},\"isInternalPage\":true,\"navigationMap\":{\"c04d5b63-e6a9-47e8-905e-b719b256825a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c04d5b63-e6a9-47e8-905e-b719b256825a\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"a32da3e2-b438-4948-baf5-db14a4687c91\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a32da3e2-b438-4948-baf5-db14a4687c91\",\"name\":\"Sewer Overflows\",\"href\":\"/sewer-overflows\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"24763356-ae6c-4e32-9659-8448cd432116\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"24763356-ae6c-4e32-9659-8448cd432116\",\"name\":\"Sea Level Rise\",\"href\":\"/sea-level-rise\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"6d3a9834-491f-49cb-be9f-61fb99a21910\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6d3a9834-491f-49cb-be9f-61fb99a21910\",\"name\":\"Wetlands\",\"href\":\"/wetlands\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\",\"name\":\"Books\",\"href\":\"/books\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"345622d1-4bb7-4f41-bd64-b06ce580af2d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"345622d1-4bb7-4f41-bd64-b06ce580af2d\",\"name\":\"Workshops / Classes\",\"href\":\"/workshops-%2F-classes\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"61fa77d9-3117-4893-9f8c-775559db80c1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"61fa77d9-3117-4893-9f8c-775559db80c1\",\"name\":\"Geology and Beer!\",\"href\":\"/geology-and-beer\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0d861675-2df1-4a4f-af88-9a67fde35d13\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0d861675-2df1-4a4f-af88-9a67fde35d13\",\"name\":\"Safe Water\",\"href\":\"/safe-water\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"8bfa9495-a30e-488b-9c6b-6ca8794fabd7\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8bfa9495-a30e-488b-9c6b-6ca8794fabd7\",\"name\":\"Sewer Air & VI\",\"href\":\"/sewer-air-%26-vi\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"9bbd509a-c76d-4faf-ba92-065f1b0d2b58\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9bbd509a-c76d-4faf-ba92-065f1b0d2b58\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"818e5945-9387-4b2c-ba4c-dab4c8bae419\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"818e5945-9387-4b2c-ba4c-dab4c8bae419\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"f6c0884f-eb69-4def-b269-fe430d402c4f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f6c0884f-eb69-4def-b269-fe430d402c4f\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"d5aa27be-591d-472b-9e80-f8abc9ee05dc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d5aa27be-591d-472b-9e80-f8abc9ee05dc\",\"name\":\"Publications\",\"href\":\"/publications\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#5F0B35\",\"meta\":{\"primary\":\"rgb(95, 11, 53)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"yellowtail\",\"description\":\"\",\"tags\":[\"handwriting\",\"casual\"],\"meta\":{\"order\":41,\"primary\":{\"id\":\"yellowtail\",\"name\":\"Yellowtail\",\"url\":\"//fonts.googleapis.com/css?family=Yellowtail&display=swap\",\"family\":\"'Yellowtail', serif, system-ui\",\"size\":19,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"lora\",\"name\":\"Lora\",\"url\":\"//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap\",\"family\":\"Lora, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme23\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-180832\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-180827\",\"widgetId\":\"5bca37c3-bbb3-4a5f-b9bf-2115badcc79f\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"5bca37c3-bbb3-4a5f-b9bf-2115badcc79f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(w),i&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,I),h(s,n,s.length,I),h(d,n,s.length,f),f(p)}else s.forEach(f),I(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function w(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function I(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-180831\",\"containerId\":\"navBar-180827\"}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-180825-navId-mobile\",\"uniqueId\":\"n-180825\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"5bca37c3-bbb3-4a5f-b9bf-2115badcc79f\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"5bca37c3-bbb3-4a5f-b9bf-2115badcc79f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-180864\",\"targetId\":\"logo-text-180865\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"yellowtail\",\"default\",\"\"],\"colors\":[\"#5F0B35\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"25e8abf6-7173-4bbb-b678-76b0c77c6a0d\":{\"pageId\":\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\",\"widgetId\":null,\"routePath\":\"/books\"},\"e53e22d6-4f4d-4b89-b38f-0b615f903d76\":{\"pageId\":\"c04d5b63-e6a9-47e8-905e-b719b256825a\",\"widgetId\":null,\"routePath\":\"/\"},\"671e541f-e98d-4779-a1a6-9233d3a0e18e\":{\"pageId\":\"24763356-ae6c-4e32-9659-8448cd432116\",\"widgetId\":null,\"routePath\":\"/sea-level-rise\"}},\"isInternalPage\":true,\"navigationMap\":{\"c04d5b63-e6a9-47e8-905e-b719b256825a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c04d5b63-e6a9-47e8-905e-b719b256825a\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"a32da3e2-b438-4948-baf5-db14a4687c91\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a32da3e2-b438-4948-baf5-db14a4687c91\",\"name\":\"Sewer Overflows\",\"href\":\"/sewer-overflows\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"24763356-ae6c-4e32-9659-8448cd432116\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"24763356-ae6c-4e32-9659-8448cd432116\",\"name\":\"Sea Level Rise\",\"href\":\"/sea-level-rise\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"6d3a9834-491f-49cb-be9f-61fb99a21910\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"6d3a9834-491f-49cb-be9f-61fb99a21910\",\"name\":\"Wetlands\",\"href\":\"/wetlands\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"25e20d92-5516-4c03-9032-a41d0ecd3d4f\",\"name\":\"Books\",\"href\":\"/books\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"345622d1-4bb7-4f41-bd64-b06ce580af2d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"345622d1-4bb7-4f41-bd64-b06ce580af2d\",\"name\":\"Workshops / Classes\",\"href\":\"/workshops-%2F-classes\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"61fa77d9-3117-4893-9f8c-775559db80c1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"61fa77d9-3117-4893-9f8c-775559db80c1\",\"name\":\"Geology and Beer!\",\"href\":\"/geology-and-beer\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0d861675-2df1-4a4f-af88-9a67fde35d13\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0d861675-2df1-4a4f-af88-9a67fde35d13\",\"name\":\"Safe Water\",\"href\":\"/safe-water\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"8bfa9495-a30e-488b-9c6b-6ca8794fabd7\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8bfa9495-a30e-488b-9c6b-6ca8794fabd7\",\"name\":\"Sewer Air & VI\",\"href\":\"/sewer-air-%26-vi\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"9bbd509a-c76d-4faf-ba92-065f1b0d2b58\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9bbd509a-c76d-4faf-ba92-065f1b0d2b58\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"818e5945-9387-4b2c-ba4c-dab4c8bae419\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"818e5945-9387-4b2c-ba4c-dab4c8bae419\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"f6c0884f-eb69-4def-b269-fe430d402c4f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f6c0884f-eb69-4def-b269-fe430d402c4f\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"d5aa27be-591d-472b-9e80-f8abc9ee05dc\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d5aa27be-591d-472b-9e80-f8abc9ee05dc\",\"name\":\"Publications\",\"href\":\"/publications\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#5F0B35\",\"meta\":{\"primary\":\"rgb(95, 11, 53)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"yellowtail\",\"description\":\"\",\"tags\":[\"handwriting\",\"casual\"],\"meta\":{\"order\":41,\"primary\":{\"id\":\"yellowtail\",\"name\":\"Yellowtail\",\"url\":\"//fonts.googleapis.com/css?family=Yellowtail&display=swap\",\"family\":\"'Yellowtail', serif, system-ui\",\"size\":19,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"lora\",\"name\":\"Lora\",\"url\":\"//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap\",\"family\":\"Lora, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme23\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/CONTACT/bs-Component',props:JSON.parse("{\"structuredHours\":[{\"hour\":{\"byAppointmentOnly\":false,\"closeTime\":\"17:00\",\"closed\":false,\"day\":\"Monday\",\"dayOfWeek\":1,\"openTime\":\"09:00\"}},{\"hour\":{\"byAppointmentOnly\":false,\"closeTime\":\"17:00\",\"closed\":false,\"day\":\"Tuesday\",\"dayOfWeek\":2,\"openTime\":\"09:00\"}},{\"hour\":{\"byAppointmentOnly\":false,\"closeTime\":\"17:00\",\"closed\":false,\"day\":\"Wednesday\",\"dayOfWeek\":3,\"openTime\":\"09:00\"}},{\"hour\":{\"byAppointmentOnly\":false,\"closeTime\":\"17:00\",\"closed\":false,\"day\":\"Thursday\",\"dayOfWeek\":4,\"openTime\":\"09:00\"}},{\"hour\":{\"byAppointmentOnly\":false,\"closeTime\":\"17:00\",\"closed\":false,\"day\":\"Friday\",\"dayOfWeek\":5,\"openTime\":\"09:00\"}},{\"hour\":{\"byAppointmentOnly\":false,\"closed\":true,\"day\":\"Saturday\",\"dayOfWeek\":6}},{\"hour\":{\"byAppointmentOnly\":false,\"closed\":true,\"day\":\"Sunday\",\"dayOfWeek\":0}}],\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"collapsible\":true,\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact5\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/CONTACT/bs-Component"},false);
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/CONTACT/bs-contact5-contact-form',props:JSON.parse("{\"formTitle\":\"Drop us a line!\",\"formFields\":[{\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"required\":false},{\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"type\":\"MULTI_LINE\",\"label\":\"Message\",\"required\":false},{\"type\":\"ATTACHMENT\",\"label\":\"Attachments\",\"required\":false,\"attachmentsEnabled\":false,\"attachmentsLabel\":\"\"},{\"type\":\"SUBMIT\",\"label\":\"Send\",\"required\":false}],\"blankInfo\":false,\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"showMap\":true,\"recaptchaEnabled\":true,\"recaptchaType\":\"V3\",\"domainName\":\"jamesajacobs.net\",\"formSuccessMessage\":\"Thank you for your inquiry! We will get back to you within 48 hours.\",\"formEnabled\":true,\"websiteId\":\"7ef868d5-139d-4988-bf19-a343b0d5b352\",\"pageId\":\"818e5945-9387-4b2c-ba4c-dab4c8bae419\",\"accountId\":\"31b95f92-a5b9-11e9-818f-3417ebe73f0e\",\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up for our email list for updates, promotions, and more.\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact5\",\"group\":\"Content\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/CONTACT/bs-contact5-contact-form"},false);
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/CONTACT/bs-genericMap',props:JSON.parse("{\"lat\":\"37.928436\",\"lon\":\"-122.385999\",\"address\":\"229 Tewksbury Avenue, Point Richmond, California 94801, United States\",\"type\":\"mapbox\",\"isEditMode\":false,\"zoom\":14,\"mapboxAccessToken\":\"pk.eyJ1IjoiZ29kYWRkeSIsImEiOiJjaWc5b20wcjcwczAydGFsdGxvamdvYnV0In0.JK9HuO6nAzc8BnMv6W7NBQ\",\"mapboxStyleUrl\":\"mapbox://styles/godaddy/ciovyeygh0029atm6zbntgxk2\",\"staticContent\":{\"today\":\"Today\",\"submitButtonLoadingLabel\":\"Sending\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"byAppointment\":\"By Appointment\",\"defaultSubmitButtonLabel\":\"Send\",\"unsupportedFileType\":\"Unsupported file type\",\"maxFileCountLimit\":\"Only {0} files are allowed\",\"closed\":\"Closed\",\"attachments\":\"Attachments\",\"termsOfSerivce\":\"Terms of Service\",\"attachFiles\":\"Attach Files\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"mapCTA\":\"Get directions\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"openToday\":\"Open today\",\"couldNotAttach\":\"Could not attach the following file(s)\",\"totalFileSizeLimit\":\"Total files would exceed {0} limit\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"fileSizeLimit\":\"File exceeds {0} limit\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\"},\"viewDevice\":null,\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"a21c2405-ce64-4d81-9c32-f9fb67daac5b\",\"widgetType\":\"CONTACT\",\"widgetPreset\":\"contact5\",\"group\":\"Map\",\"groupType\":\"Banner\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/CONTACT/bs-genericMap"},false);
Core.utils.renderBootstrap({elId:'bs-6',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"James A. Jacobs\",\"reamazeBrandId\":\"7ef868d5-139d-4988-bf19-a343b0d5b352\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"jamesajacobs.net\",\"cookieBannerEnabled\":null,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"31b95f92-a5b9-11e9-818f-3417ebe73f0e\",\"websiteId\":\"7ef868d5-139d-4988-bf19-a343b0d5b352\",\"id\":\"f0913109-af15-4290-867c-216db9961274\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeThemeColor\":\"#5F0B35\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"f0913109-af15-4290-867c-216db9961274\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"f0913109-af15-4290-867c-216db9961274\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonSecondary\":{\"value\":{\"shape\":\"SQUARE\",\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-180824').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"GALLERY","wam_site_homepageFirstWidgetPreset":"gallery1","wam_site_businessCategory":"professionalengineer","wam_site_theme":"layout23","wam_site_locale":"en-US","wam_site_fontPack":"yellowtail","wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);