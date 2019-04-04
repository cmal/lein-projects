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
var len__18741__auto___23056 = arguments.length;
var i__18742__auto___23057 = (0);
while(true){
if((i__18742__auto___23057 < len__18741__auto___23056)){
args__18748__auto__.push((arguments[i__18742__auto___23057]));

var G__23058 = (i__18742__auto___23057 + (1));
i__18742__auto___23057 = G__23058;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq23055){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23055));
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
var len__18741__auto___23060 = arguments.length;
var i__18742__auto___23061 = (0);
while(true){
if((i__18742__auto___23061 < len__18741__auto___23060)){
args__18748__auto__.push((arguments[i__18742__auto___23061]));

var G__23062 = (i__18742__auto___23061 + (1));
i__18742__auto___23061 = G__23062;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq23059){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23059));
});

var g_QMARK__23063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_23064 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23063){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23063))
,null));
var mkg_23065 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23063,g_23064){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23063,g_23064))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__23063,g_23064,mkg_23065){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23063).call(null,x);
});})(g_QMARK__23063,g_23064,mkg_23065))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__23063,g_23064,mkg_23065){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_23065).call(null,gfn);
});})(g_QMARK__23063,g_23064,mkg_23065))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__23063,g_23064,mkg_23065){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_23064).call(null,generator);
});})(g_QMARK__23063,g_23064,mkg_23065))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__23027__auto___23084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__23027__auto___23084){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23085 = arguments.length;
var i__18742__auto___23086 = (0);
while(true){
if((i__18742__auto___23086 < len__18741__auto___23085)){
args__18748__auto__.push((arguments[i__18742__auto___23086]));

var G__23087 = (i__18742__auto___23086 + (1));
i__18742__auto___23086 = G__23087;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23084))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23084),args);
});})(g__23027__auto___23084))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__23027__auto___23084){
return (function (seq23066){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23066));
});})(g__23027__auto___23084))
;


var g__23027__auto___23088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__23027__auto___23088){
return (function cljs$spec$impl$gen$list(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23089 = arguments.length;
var i__18742__auto___23090 = (0);
while(true){
if((i__18742__auto___23090 < len__18741__auto___23089)){
args__18748__auto__.push((arguments[i__18742__auto___23090]));

var G__23091 = (i__18742__auto___23090 + (1));
i__18742__auto___23090 = G__23091;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23088))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23088),args);
});})(g__23027__auto___23088))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__23027__auto___23088){
return (function (seq23067){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23067));
});})(g__23027__auto___23088))
;


var g__23027__auto___23092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__23027__auto___23092){
return (function cljs$spec$impl$gen$map(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23093 = arguments.length;
var i__18742__auto___23094 = (0);
while(true){
if((i__18742__auto___23094 < len__18741__auto___23093)){
args__18748__auto__.push((arguments[i__18742__auto___23094]));

var G__23095 = (i__18742__auto___23094 + (1));
i__18742__auto___23094 = G__23095;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23092))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23092){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23092),args);
});})(g__23027__auto___23092))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__23027__auto___23092){
return (function (seq23068){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23068));
});})(g__23027__auto___23092))
;


var g__23027__auto___23096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__23027__auto___23096){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23097 = arguments.length;
var i__18742__auto___23098 = (0);
while(true){
if((i__18742__auto___23098 < len__18741__auto___23097)){
args__18748__auto__.push((arguments[i__18742__auto___23098]));

var G__23099 = (i__18742__auto___23098 + (1));
i__18742__auto___23098 = G__23099;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23096))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23096),args);
});})(g__23027__auto___23096))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__23027__auto___23096){
return (function (seq23069){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23069));
});})(g__23027__auto___23096))
;


var g__23027__auto___23100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__23027__auto___23100){
return (function cljs$spec$impl$gen$set(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23101 = arguments.length;
var i__18742__auto___23102 = (0);
while(true){
if((i__18742__auto___23102 < len__18741__auto___23101)){
args__18748__auto__.push((arguments[i__18742__auto___23102]));

var G__23103 = (i__18742__auto___23102 + (1));
i__18742__auto___23102 = G__23103;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23100))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23100),args);
});})(g__23027__auto___23100))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__23027__auto___23100){
return (function (seq23070){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23070));
});})(g__23027__auto___23100))
;


var g__23027__auto___23104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__23027__auto___23104){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23105 = arguments.length;
var i__18742__auto___23106 = (0);
while(true){
if((i__18742__auto___23106 < len__18741__auto___23105)){
args__18748__auto__.push((arguments[i__18742__auto___23106]));

var G__23107 = (i__18742__auto___23106 + (1));
i__18742__auto___23106 = G__23107;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23104))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23104){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23104),args);
});})(g__23027__auto___23104))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__23027__auto___23104){
return (function (seq23071){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23071));
});})(g__23027__auto___23104))
;


var g__23027__auto___23108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__23027__auto___23108){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23109 = arguments.length;
var i__18742__auto___23110 = (0);
while(true){
if((i__18742__auto___23110 < len__18741__auto___23109)){
args__18748__auto__.push((arguments[i__18742__auto___23110]));

var G__23111 = (i__18742__auto___23110 + (1));
i__18742__auto___23110 = G__23111;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23108))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23108){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23108),args);
});})(g__23027__auto___23108))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__23027__auto___23108){
return (function (seq23072){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23072));
});})(g__23027__auto___23108))
;


var g__23027__auto___23112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__23027__auto___23112){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23113 = arguments.length;
var i__18742__auto___23114 = (0);
while(true){
if((i__18742__auto___23114 < len__18741__auto___23113)){
args__18748__auto__.push((arguments[i__18742__auto___23114]));

var G__23115 = (i__18742__auto___23114 + (1));
i__18742__auto___23114 = G__23115;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23112))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23112),args);
});})(g__23027__auto___23112))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__23027__auto___23112){
return (function (seq23073){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23073));
});})(g__23027__auto___23112))
;


var g__23027__auto___23116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__23027__auto___23116){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23117 = arguments.length;
var i__18742__auto___23118 = (0);
while(true){
if((i__18742__auto___23118 < len__18741__auto___23117)){
args__18748__auto__.push((arguments[i__18742__auto___23118]));

var G__23119 = (i__18742__auto___23118 + (1));
i__18742__auto___23118 = G__23119;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23116))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23116),args);
});})(g__23027__auto___23116))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__23027__auto___23116){
return (function (seq23074){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23074));
});})(g__23027__auto___23116))
;


var g__23027__auto___23120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__23027__auto___23120){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23121 = arguments.length;
var i__18742__auto___23122 = (0);
while(true){
if((i__18742__auto___23122 < len__18741__auto___23121)){
args__18748__auto__.push((arguments[i__18742__auto___23122]));

var G__23123 = (i__18742__auto___23122 + (1));
i__18742__auto___23122 = G__23123;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23120))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23120),args);
});})(g__23027__auto___23120))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__23027__auto___23120){
return (function (seq23075){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23075));
});})(g__23027__auto___23120))
;


var g__23027__auto___23124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__23027__auto___23124){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23125 = arguments.length;
var i__18742__auto___23126 = (0);
while(true){
if((i__18742__auto___23126 < len__18741__auto___23125)){
args__18748__auto__.push((arguments[i__18742__auto___23126]));

var G__23127 = (i__18742__auto___23126 + (1));
i__18742__auto___23126 = G__23127;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23124))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23124),args);
});})(g__23027__auto___23124))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__23027__auto___23124){
return (function (seq23076){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23076));
});})(g__23027__auto___23124))
;


var g__23027__auto___23128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__23027__auto___23128){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23129 = arguments.length;
var i__18742__auto___23130 = (0);
while(true){
if((i__18742__auto___23130 < len__18741__auto___23129)){
args__18748__auto__.push((arguments[i__18742__auto___23130]));

var G__23131 = (i__18742__auto___23130 + (1));
i__18742__auto___23130 = G__23131;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23128))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23128),args);
});})(g__23027__auto___23128))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__23027__auto___23128){
return (function (seq23077){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23077));
});})(g__23027__auto___23128))
;


var g__23027__auto___23132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__23027__auto___23132){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23133 = arguments.length;
var i__18742__auto___23134 = (0);
while(true){
if((i__18742__auto___23134 < len__18741__auto___23133)){
args__18748__auto__.push((arguments[i__18742__auto___23134]));

var G__23135 = (i__18742__auto___23134 + (1));
i__18742__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23132))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23132),args);
});})(g__23027__auto___23132))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__23027__auto___23132){
return (function (seq23078){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23078));
});})(g__23027__auto___23132))
;


var g__23027__auto___23136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__23027__auto___23136){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23137 = arguments.length;
var i__18742__auto___23138 = (0);
while(true){
if((i__18742__auto___23138 < len__18741__auto___23137)){
args__18748__auto__.push((arguments[i__18742__auto___23138]));

var G__23139 = (i__18742__auto___23138 + (1));
i__18742__auto___23138 = G__23139;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23136))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23136){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23136),args);
});})(g__23027__auto___23136))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__23027__auto___23136){
return (function (seq23079){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23079));
});})(g__23027__auto___23136))
;


var g__23027__auto___23140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__23027__auto___23140){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23141 = arguments.length;
var i__18742__auto___23142 = (0);
while(true){
if((i__18742__auto___23142 < len__18741__auto___23141)){
args__18748__auto__.push((arguments[i__18742__auto___23142]));

var G__23143 = (i__18742__auto___23142 + (1));
i__18742__auto___23142 = G__23143;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23140))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23140){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23140),args);
});})(g__23027__auto___23140))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__23027__auto___23140){
return (function (seq23080){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23080));
});})(g__23027__auto___23140))
;


var g__23027__auto___23144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__23027__auto___23144){
return (function cljs$spec$impl$gen$return(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23145 = arguments.length;
var i__18742__auto___23146 = (0);
while(true){
if((i__18742__auto___23146 < len__18741__auto___23145)){
args__18748__auto__.push((arguments[i__18742__auto___23146]));

var G__23147 = (i__18742__auto___23146 + (1));
i__18742__auto___23146 = G__23147;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23144))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23144){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23144),args);
});})(g__23027__auto___23144))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__23027__auto___23144){
return (function (seq23081){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23081));
});})(g__23027__auto___23144))
;


var g__23027__auto___23148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__23027__auto___23148){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23149 = arguments.length;
var i__18742__auto___23150 = (0);
while(true){
if((i__18742__auto___23150 < len__18741__auto___23149)){
args__18748__auto__.push((arguments[i__18742__auto___23150]));

var G__23151 = (i__18742__auto___23150 + (1));
i__18742__auto___23150 = G__23151;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23148))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23148){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23148),args);
});})(g__23027__auto___23148))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__23027__auto___23148){
return (function (seq23082){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23082));
});})(g__23027__auto___23148))
;


var g__23027__auto___23152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__23027__auto___23152){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23153 = arguments.length;
var i__18742__auto___23154 = (0);
while(true){
if((i__18742__auto___23154 < len__18741__auto___23153)){
args__18748__auto__.push((arguments[i__18742__auto___23154]));

var G__23155 = (i__18742__auto___23154 + (1));
i__18742__auto___23154 = G__23155;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23027__auto___23152))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23027__auto___23152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23027__auto___23152),args);
});})(g__23027__auto___23152))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__23027__auto___23152){
return (function (seq23083){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23083));
});})(g__23027__auto___23152))
;

var g__23040__auto___23177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__23040__auto___23177){
return (function cljs$spec$impl$gen$any(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23178 = arguments.length;
var i__18742__auto___23179 = (0);
while(true){
if((i__18742__auto___23179 < len__18741__auto___23178)){
args__18748__auto__.push((arguments[i__18742__auto___23179]));

var G__23180 = (i__18742__auto___23179 + (1));
i__18742__auto___23179 = G__23180;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23177))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23177){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23177);
});})(g__23040__auto___23177))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__23040__auto___23177){
return (function (seq23156){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23156));
});})(g__23040__auto___23177))
;


var g__23040__auto___23181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__23040__auto___23181){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23182 = arguments.length;
var i__18742__auto___23183 = (0);
while(true){
if((i__18742__auto___23183 < len__18741__auto___23182)){
args__18748__auto__.push((arguments[i__18742__auto___23183]));

var G__23184 = (i__18742__auto___23183 + (1));
i__18742__auto___23183 = G__23184;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23181))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23181){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23181);
});})(g__23040__auto___23181))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__23040__auto___23181){
return (function (seq23157){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23157));
});})(g__23040__auto___23181))
;


var g__23040__auto___23185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__23040__auto___23185){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23186 = arguments.length;
var i__18742__auto___23187 = (0);
while(true){
if((i__18742__auto___23187 < len__18741__auto___23186)){
args__18748__auto__.push((arguments[i__18742__auto___23187]));

var G__23188 = (i__18742__auto___23187 + (1));
i__18742__auto___23187 = G__23188;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23185))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23185){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23185);
});})(g__23040__auto___23185))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__23040__auto___23185){
return (function (seq23158){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23158));
});})(g__23040__auto___23185))
;


var g__23040__auto___23189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__23040__auto___23189){
return (function cljs$spec$impl$gen$char(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23190 = arguments.length;
var i__18742__auto___23191 = (0);
while(true){
if((i__18742__auto___23191 < len__18741__auto___23190)){
args__18748__auto__.push((arguments[i__18742__auto___23191]));

var G__23192 = (i__18742__auto___23191 + (1));
i__18742__auto___23191 = G__23192;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23189))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23189){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23189);
});})(g__23040__auto___23189))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__23040__auto___23189){
return (function (seq23159){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23159));
});})(g__23040__auto___23189))
;


var g__23040__auto___23193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__23040__auto___23193){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23194 = arguments.length;
var i__18742__auto___23195 = (0);
while(true){
if((i__18742__auto___23195 < len__18741__auto___23194)){
args__18748__auto__.push((arguments[i__18742__auto___23195]));

var G__23196 = (i__18742__auto___23195 + (1));
i__18742__auto___23195 = G__23196;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23193))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23193){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23193);
});})(g__23040__auto___23193))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__23040__auto___23193){
return (function (seq23160){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23160));
});})(g__23040__auto___23193))
;


var g__23040__auto___23197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__23040__auto___23197){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23198 = arguments.length;
var i__18742__auto___23199 = (0);
while(true){
if((i__18742__auto___23199 < len__18741__auto___23198)){
args__18748__auto__.push((arguments[i__18742__auto___23199]));

var G__23200 = (i__18742__auto___23199 + (1));
i__18742__auto___23199 = G__23200;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23197))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23197){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23197);
});})(g__23040__auto___23197))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__23040__auto___23197){
return (function (seq23161){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23161));
});})(g__23040__auto___23197))
;


var g__23040__auto___23201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__23040__auto___23201){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23202 = arguments.length;
var i__18742__auto___23203 = (0);
while(true){
if((i__18742__auto___23203 < len__18741__auto___23202)){
args__18748__auto__.push((arguments[i__18742__auto___23203]));

var G__23204 = (i__18742__auto___23203 + (1));
i__18742__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23201))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23201){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23201);
});})(g__23040__auto___23201))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__23040__auto___23201){
return (function (seq23162){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23162));
});})(g__23040__auto___23201))
;


var g__23040__auto___23205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__23040__auto___23205){
return (function cljs$spec$impl$gen$double(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23206 = arguments.length;
var i__18742__auto___23207 = (0);
while(true){
if((i__18742__auto___23207 < len__18741__auto___23206)){
args__18748__auto__.push((arguments[i__18742__auto___23207]));

var G__23208 = (i__18742__auto___23207 + (1));
i__18742__auto___23207 = G__23208;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23205))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23205){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23205);
});})(g__23040__auto___23205))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__23040__auto___23205){
return (function (seq23163){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23163));
});})(g__23040__auto___23205))
;


var g__23040__auto___23209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__23040__auto___23209){
return (function cljs$spec$impl$gen$int(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23210 = arguments.length;
var i__18742__auto___23211 = (0);
while(true){
if((i__18742__auto___23211 < len__18741__auto___23210)){
args__18748__auto__.push((arguments[i__18742__auto___23211]));

var G__23212 = (i__18742__auto___23211 + (1));
i__18742__auto___23211 = G__23212;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23209))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23209){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23209);
});})(g__23040__auto___23209))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__23040__auto___23209){
return (function (seq23164){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23164));
});})(g__23040__auto___23209))
;


var g__23040__auto___23213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__23040__auto___23213){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23214 = arguments.length;
var i__18742__auto___23215 = (0);
while(true){
if((i__18742__auto___23215 < len__18741__auto___23214)){
args__18748__auto__.push((arguments[i__18742__auto___23215]));

var G__23216 = (i__18742__auto___23215 + (1));
i__18742__auto___23215 = G__23216;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23213))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23213){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23213);
});})(g__23040__auto___23213))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__23040__auto___23213){
return (function (seq23165){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23165));
});})(g__23040__auto___23213))
;


var g__23040__auto___23217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__23040__auto___23217){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23218 = arguments.length;
var i__18742__auto___23219 = (0);
while(true){
if((i__18742__auto___23219 < len__18741__auto___23218)){
args__18748__auto__.push((arguments[i__18742__auto___23219]));

var G__23220 = (i__18742__auto___23219 + (1));
i__18742__auto___23219 = G__23220;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23217))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23217){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23217);
});})(g__23040__auto___23217))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__23040__auto___23217){
return (function (seq23166){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23166));
});})(g__23040__auto___23217))
;


var g__23040__auto___23221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__23040__auto___23221){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23222 = arguments.length;
var i__18742__auto___23223 = (0);
while(true){
if((i__18742__auto___23223 < len__18741__auto___23222)){
args__18748__auto__.push((arguments[i__18742__auto___23223]));

var G__23224 = (i__18742__auto___23223 + (1));
i__18742__auto___23223 = G__23224;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23221))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23221){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23221);
});})(g__23040__auto___23221))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__23040__auto___23221){
return (function (seq23167){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23167));
});})(g__23040__auto___23221))
;


var g__23040__auto___23225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__23040__auto___23225){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23226 = arguments.length;
var i__18742__auto___23227 = (0);
while(true){
if((i__18742__auto___23227 < len__18741__auto___23226)){
args__18748__auto__.push((arguments[i__18742__auto___23227]));

var G__23228 = (i__18742__auto___23227 + (1));
i__18742__auto___23227 = G__23228;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23225))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23225){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23225);
});})(g__23040__auto___23225))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__23040__auto___23225){
return (function (seq23168){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23168));
});})(g__23040__auto___23225))
;


var g__23040__auto___23229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__23040__auto___23229){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23230 = arguments.length;
var i__18742__auto___23231 = (0);
while(true){
if((i__18742__auto___23231 < len__18741__auto___23230)){
args__18748__auto__.push((arguments[i__18742__auto___23231]));

var G__23232 = (i__18742__auto___23231 + (1));
i__18742__auto___23231 = G__23232;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23229))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23229){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23229);
});})(g__23040__auto___23229))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__23040__auto___23229){
return (function (seq23169){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23169));
});})(g__23040__auto___23229))
;


var g__23040__auto___23233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__23040__auto___23233){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23234 = arguments.length;
var i__18742__auto___23235 = (0);
while(true){
if((i__18742__auto___23235 < len__18741__auto___23234)){
args__18748__auto__.push((arguments[i__18742__auto___23235]));

var G__23236 = (i__18742__auto___23235 + (1));
i__18742__auto___23235 = G__23236;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23233))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23233){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23233);
});})(g__23040__auto___23233))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__23040__auto___23233){
return (function (seq23170){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23170));
});})(g__23040__auto___23233))
;


var g__23040__auto___23237 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__23040__auto___23237){
return (function cljs$spec$impl$gen$string(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23238 = arguments.length;
var i__18742__auto___23239 = (0);
while(true){
if((i__18742__auto___23239 < len__18741__auto___23238)){
args__18748__auto__.push((arguments[i__18742__auto___23239]));

var G__23240 = (i__18742__auto___23239 + (1));
i__18742__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23237))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23237){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23237);
});})(g__23040__auto___23237))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__23040__auto___23237){
return (function (seq23171){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23171));
});})(g__23040__auto___23237))
;


var g__23040__auto___23241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__23040__auto___23241){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23242 = arguments.length;
var i__18742__auto___23243 = (0);
while(true){
if((i__18742__auto___23243 < len__18741__auto___23242)){
args__18748__auto__.push((arguments[i__18742__auto___23243]));

var G__23244 = (i__18742__auto___23243 + (1));
i__18742__auto___23243 = G__23244;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23241))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23241){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23241);
});})(g__23040__auto___23241))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__23040__auto___23241){
return (function (seq23172){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23172));
});})(g__23040__auto___23241))
;


var g__23040__auto___23245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__23040__auto___23245){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23246 = arguments.length;
var i__18742__auto___23247 = (0);
while(true){
if((i__18742__auto___23247 < len__18741__auto___23246)){
args__18748__auto__.push((arguments[i__18742__auto___23247]));

var G__23248 = (i__18742__auto___23247 + (1));
i__18742__auto___23247 = G__23248;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23245))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23245){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23245);
});})(g__23040__auto___23245))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__23040__auto___23245){
return (function (seq23173){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23173));
});})(g__23040__auto___23245))
;


var g__23040__auto___23249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__23040__auto___23249){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23250 = arguments.length;
var i__18742__auto___23251 = (0);
while(true){
if((i__18742__auto___23251 < len__18741__auto___23250)){
args__18748__auto__.push((arguments[i__18742__auto___23251]));

var G__23252 = (i__18742__auto___23251 + (1));
i__18742__auto___23251 = G__23252;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23249))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23249){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23249);
});})(g__23040__auto___23249))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__23040__auto___23249){
return (function (seq23174){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23174));
});})(g__23040__auto___23249))
;


var g__23040__auto___23253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__23040__auto___23253){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23254 = arguments.length;
var i__18742__auto___23255 = (0);
while(true){
if((i__18742__auto___23255 < len__18741__auto___23254)){
args__18748__auto__.push((arguments[i__18742__auto___23255]));

var G__23256 = (i__18742__auto___23255 + (1));
i__18742__auto___23255 = G__23256;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23253))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23253){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23253);
});})(g__23040__auto___23253))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__23040__auto___23253){
return (function (seq23175){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23175));
});})(g__23040__auto___23253))
;


var g__23040__auto___23257 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__23040__auto___23257){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23258 = arguments.length;
var i__18742__auto___23259 = (0);
while(true){
if((i__18742__auto___23259 < len__18741__auto___23258)){
args__18748__auto__.push((arguments[i__18742__auto___23259]));

var G__23260 = (i__18742__auto___23259 + (1));
i__18742__auto___23259 = G__23260;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});})(g__23040__auto___23257))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23040__auto___23257){
return (function (args){
return cljs.core.deref.call(null,g__23040__auto___23257);
});})(g__23040__auto___23257))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__23040__auto___23257){
return (function (seq23176){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23176));
});})(g__23040__auto___23257))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18748__auto__ = [];
var len__18741__auto___23263 = arguments.length;
var i__18742__auto___23264 = (0);
while(true){
if((i__18742__auto___23264 < len__18741__auto___23263)){
args__18748__auto__.push((arguments[i__18742__auto___23264]));

var G__23265 = (i__18742__auto___23264 + (1));
i__18742__auto___23264 = G__23265;
continue;
} else {
}
break;
}

var argseq__18749__auto__ = ((((0) < args__18748__auto__.length))?(new cljs.core.IndexedSeq(args__18748__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18749__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__23261_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23261_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq23262){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23262));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__23266_SHARP_){
return (new Date(p1__23266_SHARP_));
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
