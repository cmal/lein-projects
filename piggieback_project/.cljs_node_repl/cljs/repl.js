// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19694){
var map__19719 = p__19694;
var map__19719__$1 = ((((!((map__19719 == null)))?((((map__19719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19719):map__19719);
var m = map__19719__$1;
var n = cljs.core.get.call(null,map__19719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19721_19743 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19722_19744 = null;
var count__19723_19745 = (0);
var i__19724_19746 = (0);
while(true){
if((i__19724_19746 < count__19723_19745)){
var f_19747 = cljs.core._nth.call(null,chunk__19722_19744,i__19724_19746);
cljs.core.println.call(null,"  ",f_19747);

var G__19748 = seq__19721_19743;
var G__19749 = chunk__19722_19744;
var G__19750 = count__19723_19745;
var G__19751 = (i__19724_19746 + (1));
seq__19721_19743 = G__19748;
chunk__19722_19744 = G__19749;
count__19723_19745 = G__19750;
i__19724_19746 = G__19751;
continue;
} else {
var temp__4657__auto___19752 = cljs.core.seq.call(null,seq__19721_19743);
if(temp__4657__auto___19752){
var seq__19721_19753__$1 = temp__4657__auto___19752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19721_19753__$1)){
var c__18294__auto___19754 = cljs.core.chunk_first.call(null,seq__19721_19753__$1);
var G__19755 = cljs.core.chunk_rest.call(null,seq__19721_19753__$1);
var G__19756 = c__18294__auto___19754;
var G__19757 = cljs.core.count.call(null,c__18294__auto___19754);
var G__19758 = (0);
seq__19721_19743 = G__19755;
chunk__19722_19744 = G__19756;
count__19723_19745 = G__19757;
i__19724_19746 = G__19758;
continue;
} else {
var f_19759 = cljs.core.first.call(null,seq__19721_19753__$1);
cljs.core.println.call(null,"  ",f_19759);

var G__19760 = cljs.core.next.call(null,seq__19721_19753__$1);
var G__19761 = null;
var G__19762 = (0);
var G__19763 = (0);
seq__19721_19743 = G__19760;
chunk__19722_19744 = G__19761;
count__19723_19745 = G__19762;
i__19724_19746 = G__19763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17480__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17480__auto__)){
return or__17480__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19764);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19764)))?cljs.core.second.call(null,arglists_19764):arglists_19764));
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
var seq__19725_19765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19726_19766 = null;
var count__19727_19767 = (0);
var i__19728_19768 = (0);
while(true){
if((i__19728_19768 < count__19727_19767)){
var vec__19729_19769 = cljs.core._nth.call(null,chunk__19726_19766,i__19728_19768);
var name_19770 = cljs.core.nth.call(null,vec__19729_19769,(0),null);
var map__19732_19771 = cljs.core.nth.call(null,vec__19729_19769,(1),null);
var map__19732_19772__$1 = ((((!((map__19732_19771 == null)))?((((map__19732_19771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19732_19771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19732_19771):map__19732_19771);
var doc_19773 = cljs.core.get.call(null,map__19732_19772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19774 = cljs.core.get.call(null,map__19732_19772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19770);

cljs.core.println.call(null," ",arglists_19774);

if(cljs.core.truth_(doc_19773)){
cljs.core.println.call(null," ",doc_19773);
} else {
}

var G__19775 = seq__19725_19765;
var G__19776 = chunk__19726_19766;
var G__19777 = count__19727_19767;
var G__19778 = (i__19728_19768 + (1));
seq__19725_19765 = G__19775;
chunk__19726_19766 = G__19776;
count__19727_19767 = G__19777;
i__19728_19768 = G__19778;
continue;
} else {
var temp__4657__auto___19779 = cljs.core.seq.call(null,seq__19725_19765);
if(temp__4657__auto___19779){
var seq__19725_19780__$1 = temp__4657__auto___19779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19725_19780__$1)){
var c__18294__auto___19781 = cljs.core.chunk_first.call(null,seq__19725_19780__$1);
var G__19782 = cljs.core.chunk_rest.call(null,seq__19725_19780__$1);
var G__19783 = c__18294__auto___19781;
var G__19784 = cljs.core.count.call(null,c__18294__auto___19781);
var G__19785 = (0);
seq__19725_19765 = G__19782;
chunk__19726_19766 = G__19783;
count__19727_19767 = G__19784;
i__19728_19768 = G__19785;
continue;
} else {
var vec__19734_19786 = cljs.core.first.call(null,seq__19725_19780__$1);
var name_19787 = cljs.core.nth.call(null,vec__19734_19786,(0),null);
var map__19737_19788 = cljs.core.nth.call(null,vec__19734_19786,(1),null);
var map__19737_19789__$1 = ((((!((map__19737_19788 == null)))?((((map__19737_19788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19737_19788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19737_19788):map__19737_19788);
var doc_19790 = cljs.core.get.call(null,map__19737_19789__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19791 = cljs.core.get.call(null,map__19737_19789__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19787);

cljs.core.println.call(null," ",arglists_19791);

if(cljs.core.truth_(doc_19790)){
cljs.core.println.call(null," ",doc_19790);
} else {
}

var G__19792 = cljs.core.next.call(null,seq__19725_19780__$1);
var G__19793 = null;
var G__19794 = (0);
var G__19795 = (0);
seq__19725_19765 = G__19792;
chunk__19726_19766 = G__19793;
count__19727_19767 = G__19794;
i__19728_19768 = G__19795;
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

var seq__19739 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19740 = null;
var count__19741 = (0);
var i__19742 = (0);
while(true){
if((i__19742 < count__19741)){
var role = cljs.core._nth.call(null,chunk__19740,i__19742);
var temp__4657__auto___19796__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19796__$1)){
var spec_19797 = temp__4657__auto___19796__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19797));
} else {
}

var G__19798 = seq__19739;
var G__19799 = chunk__19740;
var G__19800 = count__19741;
var G__19801 = (i__19742 + (1));
seq__19739 = G__19798;
chunk__19740 = G__19799;
count__19741 = G__19800;
i__19742 = G__19801;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__19739);
if(temp__4657__auto____$1){
var seq__19739__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19739__$1)){
var c__18294__auto__ = cljs.core.chunk_first.call(null,seq__19739__$1);
var G__19802 = cljs.core.chunk_rest.call(null,seq__19739__$1);
var G__19803 = c__18294__auto__;
var G__19804 = cljs.core.count.call(null,c__18294__auto__);
var G__19805 = (0);
seq__19739 = G__19802;
chunk__19740 = G__19803;
count__19741 = G__19804;
i__19742 = G__19805;
continue;
} else {
var role = cljs.core.first.call(null,seq__19739__$1);
var temp__4657__auto___19806__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19806__$2)){
var spec_19807 = temp__4657__auto___19806__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19807));
} else {
}

var G__19808 = cljs.core.next.call(null,seq__19739__$1);
var G__19809 = null;
var G__19810 = (0);
var G__19811 = (0);
seq__19739 = G__19808;
chunk__19740 = G__19809;
count__19741 = G__19810;
i__19742 = G__19811;
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