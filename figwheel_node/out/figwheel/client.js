// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34600 = [];
var len__25983__auto___34603 = arguments.length;
var i__25984__auto___34604 = (0);
while(true){
if((i__25984__auto___34604 < len__25983__auto___34603)){
args34600.push((arguments[i__25984__auto___34604]));

var G__34605 = (i__25984__auto___34604 + (1));
i__25984__auto___34604 = G__34605;
continue;
} else {
}
break;
}

var G__34602 = args34600.length;
switch (G__34602) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34600.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34608 = arguments.length;
var i__25984__auto___34609 = (0);
while(true){
if((i__25984__auto___34609 < len__25983__auto___34608)){
args__25990__auto__.push((arguments[i__25984__auto___34609]));

var G__34610 = (i__25984__auto___34609 + (1));
i__25984__auto___34609 = G__34610;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34607){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34607));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34612 = arguments.length;
var i__25984__auto___34613 = (0);
while(true){
if((i__25984__auto___34613 < len__25983__auto___34612)){
args__25990__auto__.push((arguments[i__25984__auto___34613]));

var G__34614 = (i__25984__auto___34613 + (1));
i__25984__auto___34613 = G__34614;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34611){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34611));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34615 = cljs.core._EQ_;
var expr__34616 = (function (){var or__24875__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34619){if((e34619 instanceof Error)){
var e = e34619;
return false;
} else {
throw e34619;

}
}})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34615.call(null,"true",expr__34616))){
return true;
} else {
if(cljs.core.truth_(pred__34615.call(null,"false",expr__34616))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34616)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34621){if((e34621 instanceof Error)){
var e = e34621;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34621;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34622){
var map__34625 = p__34622;
var map__34625__$1 = ((((!((map__34625 == null)))?((((map__34625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34625):map__34625);
var message = cljs.core.get.call(null,map__34625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34625__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24875__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24863__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24863__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24863__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28577__auto___34787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___34787,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___34787,ch){
return (function (state_34756){
var state_val_34757 = (state_34756[(1)]);
if((state_val_34757 === (7))){
var inst_34752 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34758_34788 = state_34756__$1;
(statearr_34758_34788[(2)] = inst_34752);

(statearr_34758_34788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (1))){
var state_34756__$1 = state_34756;
var statearr_34759_34789 = state_34756__$1;
(statearr_34759_34789[(2)] = null);

(statearr_34759_34789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (4))){
var inst_34709 = (state_34756[(7)]);
var inst_34709__$1 = (state_34756[(2)]);
var state_34756__$1 = (function (){var statearr_34760 = state_34756;
(statearr_34760[(7)] = inst_34709__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34709__$1)){
var statearr_34761_34790 = state_34756__$1;
(statearr_34761_34790[(1)] = (5));

} else {
var statearr_34762_34791 = state_34756__$1;
(statearr_34762_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (15))){
var inst_34716 = (state_34756[(8)]);
var inst_34731 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34716);
var inst_34732 = cljs.core.first.call(null,inst_34731);
var inst_34733 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34732);
var inst_34734 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34733)].join('');
var inst_34735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34734);
var state_34756__$1 = state_34756;
var statearr_34763_34792 = state_34756__$1;
(statearr_34763_34792[(2)] = inst_34735);

(statearr_34763_34792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (13))){
var inst_34740 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34764_34793 = state_34756__$1;
(statearr_34764_34793[(2)] = inst_34740);

(statearr_34764_34793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (6))){
var state_34756__$1 = state_34756;
var statearr_34765_34794 = state_34756__$1;
(statearr_34765_34794[(2)] = null);

(statearr_34765_34794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (17))){
var inst_34738 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34766_34795 = state_34756__$1;
(statearr_34766_34795[(2)] = inst_34738);

(statearr_34766_34795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (3))){
var inst_34754 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34756__$1,inst_34754);
} else {
if((state_val_34757 === (12))){
var inst_34715 = (state_34756[(9)]);
var inst_34729 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34715,opts);
var state_34756__$1 = state_34756;
if(cljs.core.truth_(inst_34729)){
var statearr_34767_34796 = state_34756__$1;
(statearr_34767_34796[(1)] = (15));

} else {
var statearr_34768_34797 = state_34756__$1;
(statearr_34768_34797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (2))){
var state_34756__$1 = state_34756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34756__$1,(4),ch);
} else {
if((state_val_34757 === (11))){
var inst_34716 = (state_34756[(8)]);
var inst_34721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34722 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34716);
var inst_34723 = cljs.core.async.timeout.call(null,(1000));
var inst_34724 = [inst_34722,inst_34723];
var inst_34725 = (new cljs.core.PersistentVector(null,2,(5),inst_34721,inst_34724,null));
var state_34756__$1 = state_34756;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34756__$1,(14),inst_34725);
} else {
if((state_val_34757 === (9))){
var inst_34716 = (state_34756[(8)]);
var inst_34742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34743 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34716);
var inst_34744 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34743);
var inst_34745 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34744)].join('');
var inst_34746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34745);
var state_34756__$1 = (function (){var statearr_34769 = state_34756;
(statearr_34769[(10)] = inst_34742);

return statearr_34769;
})();
var statearr_34770_34798 = state_34756__$1;
(statearr_34770_34798[(2)] = inst_34746);

(statearr_34770_34798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (5))){
var inst_34709 = (state_34756[(7)]);
var inst_34711 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34712 = (new cljs.core.PersistentArrayMap(null,2,inst_34711,null));
var inst_34713 = (new cljs.core.PersistentHashSet(null,inst_34712,null));
var inst_34714 = figwheel.client.focus_msgs.call(null,inst_34713,inst_34709);
var inst_34715 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34714);
var inst_34716 = cljs.core.first.call(null,inst_34714);
var inst_34717 = figwheel.client.autoload_QMARK_.call(null);
var state_34756__$1 = (function (){var statearr_34771 = state_34756;
(statearr_34771[(8)] = inst_34716);

(statearr_34771[(9)] = inst_34715);

return statearr_34771;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34772_34799 = state_34756__$1;
(statearr_34772_34799[(1)] = (8));

} else {
var statearr_34773_34800 = state_34756__$1;
(statearr_34773_34800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (14))){
var inst_34727 = (state_34756[(2)]);
var state_34756__$1 = state_34756;
var statearr_34774_34801 = state_34756__$1;
(statearr_34774_34801[(2)] = inst_34727);

(statearr_34774_34801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (16))){
var state_34756__$1 = state_34756;
var statearr_34775_34802 = state_34756__$1;
(statearr_34775_34802[(2)] = null);

(statearr_34775_34802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (10))){
var inst_34748 = (state_34756[(2)]);
var state_34756__$1 = (function (){var statearr_34776 = state_34756;
(statearr_34776[(11)] = inst_34748);

return statearr_34776;
})();
var statearr_34777_34803 = state_34756__$1;
(statearr_34777_34803[(2)] = null);

(statearr_34777_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34757 === (8))){
var inst_34715 = (state_34756[(9)]);
var inst_34719 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34715,opts);
var state_34756__$1 = state_34756;
if(cljs.core.truth_(inst_34719)){
var statearr_34778_34804 = state_34756__$1;
(statearr_34778_34804[(1)] = (11));

} else {
var statearr_34779_34805 = state_34756__$1;
(statearr_34779_34805[(1)] = (12));

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
});})(c__28577__auto___34787,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___34787,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34783[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1 = (function (state_34756){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_34756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__28469__auto__ = e34784;
var statearr_34785_34806 = state_34756;
(statearr_34785_34806[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_34756;
state_34756 = G__34807;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = function(state_34756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1.call(this,state_34756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___34787,ch))
})();
var state__28579__auto__ = (function (){var statearr_34786 = f__28578__auto__.call(null);
(statearr_34786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___34787);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___34787,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34808_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34808_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34811 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34811){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34810){if((e34810 instanceof Error)){
var e = e34810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34811], null));
} else {
var e = e34810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34811))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34812){
var map__34821 = p__34812;
var map__34821__$1 = ((((!((map__34821 == null)))?((((map__34821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34821):map__34821);
var opts = map__34821__$1;
var build_id = cljs.core.get.call(null,map__34821__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34821,map__34821__$1,opts,build_id){
return (function (p__34823){
var vec__34824 = p__34823;
var seq__34825 = cljs.core.seq.call(null,vec__34824);
var first__34826 = cljs.core.first.call(null,seq__34825);
var seq__34825__$1 = cljs.core.next.call(null,seq__34825);
var map__34827 = first__34826;
var map__34827__$1 = ((((!((map__34827 == null)))?((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34827):map__34827);
var msg = map__34827__$1;
var msg_name = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34825__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34824,seq__34825,first__34826,seq__34825__$1,map__34827,map__34827__$1,msg,msg_name,_,map__34821,map__34821__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34824,seq__34825,first__34826,seq__34825__$1,map__34827,map__34827__$1,msg,msg_name,_,map__34821,map__34821__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34821,map__34821__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34835){
var vec__34836 = p__34835;
var seq__34837 = cljs.core.seq.call(null,vec__34836);
var first__34838 = cljs.core.first.call(null,seq__34837);
var seq__34837__$1 = cljs.core.next.call(null,seq__34837);
var map__34839 = first__34838;
var map__34839__$1 = ((((!((map__34839 == null)))?((((map__34839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34839):map__34839);
var msg = map__34839__$1;
var msg_name = cljs.core.get.call(null,map__34839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34837__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34841){
var map__34853 = p__34841;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var on_compile_warning = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34853,map__34853__$1,on_compile_warning,on_compile_fail){
return (function (p__34855){
var vec__34856 = p__34855;
var seq__34857 = cljs.core.seq.call(null,vec__34856);
var first__34858 = cljs.core.first.call(null,seq__34857);
var seq__34857__$1 = cljs.core.next.call(null,seq__34857);
var map__34859 = first__34858;
var map__34859__$1 = ((((!((map__34859 == null)))?((((map__34859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34859):map__34859);
var msg = map__34859__$1;
var msg_name = cljs.core.get.call(null,map__34859__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34857__$1;
var pred__34861 = cljs.core._EQ_;
var expr__34862 = msg_name;
if(cljs.core.truth_(pred__34861.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34862))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34861.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34862))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34853,map__34853__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,msg_hist,msg_names,msg){
return (function (state_35090){
var state_val_35091 = (state_35090[(1)]);
if((state_val_35091 === (7))){
var inst_35010 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35010)){
var statearr_35092_35142 = state_35090__$1;
(statearr_35092_35142[(1)] = (8));

} else {
var statearr_35093_35143 = state_35090__$1;
(statearr_35093_35143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (20))){
var inst_35084 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35094_35144 = state_35090__$1;
(statearr_35094_35144[(2)] = inst_35084);

(statearr_35094_35144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (27))){
var inst_35080 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35095_35145 = state_35090__$1;
(statearr_35095_35145[(2)] = inst_35080);

(statearr_35095_35145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (1))){
var inst_35003 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35003)){
var statearr_35096_35146 = state_35090__$1;
(statearr_35096_35146[(1)] = (2));

} else {
var statearr_35097_35147 = state_35090__$1;
(statearr_35097_35147[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (24))){
var inst_35082 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35098_35148 = state_35090__$1;
(statearr_35098_35148[(2)] = inst_35082);

(statearr_35098_35148[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (4))){
var inst_35088 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35090__$1,inst_35088);
} else {
if((state_val_35091 === (15))){
var inst_35086 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35099_35149 = state_35090__$1;
(statearr_35099_35149[(2)] = inst_35086);

(statearr_35099_35149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (21))){
var inst_35039 = (state_35090[(2)]);
var inst_35040 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35041 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35040);
var state_35090__$1 = (function (){var statearr_35100 = state_35090;
(statearr_35100[(7)] = inst_35039);

return statearr_35100;
})();
var statearr_35101_35150 = state_35090__$1;
(statearr_35101_35150[(2)] = inst_35041);

(statearr_35101_35150[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (31))){
var inst_35069 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35069)){
var statearr_35102_35151 = state_35090__$1;
(statearr_35102_35151[(1)] = (34));

} else {
var statearr_35103_35152 = state_35090__$1;
(statearr_35103_35152[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (32))){
var inst_35078 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35104_35153 = state_35090__$1;
(statearr_35104_35153[(2)] = inst_35078);

(statearr_35104_35153[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (33))){
var inst_35065 = (state_35090[(2)]);
var inst_35066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35067 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35066);
var state_35090__$1 = (function (){var statearr_35105 = state_35090;
(statearr_35105[(8)] = inst_35065);

return statearr_35105;
})();
var statearr_35106_35154 = state_35090__$1;
(statearr_35106_35154[(2)] = inst_35067);

(statearr_35106_35154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (13))){
var inst_35024 = figwheel.client.heads_up.clear.call(null);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(16),inst_35024);
} else {
if((state_val_35091 === (22))){
var inst_35045 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35046 = figwheel.client.heads_up.append_warning_message.call(null,inst_35045);
var state_35090__$1 = state_35090;
var statearr_35107_35155 = state_35090__$1;
(statearr_35107_35155[(2)] = inst_35046);

(statearr_35107_35155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (36))){
var inst_35076 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35108_35156 = state_35090__$1;
(statearr_35108_35156[(2)] = inst_35076);

(statearr_35108_35156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (29))){
var inst_35056 = (state_35090[(2)]);
var inst_35057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35058 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35057);
var state_35090__$1 = (function (){var statearr_35109 = state_35090;
(statearr_35109[(9)] = inst_35056);

return statearr_35109;
})();
var statearr_35110_35157 = state_35090__$1;
(statearr_35110_35157[(2)] = inst_35058);

(statearr_35110_35157[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (6))){
var inst_35005 = (state_35090[(10)]);
var state_35090__$1 = state_35090;
var statearr_35111_35158 = state_35090__$1;
(statearr_35111_35158[(2)] = inst_35005);

(statearr_35111_35158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (28))){
var inst_35052 = (state_35090[(2)]);
var inst_35053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35054 = figwheel.client.heads_up.display_warning.call(null,inst_35053);
var state_35090__$1 = (function (){var statearr_35112 = state_35090;
(statearr_35112[(11)] = inst_35052);

return statearr_35112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(29),inst_35054);
} else {
if((state_val_35091 === (25))){
var inst_35050 = figwheel.client.heads_up.clear.call(null);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(28),inst_35050);
} else {
if((state_val_35091 === (34))){
var inst_35071 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(37),inst_35071);
} else {
if((state_val_35091 === (17))){
var inst_35030 = (state_35090[(2)]);
var inst_35031 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35032 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35031);
var state_35090__$1 = (function (){var statearr_35113 = state_35090;
(statearr_35113[(12)] = inst_35030);

return statearr_35113;
})();
var statearr_35114_35159 = state_35090__$1;
(statearr_35114_35159[(2)] = inst_35032);

(statearr_35114_35159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (3))){
var inst_35022 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35022)){
var statearr_35115_35160 = state_35090__$1;
(statearr_35115_35160[(1)] = (13));

} else {
var statearr_35116_35161 = state_35090__$1;
(statearr_35116_35161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (12))){
var inst_35018 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35117_35162 = state_35090__$1;
(statearr_35117_35162[(2)] = inst_35018);

(statearr_35117_35162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (2))){
var inst_35005 = (state_35090[(10)]);
var inst_35005__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35090__$1 = (function (){var statearr_35118 = state_35090;
(statearr_35118[(10)] = inst_35005__$1);

return statearr_35118;
})();
if(cljs.core.truth_(inst_35005__$1)){
var statearr_35119_35163 = state_35090__$1;
(statearr_35119_35163[(1)] = (5));

} else {
var statearr_35120_35164 = state_35090__$1;
(statearr_35120_35164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (23))){
var inst_35048 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35048)){
var statearr_35121_35165 = state_35090__$1;
(statearr_35121_35165[(1)] = (25));

} else {
var statearr_35122_35166 = state_35090__$1;
(statearr_35122_35166[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (35))){
var state_35090__$1 = state_35090;
var statearr_35123_35167 = state_35090__$1;
(statearr_35123_35167[(2)] = null);

(statearr_35123_35167[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (19))){
var inst_35043 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35043)){
var statearr_35124_35168 = state_35090__$1;
(statearr_35124_35168[(1)] = (22));

} else {
var statearr_35125_35169 = state_35090__$1;
(statearr_35125_35169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (11))){
var inst_35014 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35126_35170 = state_35090__$1;
(statearr_35126_35170[(2)] = inst_35014);

(statearr_35126_35170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (9))){
var inst_35016 = figwheel.client.heads_up.clear.call(null);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(12),inst_35016);
} else {
if((state_val_35091 === (5))){
var inst_35007 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35090__$1 = state_35090;
var statearr_35127_35171 = state_35090__$1;
(statearr_35127_35171[(2)] = inst_35007);

(statearr_35127_35171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (14))){
var inst_35034 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35034)){
var statearr_35128_35172 = state_35090__$1;
(statearr_35128_35172[(1)] = (18));

} else {
var statearr_35129_35173 = state_35090__$1;
(statearr_35129_35173[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (26))){
var inst_35060 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35090__$1 = state_35090;
if(cljs.core.truth_(inst_35060)){
var statearr_35130_35174 = state_35090__$1;
(statearr_35130_35174[(1)] = (30));

} else {
var statearr_35131_35175 = state_35090__$1;
(statearr_35131_35175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (16))){
var inst_35026 = (state_35090[(2)]);
var inst_35027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35028 = figwheel.client.heads_up.display_exception.call(null,inst_35027);
var state_35090__$1 = (function (){var statearr_35132 = state_35090;
(statearr_35132[(13)] = inst_35026);

return statearr_35132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(17),inst_35028);
} else {
if((state_val_35091 === (30))){
var inst_35062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35063 = figwheel.client.heads_up.display_warning.call(null,inst_35062);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(33),inst_35063);
} else {
if((state_val_35091 === (10))){
var inst_35020 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35133_35176 = state_35090__$1;
(statearr_35133_35176[(2)] = inst_35020);

(statearr_35133_35176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (18))){
var inst_35036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35037 = figwheel.client.heads_up.display_exception.call(null,inst_35036);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(21),inst_35037);
} else {
if((state_val_35091 === (37))){
var inst_35073 = (state_35090[(2)]);
var state_35090__$1 = state_35090;
var statearr_35134_35177 = state_35090__$1;
(statearr_35134_35177[(2)] = inst_35073);

(statearr_35134_35177[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35091 === (8))){
var inst_35012 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35090__$1 = state_35090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35090__$1,(11),inst_35012);
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
});})(c__28577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28465__auto__,c__28577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0 = (function (){
var statearr_35138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35138[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__);

(statearr_35138[(1)] = (1));

return statearr_35138;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1 = (function (state_35090){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35139){if((e35139 instanceof Object)){
var ex__28469__auto__ = e35139;
var statearr_35140_35178 = state_35090;
(statearr_35140_35178[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35179 = state_35090;
state_35090 = G__35179;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__ = function(state_35090){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1.call(this,state_35090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,msg_hist,msg_names,msg))
})();
var state__28579__auto__ = (function (){var statearr_35141 = f__28578__auto__.call(null);
(statearr_35141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,msg_hist,msg_names,msg))
);

return c__28577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28577__auto___35242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___35242,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___35242,ch){
return (function (state_35225){
var state_val_35226 = (state_35225[(1)]);
if((state_val_35226 === (1))){
var state_35225__$1 = state_35225;
var statearr_35227_35243 = state_35225__$1;
(statearr_35227_35243[(2)] = null);

(statearr_35227_35243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (2))){
var state_35225__$1 = state_35225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35225__$1,(4),ch);
} else {
if((state_val_35226 === (3))){
var inst_35223 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35225__$1,inst_35223);
} else {
if((state_val_35226 === (4))){
var inst_35213 = (state_35225[(7)]);
var inst_35213__$1 = (state_35225[(2)]);
var state_35225__$1 = (function (){var statearr_35228 = state_35225;
(statearr_35228[(7)] = inst_35213__$1);

return statearr_35228;
})();
if(cljs.core.truth_(inst_35213__$1)){
var statearr_35229_35244 = state_35225__$1;
(statearr_35229_35244[(1)] = (5));

} else {
var statearr_35230_35245 = state_35225__$1;
(statearr_35230_35245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (5))){
var inst_35213 = (state_35225[(7)]);
var inst_35215 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35213);
var state_35225__$1 = state_35225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35225__$1,(8),inst_35215);
} else {
if((state_val_35226 === (6))){
var state_35225__$1 = state_35225;
var statearr_35231_35246 = state_35225__$1;
(statearr_35231_35246[(2)] = null);

(statearr_35231_35246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (7))){
var inst_35221 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35232_35247 = state_35225__$1;
(statearr_35232_35247[(2)] = inst_35221);

(statearr_35232_35247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (8))){
var inst_35217 = (state_35225[(2)]);
var state_35225__$1 = (function (){var statearr_35233 = state_35225;
(statearr_35233[(8)] = inst_35217);

return statearr_35233;
})();
var statearr_35234_35248 = state_35225__$1;
(statearr_35234_35248[(2)] = null);

(statearr_35234_35248[(1)] = (2));


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
});})(c__28577__auto___35242,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___35242,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_35238 = [null,null,null,null,null,null,null,null,null];
(statearr_35238[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28466__auto__);

(statearr_35238[(1)] = (1));

return statearr_35238;
});
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1 = (function (state_35225){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35239){if((e35239 instanceof Object)){
var ex__28469__auto__ = e35239;
var statearr_35240_35249 = state_35225;
(statearr_35240_35249[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35250 = state_35225;
state_35225 = G__35250;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = function(state_35225){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1.call(this,state_35225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___35242,ch))
})();
var state__28579__auto__ = (function (){var statearr_35241 = f__28578__auto__.call(null);
(statearr_35241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___35242);

return statearr_35241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___35242,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_35271){
var state_val_35272 = (state_35271[(1)]);
if((state_val_35272 === (1))){
var inst_35266 = cljs.core.async.timeout.call(null,(3000));
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35271__$1,(2),inst_35266);
} else {
if((state_val_35272 === (2))){
var inst_35268 = (state_35271[(2)]);
var inst_35269 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35271__$1 = (function (){var statearr_35273 = state_35271;
(statearr_35273[(7)] = inst_35268);

return statearr_35273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35271__$1,inst_35269);
} else {
return null;
}
}
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_35277 = [null,null,null,null,null,null,null,null];
(statearr_35277[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__);

(statearr_35277[(1)] = (1));

return statearr_35277;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1 = (function (state_35271){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35278){if((e35278 instanceof Object)){
var ex__28469__auto__ = e35278;
var statearr_35279_35281 = state_35271;
(statearr_35279_35281[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35282 = state_35271;
state_35271 = G__35282;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__ = function(state_35271){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1.call(this,state_35271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35280 = f__28578__auto__.call(null);
(statearr_35280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35305){
var state_val_35306 = (state_35305[(1)]);
if((state_val_35306 === (1))){
var inst_35299 = cljs.core.async.timeout.call(null,(2000));
var state_35305__$1 = state_35305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35305__$1,(2),inst_35299);
} else {
if((state_val_35306 === (2))){
var inst_35301 = (state_35305[(2)]);
var inst_35302 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35303 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35302);
var state_35305__$1 = (function (){var statearr_35307 = state_35305;
(statearr_35307[(7)] = inst_35301);

return statearr_35307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35305__$1,inst_35303);
} else {
return null;
}
}
});})(c__28577__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_35311 = [null,null,null,null,null,null,null,null];
(statearr_35311[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__);

(statearr_35311[(1)] = (1));

return statearr_35311;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1 = (function (state_35305){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35312){if((e35312 instanceof Object)){
var ex__28469__auto__ = e35312;
var statearr_35313_35315 = state_35305;
(statearr_35313_35315[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35316 = state_35305;
state_35305 = G__35316;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__ = function(state_35305){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1.call(this,state_35305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35314 = f__28578__auto__.call(null);
(statearr_35314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,figwheel_version,temp__4657__auto__))
);

return c__28577__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35317){
var map__35321 = p__35317;
var map__35321__$1 = ((((!((map__35321 == null)))?((((map__35321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35321):map__35321);
var file = cljs.core.get.call(null,map__35321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35321__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35321__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35323 = "";
var G__35323__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35323),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35323);
var G__35323__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35323__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35323__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = line;
if(cljs.core.truth_(and__24863__auto__)){
return column;
} else {
return and__24863__auto__;
}
})())){
return [cljs.core.str(G__35323__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35323__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35324){
var map__35331 = p__35324;
var map__35331__$1 = ((((!((map__35331 == null)))?((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35331):map__35331);
var ed = map__35331__$1;
var formatted_exception = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35333_35337 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35334_35338 = null;
var count__35335_35339 = (0);
var i__35336_35340 = (0);
while(true){
if((i__35336_35340 < count__35335_35339)){
var msg_35341 = cljs.core._nth.call(null,chunk__35334_35338,i__35336_35340);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35341);

var G__35342 = seq__35333_35337;
var G__35343 = chunk__35334_35338;
var G__35344 = count__35335_35339;
var G__35345 = (i__35336_35340 + (1));
seq__35333_35337 = G__35342;
chunk__35334_35338 = G__35343;
count__35335_35339 = G__35344;
i__35336_35340 = G__35345;
continue;
} else {
var temp__4657__auto___35346 = cljs.core.seq.call(null,seq__35333_35337);
if(temp__4657__auto___35346){
var seq__35333_35347__$1 = temp__4657__auto___35346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35333_35347__$1)){
var c__25689__auto___35348 = cljs.core.chunk_first.call(null,seq__35333_35347__$1);
var G__35349 = cljs.core.chunk_rest.call(null,seq__35333_35347__$1);
var G__35350 = c__25689__auto___35348;
var G__35351 = cljs.core.count.call(null,c__25689__auto___35348);
var G__35352 = (0);
seq__35333_35337 = G__35349;
chunk__35334_35338 = G__35350;
count__35335_35339 = G__35351;
i__35336_35340 = G__35352;
continue;
} else {
var msg_35353 = cljs.core.first.call(null,seq__35333_35347__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35353);

var G__35354 = cljs.core.next.call(null,seq__35333_35347__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__35333_35337 = G__35354;
chunk__35334_35338 = G__35355;
count__35335_35339 = G__35356;
i__35336_35340 = G__35357;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35358){
var map__35361 = p__35358;
var map__35361__$1 = ((((!((map__35361 == null)))?((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35361):map__35361);
var w = map__35361__$1;
var message = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24863__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24863__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35373 = cljs.core.seq.call(null,plugins);
var chunk__35374 = null;
var count__35375 = (0);
var i__35376 = (0);
while(true){
if((i__35376 < count__35375)){
var vec__35377 = cljs.core._nth.call(null,chunk__35374,i__35376);
var k = cljs.core.nth.call(null,vec__35377,(0),null);
var plugin = cljs.core.nth.call(null,vec__35377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35383 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35373,chunk__35374,count__35375,i__35376,pl_35383,vec__35377,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35383.call(null,msg_hist);
});})(seq__35373,chunk__35374,count__35375,i__35376,pl_35383,vec__35377,k,plugin))
);
} else {
}

var G__35384 = seq__35373;
var G__35385 = chunk__35374;
var G__35386 = count__35375;
var G__35387 = (i__35376 + (1));
seq__35373 = G__35384;
chunk__35374 = G__35385;
count__35375 = G__35386;
i__35376 = G__35387;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35373);
if(temp__4657__auto__){
var seq__35373__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35373__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__35373__$1);
var G__35388 = cljs.core.chunk_rest.call(null,seq__35373__$1);
var G__35389 = c__25689__auto__;
var G__35390 = cljs.core.count.call(null,c__25689__auto__);
var G__35391 = (0);
seq__35373 = G__35388;
chunk__35374 = G__35389;
count__35375 = G__35390;
i__35376 = G__35391;
continue;
} else {
var vec__35380 = cljs.core.first.call(null,seq__35373__$1);
var k = cljs.core.nth.call(null,vec__35380,(0),null);
var plugin = cljs.core.nth.call(null,vec__35380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35392 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35373,chunk__35374,count__35375,i__35376,pl_35392,vec__35380,k,plugin,seq__35373__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35392.call(null,msg_hist);
});})(seq__35373,chunk__35374,count__35375,i__35376,pl_35392,vec__35380,k,plugin,seq__35373__$1,temp__4657__auto__))
);
} else {
}

var G__35393 = cljs.core.next.call(null,seq__35373__$1);
var G__35394 = null;
var G__35395 = (0);
var G__35396 = (0);
seq__35373 = G__35393;
chunk__35374 = G__35394;
count__35375 = G__35395;
i__35376 = G__35396;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35397 = [];
var len__25983__auto___35404 = arguments.length;
var i__25984__auto___35405 = (0);
while(true){
if((i__25984__auto___35405 < len__25983__auto___35404)){
args35397.push((arguments[i__25984__auto___35405]));

var G__35406 = (i__25984__auto___35405 + (1));
i__25984__auto___35405 = G__35406;
continue;
} else {
}
break;
}

var G__35399 = args35397.length;
switch (G__35399) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35397.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35400_35408 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35401_35409 = null;
var count__35402_35410 = (0);
var i__35403_35411 = (0);
while(true){
if((i__35403_35411 < count__35402_35410)){
var msg_35412 = cljs.core._nth.call(null,chunk__35401_35409,i__35403_35411);
figwheel.client.socket.handle_incoming_message.call(null,msg_35412);

var G__35413 = seq__35400_35408;
var G__35414 = chunk__35401_35409;
var G__35415 = count__35402_35410;
var G__35416 = (i__35403_35411 + (1));
seq__35400_35408 = G__35413;
chunk__35401_35409 = G__35414;
count__35402_35410 = G__35415;
i__35403_35411 = G__35416;
continue;
} else {
var temp__4657__auto___35417 = cljs.core.seq.call(null,seq__35400_35408);
if(temp__4657__auto___35417){
var seq__35400_35418__$1 = temp__4657__auto___35417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35400_35418__$1)){
var c__25689__auto___35419 = cljs.core.chunk_first.call(null,seq__35400_35418__$1);
var G__35420 = cljs.core.chunk_rest.call(null,seq__35400_35418__$1);
var G__35421 = c__25689__auto___35419;
var G__35422 = cljs.core.count.call(null,c__25689__auto___35419);
var G__35423 = (0);
seq__35400_35408 = G__35420;
chunk__35401_35409 = G__35421;
count__35402_35410 = G__35422;
i__35403_35411 = G__35423;
continue;
} else {
var msg_35424 = cljs.core.first.call(null,seq__35400_35418__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35424);

var G__35425 = cljs.core.next.call(null,seq__35400_35418__$1);
var G__35426 = null;
var G__35427 = (0);
var G__35428 = (0);
seq__35400_35408 = G__35425;
chunk__35401_35409 = G__35426;
count__35402_35410 = G__35427;
i__35403_35411 = G__35428;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25990__auto__ = [];
var len__25983__auto___35433 = arguments.length;
var i__25984__auto___35434 = (0);
while(true){
if((i__25984__auto___35434 < len__25983__auto___35433)){
args__25990__auto__.push((arguments[i__25984__auto___35434]));

var G__35435 = (i__25984__auto___35434 + (1));
i__25984__auto___35434 = G__35435;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35430){
var map__35431 = p__35430;
var map__35431__$1 = ((((!((map__35431 == null)))?((((map__35431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35431):map__35431);
var opts = map__35431__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35429){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35429));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35437){if((e35437 instanceof Error)){
var e = e35437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35437;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35441){
var map__35442 = p__35441;
var map__35442__$1 = ((((!((map__35442 == null)))?((((map__35442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35442):map__35442);
var msg_name = cljs.core.get.call(null,map__35442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476967114743