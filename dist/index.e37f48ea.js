// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import CheckError from "./checkerror.js";
var _modelJs = require("./Model.js");
var _sliderRender = require("./view/sliderRender");
var _sliderRenderDefault = parcelHelpers.interopDefault(_sliderRender);
var _cardBoxRenderJs = require("./view/CardBoxRender.js");
var _cardBoxRenderJsDefault = parcelHelpers.interopDefault(_cardBoxRenderJs);
var _searchRenderJs = require("./view/searchRender.js");
var _searchRenderJsDefault = parcelHelpers.interopDefault(_searchRenderJs);
var _paginationRenderJs = require("./view/paginationRender.js");
var _paginationRenderJsDefault = parcelHelpers.interopDefault(_paginationRenderJs);
var _addToCartJs = require("./view/AddToCart.js");
var _addToCartJsDefault = parcelHelpers.interopDefault(_addToCartJs);
"use strict";
//search data from input
(function searchInput() {
    async function searchfood(e) {
        if (!search_bar.value || search_bar.value === " ") {
            console.error("Please input valid strong ");
            return;
        }
        await (0, _modelJs.fetchdata_filter)(search_bar.value.trim());
        if ((0, _modelJs.dataFromModel).search.length != 0) {
            (0, _paginationRenderJsDefault.default).render((0, _modelJs.dataFromModel));
            let data = (0, _modelJs.searchPagination)();
            (0, _searchRenderJsDefault.default).render(data);
        } else throw new Error("No Food fuk off");
        search_bar.value = "";
    }
    const search_bar = document.querySelector("#searchbox");
    const search_butt = document.querySelector("#Search_result");
    search_butt.addEventListener("click", searchfood);
})();
//Slider functionality here
(async ()=>{
    //slider data category
    await (0, _modelJs.fetchdata_slider)();
    (0, _sliderRenderDefault.default).render((0, _modelJs.dataFromModel).slider);
    //arrow functionality
    const root = document.documentElement;
    const fo = Math.floor((1536 - Number(document.documentElement.clientWidth)) / 200) + 1;
    windowSize = 5;
    let le = 0;
    function moveit(e) {
        if (e.target.closest("svg").classList.value === "arrowleft") {
            this.right.classList.remove("displaynot");
            windowSize--;
            if (windowSize <= 5) this.left.classList.add("displaynot");
            else this.left.classList.remove("displaynot");
            le = le + 176;
            root.style.setProperty("--main-slide", le + "px");
        } else {
            this.left.classList.remove("displaynot");
            windowSize++;
            if (windowSize >= 13 + fo - 1) this.right.classList.add("displaynot");
            else this.right.classList.remove("displaynot");
            le = le - 176;
            root.style.setProperty("--main-slide", le + "px");
        }
    }
    (0, _sliderRenderDefault.default).addHandlerSlide(moveit);
})();
//render cardbox after clicking slider box
async function boxcallback(e) {
    // CardBoxRender.removeEventcart(Cartclick);
    if (!e.target.closest(".img_cont")) return;
    let cat = e.target.closest(".img_cont").dataset.value;
    await (0, _modelJs.fetchdata_cat)(cat);
    (0, _cardBoxRenderJsDefault.default).render((0, _modelJs.dataFromModel).category);
    //cart button functionality
    (0, _cardBoxRenderJsDefault.default).addHandlerCart(Cartclick);
}
function Cartclick(e) {
    if (e.target.nodeName !== "IMG" || e.target.id !== "cart" || e.target.style["backgroundColor"] === "rgba(14, 187, 8, 0.7)") return;
    let text = e.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerText;
    let price = e.target.parentNode.childNodes[1].childNodes[0].innerText.slice(2);
    // console.log(price);
    let img = e.target.parentNode.childNodes[5];
    // console.log(img);
    let dataCart = {
        id: e.target.dataset.value,
        currimg: e.target,
        img: img,
        name: text,
        price: Number(price),
        count: 1
    };
    (0, _modelJs.dataFromModel).updateAddToCart([
        dataCart
    ]);
    // console.log(dataFromModel.cart);
    (0, _addToCartJsDefault.default).render((0, _modelJs.dataFromModel).cart);
    e.target.style["backgroundColor"] = "rgba(14, 187, 8, 0.7)";
}
function calPrice(e) {
    if (e.target.className !== "inc" && e.target.className !== "dec" && e.target.className !== "fa fa-close") return;
    if (e.target.className === "fa fa-close") {
        let idx = e.target.dataset.id;
        let fix = (0, _modelJs.dataFromModel).cart.find((val)=>val.id == idx);
        let filterdata = (0, _modelJs.dataFromModel).cart.filter((val)=>val.id != idx);
        fix.currimg.style["backgroundColor"] = "rgb(0 0 0 / 50%)";
        (0, _modelJs.dataFromModel).newAddtoCart([
            ...filterdata
        ]);
    }
    if (e.target.className === "inc") {
        let grand = e.target.parentNode.parentNode;
        let index = grand.parentNode.className.split(" ")[1][4];
        (0, _modelJs.dataFromModel).cart[Number(index)].count += 1;
    } else if (e.target.className === "dec") {
        let grand1 = e.target.parentNode.parentNode;
        let index1 = grand1.parentNode.className.split(" ")[1][4];
        (0, _modelJs.dataFromModel).cart[Number(index1)].count -= 1;
    }
    (0, _addToCartJsDefault.default).render((0, _modelJs.dataFromModel).cart);
}
//search result hash
function showhash(event) {
    const hash = event.target.location.hash.slice(1);
    console.log(hash);
    if (!hash) return;
}
function paginationHandle(page) {
    let data = (0, _modelJs.searchPagination)(page);
    (0, _searchRenderJsDefault.default).render(data);
    (0, _paginationRenderJsDefault.default).render((0, _modelJs.dataFromModel));
}
function cartbutton(e) {
    if (!e.target.closest("#addToCart")) return;
    let x = window.matchMedia("(max-width: 600px)");
    if (x.matches === true) {
        if (e.target.closest("#addToCart").dataset.on === "true") {
            let root = document.documentElement;
            document.documentElement.style.setProperty("--main-display", "none");
            root.style.setProperty("--main-cart", `${0}px`);
            root.style.setProperty("--main-cart1", `${0}px`);
            root.style.setProperty("--main-op", "0");
            e.target.closest("#addToCart").dataset.on = "false";
        } else {
            e.target.closest("#addToCart").dataset.on = "true";
            document.documentElement.style.setProperty("--main-display", "flex");
        }
    } else {
        let root1 = document.documentElement;
        let cartd = e.target;
        let model = document.querySelector(".model-open");
        console.log(cartd.getBoundingClientRect());
        console.log(model.getBoundingClientRect());
        if (e.target.closest("#addToCart").dataset.on === "true") {
            root1.style.setProperty("--main-cart", `${0}px`);
            root1.style.setProperty("--main-cart1", `${0}px`);
            e.target.closest("#addToCart").dataset.on = "false";
            root1.style.setProperty("--main-op", "1");
            return;
        }
        let x1 = cartd.getBoundingClientRect().left - model.getBoundingClientRect().width - Math.abs(model.getBoundingClientRect().left) + 80;
        let y = cartd.getBoundingClientRect().top + Math.abs(model.getBoundingClientRect().top) + cartd.getBoundingClientRect().height;
        // console.log(x, y);
        root1.style.setProperty("--main-cart", `${x1}px`);
        root1.style.setProperty("--main-cart1", `${y}px`);
        e.target.closest("#addToCart").dataset.on = "true";
        root1.style.setProperty("--main-op", "1");
    }
}
function closeit(slidebox, e) {
    // console.log(slidebox);
    let x = window.matchMedia("(max-width: 600px)");
    let root = document.documentElement;
    if (x.matches === true) {
        slidebox.dataset.on = "false";
        root.style.setProperty("--main-display", "none");
    } else {
        slidebox.dataset.on = "false";
        root.style.setProperty("--main-cart", `${0}px`);
        root.style.setProperty("--main-cart1", `${0}px`);
        root.style.setProperty("--main-op", "0");
    }
}
window.onhashchange = showhash;
//apply eventlistner
window.onload = (event)=>{
    showhash(event);
    (0, _cardBoxRenderJsDefault.default).addHandlerSlide(boxcallback);
    (0, _addToCartJsDefault.default).addHandlerCart(calPrice);
    (0, _addToCartJsDefault.default).addHandlerSlide(cartbutton);
    (0, _addToCartJsDefault.default).closeHnadler(closeit);
    (0, _paginationRenderJsDefault.default).addHandlerClick(paginationHandle);
};

},{"./Model.js":"lOKu8","./view/sliderRender":"iOAJR","./view/CardBoxRender.js":"eDWAY","./view/searchRender.js":"itFmQ","./view/paginationRender.js":"2Z1vd","./view/AddToCart.js":"74vgk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOKu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchdata_filter", ()=>fetchdata_filter);
parcelHelpers.export(exports, "fetchdata_cat", ()=>fetchdata_cat);
parcelHelpers.export(exports, "fetchdata_slider", ()=>fetchdata_slider);
parcelHelpers.export(exports, "searchPagination", ()=>searchPagination);
parcelHelpers.export(exports, "dataFromModel", ()=>dataFromModel);
var _checkerrorJs = require("./checkerror.js");
var _checkerrorJsDefault = parcelHelpers.interopDefault(_checkerrorJs);
"use strict";
class apiData {
    slider;
    search;
    page;
    category;
    search_bar;
    cart;
    count;
    constructor(){
        this.slider = [];
        this.search = [];
        this.category = [];
        this.cart = [];
        this.page = 1;
        this.search_bar = "";
    // this.count = 1;
    }
    updateSlider(data) {
        this.slider = [
            ...data
        ];
    }
    updateSearch(data) {
        this.search = [
            ...data
        ];
    }
    updateCategory(data) {
        this.category = [
            ...data
        ];
    // console.log(this.category);
    }
    newAddtoCart(data) {
        this.cart = [
            ...data
        ];
    }
    updateAddToCart(data) {
        this.cart = [
            ...this.cart,
            ...data
        ];
    }
}
const dataFromModel = new apiData();
async function fetchdata_filter(words) {
    let truemeal = [];
    dataFromModel.search_bar = words;
    dataFromModel.page = 1;
    try {
        const raw_arr = [
            await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${words}`),
            await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${words}`),
            await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${words}`), 
        ];
        const raw_data = await Promise.allSettled(raw_arr);
        for (let { value  } of raw_data){
            const { meals  } = await (0, _checkerrorJsDefault.default)(value);
            if (meals) truemeal = meals;
        }
    } catch (err) {
        console.error(err + " at dkay1");
    }
    if (truemeal.length === 0) try {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${words}`);
        let { meals: meals1  } = await (0, _checkerrorJsDefault.default)(data);
        truemeal = meals1;
    } catch (err1) {
        console.error(err1 + " at dkay2");
    }
    console.log(truemeal);
    if (truemeal === null || truemeal === []) {
        alert("No meal Sorry");
        return;
    }
    dataFromModel.updateSearch(truemeal);
}
async function fetchdata_cat(cat) {
    try {
        console.log(cat);
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        let { meals  } = await (0, _checkerrorJsDefault.default)(data);
        let datameals = meals.map(async (ele)=>{
            let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ele.idMeal}`);
            return await (0, _checkerrorJsDefault.default)(data);
        });
        let mapit = (await Promise.allSettled(datameals)).map((e)=>e.value.meals[0]);
        dataFromModel.updateCategory(mapit);
    } catch (err) {
        console.error(err + " at slider/dkay3 ");
    }
}
async function fetchdata_slider() {
    try {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let { categories  } = await (0, _checkerrorJsDefault.default)(data);
        let slid = (await Promise.resolve(categories)).map((e)=>e);
        dataFromModel.updateSlider(slid);
    } catch (err) {
        console.error(err + " at slider/dkay3 ");
    }
}
function searchPagination(page = dataFromModel.page) {
    dataFromModel.page = page;
    let s = (page - 1) * 6;
    let e = page * 6;
    return dataFromModel.search.slice(s, e);
}

},{"./checkerror.js":"lrsRe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lrsRe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function CheckError(value) {
    if (value.status >= 200 && value.status <= 299) return value.json();
    else throw new Error(`${value.status} | ${value.ok} | ${value.url}`);
    return {
        meals: null
    };
}
exports.default = CheckError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iOAJR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class sliderRender {
    sliderCont = document.querySelector(".slider_cont");
    left = document.querySelector(".arrowleft");
    right = document.querySelector(".arrowright");
    data;
    render(categories) {
        this.data = categories;
        const markup = this.renderSlider(this.data);
        this.sliderCont.insertAdjacentHTML("beforeend", markup);
    }
    renderSlider(categories) {
        let markme = `${categories.map((val, index)=>{
            return `<div class = "img_cont" data-value = ${val.strCategory} data-index = "${index}">
        <img src="${val.strCategoryThumb}" alt="" class="thumbnail">
        <p>${val.strCategory}</p>
          </div>`;
        }).join("")} `;
        return markme;
    }
    addHandlerSlide(handler) {
        this.left.classList.add("displaynot");
        this.left.addEventListener("click", handler.bind(this));
        this.right.addEventListener("click", handler.bind(this));
    }
}
exports.default = new sliderRender();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDWAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class carBoxRender {
    slidebox = document.querySelector(".slider_cont");
    renderCards = document.querySelector(".renderCards");
    data;
    render(categories) {
        this.data = categories;
        const markup = this.renderSlider(this.data);
        this.renderCards.innerHTML = "";
        this.renderCards.insertAdjacentHTML("beforeend", markup);
    }
    renderSlider(categories) {
        // console.log(categories);
        let markme = `${categories.map((val)=>{
            return `<div class="CardBox">
        <div class="img">
        <div class="pricing"><span>$ ${Math.floor((Math.random() + 1) * 300)}</span></div>
        <img id = "cart" data-value=${val.idMeal} src="https://img.icons8.com/stickers/60/000000/shopping-cart.png"/>
          <img src=${val.strMealThumb} alt="" />
        </div>
        <div class="textCard">
          <div class="part1">
            <p>${val.strMeal}</p>
            <div class ="span">4.3* </div>
          </div>
          <div class="part2">
            <div>
            <div class="span">${val.strArea}</div>
            <div class="span">${val.strCategory}</div>
            </div>
            <div class="span">150</div>
          </div>
          <div class="part3">
            <div class ="span">${val.strTags == null ? "Food" : val.strTags}</div>
          </div>
          </div>
          </div>`;
        }).join("")} `;
        return markme;
    }
    addHandlerSlide(handler) {
        this.slidebox.addEventListener("click", handler.bind(this));
    }
    addHandlerCart(handler) {
        if (this.renderCards.getAttribute("listner") !== "true") {
            this.renderCards.addEventListener("click", handler.bind(this));
            this.renderCards.setAttribute("listner", "true");
        }
    }
}
exports.default = new carBoxRender();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itFmQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("../Model");
"use strict";
class searchRender {
    searchPreveiw = document.querySelector(".search_preveiw");
    searchBar = document.querySelector("#searchbox");
    data;
    render(categories) {
        this.data = categories;
        const markup = this.renderSlider(this.data);
        this.searchPreveiw.innerHTML = " ";
        this.searchPreveiw.insertAdjacentHTML("beforeend", markup);
    }
    renderSlider(categories) {
        let markme = `${categories.map((val)=>{
            return `<a href="#${val.idMeal}" class="href">
        <div class="preveiwCard">
          <div class="img">
            <img src="${val.strMealThumb}" alt="" />
          </div>
          <div class="text">
            <p>${val.strMeal}</p>
            <p class="tago">${!val.strCategory ? (0, _model.dataFromModel).search_bar : val.strCategory}</p>
          </div>
        </div>
      </a>`;
        }).join("")} `;
        return markme;
    }
    addHandlerSlide(handler) {}
}
exports.default = new searchRender();

},{"../Model":"lOKu8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Z1vd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
"use strict";
class paginationRender {
    parent = document.querySelector(".arr");
    left = document.querySelector(".arrowle");
    right = document.querySelector(".arrowri");
    data;
    render(categories) {
        this.data = categories;
        const markup = this.renderSlider(this.data);
        this.parent.insertAdjacentHTML("beforeend", markup);
    }
    renderSlider(data1) {
        const curPage = data1.page;
        const numPages = Math.ceil(data1.search.length / 6);
        console.log(curPage, numPages);
        // Page 1, and there are other pages
        this.parent.innerHTML = "";
        if (curPage === 1 && numPages > 1) return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Last page
        if (curPage === numPages && numPages > 1) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
        // Other page
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Page 1, and there are NO other pages
        return "";
    }
    addHandlerClick(handler) {
        this.parent.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
}
exports.default = new paginationRender();

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"74vgk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class AddToCart {
    slidebox = document.querySelector("#addToCart");
    closemodel = document.querySelector(".closemodel");
    parentUL = document.querySelector("#foodList");
    tot = document.querySelector(".total");
    inDec;
    cnt;
    total;
    data;
    render(categories) {
        this.data = categories;
        this.cnt = 0;
        this.total = 0;
        const markup = this.renderSlider(this.data);
        this.parentUL.innerHTML = "";
        this.parentUL.insertAdjacentHTML("beforeend", markup);
        this.tot.textContent = `$ ${this.total}`;
    }
    renderSlider(categories) {
        // console.log(categories);
        let markme = `${categories.map((val)=>{
            this.total += val.price * val.count;
            return `<li class="foodItms item${this.cnt++}">
    <div class="profile">
    <div class="Cartimg"><img src='${val.img.currentSrc}'/></div>
    <div class="itemName">${val.name}</div>
    </div>
    <div class="price">
      <span>$ ${val.price}</span>
      <div class="incDec">
        <button class="dec">-⬇</button>
         <span class="count">${val.count}</span>
        <button class="inc">+⬆</button>
      </div>
    </div>
    <span class="delete">
      <i class="fa fa-close" data-id = ${val.id} style="font-size: 36px; color: red"></i>
    </span>
  </li>`;
        }).join("")}`;
        return markme;
    }
    addHandlerSlide(handler) {
        this.slidebox.addEventListener("click", handler.bind(this));
    }
    addHandlerCart(handler) {
        console.log("xx");
        this.parentUL.addEventListener("click", handler.bind(this));
    }
    removeHandler(handler) {
        this.parentUL.addEventListener("click", handler.bind(this));
    }
    closeHnadler(handler) {
        // console.log("ss");
        this.closemodel.addEventListener("click", handler.bind(this, this.slidebox));
    }
}
exports.default = new AddToCart();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire6353")

//# sourceMappingURL=index.e37f48ea.js.map
