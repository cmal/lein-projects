// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18643__i = 0, G__18643__a = new Array(arguments.length -  0);
while (G__18643__i < G__18643__a.length) {G__18643__a[G__18643__i] = arguments[G__18643__i + 0]; ++G__18643__i;}
  args = new cljs.core.IndexedSeq(G__18643__a,0);
} 
return G__18642__delegate.call(this,args);};
G__18642.cljs$lang$maxFixedArity = 0;
G__18642.cljs$lang$applyTo = (function (arglist__18644){
var args = cljs.core.seq(arglist__18644);
return G__18642__delegate(args);
});
G__18642.cljs$core$IFn$_invoke$arity$variadic = G__18642__delegate;
return G__18642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18646__i = 0, G__18646__a = new Array(arguments.length -  0);
while (G__18646__i < G__18646__a.length) {G__18646__a[G__18646__i] = arguments[G__18646__i + 0]; ++G__18646__i;}
  args = new cljs.core.IndexedSeq(G__18646__a,0);
} 
return G__18645__delegate.call(this,args);};
G__18645.cljs$lang$maxFixedArity = 0;
G__18645.cljs$lang$applyTo = (function (arglist__18647){
var args = cljs.core.seq(arglist__18647);
return G__18645__delegate(args);
});
G__18645.cljs$core$IFn$_invoke$arity$variadic = G__18645__delegate;
return G__18645;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map