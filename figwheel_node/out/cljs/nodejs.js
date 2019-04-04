// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35457__i = 0, G__35457__a = new Array(arguments.length -  0);
while (G__35457__i < G__35457__a.length) {G__35457__a[G__35457__i] = arguments[G__35457__i + 0]; ++G__35457__i;}
  args = new cljs.core.IndexedSeq(G__35457__a,0);
} 
return G__35456__delegate.call(this,args);};
G__35456.cljs$lang$maxFixedArity = 0;
G__35456.cljs$lang$applyTo = (function (arglist__35458){
var args = cljs.core.seq(arglist__35458);
return G__35456__delegate(args);
});
G__35456.cljs$core$IFn$_invoke$arity$variadic = G__35456__delegate;
return G__35456;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35460__i = 0, G__35460__a = new Array(arguments.length -  0);
while (G__35460__i < G__35460__a.length) {G__35460__a[G__35460__i] = arguments[G__35460__i + 0]; ++G__35460__i;}
  args = new cljs.core.IndexedSeq(G__35460__a,0);
} 
return G__35459__delegate.call(this,args);};
G__35459.cljs$lang$maxFixedArity = 0;
G__35459.cljs$lang$applyTo = (function (arglist__35461){
var args = cljs.core.seq(arglist__35461);
return G__35459__delegate(args);
});
G__35459.cljs$core$IFn$_invoke$arity$variadic = G__35459__delegate;
return G__35459;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1476967500609