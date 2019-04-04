// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18086__auto__,writer__18087__auto__,opt__18088__auto__){
return cljs.core._write.call(null,writer__18087__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20680 = arguments.length;
var i__18589__auto___20681 = (0);
while(true){
if((i__18589__auto___20681 < len__18588__auto___20680)){
args__18595__auto__.push((arguments[i__18589__auto___20681]));

var G__20682 = (i__18589__auto___20681 + (1));
i__18589__auto___20681 = G__20682;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20679){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20679));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20684 = arguments.length;
var i__18589__auto___20685 = (0);
while(true){
if((i__18589__auto___20685 < len__18588__auto___20684)){
args__18595__auto__.push((arguments[i__18589__auto___20685]));

var G__20686 = (i__18589__auto___20685 + (1));
i__18589__auto___20685 = G__20686;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20683){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20683));
});

var g_QMARK__20687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20688 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20687){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20687))
,null));
var mkg_20689 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20687,g_20688){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20687,g_20688))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20687,g_20688,mkg_20689){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20687).call(null,x);
});})(g_QMARK__20687,g_20688,mkg_20689))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20687,g_20688,mkg_20689){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20689).call(null,gfn);
});})(g_QMARK__20687,g_20688,mkg_20689))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20687,g_20688,mkg_20689){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20688).call(null,generator);
});})(g_QMARK__20687,g_20688,mkg_20689))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18685__auto___20708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18685__auto___20708){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20709 = arguments.length;
var i__18589__auto___20710 = (0);
while(true){
if((i__18589__auto___20710 < len__18588__auto___20709)){
args__18595__auto__.push((arguments[i__18589__auto___20710]));

var G__20711 = (i__18589__auto___20710 + (1));
i__18589__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20708))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20708){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20708),args);
});})(g__18685__auto___20708))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18685__auto___20708){
return (function (seq20690){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20690));
});})(g__18685__auto___20708))
;


var g__18685__auto___20712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18685__auto___20712){
return (function cljs$spec$impl$gen$list(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20713 = arguments.length;
var i__18589__auto___20714 = (0);
while(true){
if((i__18589__auto___20714 < len__18588__auto___20713)){
args__18595__auto__.push((arguments[i__18589__auto___20714]));

var G__20715 = (i__18589__auto___20714 + (1));
i__18589__auto___20714 = G__20715;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20712))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20712){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20712),args);
});})(g__18685__auto___20712))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18685__auto___20712){
return (function (seq20691){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20691));
});})(g__18685__auto___20712))
;


var g__18685__auto___20716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18685__auto___20716){
return (function cljs$spec$impl$gen$map(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20717 = arguments.length;
var i__18589__auto___20718 = (0);
while(true){
if((i__18589__auto___20718 < len__18588__auto___20717)){
args__18595__auto__.push((arguments[i__18589__auto___20718]));

var G__20719 = (i__18589__auto___20718 + (1));
i__18589__auto___20718 = G__20719;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20716))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20716){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20716),args);
});})(g__18685__auto___20716))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18685__auto___20716){
return (function (seq20692){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20692));
});})(g__18685__auto___20716))
;


var g__18685__auto___20720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18685__auto___20720){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20721 = arguments.length;
var i__18589__auto___20722 = (0);
while(true){
if((i__18589__auto___20722 < len__18588__auto___20721)){
args__18595__auto__.push((arguments[i__18589__auto___20722]));

var G__20723 = (i__18589__auto___20722 + (1));
i__18589__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20720))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20720){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20720),args);
});})(g__18685__auto___20720))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18685__auto___20720){
return (function (seq20693){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20693));
});})(g__18685__auto___20720))
;


var g__18685__auto___20724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18685__auto___20724){
return (function cljs$spec$impl$gen$set(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20725 = arguments.length;
var i__18589__auto___20726 = (0);
while(true){
if((i__18589__auto___20726 < len__18588__auto___20725)){
args__18595__auto__.push((arguments[i__18589__auto___20726]));

var G__20727 = (i__18589__auto___20726 + (1));
i__18589__auto___20726 = G__20727;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20724))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20724),args);
});})(g__18685__auto___20724))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18685__auto___20724){
return (function (seq20694){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20694));
});})(g__18685__auto___20724))
;


var g__18685__auto___20728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18685__auto___20728){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20729 = arguments.length;
var i__18589__auto___20730 = (0);
while(true){
if((i__18589__auto___20730 < len__18588__auto___20729)){
args__18595__auto__.push((arguments[i__18589__auto___20730]));

var G__20731 = (i__18589__auto___20730 + (1));
i__18589__auto___20730 = G__20731;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20728))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20728),args);
});})(g__18685__auto___20728))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18685__auto___20728){
return (function (seq20695){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20695));
});})(g__18685__auto___20728))
;


var g__18685__auto___20732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__18685__auto___20732){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20733 = arguments.length;
var i__18589__auto___20734 = (0);
while(true){
if((i__18589__auto___20734 < len__18588__auto___20733)){
args__18595__auto__.push((arguments[i__18589__auto___20734]));

var G__20735 = (i__18589__auto___20734 + (1));
i__18589__auto___20734 = G__20735;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20732))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20732),args);
});})(g__18685__auto___20732))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__18685__auto___20732){
return (function (seq20696){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20696));
});})(g__18685__auto___20732))
;


var g__18685__auto___20736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18685__auto___20736){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20737 = arguments.length;
var i__18589__auto___20738 = (0);
while(true){
if((i__18589__auto___20738 < len__18588__auto___20737)){
args__18595__auto__.push((arguments[i__18589__auto___20738]));

var G__20739 = (i__18589__auto___20738 + (1));
i__18589__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20736))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20736){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20736),args);
});})(g__18685__auto___20736))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18685__auto___20736){
return (function (seq20697){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20697));
});})(g__18685__auto___20736))
;


var g__18685__auto___20740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18685__auto___20740){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20741 = arguments.length;
var i__18589__auto___20742 = (0);
while(true){
if((i__18589__auto___20742 < len__18588__auto___20741)){
args__18595__auto__.push((arguments[i__18589__auto___20742]));

var G__20743 = (i__18589__auto___20742 + (1));
i__18589__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20740))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20740){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20740),args);
});})(g__18685__auto___20740))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18685__auto___20740){
return (function (seq20698){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20698));
});})(g__18685__auto___20740))
;


var g__18685__auto___20744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18685__auto___20744){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20745 = arguments.length;
var i__18589__auto___20746 = (0);
while(true){
if((i__18589__auto___20746 < len__18588__auto___20745)){
args__18595__auto__.push((arguments[i__18589__auto___20746]));

var G__20747 = (i__18589__auto___20746 + (1));
i__18589__auto___20746 = G__20747;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20744))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20744){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20744),args);
});})(g__18685__auto___20744))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18685__auto___20744){
return (function (seq20699){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20699));
});})(g__18685__auto___20744))
;


var g__18685__auto___20748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18685__auto___20748){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20749 = arguments.length;
var i__18589__auto___20750 = (0);
while(true){
if((i__18589__auto___20750 < len__18588__auto___20749)){
args__18595__auto__.push((arguments[i__18589__auto___20750]));

var G__20751 = (i__18589__auto___20750 + (1));
i__18589__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20748))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20748){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20748),args);
});})(g__18685__auto___20748))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18685__auto___20748){
return (function (seq20700){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20700));
});})(g__18685__auto___20748))
;


var g__18685__auto___20752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18685__auto___20752){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20753 = arguments.length;
var i__18589__auto___20754 = (0);
while(true){
if((i__18589__auto___20754 < len__18588__auto___20753)){
args__18595__auto__.push((arguments[i__18589__auto___20754]));

var G__20755 = (i__18589__auto___20754 + (1));
i__18589__auto___20754 = G__20755;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20752))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20752){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20752),args);
});})(g__18685__auto___20752))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18685__auto___20752){
return (function (seq20701){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20701));
});})(g__18685__auto___20752))
;


var g__18685__auto___20756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18685__auto___20756){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20757 = arguments.length;
var i__18589__auto___20758 = (0);
while(true){
if((i__18589__auto___20758 < len__18588__auto___20757)){
args__18595__auto__.push((arguments[i__18589__auto___20758]));

var G__20759 = (i__18589__auto___20758 + (1));
i__18589__auto___20758 = G__20759;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20756))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20756),args);
});})(g__18685__auto___20756))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18685__auto___20756){
return (function (seq20702){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20702));
});})(g__18685__auto___20756))
;


var g__18685__auto___20760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18685__auto___20760){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20761 = arguments.length;
var i__18589__auto___20762 = (0);
while(true){
if((i__18589__auto___20762 < len__18588__auto___20761)){
args__18595__auto__.push((arguments[i__18589__auto___20762]));

var G__20763 = (i__18589__auto___20762 + (1));
i__18589__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20760))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20760),args);
});})(g__18685__auto___20760))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18685__auto___20760){
return (function (seq20703){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20703));
});})(g__18685__auto___20760))
;


var g__18685__auto___20764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18685__auto___20764){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20765 = arguments.length;
var i__18589__auto___20766 = (0);
while(true){
if((i__18589__auto___20766 < len__18588__auto___20765)){
args__18595__auto__.push((arguments[i__18589__auto___20766]));

var G__20767 = (i__18589__auto___20766 + (1));
i__18589__auto___20766 = G__20767;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20764))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20764),args);
});})(g__18685__auto___20764))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18685__auto___20764){
return (function (seq20704){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20704));
});})(g__18685__auto___20764))
;


var g__18685__auto___20768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18685__auto___20768){
return (function cljs$spec$impl$gen$return(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20769 = arguments.length;
var i__18589__auto___20770 = (0);
while(true){
if((i__18589__auto___20770 < len__18588__auto___20769)){
args__18595__auto__.push((arguments[i__18589__auto___20770]));

var G__20771 = (i__18589__auto___20770 + (1));
i__18589__auto___20770 = G__20771;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20768))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20768),args);
});})(g__18685__auto___20768))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18685__auto___20768){
return (function (seq20705){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20705));
});})(g__18685__auto___20768))
;


var g__18685__auto___20772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__18685__auto___20772){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20773 = arguments.length;
var i__18589__auto___20774 = (0);
while(true){
if((i__18589__auto___20774 < len__18588__auto___20773)){
args__18595__auto__.push((arguments[i__18589__auto___20774]));

var G__20775 = (i__18589__auto___20774 + (1));
i__18589__auto___20774 = G__20775;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20772))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20772),args);
});})(g__18685__auto___20772))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18685__auto___20772){
return (function (seq20706){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20706));
});})(g__18685__auto___20772))
;


var g__18685__auto___20776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__18685__auto___20776){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20777 = arguments.length;
var i__18589__auto___20778 = (0);
while(true){
if((i__18589__auto___20778 < len__18588__auto___20777)){
args__18595__auto__.push((arguments[i__18589__auto___20778]));

var G__20779 = (i__18589__auto___20778 + (1));
i__18589__auto___20778 = G__20779;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18685__auto___20776))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18685__auto___20776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18685__auto___20776),args);
});})(g__18685__auto___20776))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__18685__auto___20776){
return (function (seq20707){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20707));
});})(g__18685__auto___20776))
;

var g__18698__auto___20801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18698__auto___20801){
return (function cljs$spec$impl$gen$any(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20802 = arguments.length;
var i__18589__auto___20803 = (0);
while(true){
if((i__18589__auto___20803 < len__18588__auto___20802)){
args__18595__auto__.push((arguments[i__18589__auto___20803]));

var G__20804 = (i__18589__auto___20803 + (1));
i__18589__auto___20803 = G__20804;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20801))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20801){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20801);
});})(g__18698__auto___20801))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18698__auto___20801){
return (function (seq20780){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20780));
});})(g__18698__auto___20801))
;


var g__18698__auto___20805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18698__auto___20805){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20806 = arguments.length;
var i__18589__auto___20807 = (0);
while(true){
if((i__18589__auto___20807 < len__18588__auto___20806)){
args__18595__auto__.push((arguments[i__18589__auto___20807]));

var G__20808 = (i__18589__auto___20807 + (1));
i__18589__auto___20807 = G__20808;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20805))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20805){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20805);
});})(g__18698__auto___20805))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18698__auto___20805){
return (function (seq20781){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20781));
});})(g__18698__auto___20805))
;


var g__18698__auto___20809 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18698__auto___20809){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20810 = arguments.length;
var i__18589__auto___20811 = (0);
while(true){
if((i__18589__auto___20811 < len__18588__auto___20810)){
args__18595__auto__.push((arguments[i__18589__auto___20811]));

var G__20812 = (i__18589__auto___20811 + (1));
i__18589__auto___20811 = G__20812;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20809))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20809){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20809);
});})(g__18698__auto___20809))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18698__auto___20809){
return (function (seq20782){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20782));
});})(g__18698__auto___20809))
;


var g__18698__auto___20813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18698__auto___20813){
return (function cljs$spec$impl$gen$char(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20814 = arguments.length;
var i__18589__auto___20815 = (0);
while(true){
if((i__18589__auto___20815 < len__18588__auto___20814)){
args__18595__auto__.push((arguments[i__18589__auto___20815]));

var G__20816 = (i__18589__auto___20815 + (1));
i__18589__auto___20815 = G__20816;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20813))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20813){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20813);
});})(g__18698__auto___20813))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18698__auto___20813){
return (function (seq20783){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20783));
});})(g__18698__auto___20813))
;


var g__18698__auto___20817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18698__auto___20817){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20818 = arguments.length;
var i__18589__auto___20819 = (0);
while(true){
if((i__18589__auto___20819 < len__18588__auto___20818)){
args__18595__auto__.push((arguments[i__18589__auto___20819]));

var G__20820 = (i__18589__auto___20819 + (1));
i__18589__auto___20819 = G__20820;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20817))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20817){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20817);
});})(g__18698__auto___20817))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18698__auto___20817){
return (function (seq20784){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20784));
});})(g__18698__auto___20817))
;


var g__18698__auto___20821 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18698__auto___20821){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20822 = arguments.length;
var i__18589__auto___20823 = (0);
while(true){
if((i__18589__auto___20823 < len__18588__auto___20822)){
args__18595__auto__.push((arguments[i__18589__auto___20823]));

var G__20824 = (i__18589__auto___20823 + (1));
i__18589__auto___20823 = G__20824;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20821))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20821){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20821);
});})(g__18698__auto___20821))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18698__auto___20821){
return (function (seq20785){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20785));
});})(g__18698__auto___20821))
;


var g__18698__auto___20825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18698__auto___20825){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20826 = arguments.length;
var i__18589__auto___20827 = (0);
while(true){
if((i__18589__auto___20827 < len__18588__auto___20826)){
args__18595__auto__.push((arguments[i__18589__auto___20827]));

var G__20828 = (i__18589__auto___20827 + (1));
i__18589__auto___20827 = G__20828;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20825))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20825){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20825);
});})(g__18698__auto___20825))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18698__auto___20825){
return (function (seq20786){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20786));
});})(g__18698__auto___20825))
;


var g__18698__auto___20829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18698__auto___20829){
return (function cljs$spec$impl$gen$double(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20830 = arguments.length;
var i__18589__auto___20831 = (0);
while(true){
if((i__18589__auto___20831 < len__18588__auto___20830)){
args__18595__auto__.push((arguments[i__18589__auto___20831]));

var G__20832 = (i__18589__auto___20831 + (1));
i__18589__auto___20831 = G__20832;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20829))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20829){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20829);
});})(g__18698__auto___20829))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18698__auto___20829){
return (function (seq20787){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20787));
});})(g__18698__auto___20829))
;


var g__18698__auto___20833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18698__auto___20833){
return (function cljs$spec$impl$gen$int(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20834 = arguments.length;
var i__18589__auto___20835 = (0);
while(true){
if((i__18589__auto___20835 < len__18588__auto___20834)){
args__18595__auto__.push((arguments[i__18589__auto___20835]));

var G__20836 = (i__18589__auto___20835 + (1));
i__18589__auto___20835 = G__20836;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20833))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20833){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20833);
});})(g__18698__auto___20833))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18698__auto___20833){
return (function (seq20788){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20788));
});})(g__18698__auto___20833))
;


var g__18698__auto___20837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18698__auto___20837){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20838 = arguments.length;
var i__18589__auto___20839 = (0);
while(true){
if((i__18589__auto___20839 < len__18588__auto___20838)){
args__18595__auto__.push((arguments[i__18589__auto___20839]));

var G__20840 = (i__18589__auto___20839 + (1));
i__18589__auto___20839 = G__20840;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20837))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20837){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20837);
});})(g__18698__auto___20837))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18698__auto___20837){
return (function (seq20789){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20789));
});})(g__18698__auto___20837))
;


var g__18698__auto___20841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18698__auto___20841){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20842 = arguments.length;
var i__18589__auto___20843 = (0);
while(true){
if((i__18589__auto___20843 < len__18588__auto___20842)){
args__18595__auto__.push((arguments[i__18589__auto___20843]));

var G__20844 = (i__18589__auto___20843 + (1));
i__18589__auto___20843 = G__20844;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20841))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20841){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20841);
});})(g__18698__auto___20841))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18698__auto___20841){
return (function (seq20790){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20790));
});})(g__18698__auto___20841))
;


var g__18698__auto___20845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18698__auto___20845){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20846 = arguments.length;
var i__18589__auto___20847 = (0);
while(true){
if((i__18589__auto___20847 < len__18588__auto___20846)){
args__18595__auto__.push((arguments[i__18589__auto___20847]));

var G__20848 = (i__18589__auto___20847 + (1));
i__18589__auto___20847 = G__20848;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20845))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20845){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20845);
});})(g__18698__auto___20845))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18698__auto___20845){
return (function (seq20791){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20791));
});})(g__18698__auto___20845))
;


var g__18698__auto___20849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18698__auto___20849){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20850 = arguments.length;
var i__18589__auto___20851 = (0);
while(true){
if((i__18589__auto___20851 < len__18588__auto___20850)){
args__18595__auto__.push((arguments[i__18589__auto___20851]));

var G__20852 = (i__18589__auto___20851 + (1));
i__18589__auto___20851 = G__20852;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20849))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20849){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20849);
});})(g__18698__auto___20849))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18698__auto___20849){
return (function (seq20792){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20792));
});})(g__18698__auto___20849))
;


var g__18698__auto___20853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18698__auto___20853){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20854 = arguments.length;
var i__18589__auto___20855 = (0);
while(true){
if((i__18589__auto___20855 < len__18588__auto___20854)){
args__18595__auto__.push((arguments[i__18589__auto___20855]));

var G__20856 = (i__18589__auto___20855 + (1));
i__18589__auto___20855 = G__20856;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20853))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20853){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20853);
});})(g__18698__auto___20853))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18698__auto___20853){
return (function (seq20793){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20793));
});})(g__18698__auto___20853))
;


var g__18698__auto___20857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18698__auto___20857){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20858 = arguments.length;
var i__18589__auto___20859 = (0);
while(true){
if((i__18589__auto___20859 < len__18588__auto___20858)){
args__18595__auto__.push((arguments[i__18589__auto___20859]));

var G__20860 = (i__18589__auto___20859 + (1));
i__18589__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20857))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20857){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20857);
});})(g__18698__auto___20857))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18698__auto___20857){
return (function (seq20794){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20794));
});})(g__18698__auto___20857))
;


var g__18698__auto___20861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18698__auto___20861){
return (function cljs$spec$impl$gen$string(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20862 = arguments.length;
var i__18589__auto___20863 = (0);
while(true){
if((i__18589__auto___20863 < len__18588__auto___20862)){
args__18595__auto__.push((arguments[i__18589__auto___20863]));

var G__20864 = (i__18589__auto___20863 + (1));
i__18589__auto___20863 = G__20864;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20861))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20861){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20861);
});})(g__18698__auto___20861))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18698__auto___20861){
return (function (seq20795){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20795));
});})(g__18698__auto___20861))
;


var g__18698__auto___20865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18698__auto___20865){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20866 = arguments.length;
var i__18589__auto___20867 = (0);
while(true){
if((i__18589__auto___20867 < len__18588__auto___20866)){
args__18595__auto__.push((arguments[i__18589__auto___20867]));

var G__20868 = (i__18589__auto___20867 + (1));
i__18589__auto___20867 = G__20868;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20865))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20865){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20865);
});})(g__18698__auto___20865))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18698__auto___20865){
return (function (seq20796){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20796));
});})(g__18698__auto___20865))
;


var g__18698__auto___20869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18698__auto___20869){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20870 = arguments.length;
var i__18589__auto___20871 = (0);
while(true){
if((i__18589__auto___20871 < len__18588__auto___20870)){
args__18595__auto__.push((arguments[i__18589__auto___20871]));

var G__20872 = (i__18589__auto___20871 + (1));
i__18589__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20869))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20869){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20869);
});})(g__18698__auto___20869))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18698__auto___20869){
return (function (seq20797){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20797));
});})(g__18698__auto___20869))
;


var g__18698__auto___20873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18698__auto___20873){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20874 = arguments.length;
var i__18589__auto___20875 = (0);
while(true){
if((i__18589__auto___20875 < len__18588__auto___20874)){
args__18595__auto__.push((arguments[i__18589__auto___20875]));

var G__20876 = (i__18589__auto___20875 + (1));
i__18589__auto___20875 = G__20876;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20873))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20873){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20873);
});})(g__18698__auto___20873))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18698__auto___20873){
return (function (seq20798){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20798));
});})(g__18698__auto___20873))
;


var g__18698__auto___20877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18698__auto___20877){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20878 = arguments.length;
var i__18589__auto___20879 = (0);
while(true){
if((i__18589__auto___20879 < len__18588__auto___20878)){
args__18595__auto__.push((arguments[i__18589__auto___20879]));

var G__20880 = (i__18589__auto___20879 + (1));
i__18589__auto___20879 = G__20880;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20877))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20877){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20877);
});})(g__18698__auto___20877))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18698__auto___20877){
return (function (seq20799){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20799));
});})(g__18698__auto___20877))
;


var g__18698__auto___20881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18698__auto___20881){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20882 = arguments.length;
var i__18589__auto___20883 = (0);
while(true){
if((i__18589__auto___20883 < len__18588__auto___20882)){
args__18595__auto__.push((arguments[i__18589__auto___20883]));

var G__20884 = (i__18589__auto___20883 + (1));
i__18589__auto___20883 = G__20884;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});})(g__18698__auto___20881))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18698__auto___20881){
return (function (args){
return cljs.core.deref.call(null,g__18698__auto___20881);
});})(g__18698__auto___20881))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18698__auto___20881){
return (function (seq20800){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20800));
});})(g__18698__auto___20881))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18595__auto__ = [];
var len__18588__auto___20887 = arguments.length;
var i__18589__auto___20888 = (0);
while(true){
if((i__18589__auto___20888 < len__18588__auto___20887)){
args__18595__auto__.push((arguments[i__18589__auto___20888]));

var G__20889 = (i__18589__auto___20888 + (1));
i__18589__auto___20888 = G__20889;
continue;
} else {
}
break;
}

var argseq__18596__auto__ = ((((0) < args__18595__auto__.length))?(new cljs.core.IndexedSeq(args__18595__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18596__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20885_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20885_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20886){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20886));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20890_SHARP_){
return (new Date(p1__20890_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map