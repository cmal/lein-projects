// Compiled by ClojureScript 1.9.293 {}
goog.provide('piggieback_project.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
piggieback_project.core._main = (function piggieback_project$core$_main(var_args){
var args__18595__auto__ = [];
var len__18588__auto___18651 = arguments.length;
var i__18589__auto___18652 = (0);
while(true){
if((i__18589__auto___18652 < len__18588__auto___18651)){
args__18595__auto__.push((arguments[i__18589__auto___18652]));

var G__18653 = (i__18589__auto___18652 + (1));
i__18589__auto___18652 = G__18653;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});

piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"Hello world from Node.js!");
});

piggieback_project.core._main.cljs$lang$maxFixedArity = (0);

piggieback_project.core._main.cljs$lang$applyTo = (function (seq18650){
return piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18650));
});

cljs.core._STAR_main_cli_fn_STAR_ = piggieback_project.core._main;

//# sourceMappingURL=core.js.map