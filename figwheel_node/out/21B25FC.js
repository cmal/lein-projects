goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34545__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34546__i = 0, G__34546__a = new Array(arguments.length -  0);
while (G__34546__i < G__34546__a.length) {G__34546__a[G__34546__i] = arguments[G__34546__i + 0]; ++G__34546__i;}
  args = new cljs.core.IndexedSeq(G__34546__a,0);
} 
return G__34545__delegate.call(this,args);};
G__34545.cljs$lang$maxFixedArity = 0;
G__34545.cljs$lang$applyTo = (function (arglist__34547){
var args = cljs.core.seq(arglist__34547);
return G__34545__delegate(args);
});
G__34545.cljs$core$IFn$_invoke$arity$variadic = G__34545__delegate;
return G__34545;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34548__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34549__i = 0, G__34549__a = new Array(arguments.length -  0);
while (G__34549__i < G__34549__a.length) {G__34549__a[G__34549__i] = arguments[G__34549__i + 0]; ++G__34549__i;}
  args = new cljs.core.IndexedSeq(G__34549__a,0);
} 
return G__34548__delegate.call(this,args);};
G__34548.cljs$lang$maxFixedArity = 0;
G__34548.cljs$lang$applyTo = (function (arglist__34550){
var args = cljs.core.seq(arglist__34550);
return G__34548__delegate(args);
});
G__34548.cljs$core$IFn$_invoke$arity$variadic = G__34548__delegate;
return G__34548;
})()
;

return null;
});
