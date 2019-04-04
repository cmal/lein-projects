// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25378){
var map__25403 = p__25378;
var map__25403__$1 = ((((!((map__25403 == null)))?((((map__25403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25403):map__25403);
var m = map__25403__$1;
var n = cljs.core.get.call(null,map__25403__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25405_25427 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25406_25428 = null;
var count__25407_25429 = (0);
var i__25408_25430 = (0);
while(true){
if((i__25408_25430 < count__25407_25429)){
var f_25431 = cljs.core._nth.call(null,chunk__25406_25428,i__25408_25430);
cljs.core.println.call(null,"  ",f_25431);

var G__25432 = seq__25405_25427;
var G__25433 = chunk__25406_25428;
var G__25434 = count__25407_25429;
var G__25435 = (i__25408_25430 + (1));
seq__25405_25427 = G__25432;
chunk__25406_25428 = G__25433;
count__25407_25429 = G__25434;
i__25408_25430 = G__25435;
continue;
} else {
var temp__4657__auto___25436 = cljs.core.seq.call(null,seq__25405_25427);
if(temp__4657__auto___25436){
var seq__25405_25437__$1 = temp__4657__auto___25436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25405_25437__$1)){
var c__18447__auto___25438 = cljs.core.chunk_first.call(null,seq__25405_25437__$1);
var G__25439 = cljs.core.chunk_rest.call(null,seq__25405_25437__$1);
var G__25440 = c__18447__auto___25438;
var G__25441 = cljs.core.count.call(null,c__18447__auto___25438);
var G__25442 = (0);
seq__25405_25427 = G__25439;
chunk__25406_25428 = G__25440;
count__25407_25429 = G__25441;
i__25408_25430 = G__25442;
continue;
} else {
var f_25443 = cljs.core.first.call(null,seq__25405_25437__$1);
cljs.core.println.call(null,"  ",f_25443);

var G__25444 = cljs.core.next.call(null,seq__25405_25437__$1);
var G__25445 = null;
var G__25446 = (0);
var G__25447 = (0);
seq__25405_25427 = G__25444;
chunk__25406_25428 = G__25445;
count__25407_25429 = G__25446;
i__25408_25430 = G__25447;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25448 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17633__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17633__auto__)){
return or__17633__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25448);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25448)))?cljs.core.second.call(null,arglists_25448):arglists_25448));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25409_25449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25410_25450 = null;
var count__25411_25451 = (0);
var i__25412_25452 = (0);
while(true){
if((i__25412_25452 < count__25411_25451)){
var vec__25413_25453 = cljs.core._nth.call(null,chunk__25410_25450,i__25412_25452);
var name_25454 = cljs.core.nth.call(null,vec__25413_25453,(0),null);
var map__25416_25455 = cljs.core.nth.call(null,vec__25413_25453,(1),null);
var map__25416_25456__$1 = ((((!((map__25416_25455 == null)))?((((map__25416_25455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25416_25455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25416_25455):map__25416_25455);
var doc_25457 = cljs.core.get.call(null,map__25416_25456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25458 = cljs.core.get.call(null,map__25416_25456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25454);

cljs.core.println.call(null," ",arglists_25458);

if(cljs.core.truth_(doc_25457)){
cljs.core.println.call(null," ",doc_25457);
} else {
}

var G__25459 = seq__25409_25449;
var G__25460 = chunk__25410_25450;
var G__25461 = count__25411_25451;
var G__25462 = (i__25412_25452 + (1));
seq__25409_25449 = G__25459;
chunk__25410_25450 = G__25460;
count__25411_25451 = G__25461;
i__25412_25452 = G__25462;
continue;
} else {
var temp__4657__auto___25463 = cljs.core.seq.call(null,seq__25409_25449);
if(temp__4657__auto___25463){
var seq__25409_25464__$1 = temp__4657__auto___25463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25409_25464__$1)){
var c__18447__auto___25465 = cljs.core.chunk_first.call(null,seq__25409_25464__$1);
var G__25466 = cljs.core.chunk_rest.call(null,seq__25409_25464__$1);
var G__25467 = c__18447__auto___25465;
var G__25468 = cljs.core.count.call(null,c__18447__auto___25465);
var G__25469 = (0);
seq__25409_25449 = G__25466;
chunk__25410_25450 = G__25467;
count__25411_25451 = G__25468;
i__25412_25452 = G__25469;
continue;
} else {
var vec__25418_25470 = cljs.core.first.call(null,seq__25409_25464__$1);
var name_25471 = cljs.core.nth.call(null,vec__25418_25470,(0),null);
var map__25421_25472 = cljs.core.nth.call(null,vec__25418_25470,(1),null);
var map__25421_25473__$1 = ((((!((map__25421_25472 == null)))?((((map__25421_25472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25421_25472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25421_25472):map__25421_25472);
var doc_25474 = cljs.core.get.call(null,map__25421_25473__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25475 = cljs.core.get.call(null,map__25421_25473__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25471);

cljs.core.println.call(null," ",arglists_25475);

if(cljs.core.truth_(doc_25474)){
cljs.core.println.call(null," ",doc_25474);
} else {
}

var G__25476 = cljs.core.next.call(null,seq__25409_25464__$1);
var G__25477 = null;
var G__25478 = (0);
var G__25479 = (0);
seq__25409_25449 = G__25476;
chunk__25410_25450 = G__25477;
count__25411_25451 = G__25478;
i__25412_25452 = G__25479;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__25423 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25424 = null;
var count__25425 = (0);
var i__25426 = (0);
while(true){
if((i__25426 < count__25425)){
var role = cljs.core._nth.call(null,chunk__25424,i__25426);
var temp__4657__auto___25480__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___25480__$1)){
var spec_25481 = temp__4657__auto___25480__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_25481));
} else {
}

var G__25482 = seq__25423;
var G__25483 = chunk__25424;
var G__25484 = count__25425;
var G__25485 = (i__25426 + (1));
seq__25423 = G__25482;
chunk__25424 = G__25483;
count__25425 = G__25484;
i__25426 = G__25485;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__25423);
if(temp__4657__auto____$1){
var seq__25423__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25423__$1)){
var c__18447__auto__ = cljs.core.chunk_first.call(null,seq__25423__$1);
var G__25486 = cljs.core.chunk_rest.call(null,seq__25423__$1);
var G__25487 = c__18447__auto__;
var G__25488 = cljs.core.count.call(null,c__18447__auto__);
var G__25489 = (0);
seq__25423 = G__25486;
chunk__25424 = G__25487;
count__25425 = G__25488;
i__25426 = G__25489;
continue;
} else {
var role = cljs.core.first.call(null,seq__25423__$1);
var temp__4657__auto___25490__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___25490__$2)){
var spec_25491 = temp__4657__auto___25490__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_25491));
} else {
}

var G__25492 = cljs.core.next.call(null,seq__25423__$1);
var G__25493 = null;
var G__25494 = (0);
var G__25495 = (0);
seq__25423 = G__25492;
chunk__25424 = G__25493;
count__25425 = G__25494;
i__25426 = G__25495;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map