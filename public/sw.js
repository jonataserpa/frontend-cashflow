if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const f=e=>a(e,c),r={module:{uri:c},exports:i,require:f};s[c]=Promise.all(t.map((e=>r[e]||f(e)))).then((e=>(n(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"252bdbbe3ab2086b54854ef96d0b1f73"},{url:"/_next/static/HGpANUQFltvfNXbEPjmwX/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/HGpANUQFltvfNXbEPjmwX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13b76428-56ef92d027d6786a.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/203-c9912c9f5be14a49.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/359-e792f69ef0d748f2.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/472-23b9ce94437a1a0d.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/612-a47479863cd28643.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/627-fe5b6c6ec9b7acd3.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/914-ac3feb76e3010acf.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/951-efc4f2b9c8b4f142.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/(cash)/(routes)/cash/page-5d19b8633744a132.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/dashboard/layout-61b0a12db0cfaef5.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/dashboard/page-9343cd76b3b1fe46.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/(landing)/page-5bd2c669d209e860.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/_not-found-0dea61c3c0a6c161.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/app/layout-ab494fa1d3f7b74a.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/fd9d1056-ff718e4297f07d47.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/main-9c71d96edd1afacc.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/main-app-d71e879536634285.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6c70055a90feb773.js",revision:"HGpANUQFltvfNXbEPjmwX"},{url:"/_next/static/css/4c94bad16c29e202.css",revision:"4c94bad16c29e202"},{url:"/_next/static/css/5c479a6df4df49db.css",revision:"5c479a6df4df49db"},{url:"/_next/static/media/01096eb156994e40-s.woff2",revision:"2e5d1145f808ec0a98f7a8a9bf1001ee"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/293a10483e4b8ccd-s.woff2",revision:"9cb7deec93416e01e46b21c79894f40a"},{url:"/_next/static/media/37a8a32478445fb0-s.p.woff2",revision:"ea6a50649030b503844c11b4a54d916e"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/9da87403f9f0873c-s.woff2",revision:"fe2ee2eacd9ff5b01e983481309952bc"},{url:"/_next/static/media/a3c12d0b2c89c181-s.woff2",revision:"220e96e23331592cffd92678a59baa30"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"b24f22cfafbebd0487af3ce2fdd7f34e"},{url:"/android-chrome-384x384.png",revision:"b24f22cfafbebd0487af3ce2fdd7f34e"},{url:"/icon-512x512.png",revision:"f14c02aff251863d18125e75998a00e7"},{url:"/logo-task.jpg",revision:"0b095f380a3ce23bd2ec96f4f74dca3f"},{url:"/manifest.json",revision:"9e2e366f90bceacaaa0d98d92e79dac9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
