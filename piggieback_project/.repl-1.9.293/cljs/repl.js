// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24382){
var map__24407 = p__24382;
var map__24407__$1 = ((((!((map__24407 == null)))?((((map__24407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24407):map__24407);
var m = map__24407__$1;
var n = cljs.core.get.call(null,map__24407__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24407__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24409_24431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24410_24432 = null;
var count__24411_24433 = (0);
var i__24412_24434 = (0);
while(true){
if((i__24412_24434 < count__24411_24433)){
var f_24435 = cljs.core._nth.call(null,chunk__24410_24432,i__24412_24434);
cljs.core.println.call(null,"  ",f_24435);

var G__24436 = seq__24409_24431;
var G__24437 = chunk__24410_24432;
var G__24438 = count__24411_24433;
var G__24439 = (i__24412_24434 + (1));
seq__24409_24431 = G__24436;
chunk__24410_24432 = G__24437;
count__24411_24433 = G__24438;
i__24412_24434 = G__24439;
continue;
} else {
var temp__4657__auto___24440 = cljs.core.seq.call(null,seq__24409_24431);
if(temp__4657__auto___24440){
var seq__24409_24441__$1 = temp__4657__auto___24440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24409_24441__$1)){
var c__18447__auto___24442 = cljs.core.chunk_first.call(null,seq__24409_24441__$1);
var G__24443 = cljs.core.chunk_rest.call(null,seq__24409_24441__$1);
var G__24444 = c__18447__auto___24442;
var G__24445 = cljs.core.count.call(null,c__18447__auto___24442);
var G__24446 = (0);
seq__24409_24431 = G__24443;
chunk__24410_24432 = G__24444;
count__24411_24433 = G__24445;
i__24412_24434 = G__24446;
continue;
} else {
var f_24447 = cljs.core.first.call(null,seq__24409_24441__$1);
cljs.core.println.call(null,"  ",f_24447);

var G__24448 = cljs.core.next.call(null,seq__24409_24441__$1);
var G__24449 = null;
var G__24450 = (0);
var G__24451 = (0);
seq__24409_24431 = G__24448;
chunk__24410_24432 = G__24449;
count__24411_24433 = G__24450;
i__24412_24434 = G__24451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17633__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17633__auto__)){
return or__17633__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24452);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24452)))?cljs.core.second.call(null,arglists_24452):arglists_24452));
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
var seq__24413_24453 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24414_24454 = null;
var count__24415_24455 = (0);
var i__24416_24456 = (0);
while(true){
if((i__24416_24456 < count__24415_24455)){
var vec__24417_24457 = cljs.core._nth.call(null,chunk__24414_24454,i__24416_24456);
var name_24458 = cljs.core.nth.call(null,vec__24417_24457,(0),null);
var map__24420_24459 = cljs.core.nth.call(null,vec__24417_24457,(1),null);
var map__24420_24460__$1 = ((((!((map__24420_24459 == null)))?((((map__24420_24459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24420_24459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24420_24459):map__24420_24459);
var doc_24461 = cljs.core.get.call(null,map__24420_24460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24462 = cljs.core.get.call(null,map__24420_24460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24458);

cljs.core.println.call(null," ",arglists_24462);

if(cljs.core.truth_(doc_24461)){
cljs.core.println.call(null," ",doc_24461);
} else {
}

var G__24463 = seq__24413_24453;
var G__24464 = chunk__24414_24454;
var G__24465 = count__24415_24455;
var G__24466 = (i__24416_24456 + (1));
seq__24413_24453 = G__24463;
chunk__24414_24454 = G__24464;
count__24415_24455 = G__24465;
i__24416_24456 = G__24466;
continue;
} else {
var temp__4657__auto___24467 = cljs.core.seq.call(null,seq__24413_24453);
if(temp__4657__auto___24467){
var seq__24413_24468__$1 = temp__4657__auto___24467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24413_24468__$1)){
var c__18447__auto___24469 = cljs.core.chunk_first.call(null,seq__24413_24468__$1);
var G__24470 = cljs.core.chunk_rest.call(null,seq__24413_24468__$1);
var G__24471 = c__18447__auto___24469;
var G__24472 = cljs.core.count.call(null,c__18447__auto___24469);
var G__24473 = (0);
seq__24413_24453 = G__24470;
chunk__24414_24454 = G__24471;
count__24415_24455 = G__24472;
i__24416_24456 = G__24473;
continue;
} else {
var vec__24422_24474 = cljs.core.first.call(null,seq__24413_24468__$1);
var name_24475 = cljs.core.nth.call(null,vec__24422_24474,(0),null);
var map__24425_24476 = cljs.core.nth.call(null,vec__24422_24474,(1),null);
var map__24425_24477__$1 = ((((!((map__24425_24476 == null)))?((((map__24425_24476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24425_24476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425_24476):map__24425_24476);
var doc_24478 = cljs.core.get.call(null,map__24425_24477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24479 = cljs.core.get.call(null,map__24425_24477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24475);

cljs.core.println.call(null," ",arglists_24479);

if(cljs.core.truth_(doc_24478)){
cljs.core.println.call(null," ",doc_24478);
} else {
}

var G__24480 = cljs.core.next.call(null,seq__24413_24468__$1);
var G__24481 = null;
var G__24482 = (0);
var G__24483 = (0);
seq__24413_24453 = G__24480;
chunk__24414_24454 = G__24481;
count__24415_24455 = G__24482;
i__24416_24456 = G__24483;
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

var seq__24427 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24428 = null;
var count__24429 = (0);
var i__24430 = (0);
while(true){
if((i__24430 < count__24429)){
var role = cljs.core._nth.call(null,chunk__24428,i__24430);
var temp__4657__auto___24484__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24484__$1)){
var spec_24485 = temp__4657__auto___24484__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_24485));
} else {
}

var G__24486 = seq__24427;
var G__24487 = chunk__24428;
var G__24488 = count__24429;
var G__24489 = (i__24430 + (1));
seq__24427 = G__24486;
chunk__24428 = G__24487;
count__24429 = G__24488;
i__24430 = G__24489;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__24427);
if(temp__4657__auto____$1){
var seq__24427__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24427__$1)){
var c__18447__auto__ = cljs.core.chunk_first.call(null,seq__24427__$1);
var G__24490 = cljs.core.chunk_rest.call(null,seq__24427__$1);
var G__24491 = c__18447__auto__;
var G__24492 = cljs.core.count.call(null,c__18447__auto__);
var G__24493 = (0);
seq__24427 = G__24490;
chunk__24428 = G__24491;
count__24429 = G__24492;
i__24430 = G__24493;
continue;
} else {
var role = cljs.core.first.call(null,seq__24427__$1);
var temp__4657__auto___24494__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24494__$2)){
var spec_24495 = temp__4657__auto___24494__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_24495));
} else {
}

var G__24496 = cljs.core.next.call(null,seq__24427__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24427 = G__24496;
chunk__24428 = G__24497;
count__24429 = G__24498;
i__24430 = G__24499;
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
