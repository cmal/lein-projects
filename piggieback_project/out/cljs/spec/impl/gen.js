// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18239__auto__,writer__18240__auto__,opt__18241__auto__){
return cljs.core._write.call(null,writer__18240__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__18748__auto__ = [];
var len__18741__auto___26364 = arguments.length;
var i__18742__auto___26365 = (0);
while(true){
if((i__18742__auto___26365 < len__18741__auto___26364)){
args__18748__auto__.push((arguments[i__18742__auto___26365]));

var G__26366 = (i__18742__auto___26365 + (1));
i__18742__auto___26365 = G__26366;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26363){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26363));
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
var args__18748__auto__ = [];
var len__18741__auto___26368 = arguments.length;
var i__18742__auto___26369 = (0);
while(true){
if((i__18742__auto___26369 < len__18741__auto___26368)){
args__18748__auto__.push((arguments[i__18742__auto___26369]));

var G__26370 = (i__18742__auto___26369 + (1));
i__18742__auto___26369 = G__26370;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26367){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26367));
});

var g_QMARK__26371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26372 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26371){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26371))
,null));
var mkg_26373 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26371,g_26372){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26371,g_26372))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26371,g_26372,mkg_26373){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26371).call(null,x);
});})(g_QMARK__26371,g_26372,mkg_26373))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26371,g_26372,mkg_26373){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26373).call(null,gfn);
});})(g_QMARK__26371,g_26372,mkg_26373))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26371,g_26372,mkg_26373){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26372).call(null,generator);
});})(g_QMARK__26371,g_26372,mkg_26373))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__23027__auto___26392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__23027__auto___26392){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26393 = arguments.length;
var i__18742__auto___26394 = (0);
while(true){
if((i__18742__auto___26394 < len__18741__auto___26393)){
args__18748__auto__.push((arguments[i__18742__auto___26394]));

var G__26395 = (i__18742__auto___26394 + (1));
i__18742__auto___26394 = G__26395;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26392))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26392),args);
});})(g__23027__auto___26392))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__23027__auto___26392){
return (function (seq26374){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26374));
});})(g__23027__auto___26392))
;


var g__23027__auto___26396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__23027__auto___26396){
return (function cljs$spec$impl$gen$list(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26397 = arguments.length;
var i__18742__auto___26398 = (0);
while(true){
if((i__18742__auto___26398 < len__18741__auto___26397)){
args__18748__auto__.push((arguments[i__18742__auto___26398]));

var G__26399 = (i__18742__auto___26398 + (1));
i__18742__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26396))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26396),args);
});})(g__23027__auto___26396))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__23027__auto___26396){
return (function (seq26375){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26375));
});})(g__23027__auto___26396))
;


var g__23027__auto___26400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__23027__auto___26400){
return (function cljs$spec$impl$gen$map(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26401 = arguments.length;
var i__18742__auto___26402 = (0);
while(true){
if((i__18742__auto___26402 < len__18741__auto___26401)){
args__18748__auto__.push((arguments[i__18742__auto___26402]));

var G__26403 = (i__18742__auto___26402 + (1));
i__18742__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26400))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26400),args);
});})(g__23027__auto___26400))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__23027__auto___26400){
return (function (seq26376){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26376));
});})(g__23027__auto___26400))
;


var g__23027__auto___26404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__23027__auto___26404){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26405 = arguments.length;
var i__18742__auto___26406 = (0);
while(true){
if((i__18742__auto___26406 < len__18741__auto___26405)){
args__18748__auto__.push((arguments[i__18742__auto___26406]));

var G__26407 = (i__18742__auto___26406 + (1));
i__18742__auto___26406 = G__26407;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26404))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26404){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26404),args);
});})(g__23027__auto___26404))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__23027__auto___26404){
return (function (seq26377){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26377));
});})(g__23027__auto___26404))
;


var g__23027__auto___26408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__23027__auto___26408){
return (function cljs$spec$impl$gen$set(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26409 = arguments.length;
var i__18742__auto___26410 = (0);
while(true){
if((i__18742__auto___26410 < len__18741__auto___26409)){
args__18748__auto__.push((arguments[i__18742__auto___26410]));

var G__26411 = (i__18742__auto___26410 + (1));
i__18742__auto___26410 = G__26411;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26408))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26408){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26408),args);
});})(g__23027__auto___26408))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__23027__auto___26408){
return (function (seq26378){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26378));
});})(g__23027__auto___26408))
;


var g__23027__auto___26412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__23027__auto___26412){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26413 = arguments.length;
var i__18742__auto___26414 = (0);
while(true){
if((i__18742__auto___26414 < len__18741__auto___26413)){
args__18748__auto__.push((arguments[i__18742__auto___26414]));

var G__26415 = (i__18742__auto___26414 + (1));
i__18742__auto___26414 = G__26415;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26412))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26412){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26412),args);
});})(g__23027__auto___26412))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__23027__auto___26412){
return (function (seq26379){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26379));
});})(g__23027__auto___26412))
;


var g__23027__auto___26416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__23027__auto___26416){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26417 = arguments.length;
var i__18742__auto___26418 = (0);
while(true){
if((i__18742__auto___26418 < len__18741__auto___26417)){
args__18748__auto__.push((arguments[i__18742__auto___26418]));

var G__26419 = (i__18742__auto___26418 + (1));
i__18742__auto___26418 = G__26419;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26416))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26416){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26416),args);
});})(g__23027__auto___26416))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__23027__auto___26416){
return (function (seq26380){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26380));
});})(g__23027__auto___26416))
;


var g__23027__auto___26420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__23027__auto___26420){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26421 = arguments.length;
var i__18742__auto___26422 = (0);
while(true){
if((i__18742__auto___26422 < len__18741__auto___26421)){
args__18748__auto__.push((arguments[i__18742__auto___26422]));

var G__26423 = (i__18742__auto___26422 + (1));
i__18742__auto___26422 = G__26423;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26420))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26420){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26420),args);
});})(g__23027__auto___26420))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__23027__auto___26420){
return (function (seq26381){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26381));
});})(g__23027__auto___26420))
;


var g__23027__auto___26424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__23027__auto___26424){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26425 = arguments.length;
var i__18742__auto___26426 = (0);
while(true){
if((i__18742__auto___26426 < len__18741__auto___26425)){
args__18748__auto__.push((arguments[i__18742__auto___26426]));

var G__26427 = (i__18742__auto___26426 + (1));
i__18742__auto___26426 = G__26427;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26424))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26424){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26424),args);
});})(g__23027__auto___26424))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__23027__auto___26424){
return (function (seq26382){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26382));
});})(g__23027__auto___26424))
;


var g__23027__auto___26428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__23027__auto___26428){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26429 = arguments.length;
var i__18742__auto___26430 = (0);
while(true){
if((i__18742__auto___26430 < len__18741__auto___26429)){
args__18748__auto__.push((arguments[i__18742__auto___26430]));

var G__26431 = (i__18742__auto___26430 + (1));
i__18742__auto___26430 = G__26431;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26428))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26428){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26428),args);
});})(g__23027__auto___26428))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__23027__auto___26428){
return (function (seq26383){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26383));
});})(g__23027__auto___26428))
;


var g__23027__auto___26432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__23027__auto___26432){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26433 = arguments.length;
var i__18742__auto___26434 = (0);
while(true){
if((i__18742__auto___26434 < len__18741__auto___26433)){
args__18748__auto__.push((arguments[i__18742__auto___26434]));

var G__26435 = (i__18742__auto___26434 + (1));
i__18742__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26432))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26432){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26432),args);
});})(g__23027__auto___26432))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__23027__auto___26432){
return (function (seq26384){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26384));
});})(g__23027__auto___26432))
;


var g__23027__auto___26436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__23027__auto___26436){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26437 = arguments.length;
var i__18742__auto___26438 = (0);
while(true){
if((i__18742__auto___26438 < len__18741__auto___26437)){
args__18748__auto__.push((arguments[i__18742__auto___26438]));

var G__26439 = (i__18742__auto___26438 + (1));
i__18742__auto___26438 = G__26439;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26436))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26436){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26436),args);
});})(g__23027__auto___26436))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__23027__auto___26436){
return (function (seq26385){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26385));
});})(g__23027__auto___26436))
;


var g__23027__auto___26440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__23027__auto___26440){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26441 = arguments.length;
var i__18742__auto___26442 = (0);
while(true){
if((i__18742__auto___26442 < len__18741__auto___26441)){
args__18748__auto__.push((arguments[i__18742__auto___26442]));

var G__26443 = (i__18742__auto___26442 + (1));
i__18742__auto___26442 = G__26443;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26440))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26440){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26440),args);
});})(g__23027__auto___26440))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__23027__auto___26440){
return (function (seq26386){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26386));
});})(g__23027__auto___26440))
;


var g__23027__auto___26444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__23027__auto___26444){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26445 = arguments.length;
var i__18742__auto___26446 = (0);
while(true){
if((i__18742__auto___26446 < len__18741__auto___26445)){
args__18748__auto__.push((arguments[i__18742__auto___26446]));

var G__26447 = (i__18742__auto___26446 + (1));
i__18742__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26444))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26444){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26444),args);
});})(g__23027__auto___26444))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__23027__auto___26444){
return (function (seq26387){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26387));
});})(g__23027__auto___26444))
;


var g__23027__auto___26448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__23027__auto___26448){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26449 = arguments.length;
var i__18742__auto___26450 = (0);
while(true){
if((i__18742__auto___26450 < len__18741__auto___26449)){
args__18748__auto__.push((arguments[i__18742__auto___26450]));

var G__26451 = (i__18742__auto___26450 + (1));
i__18742__auto___26450 = G__26451;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26448))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26448){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26448),args);
});})(g__23027__auto___26448))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__23027__auto___26448){
return (function (seq26388){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26388));
});})(g__23027__auto___26448))
;


var g__23027__auto___26452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__23027__auto___26452){
return (function cljs$spec$impl$gen$return(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26453 = arguments.length;
var i__18742__auto___26454 = (0);
while(true){
if((i__18742__auto___26454 < len__18741__auto___26453)){
args__18748__auto__.push((arguments[i__18742__auto___26454]));

var G__26455 = (i__18742__auto___26454 + (1));
i__18742__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26452))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26452){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26452),args);
});})(g__23027__auto___26452))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__23027__auto___26452){
return (function (seq26389){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26389));
});})(g__23027__auto___26452))
;


var g__23027__auto___26456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__23027__auto___26456){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26457 = arguments.length;
var i__18742__auto___26458 = (0);
while(true){
if((i__18742__auto___26458 < len__18741__auto___26457)){
args__18748__auto__.push((arguments[i__18742__auto___26458]));

var G__26459 = (i__18742__auto___26458 + (1));
i__18742__auto___26458 = G__26459;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26456))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26456){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26456),args);
});})(g__23027__auto___26456))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__23027__auto___26456){
return (function (seq26390){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26390));
});})(g__23027__auto___26456))
;


var g__23027__auto___26460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__23027__auto___26460){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26461 = arguments.length;
var i__18742__auto___26462 = (0);
while(true){
if((i__18742__auto___26462 < len__18741__auto___26461)){
args__18748__auto__.push((arguments[i__18742__auto___26462]));

var G__26463 = (i__18742__auto___26462 + (1));
i__18742__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___26460))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___26460){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___26460),args);
});})(g__23027__auto___26460))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__23027__auto___26460){
return (function (seq26391){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26391));
});})(g__23027__auto___26460))
;

var g__23040__auto___26485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__23040__auto___26485){
return (function cljs$spec$impl$gen$any(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26486 = arguments.length;
var i__18742__auto___26487 = (0);
while(true){
if((i__18742__auto___26487 < len__18741__auto___26486)){
args__18748__auto__.push((arguments[i__18742__auto___26487]));

var G__26488 = (i__18742__auto___26487 + (1));
i__18742__auto___26487 = G__26488;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26485))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26485){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26485);
});})(g__23040__auto___26485))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__23040__auto___26485){
return (function (seq26464){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26464));
});})(g__23040__auto___26485))
;


var g__23040__auto___26489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__23040__auto___26489){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26490 = arguments.length;
var i__18742__auto___26491 = (0);
while(true){
if((i__18742__auto___26491 < len__18741__auto___26490)){
args__18748__auto__.push((arguments[i__18742__auto___26491]));

var G__26492 = (i__18742__auto___26491 + (1));
i__18742__auto___26491 = G__26492;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26489))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26489){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26489);
});})(g__23040__auto___26489))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__23040__auto___26489){
return (function (seq26465){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26465));
});})(g__23040__auto___26489))
;


var g__23040__auto___26493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__23040__auto___26493){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26494 = arguments.length;
var i__18742__auto___26495 = (0);
while(true){
if((i__18742__auto___26495 < len__18741__auto___26494)){
args__18748__auto__.push((arguments[i__18742__auto___26495]));

var G__26496 = (i__18742__auto___26495 + (1));
i__18742__auto___26495 = G__26496;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26493))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26493){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26493);
});})(g__23040__auto___26493))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__23040__auto___26493){
return (function (seq26466){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26466));
});})(g__23040__auto___26493))
;


var g__23040__auto___26497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__23040__auto___26497){
return (function cljs$spec$impl$gen$char(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26498 = arguments.length;
var i__18742__auto___26499 = (0);
while(true){
if((i__18742__auto___26499 < len__18741__auto___26498)){
args__18748__auto__.push((arguments[i__18742__auto___26499]));

var G__26500 = (i__18742__auto___26499 + (1));
i__18742__auto___26499 = G__26500;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26497))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26497){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26497);
});})(g__23040__auto___26497))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__23040__auto___26497){
return (function (seq26467){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26467));
});})(g__23040__auto___26497))
;


var g__23040__auto___26501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__23040__auto___26501){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26502 = arguments.length;
var i__18742__auto___26503 = (0);
while(true){
if((i__18742__auto___26503 < len__18741__auto___26502)){
args__18748__auto__.push((arguments[i__18742__auto___26503]));

var G__26504 = (i__18742__auto___26503 + (1));
i__18742__auto___26503 = G__26504;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26501))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26501){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26501);
});})(g__23040__auto___26501))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__23040__auto___26501){
return (function (seq26468){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26468));
});})(g__23040__auto___26501))
;


var g__23040__auto___26505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__23040__auto___26505){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26506 = arguments.length;
var i__18742__auto___26507 = (0);
while(true){
if((i__18742__auto___26507 < len__18741__auto___26506)){
args__18748__auto__.push((arguments[i__18742__auto___26507]));

var G__26508 = (i__18742__auto___26507 + (1));
i__18742__auto___26507 = G__26508;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26505))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26505){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26505);
});})(g__23040__auto___26505))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__23040__auto___26505){
return (function (seq26469){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26469));
});})(g__23040__auto___26505))
;


var g__23040__auto___26509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__23040__auto___26509){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26510 = arguments.length;
var i__18742__auto___26511 = (0);
while(true){
if((i__18742__auto___26511 < len__18741__auto___26510)){
args__18748__auto__.push((arguments[i__18742__auto___26511]));

var G__26512 = (i__18742__auto___26511 + (1));
i__18742__auto___26511 = G__26512;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26509))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26509){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26509);
});})(g__23040__auto___26509))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__23040__auto___26509){
return (function (seq26470){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26470));
});})(g__23040__auto___26509))
;


var g__23040__auto___26513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__23040__auto___26513){
return (function cljs$spec$impl$gen$double(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26514 = arguments.length;
var i__18742__auto___26515 = (0);
while(true){
if((i__18742__auto___26515 < len__18741__auto___26514)){
args__18748__auto__.push((arguments[i__18742__auto___26515]));

var G__26516 = (i__18742__auto___26515 + (1));
i__18742__auto___26515 = G__26516;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26513))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26513){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26513);
});})(g__23040__auto___26513))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__23040__auto___26513){
return (function (seq26471){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26471));
});})(g__23040__auto___26513))
;


var g__23040__auto___26517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__23040__auto___26517){
return (function cljs$spec$impl$gen$int(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26518 = arguments.length;
var i__18742__auto___26519 = (0);
while(true){
if((i__18742__auto___26519 < len__18741__auto___26518)){
args__18748__auto__.push((arguments[i__18742__auto___26519]));

var G__26520 = (i__18742__auto___26519 + (1));
i__18742__auto___26519 = G__26520;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26517))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26517){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26517);
});})(g__23040__auto___26517))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__23040__auto___26517){
return (function (seq26472){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26472));
});})(g__23040__auto___26517))
;


var g__23040__auto___26521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__23040__auto___26521){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26522 = arguments.length;
var i__18742__auto___26523 = (0);
while(true){
if((i__18742__auto___26523 < len__18741__auto___26522)){
args__18748__auto__.push((arguments[i__18742__auto___26523]));

var G__26524 = (i__18742__auto___26523 + (1));
i__18742__auto___26523 = G__26524;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26521))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26521){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26521);
});})(g__23040__auto___26521))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__23040__auto___26521){
return (function (seq26473){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26473));
});})(g__23040__auto___26521))
;


var g__23040__auto___26525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__23040__auto___26525){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26526 = arguments.length;
var i__18742__auto___26527 = (0);
while(true){
if((i__18742__auto___26527 < len__18741__auto___26526)){
args__18748__auto__.push((arguments[i__18742__auto___26527]));

var G__26528 = (i__18742__auto___26527 + (1));
i__18742__auto___26527 = G__26528;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26525))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26525){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26525);
});})(g__23040__auto___26525))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__23040__auto___26525){
return (function (seq26474){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26474));
});})(g__23040__auto___26525))
;


var g__23040__auto___26529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__23040__auto___26529){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26530 = arguments.length;
var i__18742__auto___26531 = (0);
while(true){
if((i__18742__auto___26531 < len__18741__auto___26530)){
args__18748__auto__.push((arguments[i__18742__auto___26531]));

var G__26532 = (i__18742__auto___26531 + (1));
i__18742__auto___26531 = G__26532;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26529))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26529){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26529);
});})(g__23040__auto___26529))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__23040__auto___26529){
return (function (seq26475){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26475));
});})(g__23040__auto___26529))
;


var g__23040__auto___26533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__23040__auto___26533){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26534 = arguments.length;
var i__18742__auto___26535 = (0);
while(true){
if((i__18742__auto___26535 < len__18741__auto___26534)){
args__18748__auto__.push((arguments[i__18742__auto___26535]));

var G__26536 = (i__18742__auto___26535 + (1));
i__18742__auto___26535 = G__26536;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26533))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26533){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26533);
});})(g__23040__auto___26533))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__23040__auto___26533){
return (function (seq26476){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26476));
});})(g__23040__auto___26533))
;


var g__23040__auto___26537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__23040__auto___26537){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26538 = arguments.length;
var i__18742__auto___26539 = (0);
while(true){
if((i__18742__auto___26539 < len__18741__auto___26538)){
args__18748__auto__.push((arguments[i__18742__auto___26539]));

var G__26540 = (i__18742__auto___26539 + (1));
i__18742__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26537))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26537){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26537);
});})(g__23040__auto___26537))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__23040__auto___26537){
return (function (seq26477){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26477));
});})(g__23040__auto___26537))
;


var g__23040__auto___26541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__23040__auto___26541){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26542 = arguments.length;
var i__18742__auto___26543 = (0);
while(true){
if((i__18742__auto___26543 < len__18741__auto___26542)){
args__18748__auto__.push((arguments[i__18742__auto___26543]));

var G__26544 = (i__18742__auto___26543 + (1));
i__18742__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26541))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26541){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26541);
});})(g__23040__auto___26541))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__23040__auto___26541){
return (function (seq26478){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26478));
});})(g__23040__auto___26541))
;


var g__23040__auto___26545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__23040__auto___26545){
return (function cljs$spec$impl$gen$string(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26546 = arguments.length;
var i__18742__auto___26547 = (0);
while(true){
if((i__18742__auto___26547 < len__18741__auto___26546)){
args__18748__auto__.push((arguments[i__18742__auto___26547]));

var G__26548 = (i__18742__auto___26547 + (1));
i__18742__auto___26547 = G__26548;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26545))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26545){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26545);
});})(g__23040__auto___26545))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__23040__auto___26545){
return (function (seq26479){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26479));
});})(g__23040__auto___26545))
;


var g__23040__auto___26549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__23040__auto___26549){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26550 = arguments.length;
var i__18742__auto___26551 = (0);
while(true){
if((i__18742__auto___26551 < len__18741__auto___26550)){
args__18748__auto__.push((arguments[i__18742__auto___26551]));

var G__26552 = (i__18742__auto___26551 + (1));
i__18742__auto___26551 = G__26552;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26549))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26549){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26549);
});})(g__23040__auto___26549))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__23040__auto___26549){
return (function (seq26480){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26480));
});})(g__23040__auto___26549))
;


var g__23040__auto___26553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__23040__auto___26553){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26554 = arguments.length;
var i__18742__auto___26555 = (0);
while(true){
if((i__18742__auto___26555 < len__18741__auto___26554)){
args__18748__auto__.push((arguments[i__18742__auto___26555]));

var G__26556 = (i__18742__auto___26555 + (1));
i__18742__auto___26555 = G__26556;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26553))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26553){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26553);
});})(g__23040__auto___26553))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__23040__auto___26553){
return (function (seq26481){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26481));
});})(g__23040__auto___26553))
;


var g__23040__auto___26557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__23040__auto___26557){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26558 = arguments.length;
var i__18742__auto___26559 = (0);
while(true){
if((i__18742__auto___26559 < len__18741__auto___26558)){
args__18748__auto__.push((arguments[i__18742__auto___26559]));

var G__26560 = (i__18742__auto___26559 + (1));
i__18742__auto___26559 = G__26560;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26557))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26557){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26557);
});})(g__23040__auto___26557))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__23040__auto___26557){
return (function (seq26482){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26482));
});})(g__23040__auto___26557))
;


var g__23040__auto___26561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__23040__auto___26561){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26562 = arguments.length;
var i__18742__auto___26563 = (0);
while(true){
if((i__18742__auto___26563 < len__18741__auto___26562)){
args__18748__auto__.push((arguments[i__18742__auto___26563]));

var G__26564 = (i__18742__auto___26563 + (1));
i__18742__auto___26563 = G__26564;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26561))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26561){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26561);
});})(g__23040__auto___26561))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__23040__auto___26561){
return (function (seq26483){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26483));
});})(g__23040__auto___26561))
;


var g__23040__auto___26565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__23040__auto___26565){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26566 = arguments.length;
var i__18742__auto___26567 = (0);
while(true){
if((i__18742__auto___26567 < len__18741__auto___26566)){
args__18748__auto__.push((arguments[i__18742__auto___26567]));

var G__26568 = (i__18742__auto___26567 + (1));
i__18742__auto___26567 = G__26568;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___26565))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___26565){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___26565);
});})(g__23040__auto___26565))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__23040__auto___26565){
return (function (seq26484){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26484));
});})(g__23040__auto___26565))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18748__auto__ = [];
var len__18741__auto___26571 = arguments.length;
var i__18742__auto___26572 = (0);
while(true){
if((i__18742__auto___26572 < len__18741__auto___26571)){
args__18748__auto__.push((arguments[i__18742__auto___26572]));

var G__26573 = (i__18742__auto___26572 + (1));
i__18742__auto___26572 = G__26573;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26569_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26569_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26570){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26570));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26574_SHARP_){
return (new Date(p1__26574_SHARP_));
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