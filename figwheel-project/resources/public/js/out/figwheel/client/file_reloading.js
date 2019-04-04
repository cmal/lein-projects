// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24875__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24875__auto__){
return or__24875__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24875__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31509_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31509_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31514 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31515 = null;
var count__31516 = (0);
var i__31517 = (0);
while(true){
if((i__31517 < count__31516)){
var n = cljs.core._nth.call(null,chunk__31515,i__31517);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31518 = seq__31514;
var G__31519 = chunk__31515;
var G__31520 = count__31516;
var G__31521 = (i__31517 + (1));
seq__31514 = G__31518;
chunk__31515 = G__31519;
count__31516 = G__31520;
i__31517 = G__31521;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31514);
if(temp__4657__auto__){
var seq__31514__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31514__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__31514__$1);
var G__31522 = cljs.core.chunk_rest.call(null,seq__31514__$1);
var G__31523 = c__25689__auto__;
var G__31524 = cljs.core.count.call(null,c__25689__auto__);
var G__31525 = (0);
seq__31514 = G__31522;
chunk__31515 = G__31523;
count__31516 = G__31524;
i__31517 = G__31525;
continue;
} else {
var n = cljs.core.first.call(null,seq__31514__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31526 = cljs.core.next.call(null,seq__31514__$1);
var G__31527 = null;
var G__31528 = (0);
var G__31529 = (0);
seq__31514 = G__31526;
chunk__31515 = G__31527;
count__31516 = G__31528;
i__31517 = G__31529;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31580_31591 = cljs.core.seq.call(null,deps);
var chunk__31581_31592 = null;
var count__31582_31593 = (0);
var i__31583_31594 = (0);
while(true){
if((i__31583_31594 < count__31582_31593)){
var dep_31595 = cljs.core._nth.call(null,chunk__31581_31592,i__31583_31594);
topo_sort_helper_STAR_.call(null,dep_31595,(depth + (1)),state);

var G__31596 = seq__31580_31591;
var G__31597 = chunk__31581_31592;
var G__31598 = count__31582_31593;
var G__31599 = (i__31583_31594 + (1));
seq__31580_31591 = G__31596;
chunk__31581_31592 = G__31597;
count__31582_31593 = G__31598;
i__31583_31594 = G__31599;
continue;
} else {
var temp__4657__auto___31600 = cljs.core.seq.call(null,seq__31580_31591);
if(temp__4657__auto___31600){
var seq__31580_31601__$1 = temp__4657__auto___31600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31580_31601__$1)){
var c__25689__auto___31602 = cljs.core.chunk_first.call(null,seq__31580_31601__$1);
var G__31603 = cljs.core.chunk_rest.call(null,seq__31580_31601__$1);
var G__31604 = c__25689__auto___31602;
var G__31605 = cljs.core.count.call(null,c__25689__auto___31602);
var G__31606 = (0);
seq__31580_31591 = G__31603;
chunk__31581_31592 = G__31604;
count__31582_31593 = G__31605;
i__31583_31594 = G__31606;
continue;
} else {
var dep_31607 = cljs.core.first.call(null,seq__31580_31601__$1);
topo_sort_helper_STAR_.call(null,dep_31607,(depth + (1)),state);

var G__31608 = cljs.core.next.call(null,seq__31580_31601__$1);
var G__31609 = null;
var G__31610 = (0);
var G__31611 = (0);
seq__31580_31591 = G__31608;
chunk__31581_31592 = G__31609;
count__31582_31593 = G__31610;
i__31583_31594 = G__31611;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31584){
var vec__31588 = p__31584;
var seq__31589 = cljs.core.seq.call(null,vec__31588);
var first__31590 = cljs.core.first.call(null,seq__31589);
var seq__31589__$1 = cljs.core.next.call(null,seq__31589);
var x = first__31590;
var xs = seq__31589__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31588,seq__31589,first__31590,seq__31589__$1,x,xs,get_deps__$1){
return (function (p1__31530_SHARP_){
return clojure.set.difference.call(null,p1__31530_SHARP_,x);
});})(vec__31588,seq__31589,first__31590,seq__31589__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31624 = cljs.core.seq.call(null,provides);
var chunk__31625 = null;
var count__31626 = (0);
var i__31627 = (0);
while(true){
if((i__31627 < count__31626)){
var prov = cljs.core._nth.call(null,chunk__31625,i__31627);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31628_31636 = cljs.core.seq.call(null,requires);
var chunk__31629_31637 = null;
var count__31630_31638 = (0);
var i__31631_31639 = (0);
while(true){
if((i__31631_31639 < count__31630_31638)){
var req_31640 = cljs.core._nth.call(null,chunk__31629_31637,i__31631_31639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31640,prov);

var G__31641 = seq__31628_31636;
var G__31642 = chunk__31629_31637;
var G__31643 = count__31630_31638;
var G__31644 = (i__31631_31639 + (1));
seq__31628_31636 = G__31641;
chunk__31629_31637 = G__31642;
count__31630_31638 = G__31643;
i__31631_31639 = G__31644;
continue;
} else {
var temp__4657__auto___31645 = cljs.core.seq.call(null,seq__31628_31636);
if(temp__4657__auto___31645){
var seq__31628_31646__$1 = temp__4657__auto___31645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31628_31646__$1)){
var c__25689__auto___31647 = cljs.core.chunk_first.call(null,seq__31628_31646__$1);
var G__31648 = cljs.core.chunk_rest.call(null,seq__31628_31646__$1);
var G__31649 = c__25689__auto___31647;
var G__31650 = cljs.core.count.call(null,c__25689__auto___31647);
var G__31651 = (0);
seq__31628_31636 = G__31648;
chunk__31629_31637 = G__31649;
count__31630_31638 = G__31650;
i__31631_31639 = G__31651;
continue;
} else {
var req_31652 = cljs.core.first.call(null,seq__31628_31646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31652,prov);

var G__31653 = cljs.core.next.call(null,seq__31628_31646__$1);
var G__31654 = null;
var G__31655 = (0);
var G__31656 = (0);
seq__31628_31636 = G__31653;
chunk__31629_31637 = G__31654;
count__31630_31638 = G__31655;
i__31631_31639 = G__31656;
continue;
}
} else {
}
}
break;
}

var G__31657 = seq__31624;
var G__31658 = chunk__31625;
var G__31659 = count__31626;
var G__31660 = (i__31627 + (1));
seq__31624 = G__31657;
chunk__31625 = G__31658;
count__31626 = G__31659;
i__31627 = G__31660;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31624);
if(temp__4657__auto__){
var seq__31624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31624__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__31624__$1);
var G__31661 = cljs.core.chunk_rest.call(null,seq__31624__$1);
var G__31662 = c__25689__auto__;
var G__31663 = cljs.core.count.call(null,c__25689__auto__);
var G__31664 = (0);
seq__31624 = G__31661;
chunk__31625 = G__31662;
count__31626 = G__31663;
i__31627 = G__31664;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31624__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31632_31665 = cljs.core.seq.call(null,requires);
var chunk__31633_31666 = null;
var count__31634_31667 = (0);
var i__31635_31668 = (0);
while(true){
if((i__31635_31668 < count__31634_31667)){
var req_31669 = cljs.core._nth.call(null,chunk__31633_31666,i__31635_31668);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31669,prov);

var G__31670 = seq__31632_31665;
var G__31671 = chunk__31633_31666;
var G__31672 = count__31634_31667;
var G__31673 = (i__31635_31668 + (1));
seq__31632_31665 = G__31670;
chunk__31633_31666 = G__31671;
count__31634_31667 = G__31672;
i__31635_31668 = G__31673;
continue;
} else {
var temp__4657__auto___31674__$1 = cljs.core.seq.call(null,seq__31632_31665);
if(temp__4657__auto___31674__$1){
var seq__31632_31675__$1 = temp__4657__auto___31674__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31632_31675__$1)){
var c__25689__auto___31676 = cljs.core.chunk_first.call(null,seq__31632_31675__$1);
var G__31677 = cljs.core.chunk_rest.call(null,seq__31632_31675__$1);
var G__31678 = c__25689__auto___31676;
var G__31679 = cljs.core.count.call(null,c__25689__auto___31676);
var G__31680 = (0);
seq__31632_31665 = G__31677;
chunk__31633_31666 = G__31678;
count__31634_31667 = G__31679;
i__31635_31668 = G__31680;
continue;
} else {
var req_31681 = cljs.core.first.call(null,seq__31632_31675__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31681,prov);

var G__31682 = cljs.core.next.call(null,seq__31632_31675__$1);
var G__31683 = null;
var G__31684 = (0);
var G__31685 = (0);
seq__31632_31665 = G__31682;
chunk__31633_31666 = G__31683;
count__31634_31667 = G__31684;
i__31635_31668 = G__31685;
continue;
}
} else {
}
}
break;
}

var G__31686 = cljs.core.next.call(null,seq__31624__$1);
var G__31687 = null;
var G__31688 = (0);
var G__31689 = (0);
seq__31624 = G__31686;
chunk__31625 = G__31687;
count__31626 = G__31688;
i__31627 = G__31689;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31694_31698 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31695_31699 = null;
var count__31696_31700 = (0);
var i__31697_31701 = (0);
while(true){
if((i__31697_31701 < count__31696_31700)){
var ns_31702 = cljs.core._nth.call(null,chunk__31695_31699,i__31697_31701);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31702);

var G__31703 = seq__31694_31698;
var G__31704 = chunk__31695_31699;
var G__31705 = count__31696_31700;
var G__31706 = (i__31697_31701 + (1));
seq__31694_31698 = G__31703;
chunk__31695_31699 = G__31704;
count__31696_31700 = G__31705;
i__31697_31701 = G__31706;
continue;
} else {
var temp__4657__auto___31707 = cljs.core.seq.call(null,seq__31694_31698);
if(temp__4657__auto___31707){
var seq__31694_31708__$1 = temp__4657__auto___31707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31694_31708__$1)){
var c__25689__auto___31709 = cljs.core.chunk_first.call(null,seq__31694_31708__$1);
var G__31710 = cljs.core.chunk_rest.call(null,seq__31694_31708__$1);
var G__31711 = c__25689__auto___31709;
var G__31712 = cljs.core.count.call(null,c__25689__auto___31709);
var G__31713 = (0);
seq__31694_31698 = G__31710;
chunk__31695_31699 = G__31711;
count__31696_31700 = G__31712;
i__31697_31701 = G__31713;
continue;
} else {
var ns_31714 = cljs.core.first.call(null,seq__31694_31708__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31714);

var G__31715 = cljs.core.next.call(null,seq__31694_31708__$1);
var G__31716 = null;
var G__31717 = (0);
var G__31718 = (0);
seq__31694_31698 = G__31715;
chunk__31695_31699 = G__31716;
count__31696_31700 = G__31717;
i__31697_31701 = G__31718;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24875__auto__ = goog.require__;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31719__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31720__i = 0, G__31720__a = new Array(arguments.length -  0);
while (G__31720__i < G__31720__a.length) {G__31720__a[G__31720__i] = arguments[G__31720__i + 0]; ++G__31720__i;}
  args = new cljs.core.IndexedSeq(G__31720__a,0);
} 
return G__31719__delegate.call(this,args);};
G__31719.cljs$lang$maxFixedArity = 0;
G__31719.cljs$lang$applyTo = (function (arglist__31721){
var args = cljs.core.seq(arglist__31721);
return G__31719__delegate(args);
});
G__31719.cljs$core$IFn$_invoke$arity$variadic = G__31719__delegate;
return G__31719;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31723 = cljs.core._EQ_;
var expr__31724 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31723.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31724))){
var path_parts = ((function (pred__31723,expr__31724){
return (function (p1__31722_SHARP_){
return clojure.string.split.call(null,p1__31722_SHARP_,/[\/\\]/);
});})(pred__31723,expr__31724))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31723,expr__31724){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31726){if((e31726 instanceof Error)){
var e = e31726;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31726;

}
}})());
});
;})(path_parts,sep,root,pred__31723,expr__31724))
} else {
if(cljs.core.truth_(pred__31723.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31724))){
return ((function (pred__31723,expr__31724){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31723,expr__31724){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31723,expr__31724))
);

return deferred.addErrback(((function (deferred,pred__31723,expr__31724){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31723,expr__31724))
);
});
;})(pred__31723,expr__31724))
} else {
return ((function (pred__31723,expr__31724){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31723,expr__31724))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31727,callback){
var map__31730 = p__31727;
var map__31730__$1 = ((((!((map__31730 == null)))?((((map__31730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730):map__31730);
var file_msg = map__31730__$1;
var request_url = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31730,map__31730__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31730,map__31730__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_31754){
var state_val_31755 = (state_31754[(1)]);
if((state_val_31755 === (7))){
var inst_31750 = (state_31754[(2)]);
var state_31754__$1 = state_31754;
var statearr_31756_31776 = state_31754__$1;
(statearr_31756_31776[(2)] = inst_31750);

(statearr_31756_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (1))){
var state_31754__$1 = state_31754;
var statearr_31757_31777 = state_31754__$1;
(statearr_31757_31777[(2)] = null);

(statearr_31757_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (4))){
var inst_31734 = (state_31754[(7)]);
var inst_31734__$1 = (state_31754[(2)]);
var state_31754__$1 = (function (){var statearr_31758 = state_31754;
(statearr_31758[(7)] = inst_31734__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31734__$1)){
var statearr_31759_31778 = state_31754__$1;
(statearr_31759_31778[(1)] = (5));

} else {
var statearr_31760_31779 = state_31754__$1;
(statearr_31760_31779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (6))){
var state_31754__$1 = state_31754;
var statearr_31761_31780 = state_31754__$1;
(statearr_31761_31780[(2)] = null);

(statearr_31761_31780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (3))){
var inst_31752 = (state_31754[(2)]);
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31754__$1,inst_31752);
} else {
if((state_val_31755 === (2))){
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31754__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31755 === (11))){
var inst_31746 = (state_31754[(2)]);
var state_31754__$1 = (function (){var statearr_31762 = state_31754;
(statearr_31762[(8)] = inst_31746);

return statearr_31762;
})();
var statearr_31763_31781 = state_31754__$1;
(statearr_31763_31781[(2)] = null);

(statearr_31763_31781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (9))){
var inst_31738 = (state_31754[(9)]);
var inst_31740 = (state_31754[(10)]);
var inst_31742 = inst_31740.call(null,inst_31738);
var state_31754__$1 = state_31754;
var statearr_31764_31782 = state_31754__$1;
(statearr_31764_31782[(2)] = inst_31742);

(statearr_31764_31782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (5))){
var inst_31734 = (state_31754[(7)]);
var inst_31736 = figwheel.client.file_reloading.blocking_load.call(null,inst_31734);
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31754__$1,(8),inst_31736);
} else {
if((state_val_31755 === (10))){
var inst_31738 = (state_31754[(9)]);
var inst_31744 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31738);
var state_31754__$1 = state_31754;
var statearr_31765_31783 = state_31754__$1;
(statearr_31765_31783[(2)] = inst_31744);

(statearr_31765_31783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (8))){
var inst_31734 = (state_31754[(7)]);
var inst_31740 = (state_31754[(10)]);
var inst_31738 = (state_31754[(2)]);
var inst_31739 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31740__$1 = cljs.core.get.call(null,inst_31739,inst_31734);
var state_31754__$1 = (function (){var statearr_31766 = state_31754;
(statearr_31766[(9)] = inst_31738);

(statearr_31766[(10)] = inst_31740__$1);

return statearr_31766;
})();
if(cljs.core.truth_(inst_31740__$1)){
var statearr_31767_31784 = state_31754__$1;
(statearr_31767_31784[(1)] = (9));

} else {
var statearr_31768_31785 = state_31754__$1;
(statearr_31768_31785[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$state_machine__28466__auto____0 = (function (){
var statearr_31772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31772[(0)] = figwheel$client$file_reloading$state_machine__28466__auto__);

(statearr_31772[(1)] = (1));

return statearr_31772;
});
var figwheel$client$file_reloading$state_machine__28466__auto____1 = (function (state_31754){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31773){if((e31773 instanceof Object)){
var ex__28469__auto__ = e31773;
var statearr_31774_31786 = state_31754;
(statearr_31774_31786[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31787 = state_31754;
state_31754 = G__31787;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28466__auto__ = function(state_31754){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28466__auto____1.call(this,state_31754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28466__auto____0;
figwheel$client$file_reloading$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28466__auto____1;
return figwheel$client$file_reloading$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_31775 = f__28578__auto__.call(null);
(statearr_31775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_31775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31788,callback){
var map__31791 = p__31788;
var map__31791__$1 = ((((!((map__31791 == null)))?((((map__31791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31791):map__31791);
var file_msg = map__31791__$1;
var namespace = cljs.core.get.call(null,map__31791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31791,map__31791__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31791,map__31791__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31793){
var map__31796 = p__31793;
var map__31796__$1 = ((((!((map__31796 == null)))?((((map__31796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);
var file_msg = map__31796__$1;
var namespace = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24863__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24863__auto__){
var or__24875__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
var or__24875__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24875__auto____$1)){
return or__24875__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24863__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31798,callback){
var map__31801 = p__31798;
var map__31801__$1 = ((((!((map__31801 == null)))?((((map__31801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31801):map__31801);
var file_msg = map__31801__$1;
var request_url = cljs.core.get.call(null,map__31801__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28577__auto___31905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31905,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31905,out){
return (function (state_31887){
var state_val_31888 = (state_31887[(1)]);
if((state_val_31888 === (1))){
var inst_31861 = cljs.core.seq.call(null,files);
var inst_31862 = cljs.core.first.call(null,inst_31861);
var inst_31863 = cljs.core.next.call(null,inst_31861);
var inst_31864 = files;
var state_31887__$1 = (function (){var statearr_31889 = state_31887;
(statearr_31889[(7)] = inst_31862);

(statearr_31889[(8)] = inst_31864);

(statearr_31889[(9)] = inst_31863);

return statearr_31889;
})();
var statearr_31890_31906 = state_31887__$1;
(statearr_31890_31906[(2)] = null);

(statearr_31890_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (2))){
var inst_31864 = (state_31887[(8)]);
var inst_31870 = (state_31887[(10)]);
var inst_31869 = cljs.core.seq.call(null,inst_31864);
var inst_31870__$1 = cljs.core.first.call(null,inst_31869);
var inst_31871 = cljs.core.next.call(null,inst_31869);
var inst_31872 = (inst_31870__$1 == null);
var inst_31873 = cljs.core.not.call(null,inst_31872);
var state_31887__$1 = (function (){var statearr_31891 = state_31887;
(statearr_31891[(11)] = inst_31871);

(statearr_31891[(10)] = inst_31870__$1);

return statearr_31891;
})();
if(inst_31873){
var statearr_31892_31907 = state_31887__$1;
(statearr_31892_31907[(1)] = (4));

} else {
var statearr_31893_31908 = state_31887__$1;
(statearr_31893_31908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (3))){
var inst_31885 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31887__$1,inst_31885);
} else {
if((state_val_31888 === (4))){
var inst_31870 = (state_31887[(10)]);
var inst_31875 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31870);
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31887__$1,(7),inst_31875);
} else {
if((state_val_31888 === (5))){
var inst_31881 = cljs.core.async.close_BANG_.call(null,out);
var state_31887__$1 = state_31887;
var statearr_31894_31909 = state_31887__$1;
(statearr_31894_31909[(2)] = inst_31881);

(statearr_31894_31909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (6))){
var inst_31883 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31895_31910 = state_31887__$1;
(statearr_31895_31910[(2)] = inst_31883);

(statearr_31895_31910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31888 === (7))){
var inst_31871 = (state_31887[(11)]);
var inst_31877 = (state_31887[(2)]);
var inst_31878 = cljs.core.async.put_BANG_.call(null,out,inst_31877);
var inst_31864 = inst_31871;
var state_31887__$1 = (function (){var statearr_31896 = state_31887;
(statearr_31896[(8)] = inst_31864);

(statearr_31896[(12)] = inst_31878);

return statearr_31896;
})();
var statearr_31897_31911 = state_31887__$1;
(statearr_31897_31911[(2)] = null);

(statearr_31897_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28577__auto___31905,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31905,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_31901 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31901[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__);

(statearr_31901[(1)] = (1));

return statearr_31901;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1 = (function (state_31887){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31902){if((e31902 instanceof Object)){
var ex__28469__auto__ = e31902;
var statearr_31903_31912 = state_31887;
(statearr_31903_31912[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31913 = state_31887;
state_31887 = G__31913;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__ = function(state_31887){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1.call(this,state_31887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31905,out))
})();
var state__28579__auto__ = (function (){var statearr_31904 = f__28578__auto__.call(null);
(statearr_31904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31905);

return statearr_31904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31905,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31914,opts){
var map__31918 = p__31914;
var map__31918__$1 = ((((!((map__31918 == null)))?((((map__31918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31918):map__31918);
var eval_body = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24863__auto__ = eval_body;
if(cljs.core.truth_(and__24863__auto__)){
return typeof eval_body === 'string';
} else {
return and__24863__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31920){var e = e31920;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31921_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31921_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31930){
var vec__31931 = p__31930;
var k = cljs.core.nth.call(null,vec__31931,(0),null);
var v = cljs.core.nth.call(null,vec__31931,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31934){
var vec__31935 = p__31934;
var k = cljs.core.nth.call(null,vec__31935,(0),null);
var v = cljs.core.nth.call(null,vec__31935,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31941,p__31942){
var map__32190 = p__31941;
var map__32190__$1 = ((((!((map__32190 == null)))?((((map__32190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32190):map__32190);
var opts = map__32190__$1;
var before_jsload = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32191 = p__31942;
var map__32191__$1 = ((((!((map__32191 == null)))?((((map__32191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32191):map__32191);
var msg = map__32191__$1;
var files = cljs.core.get.call(null,map__32191__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32191__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32191__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32345){
var state_val_32346 = (state_32345[(1)]);
if((state_val_32346 === (7))){
var inst_32208 = (state_32345[(7)]);
var inst_32207 = (state_32345[(8)]);
var inst_32206 = (state_32345[(9)]);
var inst_32205 = (state_32345[(10)]);
var inst_32213 = cljs.core._nth.call(null,inst_32206,inst_32208);
var inst_32214 = figwheel.client.file_reloading.eval_body.call(null,inst_32213,opts);
var inst_32215 = (inst_32208 + (1));
var tmp32347 = inst_32207;
var tmp32348 = inst_32206;
var tmp32349 = inst_32205;
var inst_32205__$1 = tmp32349;
var inst_32206__$1 = tmp32348;
var inst_32207__$1 = tmp32347;
var inst_32208__$1 = inst_32215;
var state_32345__$1 = (function (){var statearr_32350 = state_32345;
(statearr_32350[(11)] = inst_32214);

(statearr_32350[(7)] = inst_32208__$1);

(statearr_32350[(8)] = inst_32207__$1);

(statearr_32350[(9)] = inst_32206__$1);

(statearr_32350[(10)] = inst_32205__$1);

return statearr_32350;
})();
var statearr_32351_32437 = state_32345__$1;
(statearr_32351_32437[(2)] = null);

(statearr_32351_32437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (20))){
var inst_32248 = (state_32345[(12)]);
var inst_32256 = figwheel.client.file_reloading.sort_files.call(null,inst_32248);
var state_32345__$1 = state_32345;
var statearr_32352_32438 = state_32345__$1;
(statearr_32352_32438[(2)] = inst_32256);

(statearr_32352_32438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (27))){
var state_32345__$1 = state_32345;
var statearr_32353_32439 = state_32345__$1;
(statearr_32353_32439[(2)] = null);

(statearr_32353_32439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (1))){
var inst_32197 = (state_32345[(13)]);
var inst_32194 = before_jsload.call(null,files);
var inst_32195 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32196 = (function (){return ((function (inst_32197,inst_32194,inst_32195,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31938_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31938_SHARP_);
});
;})(inst_32197,inst_32194,inst_32195,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32197__$1 = cljs.core.filter.call(null,inst_32196,files);
var inst_32198 = cljs.core.not_empty.call(null,inst_32197__$1);
var state_32345__$1 = (function (){var statearr_32354 = state_32345;
(statearr_32354[(14)] = inst_32195);

(statearr_32354[(13)] = inst_32197__$1);

(statearr_32354[(15)] = inst_32194);

return statearr_32354;
})();
if(cljs.core.truth_(inst_32198)){
var statearr_32355_32440 = state_32345__$1;
(statearr_32355_32440[(1)] = (2));

} else {
var statearr_32356_32441 = state_32345__$1;
(statearr_32356_32441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (24))){
var state_32345__$1 = state_32345;
var statearr_32357_32442 = state_32345__$1;
(statearr_32357_32442[(2)] = null);

(statearr_32357_32442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (39))){
var inst_32298 = (state_32345[(16)]);
var state_32345__$1 = state_32345;
var statearr_32358_32443 = state_32345__$1;
(statearr_32358_32443[(2)] = inst_32298);

(statearr_32358_32443[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (46))){
var inst_32340 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32359_32444 = state_32345__$1;
(statearr_32359_32444[(2)] = inst_32340);

(statearr_32359_32444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (4))){
var inst_32242 = (state_32345[(2)]);
var inst_32243 = cljs.core.List.EMPTY;
var inst_32244 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32243);
var inst_32245 = (function (){return ((function (inst_32242,inst_32243,inst_32244,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31939_SHARP_){
var and__24863__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31939_SHARP_);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31939_SHARP_));
} else {
return and__24863__auto__;
}
});
;})(inst_32242,inst_32243,inst_32244,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32246 = cljs.core.filter.call(null,inst_32245,files);
var inst_32247 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32248 = cljs.core.concat.call(null,inst_32246,inst_32247);
var state_32345__$1 = (function (){var statearr_32360 = state_32345;
(statearr_32360[(12)] = inst_32248);

(statearr_32360[(17)] = inst_32242);

(statearr_32360[(18)] = inst_32244);

return statearr_32360;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32361_32445 = state_32345__$1;
(statearr_32361_32445[(1)] = (16));

} else {
var statearr_32362_32446 = state_32345__$1;
(statearr_32362_32446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (15))){
var inst_32232 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32363_32447 = state_32345__$1;
(statearr_32363_32447[(2)] = inst_32232);

(statearr_32363_32447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (21))){
var inst_32258 = (state_32345[(19)]);
var inst_32258__$1 = (state_32345[(2)]);
var inst_32259 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32258__$1);
var state_32345__$1 = (function (){var statearr_32364 = state_32345;
(statearr_32364[(19)] = inst_32258__$1);

return statearr_32364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32345__$1,(22),inst_32259);
} else {
if((state_val_32346 === (31))){
var inst_32343 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32345__$1,inst_32343);
} else {
if((state_val_32346 === (32))){
var inst_32298 = (state_32345[(16)]);
var inst_32303 = inst_32298.cljs$lang$protocol_mask$partition0$;
var inst_32304 = (inst_32303 & (64));
var inst_32305 = inst_32298.cljs$core$ISeq$;
var inst_32306 = (cljs.core.PROTOCOL_SENTINEL === inst_32305);
var inst_32307 = (inst_32304) || (inst_32306);
var state_32345__$1 = state_32345;
if(cljs.core.truth_(inst_32307)){
var statearr_32365_32448 = state_32345__$1;
(statearr_32365_32448[(1)] = (35));

} else {
var statearr_32366_32449 = state_32345__$1;
(statearr_32366_32449[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (40))){
var inst_32320 = (state_32345[(20)]);
var inst_32319 = (state_32345[(2)]);
var inst_32320__$1 = cljs.core.get.call(null,inst_32319,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32321 = cljs.core.get.call(null,inst_32319,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32322 = cljs.core.not_empty.call(null,inst_32320__$1);
var state_32345__$1 = (function (){var statearr_32367 = state_32345;
(statearr_32367[(20)] = inst_32320__$1);

(statearr_32367[(21)] = inst_32321);

return statearr_32367;
})();
if(cljs.core.truth_(inst_32322)){
var statearr_32368_32450 = state_32345__$1;
(statearr_32368_32450[(1)] = (41));

} else {
var statearr_32369_32451 = state_32345__$1;
(statearr_32369_32451[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (33))){
var state_32345__$1 = state_32345;
var statearr_32370_32452 = state_32345__$1;
(statearr_32370_32452[(2)] = false);

(statearr_32370_32452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (13))){
var inst_32218 = (state_32345[(22)]);
var inst_32222 = cljs.core.chunk_first.call(null,inst_32218);
var inst_32223 = cljs.core.chunk_rest.call(null,inst_32218);
var inst_32224 = cljs.core.count.call(null,inst_32222);
var inst_32205 = inst_32223;
var inst_32206 = inst_32222;
var inst_32207 = inst_32224;
var inst_32208 = (0);
var state_32345__$1 = (function (){var statearr_32371 = state_32345;
(statearr_32371[(7)] = inst_32208);

(statearr_32371[(8)] = inst_32207);

(statearr_32371[(9)] = inst_32206);

(statearr_32371[(10)] = inst_32205);

return statearr_32371;
})();
var statearr_32372_32453 = state_32345__$1;
(statearr_32372_32453[(2)] = null);

(statearr_32372_32453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (22))){
var inst_32262 = (state_32345[(23)]);
var inst_32258 = (state_32345[(19)]);
var inst_32266 = (state_32345[(24)]);
var inst_32261 = (state_32345[(25)]);
var inst_32261__$1 = (state_32345[(2)]);
var inst_32262__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32261__$1);
var inst_32263 = (function (){var all_files = inst_32258;
var res_SINGLEQUOTE_ = inst_32261__$1;
var res = inst_32262__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32262,inst_32258,inst_32266,inst_32261,inst_32261__$1,inst_32262__$1,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31940_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31940_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32262,inst_32258,inst_32266,inst_32261,inst_32261__$1,inst_32262__$1,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32264 = cljs.core.filter.call(null,inst_32263,inst_32261__$1);
var inst_32265 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32266__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32265);
var inst_32267 = cljs.core.not_empty.call(null,inst_32266__$1);
var state_32345__$1 = (function (){var statearr_32373 = state_32345;
(statearr_32373[(23)] = inst_32262__$1);

(statearr_32373[(24)] = inst_32266__$1);

(statearr_32373[(25)] = inst_32261__$1);

(statearr_32373[(26)] = inst_32264);

return statearr_32373;
})();
if(cljs.core.truth_(inst_32267)){
var statearr_32374_32454 = state_32345__$1;
(statearr_32374_32454[(1)] = (23));

} else {
var statearr_32375_32455 = state_32345__$1;
(statearr_32375_32455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (36))){
var state_32345__$1 = state_32345;
var statearr_32376_32456 = state_32345__$1;
(statearr_32376_32456[(2)] = false);

(statearr_32376_32456[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (41))){
var inst_32320 = (state_32345[(20)]);
var inst_32324 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32325 = cljs.core.map.call(null,inst_32324,inst_32320);
var inst_32326 = cljs.core.pr_str.call(null,inst_32325);
var inst_32327 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32326)].join('');
var inst_32328 = figwheel.client.utils.log.call(null,inst_32327);
var state_32345__$1 = state_32345;
var statearr_32377_32457 = state_32345__$1;
(statearr_32377_32457[(2)] = inst_32328);

(statearr_32377_32457[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (43))){
var inst_32321 = (state_32345[(21)]);
var inst_32331 = (state_32345[(2)]);
var inst_32332 = cljs.core.not_empty.call(null,inst_32321);
var state_32345__$1 = (function (){var statearr_32378 = state_32345;
(statearr_32378[(27)] = inst_32331);

return statearr_32378;
})();
if(cljs.core.truth_(inst_32332)){
var statearr_32379_32458 = state_32345__$1;
(statearr_32379_32458[(1)] = (44));

} else {
var statearr_32380_32459 = state_32345__$1;
(statearr_32380_32459[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (29))){
var inst_32298 = (state_32345[(16)]);
var inst_32262 = (state_32345[(23)]);
var inst_32258 = (state_32345[(19)]);
var inst_32266 = (state_32345[(24)]);
var inst_32261 = (state_32345[(25)]);
var inst_32264 = (state_32345[(26)]);
var inst_32294 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32297 = (function (){var all_files = inst_32258;
var res_SINGLEQUOTE_ = inst_32261;
var res = inst_32262;
var files_not_loaded = inst_32264;
var dependencies_that_loaded = inst_32266;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32294,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32296){
var map__32381 = p__32296;
var map__32381__$1 = ((((!((map__32381 == null)))?((((map__32381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32381):map__32381);
var namespace = cljs.core.get.call(null,map__32381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32294,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32298__$1 = cljs.core.group_by.call(null,inst_32297,inst_32264);
var inst_32300 = (inst_32298__$1 == null);
var inst_32301 = cljs.core.not.call(null,inst_32300);
var state_32345__$1 = (function (){var statearr_32383 = state_32345;
(statearr_32383[(16)] = inst_32298__$1);

(statearr_32383[(28)] = inst_32294);

return statearr_32383;
})();
if(inst_32301){
var statearr_32384_32460 = state_32345__$1;
(statearr_32384_32460[(1)] = (32));

} else {
var statearr_32385_32461 = state_32345__$1;
(statearr_32385_32461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (44))){
var inst_32321 = (state_32345[(21)]);
var inst_32334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32321);
var inst_32335 = cljs.core.pr_str.call(null,inst_32334);
var inst_32336 = [cljs.core.str("not required: "),cljs.core.str(inst_32335)].join('');
var inst_32337 = figwheel.client.utils.log.call(null,inst_32336);
var state_32345__$1 = state_32345;
var statearr_32386_32462 = state_32345__$1;
(statearr_32386_32462[(2)] = inst_32337);

(statearr_32386_32462[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (6))){
var inst_32239 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32387_32463 = state_32345__$1;
(statearr_32387_32463[(2)] = inst_32239);

(statearr_32387_32463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (28))){
var inst_32264 = (state_32345[(26)]);
var inst_32291 = (state_32345[(2)]);
var inst_32292 = cljs.core.not_empty.call(null,inst_32264);
var state_32345__$1 = (function (){var statearr_32388 = state_32345;
(statearr_32388[(29)] = inst_32291);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32292)){
var statearr_32389_32464 = state_32345__$1;
(statearr_32389_32464[(1)] = (29));

} else {
var statearr_32390_32465 = state_32345__$1;
(statearr_32390_32465[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (25))){
var inst_32262 = (state_32345[(23)]);
var inst_32278 = (state_32345[(2)]);
var inst_32279 = cljs.core.not_empty.call(null,inst_32262);
var state_32345__$1 = (function (){var statearr_32391 = state_32345;
(statearr_32391[(30)] = inst_32278);

return statearr_32391;
})();
if(cljs.core.truth_(inst_32279)){
var statearr_32392_32466 = state_32345__$1;
(statearr_32392_32466[(1)] = (26));

} else {
var statearr_32393_32467 = state_32345__$1;
(statearr_32393_32467[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (34))){
var inst_32314 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
if(cljs.core.truth_(inst_32314)){
var statearr_32394_32468 = state_32345__$1;
(statearr_32394_32468[(1)] = (38));

} else {
var statearr_32395_32469 = state_32345__$1;
(statearr_32395_32469[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (17))){
var state_32345__$1 = state_32345;
var statearr_32396_32470 = state_32345__$1;
(statearr_32396_32470[(2)] = recompile_dependents);

(statearr_32396_32470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (3))){
var state_32345__$1 = state_32345;
var statearr_32397_32471 = state_32345__$1;
(statearr_32397_32471[(2)] = null);

(statearr_32397_32471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (12))){
var inst_32235 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32398_32472 = state_32345__$1;
(statearr_32398_32472[(2)] = inst_32235);

(statearr_32398_32472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (2))){
var inst_32197 = (state_32345[(13)]);
var inst_32204 = cljs.core.seq.call(null,inst_32197);
var inst_32205 = inst_32204;
var inst_32206 = null;
var inst_32207 = (0);
var inst_32208 = (0);
var state_32345__$1 = (function (){var statearr_32399 = state_32345;
(statearr_32399[(7)] = inst_32208);

(statearr_32399[(8)] = inst_32207);

(statearr_32399[(9)] = inst_32206);

(statearr_32399[(10)] = inst_32205);

return statearr_32399;
})();
var statearr_32400_32473 = state_32345__$1;
(statearr_32400_32473[(2)] = null);

(statearr_32400_32473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (23))){
var inst_32262 = (state_32345[(23)]);
var inst_32258 = (state_32345[(19)]);
var inst_32266 = (state_32345[(24)]);
var inst_32261 = (state_32345[(25)]);
var inst_32264 = (state_32345[(26)]);
var inst_32269 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32271 = (function (){var all_files = inst_32258;
var res_SINGLEQUOTE_ = inst_32261;
var res = inst_32262;
var files_not_loaded = inst_32264;
var dependencies_that_loaded = inst_32266;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32269,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32270){
var map__32401 = p__32270;
var map__32401__$1 = ((((!((map__32401 == null)))?((((map__32401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32401):map__32401);
var request_url = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32269,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32272 = cljs.core.reverse.call(null,inst_32266);
var inst_32273 = cljs.core.map.call(null,inst_32271,inst_32272);
var inst_32274 = cljs.core.pr_str.call(null,inst_32273);
var inst_32275 = figwheel.client.utils.log.call(null,inst_32274);
var state_32345__$1 = (function (){var statearr_32403 = state_32345;
(statearr_32403[(31)] = inst_32269);

return statearr_32403;
})();
var statearr_32404_32474 = state_32345__$1;
(statearr_32404_32474[(2)] = inst_32275);

(statearr_32404_32474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (35))){
var state_32345__$1 = state_32345;
var statearr_32405_32475 = state_32345__$1;
(statearr_32405_32475[(2)] = true);

(statearr_32405_32475[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (19))){
var inst_32248 = (state_32345[(12)]);
var inst_32254 = figwheel.client.file_reloading.expand_files.call(null,inst_32248);
var state_32345__$1 = state_32345;
var statearr_32406_32476 = state_32345__$1;
(statearr_32406_32476[(2)] = inst_32254);

(statearr_32406_32476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (11))){
var state_32345__$1 = state_32345;
var statearr_32407_32477 = state_32345__$1;
(statearr_32407_32477[(2)] = null);

(statearr_32407_32477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (9))){
var inst_32237 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32408_32478 = state_32345__$1;
(statearr_32408_32478[(2)] = inst_32237);

(statearr_32408_32478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (5))){
var inst_32208 = (state_32345[(7)]);
var inst_32207 = (state_32345[(8)]);
var inst_32210 = (inst_32208 < inst_32207);
var inst_32211 = inst_32210;
var state_32345__$1 = state_32345;
if(cljs.core.truth_(inst_32211)){
var statearr_32409_32479 = state_32345__$1;
(statearr_32409_32479[(1)] = (7));

} else {
var statearr_32410_32480 = state_32345__$1;
(statearr_32410_32480[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (14))){
var inst_32218 = (state_32345[(22)]);
var inst_32227 = cljs.core.first.call(null,inst_32218);
var inst_32228 = figwheel.client.file_reloading.eval_body.call(null,inst_32227,opts);
var inst_32229 = cljs.core.next.call(null,inst_32218);
var inst_32205 = inst_32229;
var inst_32206 = null;
var inst_32207 = (0);
var inst_32208 = (0);
var state_32345__$1 = (function (){var statearr_32411 = state_32345;
(statearr_32411[(7)] = inst_32208);

(statearr_32411[(8)] = inst_32207);

(statearr_32411[(32)] = inst_32228);

(statearr_32411[(9)] = inst_32206);

(statearr_32411[(10)] = inst_32205);

return statearr_32411;
})();
var statearr_32412_32481 = state_32345__$1;
(statearr_32412_32481[(2)] = null);

(statearr_32412_32481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (45))){
var state_32345__$1 = state_32345;
var statearr_32413_32482 = state_32345__$1;
(statearr_32413_32482[(2)] = null);

(statearr_32413_32482[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (26))){
var inst_32262 = (state_32345[(23)]);
var inst_32258 = (state_32345[(19)]);
var inst_32266 = (state_32345[(24)]);
var inst_32261 = (state_32345[(25)]);
var inst_32264 = (state_32345[(26)]);
var inst_32281 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32283 = (function (){var all_files = inst_32258;
var res_SINGLEQUOTE_ = inst_32261;
var res = inst_32262;
var files_not_loaded = inst_32264;
var dependencies_that_loaded = inst_32266;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32281,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32282){
var map__32414 = p__32282;
var map__32414__$1 = ((((!((map__32414 == null)))?((((map__32414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32414):map__32414);
var namespace = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32281,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32284 = cljs.core.map.call(null,inst_32283,inst_32262);
var inst_32285 = cljs.core.pr_str.call(null,inst_32284);
var inst_32286 = figwheel.client.utils.log.call(null,inst_32285);
var inst_32287 = (function (){var all_files = inst_32258;
var res_SINGLEQUOTE_ = inst_32261;
var res = inst_32262;
var files_not_loaded = inst_32264;
var dependencies_that_loaded = inst_32266;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32281,inst_32283,inst_32284,inst_32285,inst_32286,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32262,inst_32258,inst_32266,inst_32261,inst_32264,inst_32281,inst_32283,inst_32284,inst_32285,inst_32286,state_val_32346,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32288 = setTimeout(inst_32287,(10));
var state_32345__$1 = (function (){var statearr_32416 = state_32345;
(statearr_32416[(33)] = inst_32281);

(statearr_32416[(34)] = inst_32286);

return statearr_32416;
})();
var statearr_32417_32483 = state_32345__$1;
(statearr_32417_32483[(2)] = inst_32288);

(statearr_32417_32483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (16))){
var state_32345__$1 = state_32345;
var statearr_32418_32484 = state_32345__$1;
(statearr_32418_32484[(2)] = reload_dependents);

(statearr_32418_32484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (38))){
var inst_32298 = (state_32345[(16)]);
var inst_32316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32298);
var state_32345__$1 = state_32345;
var statearr_32419_32485 = state_32345__$1;
(statearr_32419_32485[(2)] = inst_32316);

(statearr_32419_32485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (30))){
var state_32345__$1 = state_32345;
var statearr_32420_32486 = state_32345__$1;
(statearr_32420_32486[(2)] = null);

(statearr_32420_32486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (10))){
var inst_32218 = (state_32345[(22)]);
var inst_32220 = cljs.core.chunked_seq_QMARK_.call(null,inst_32218);
var state_32345__$1 = state_32345;
if(inst_32220){
var statearr_32421_32487 = state_32345__$1;
(statearr_32421_32487[(1)] = (13));

} else {
var statearr_32422_32488 = state_32345__$1;
(statearr_32422_32488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (18))){
var inst_32252 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
if(cljs.core.truth_(inst_32252)){
var statearr_32423_32489 = state_32345__$1;
(statearr_32423_32489[(1)] = (19));

} else {
var statearr_32424_32490 = state_32345__$1;
(statearr_32424_32490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (42))){
var state_32345__$1 = state_32345;
var statearr_32425_32491 = state_32345__$1;
(statearr_32425_32491[(2)] = null);

(statearr_32425_32491[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (37))){
var inst_32311 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32426_32492 = state_32345__$1;
(statearr_32426_32492[(2)] = inst_32311);

(statearr_32426_32492[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (8))){
var inst_32218 = (state_32345[(22)]);
var inst_32205 = (state_32345[(10)]);
var inst_32218__$1 = cljs.core.seq.call(null,inst_32205);
var state_32345__$1 = (function (){var statearr_32427 = state_32345;
(statearr_32427[(22)] = inst_32218__$1);

return statearr_32427;
})();
if(inst_32218__$1){
var statearr_32428_32493 = state_32345__$1;
(statearr_32428_32493[(1)] = (10));

} else {
var statearr_32429_32494 = state_32345__$1;
(statearr_32429_32494[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28465__auto__,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0 = (function (){
var statearr_32433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32433[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__);

(statearr_32433[(1)] = (1));

return statearr_32433;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1 = (function (state_32345){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_32345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e32434){if((e32434 instanceof Object)){
var ex__28469__auto__ = e32434;
var statearr_32435_32495 = state_32345;
(statearr_32435_32495[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32496 = state_32345;
state_32345 = G__32496;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__ = function(state_32345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1.call(this,state_32345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28579__auto__ = (function (){var statearr_32436 = f__28578__auto__.call(null);
(statearr_32436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,map__32190,map__32190__$1,opts,before_jsload,on_jsload,reload_dependents,map__32191,map__32191__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32499,link){
var map__32502 = p__32499;
var map__32502__$1 = ((((!((map__32502 == null)))?((((map__32502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32502):map__32502);
var file = cljs.core.get.call(null,map__32502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32502,map__32502__$1,file){
return (function (p1__32497_SHARP_,p2__32498_SHARP_){
if(cljs.core._EQ_.call(null,p1__32497_SHARP_,p2__32498_SHARP_)){
return p1__32497_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32502,map__32502__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32508){
var map__32509 = p__32508;
var map__32509__$1 = ((((!((map__32509 == null)))?((((map__32509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);
var match_length = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32504_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32504_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32511 = [];
var len__25983__auto___32514 = arguments.length;
var i__25984__auto___32515 = (0);
while(true){
if((i__25984__auto___32515 < len__25983__auto___32514)){
args32511.push((arguments[i__25984__auto___32515]));

var G__32516 = (i__25984__auto___32515 + (1));
i__25984__auto___32515 = G__32516;
continue;
} else {
}
break;
}

var G__32513 = args32511.length;
switch (G__32513) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32511.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32518_SHARP_,p2__32519_SHARP_){
return cljs.core.assoc.call(null,p1__32518_SHARP_,cljs.core.get.call(null,p2__32519_SHARP_,key),p2__32519_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32520){
var map__32523 = p__32520;
var map__32523__$1 = ((((!((map__32523 == null)))?((((map__32523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32523):map__32523);
var f_data = map__32523__$1;
var file = cljs.core.get.call(null,map__32523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32525,p__32526){
var map__32535 = p__32525;
var map__32535__$1 = ((((!((map__32535 == null)))?((((map__32535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32535):map__32535);
var opts = map__32535__$1;
var on_cssload = cljs.core.get.call(null,map__32535__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32536 = p__32526;
var map__32536__$1 = ((((!((map__32536 == null)))?((((map__32536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536):map__32536);
var files_msg = map__32536__$1;
var files = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32539_32543 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32540_32544 = null;
var count__32541_32545 = (0);
var i__32542_32546 = (0);
while(true){
if((i__32542_32546 < count__32541_32545)){
var f_32547 = cljs.core._nth.call(null,chunk__32540_32544,i__32542_32546);
figwheel.client.file_reloading.reload_css_file.call(null,f_32547);

var G__32548 = seq__32539_32543;
var G__32549 = chunk__32540_32544;
var G__32550 = count__32541_32545;
var G__32551 = (i__32542_32546 + (1));
seq__32539_32543 = G__32548;
chunk__32540_32544 = G__32549;
count__32541_32545 = G__32550;
i__32542_32546 = G__32551;
continue;
} else {
var temp__4657__auto___32552 = cljs.core.seq.call(null,seq__32539_32543);
if(temp__4657__auto___32552){
var seq__32539_32553__$1 = temp__4657__auto___32552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32539_32553__$1)){
var c__25689__auto___32554 = cljs.core.chunk_first.call(null,seq__32539_32553__$1);
var G__32555 = cljs.core.chunk_rest.call(null,seq__32539_32553__$1);
var G__32556 = c__25689__auto___32554;
var G__32557 = cljs.core.count.call(null,c__25689__auto___32554);
var G__32558 = (0);
seq__32539_32543 = G__32555;
chunk__32540_32544 = G__32556;
count__32541_32545 = G__32557;
i__32542_32546 = G__32558;
continue;
} else {
var f_32559 = cljs.core.first.call(null,seq__32539_32553__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32559);

var G__32560 = cljs.core.next.call(null,seq__32539_32553__$1);
var G__32561 = null;
var G__32562 = (0);
var G__32563 = (0);
seq__32539_32543 = G__32560;
chunk__32540_32544 = G__32561;
count__32541_32545 = G__32562;
i__32542_32546 = G__32563;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32535,map__32535__$1,opts,on_cssload,map__32536,map__32536__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32535,map__32535__$1,opts,on_cssload,map__32536,map__32536__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476966068639