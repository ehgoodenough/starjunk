window.addEventListener("DOMContentLoaded", function() {document.body.innerHTML="<div style=\"color:#000 !important; padding:2em !important; font-size:medium !important; font-style:normal !important; font-weight:normal !important; font-variant:normal !important; font-stretch:normal !important; font-family:monospace !important; line-height:normal !important; white-space:pre-wrap !important; background-color:#FFF !important;\"><div>ModuleBuildError: Module build failed: TypeError: /home/holyschmitt/Documents/Stuff/starjunk/source/Junkership.js: Duplicate declaration \"PeaShoota\"\n  12 |     VertShoota, BFG, Laser, PiercingLaser, SuperLaser, Mine,\n  13 |     SuperMine, PaintShot<span style=\"color:rgb(0, 255, 0)\">}</span> from <span style=\"color:rgb(255, 85, 85)\">\"./PowerUp.js\"</span>\n> 14 | <span style=\"color:rgb(85, 255, 255)\">import</span> <span style=\"color:rgb(0, 255, 0)\">{</span>PeaShoota<span style=\"color:rgb(0, 255, 0)\">}</span> from <span style=\"color:rgb(255, 85, 85)\">\"./PowerUp.js\"</span>\n     |         ^\n  15 | <span style=\"color:rgb(85, 255, 255)\">import</span> Explosion from <span style=\"color:rgb(255, 85, 85)\">\"./Explosion.js\"</span>\n  16 | \n  17 | <span style=\"color:rgb(85, 255, 255)\">export</span> <span style=\"color:rgb(85, 255, 255)\">default</span> <span style=\"color:rgb(85, 255, 255)\">class</span> Junkership <span style=\"color:rgb(85, 255, 255)\">extends</span> Pixi.Sprite <span style=\"color:rgb(0, 255, 0)\">{</span>\n    at File.buildCodeFrameError (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/lib/transformation/file/index.js:407:15)\n    at Scope.checkBlockScopedCollisions (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:407:27)\n    at Scope.<anonymous> (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:548:18)\n    at Scope.registerBinding (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:567:8)\n    at Scope.registerDeclaration (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:492:14)\n    at Object.Declaration (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:109:36)\n    at NodePath._call (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:63:18)\n    at NodePath.call (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:47:17)\n    at NodePath.visit (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/path/context.js:93:12)\n    at TraversalContext.visitQueue (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:152:16)\n    at TraversalContext.visitMultiple (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:110:17)\n    at TraversalContext.visit (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/context.js:182:19)\n    at Function.traverse.node (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/index.js:135:17)\n    at Object.traverse [as default] (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/index.js:69:12)\n    at NodePath.traverse (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/path/index.js:141:23)\n    at Scope._crawl (/home/holyschmitt/Documents/Stuff/starjunk/node_modules/babel-core/node_modules/babel-traverse/lib/scope/index.js:773:10)</div></div>"})