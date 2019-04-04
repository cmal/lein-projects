// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27414){
var map__27439 = p__27414;
var map__27439__$1 = ((((!((map__27439 == null)))?((((map__27439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27439):map__27439);
var m = map__27439__$1;
var n = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27441_27463 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27442_27464 = null;
var count__27443_27465 = (0);
var i__27444_27466 = (0);
while(true){
if((i__27444_27466 < count__27443_27465)){
var f_27467 = cljs.core._nth.call(null,chunk__27442_27464,i__27444_27466);
cljs.core.println.call(null,"  ",f_27467);

var G__27468 = seq__27441_27463;
var G__27469 = chunk__27442_27464;
var G__27470 = count__27443_27465;
var G__27471 = (i__27444_27466 + (1));
seq__27441_27463 = G__27468;
chunk__27442_27464 = G__27469;
count__27443_27465 = G__27470;
i__27444_27466 = G__27471;
continue;
} else {
var temp__4657__auto___27472 = cljs.core.seq.call(null,seq__27441_27463);
if(temp__4657__auto___27472){
var seq__27441_27473__$1 = temp__4657__auto___27472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27441_27473__$1)){
var c__25689__auto___27474 = cljs.core.chunk_first.call(null,seq__27441_27473__$1);
var G__27475 = cljs.core.chunk_rest.call(null,seq__27441_27473__$1);
var G__27476 = c__25689__auto___27474;
var G__27477 = cljs.core.count.call(null,c__25689__auto___27474);
var G__27478 = (0);
seq__27441_27463 = G__27475;
chunk__27442_27464 = G__27476;
count__27443_27465 = G__27477;
i__27444_27466 = G__27478;
continue;
} else {
var f_27479 = cljs.core.first.call(null,seq__27441_27473__$1);
cljs.core.println.call(null,"  ",f_27479);

var G__27480 = cljs.core.next.call(null,seq__27441_27473__$1);
var G__27481 = null;
var G__27482 = (0);
var G__27483 = (0);
seq__27441_27463 = G__27480;
chunk__27442_27464 = G__27481;
count__27443_27465 = G__27482;
i__27444_27466 = G__27483;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27484 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24875__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27484);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27484)))?cljs.core.second.call(null,arglists_27484):arglists_27484));
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
var seq__27445_27485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27446_27486 = null;
var count__27447_27487 = (0);
var i__27448_27488 = (0);
while(true){
if((i__27448_27488 < count__27447_27487)){
var vec__27449_27489 = cljs.core._nth.call(null,chunk__27446_27486,i__27448_27488);
var name_27490 = cljs.core.nth.call(null,vec__27449_27489,(0),null);
var map__27452_27491 = cljs.core.nth.call(null,vec__27449_27489,(1),null);
var map__27452_27492__$1 = ((((!((map__27452_27491 == null)))?((((map__27452_27491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27452_27491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27452_27491):map__27452_27491);
var doc_27493 = cljs.core.get.call(null,map__27452_27492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27494 = cljs.core.get.call(null,map__27452_27492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27490);

cljs.core.println.call(null," ",arglists_27494);

if(cljs.core.truth_(doc_27493)){
cljs.core.println.call(null," ",doc_27493);
} else {
}

var G__27495 = seq__27445_27485;
var G__27496 = chunk__27446_27486;
var G__27497 = count__27447_27487;
var G__27498 = (i__27448_27488 + (1));
seq__27445_27485 = G__27495;
chunk__27446_27486 = G__27496;
count__27447_27487 = G__27497;
i__27448_27488 = G__27498;
continue;
} else {
var temp__4657__auto___27499 = cljs.core.seq.call(null,seq__27445_27485);
if(temp__4657__auto___27499){
var seq__27445_27500__$1 = temp__4657__auto___27499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27445_27500__$1)){
var c__25689__auto___27501 = cljs.core.chunk_first.call(null,seq__27445_27500__$1);
var G__27502 = cljs.core.chunk_rest.call(null,seq__27445_27500__$1);
var G__27503 = c__25689__auto___27501;
var G__27504 = cljs.core.count.call(null,c__25689__auto___27501);
var G__27505 = (0);
seq__27445_27485 = G__27502;
chunk__27446_27486 = G__27503;
count__27447_27487 = G__27504;
i__27448_27488 = G__27505;
continue;
} else {
var vec__27454_27506 = cljs.core.first.call(null,seq__27445_27500__$1);
var name_27507 = cljs.core.nth.call(null,vec__27454_27506,(0),null);
var map__27457_27508 = cljs.core.nth.call(null,vec__27454_27506,(1),null);
var map__27457_27509__$1 = ((((!((map__27457_27508 == null)))?((((map__27457_27508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27457_27508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457_27508):map__27457_27508);
var doc_27510 = cljs.core.get.call(null,map__27457_27509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27511 = cljs.core.get.call(null,map__27457_27509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27507);

cljs.core.println.call(null," ",arglists_27511);

if(cljs.core.truth_(doc_27510)){
cljs.core.println.call(null," ",doc_27510);
} else {
}

var G__27512 = cljs.core.next.call(null,seq__27445_27500__$1);
var G__27513 = null;
var G__27514 = (0);
var G__27515 = (0);
seq__27445_27485 = G__27512;
chunk__27446_27486 = G__27513;
count__27447_27487 = G__27514;
i__27448_27488 = G__27515;
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

var seq__27459 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27460 = null;
var count__27461 = (0);
var i__27462 = (0);
while(true){
if((i__27462 < count__27461)){
var role = cljs.core._nth.call(null,chunk__27460,i__27462);
var temp__4657__auto___27516__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27516__$1)){
var spec_27517 = temp__4657__auto___27516__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27517));
} else {
}

var G__27518 = seq__27459;
var G__27519 = chunk__27460;
var G__27520 = count__27461;
var G__27521 = (i__27462 + (1));
seq__27459 = G__27518;
chunk__27460 = G__27519;
count__27461 = G__27520;
i__27462 = G__27521;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27459);
if(temp__4657__auto____$1){
var seq__27459__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27459__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__27459__$1);
var G__27522 = cljs.core.chunk_rest.call(null,seq__27459__$1);
var G__27523 = c__25689__auto__;
var G__27524 = cljs.core.count.call(null,c__25689__auto__);
var G__27525 = (0);
seq__27459 = G__27522;
chunk__27460 = G__27523;
count__27461 = G__27524;
i__27462 = G__27525;
continue;
} else {
var role = cljs.core.first.call(null,seq__27459__$1);
var temp__4657__auto___27526__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27526__$2)){
var spec_27527 = temp__4657__auto___27526__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27527));
} else {
}

var G__27528 = cljs.core.next.call(null,seq__27459__$1);
var G__27529 = null;
var G__27530 = (0);
var G__27531 = (0);
seq__27459 = G__27528;
chunk__27460 = G__27529;
count__27461 = G__27530;
i__27462 = G__27531;
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

//# sourceMappingURL=repl.js.map?rel=1476966065094