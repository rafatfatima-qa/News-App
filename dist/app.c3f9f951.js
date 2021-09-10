// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/app.js":[function(require,module,exports) {
/*PLEASE DO NOT COPY OR CHANGE THIS CODE*/
filterSelection("all");

function filterSelection(c) {
  var x = document.getElementsByClassName("news-card"); //aik array hoga x, length=5 ka
  // console.log("Array x", x);

  if (c == "all") {
    //agar c equal to "all" ho to
    c = ""; //c ko empty k equal ker do kyu k all ka function already call ho chuka uper
  }

  for (var i = 0; i < x.length; i++) {
    removenews(x[i], "show"); //RFS

    if (x[i].className.indexOf(c) > -1) {
      addnews(x[i], "show");
    }
  }
}

function addnews(element, name) {
  var arr1, arr2;
  arr1 = element.className.split(" "); //console.log("arr1",arr1);

  arr2 = name.split(" "); //RFS
  //console.log("arr2",arr2);

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removenews(element, name) {
  var arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" "); //RFS

  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); //console.log( "arr2[i]", arr2[i] );  
    }
  }

  element.className = arr1.join(" ");
}
/**********************************************Tesla*************************************************** */


var key = "0934ce4db1434b3aa30737ccb1f0d32e";
var base = "https://newsapi.org/";
var query = "tesla";
var sortBy1 = "description";
fetch("".concat(base, "v2/everything?q=").concat(query, "&sortBy=").concat(sortBy1, "&apiKey=").concat(key)).then(function (response) {
  return response.json();
}).then(function (newsArray) {
  console.log('All News', newsArray);
  document.getElementsByClassName("news-card")[0].innerHTML = "<p>\n      ".concat(newsArray.articles[0].title, "\n      <button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample0\" aria-expanded=\"false\" aria-controls=\"collapseWidthExample\">Expand\n      </button>\n    </p>\n    <div>\n      <div class=\"collapse collapse-horizontal\" id=\"collapseWidthExample0\">\n        <div class=\"card card-body\" style=\"width: 600px;\">\n        ").concat(newsArray.articles[0].description, "\n        <a href=\"").concat(newsArray.articles[0].url, "\" target=\"_blank\">Read More Here</a>\n        </div>\n      </div>\n    </div>");
  document.getElementsByClassName("news-card")[1].innerHTML = "<p>\n    ".concat(newsArray.articles[1].title, "\n    <button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample1\" aria-expanded=\"false\" aria-controls=\"collapseWidthExample\">Expand\n    </button>\n  </p>\n  <div>\n    <div class=\"collapse collapse-horizontal\" id=\"collapseWidthExample1\">\n      <div class=\"card card-body\" style=\"width: 600px;\">\n      ").concat(newsArray.articles[1].description, "\n      <a href=\"").concat(newsArray.articles[1].url, "\" target=\"_blank\">Read More Here</a>\n      </div>\n    </div>\n  </div>");
});
/***********************************************TechCrunch************************************************************ */

var query2 = "techcrunch";
fetch("".concat(base, "v2/top-headlines?sources=").concat(query2, "&apiKey=").concat(key)).then(function (response) {
  return response.json();
}).then(function (newsArray) {
  console.log('All News', newsArray);
  document.getElementsByClassName("news-card")[2].innerHTML = "<p>\n  ".concat(newsArray.articles[2].title, "\n  <button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample2\" aria-expanded=\"false\" aria-controls=\"collapseWidthExample\">Expand\n  </button>\n</p>\n<div>\n  <div class=\"collapse collapse-horizontal\" id=\"collapseWidthExample2\">\n    <div class=\"card card-body\" style=\"width: 600px;\">\n    ").concat(newsArray.articles[2].description, "\n    <a href=\"").concat(newsArray.articles[2].url, "\" target=\"_blank\">Read More Here</a>\n    </div>\n  </div>\n</div>");
});
/***********************************************Apple*********************************************************** */

var query3 = "apple";
var sortBy2 = "popularity";
fetch("".concat(base, "v2/everything?q=").concat(query3, "&sortBy=").concat(sortBy2, "&apiKey=").concat(key)).then(function (response) {
  return response.json();
}).then(function (newsArray) {
  console.log('All News', newsArray);
  document.getElementsByClassName("news-card")[3].innerHTML = "<p>\n".concat(newsArray.articles[3].title, "\n<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample3\" aria-expanded=\"false\" aria-controls=\"collapseWidthExample\">Expand\n</button>\n</p>\n<div>\n<div class=\"collapse collapse-horizontal\" id=\"collapseWidthExample3\">\n  <div class=\"card card-body\" style=\"width: 600px;\">\n  ").concat(newsArray.articles[3].description, "\n  <a href=\"").concat(newsArray.articles[3].url, "\" target=\"_blank\">Read More Here</a>\n  </div>\n</div>\n</div>");
  document.getElementsByClassName("news-card")[4].innerHTML = "<p>\n".concat(newsArray.articles[4].title, "\n<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample4\" aria-expanded=\"false\" aria-controls=\"collapseWidthExample\">Expand\n</button>\n</p>\n<div>\n<div class=\"collapse collapse-horizontal\" id=\"collapseWidthExample4\">\n  <div class=\"card card-body\" style=\"width: 600px;\">\n  ").concat(newsArray.articles[4].description, "\n  <a href=\"").concat(newsArray.articles[4].url, "\" target=\"_blank\">Read More Here</a>\n  </div>\n</div>\n</div>");
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58162" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map