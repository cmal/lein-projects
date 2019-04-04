goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35469__i = 0, G__35469__a = new Array(arguments.length -  0);
while (G__35469__i < G__35469__a.length) {G__35469__a[G__35469__i] = arguments[G__35469__i + 0]; ++G__35469__i;}
  args = new cljs.core.IndexedSeq(G__35469__a,0);
} 
return G__35468__delegate.call(this,args);};
G__35468.cljs$lang$maxFixedArity = 0;
G__35468.cljs$lang$applyTo = (function (arglist__35470){
var args = cljs.core.seq(arglist__35470);
return G__35468__delegate(args);
});
G__35468.cljs$core$IFn$_invoke$arity$variadic = G__35468__delegate;
return G__35468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35472__i = 0, G__35472__a = new Array(arguments.length -  0);
while (G__35472__i < G__35472__a.length) {G__35472__a[G__35472__i] = arguments[G__35472__i + 0]; ++G__35472__i;}
  args = new cljs.core.IndexedSeq(G__35472__a,0);
} 
return G__35471__delegate.call(this,args);};
G__35471.cljs$lang$maxFixedArity = 0;
G__35471.cljs$lang$applyTo = (function (arglist__35473){
var args = cljs.core.seq(arglist__35473);
return G__35471__delegate(args);
});
G__35471.cljs$core$IFn$_invoke$arity$variadic = G__35471__delegate;
return G__35471;
})()
;

return null;
});
