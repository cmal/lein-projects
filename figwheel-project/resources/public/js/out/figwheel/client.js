// Compiled by ClojureScript 1.9.293 {}
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
var args34599 = [];
var len__25983__auto___34602 = arguments.length;
var i__25984__auto___34603 = (0);
while(true){
if((i__25984__auto___34603 < len__25983__auto___34602)){
args34599.push((arguments[i__25984__auto___34603]));

var G__34604 = (i__25984__auto___34603 + (1));
i__25984__auto___34603 = G__34604;
continue;
} else {
}
break;
}

var G__34601 = args34599.length;
switch (G__34601) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34599.length)].join('')));

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
var len__25983__auto___34607 = arguments.length;
var i__25984__auto___34608 = (0);
while(true){
if((i__25984__auto___34608 < len__25983__auto___34607)){
args__25990__auto__.push((arguments[i__25984__auto___34608]));

var G__34609 = (i__25984__auto___34608 + (1));
i__25984__auto___34608 = G__34609;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34606){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34606));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25990__auto__ = [];
var len__25983__auto___34611 = arguments.length;
var i__25984__auto___34612 = (0);
while(true){
if((i__25984__auto___34612 < len__25983__auto___34611)){
args__25990__auto__.push((arguments[i__25984__auto___34612]));

var G__34613 = (i__25984__auto___34612 + (1));
i__25984__auto___34612 = G__34613;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34610){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34610));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34614 = cljs.core._EQ_;
var expr__34615 = (function (){var or__24875__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34618){if((e34618 instanceof Error)){
var e = e34618;
return false;
} else {
throw e34618;

}
}})();
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34614.call(null,"true",expr__34615))){
return true;
} else {
if(cljs.core.truth_(pred__34614.call(null,"false",expr__34615))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34615)].join('')));
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
}catch (e34620){if((e34620 instanceof Error)){
var e = e34620;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34620;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34621){
var map__34624 = p__34621;
var map__34624__$1 = ((((!((map__34624 == null)))?((((map__34624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34624):map__34624);
var message = cljs.core.get.call(null,map__34624__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34624__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28577__auto___34786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___34786,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___34786,ch){
return (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (7))){
var inst_34751 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34757_34787 = state_34755__$1;
(statearr_34757_34787[(2)] = inst_34751);

(statearr_34757_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (1))){
var state_34755__$1 = state_34755;
var statearr_34758_34788 = state_34755__$1;
(statearr_34758_34788[(2)] = null);

(statearr_34758_34788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (4))){
var inst_34708 = (state_34755[(7)]);
var inst_34708__$1 = (state_34755[(2)]);
var state_34755__$1 = (function (){var statearr_34759 = state_34755;
(statearr_34759[(7)] = inst_34708__$1);

return statearr_34759;
})();
if(cljs.core.truth_(inst_34708__$1)){
var statearr_34760_34789 = state_34755__$1;
(statearr_34760_34789[(1)] = (5));

} else {
var statearr_34761_34790 = state_34755__$1;
(statearr_34761_34790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (15))){
var inst_34715 = (state_34755[(8)]);
var inst_34730 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34715);
var inst_34731 = cljs.core.first.call(null,inst_34730);
var inst_34732 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34731);
var inst_34733 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34732)].join('');
var inst_34734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34733);
var state_34755__$1 = state_34755;
var statearr_34762_34791 = state_34755__$1;
(statearr_34762_34791[(2)] = inst_34734);

(statearr_34762_34791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (13))){
var inst_34739 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34763_34792 = state_34755__$1;
(statearr_34763_34792[(2)] = inst_34739);

(statearr_34763_34792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (6))){
var state_34755__$1 = state_34755;
var statearr_34764_34793 = state_34755__$1;
(statearr_34764_34793[(2)] = null);

(statearr_34764_34793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (17))){
var inst_34737 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34765_34794 = state_34755__$1;
(statearr_34765_34794[(2)] = inst_34737);

(statearr_34765_34794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (3))){
var inst_34753 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34755__$1,inst_34753);
} else {
if((state_val_34756 === (12))){
var inst_34714 = (state_34755[(9)]);
var inst_34728 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34714,opts);
var state_34755__$1 = state_34755;
if(cljs.core.truth_(inst_34728)){
var statearr_34766_34795 = state_34755__$1;
(statearr_34766_34795[(1)] = (15));

} else {
var statearr_34767_34796 = state_34755__$1;
(statearr_34767_34796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (2))){
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(4),ch);
} else {
if((state_val_34756 === (11))){
var inst_34715 = (state_34755[(8)]);
var inst_34720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34721 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34715);
var inst_34722 = cljs.core.async.timeout.call(null,(1000));
var inst_34723 = [inst_34721,inst_34722];
var inst_34724 = (new cljs.core.PersistentVector(null,2,(5),inst_34720,inst_34723,null));
var state_34755__$1 = state_34755;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34755__$1,(14),inst_34724);
} else {
if((state_val_34756 === (9))){
var inst_34715 = (state_34755[(8)]);
var inst_34741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34742 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34715);
var inst_34743 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34742);
var inst_34744 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34743)].join('');
var inst_34745 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34744);
var state_34755__$1 = (function (){var statearr_34768 = state_34755;
(statearr_34768[(10)] = inst_34741);

return statearr_34768;
})();
var statearr_34769_34797 = state_34755__$1;
(statearr_34769_34797[(2)] = inst_34745);

(statearr_34769_34797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (5))){
var inst_34708 = (state_34755[(7)]);
var inst_34710 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34711 = (new cljs.core.PersistentArrayMap(null,2,inst_34710,null));
var inst_34712 = (new cljs.core.PersistentHashSet(null,inst_34711,null));
var inst_34713 = figwheel.client.focus_msgs.call(null,inst_34712,inst_34708);
var inst_34714 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34713);
var inst_34715 = cljs.core.first.call(null,inst_34713);
var inst_34716 = figwheel.client.autoload_QMARK_.call(null);
var state_34755__$1 = (function (){var statearr_34770 = state_34755;
(statearr_34770[(9)] = inst_34714);

(statearr_34770[(8)] = inst_34715);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34716)){
var statearr_34771_34798 = state_34755__$1;
(statearr_34771_34798[(1)] = (8));

} else {
var statearr_34772_34799 = state_34755__$1;
(statearr_34772_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (14))){
var inst_34726 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34773_34800 = state_34755__$1;
(statearr_34773_34800[(2)] = inst_34726);

(statearr_34773_34800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (16))){
var state_34755__$1 = state_34755;
var statearr_34774_34801 = state_34755__$1;
(statearr_34774_34801[(2)] = null);

(statearr_34774_34801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (10))){
var inst_34747 = (state_34755[(2)]);
var state_34755__$1 = (function (){var statearr_34775 = state_34755;
(statearr_34775[(11)] = inst_34747);

return statearr_34775;
})();
var statearr_34776_34802 = state_34755__$1;
(statearr_34776_34802[(2)] = null);

(statearr_34776_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (8))){
var inst_34714 = (state_34755[(9)]);
var inst_34718 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34714,opts);
var state_34755__$1 = state_34755;
if(cljs.core.truth_(inst_34718)){
var statearr_34777_34803 = state_34755__$1;
(statearr_34777_34803[(1)] = (11));

} else {
var statearr_34778_34804 = state_34755__$1;
(statearr_34778_34804[(1)] = (12));

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
});})(c__28577__auto___34786,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___34786,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_34782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34782[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__);

(statearr_34782[(1)] = (1));

return statearr_34782;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1 = (function (state_34755){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_34755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e34783){if((e34783 instanceof Object)){
var ex__28469__auto__ = e34783;
var statearr_34784_34805 = state_34755;
(statearr_34784_34805[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_34755;
state_34755 = G__34806;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___34786,ch))
})();
var state__28579__auto__ = (function (){var statearr_34785 = f__28578__auto__.call(null);
(statearr_34785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___34786);

return statearr_34785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___34786,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34807_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34807_SHARP_));
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
var base_path_34810 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34810){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34809){if((e34809 instanceof Error)){
var e = e34809;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34810], null));
} else {
var e = e34809;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34810))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34811){
var map__34820 = p__34811;
var map__34820__$1 = ((((!((map__34820 == null)))?((((map__34820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34820):map__34820);
var opts = map__34820__$1;
var build_id = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34820,map__34820__$1,opts,build_id){
return (function (p__34822){
var vec__34823 = p__34822;
var seq__34824 = cljs.core.seq.call(null,vec__34823);
var first__34825 = cljs.core.first.call(null,seq__34824);
var seq__34824__$1 = cljs.core.next.call(null,seq__34824);
var map__34826 = first__34825;
var map__34826__$1 = ((((!((map__34826 == null)))?((((map__34826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34826):map__34826);
var msg = map__34826__$1;
var msg_name = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34824__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34823,seq__34824,first__34825,seq__34824__$1,map__34826,map__34826__$1,msg,msg_name,_,map__34820,map__34820__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34823,seq__34824,first__34825,seq__34824__$1,map__34826,map__34826__$1,msg,msg_name,_,map__34820,map__34820__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34820,map__34820__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34834){
var vec__34835 = p__34834;
var seq__34836 = cljs.core.seq.call(null,vec__34835);
var first__34837 = cljs.core.first.call(null,seq__34836);
var seq__34836__$1 = cljs.core.next.call(null,seq__34836);
var map__34838 = first__34837;
var map__34838__$1 = ((((!((map__34838 == null)))?((((map__34838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var msg = map__34838__$1;
var msg_name = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34836__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34840){
var map__34852 = p__34840;
var map__34852__$1 = ((((!((map__34852 == null)))?((((map__34852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34852):map__34852);
var on_compile_warning = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34852,map__34852__$1,on_compile_warning,on_compile_fail){
return (function (p__34854){
var vec__34855 = p__34854;
var seq__34856 = cljs.core.seq.call(null,vec__34855);
var first__34857 = cljs.core.first.call(null,seq__34856);
var seq__34856__$1 = cljs.core.next.call(null,seq__34856);
var map__34858 = first__34857;
var map__34858__$1 = ((((!((map__34858 == null)))?((((map__34858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34858):map__34858);
var msg = map__34858__$1;
var msg_name = cljs.core.get.call(null,map__34858__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34856__$1;
var pred__34860 = cljs.core._EQ_;
var expr__34861 = msg_name;
if(cljs.core.truth_(pred__34860.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34861))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34860.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34861))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34852,map__34852__$1,on_compile_warning,on_compile_fail))
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
return (function (state_35089){
var state_val_35090 = (state_35089[(1)]);
if((state_val_35090 === (7))){
var inst_35009 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35009)){
var statearr_35091_35141 = state_35089__$1;
(statearr_35091_35141[(1)] = (8));

} else {
var statearr_35092_35142 = state_35089__$1;
(statearr_35092_35142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (20))){
var inst_35083 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35093_35143 = state_35089__$1;
(statearr_35093_35143[(2)] = inst_35083);

(statearr_35093_35143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (27))){
var inst_35079 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35094_35144 = state_35089__$1;
(statearr_35094_35144[(2)] = inst_35079);

(statearr_35094_35144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (1))){
var inst_35002 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35002)){
var statearr_35095_35145 = state_35089__$1;
(statearr_35095_35145[(1)] = (2));

} else {
var statearr_35096_35146 = state_35089__$1;
(statearr_35096_35146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (24))){
var inst_35081 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35097_35147 = state_35089__$1;
(statearr_35097_35147[(2)] = inst_35081);

(statearr_35097_35147[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (4))){
var inst_35087 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35089__$1,inst_35087);
} else {
if((state_val_35090 === (15))){
var inst_35085 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35098_35148 = state_35089__$1;
(statearr_35098_35148[(2)] = inst_35085);

(statearr_35098_35148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (21))){
var inst_35038 = (state_35089[(2)]);
var inst_35039 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35040 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35039);
var state_35089__$1 = (function (){var statearr_35099 = state_35089;
(statearr_35099[(7)] = inst_35038);

return statearr_35099;
})();
var statearr_35100_35149 = state_35089__$1;
(statearr_35100_35149[(2)] = inst_35040);

(statearr_35100_35149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (31))){
var inst_35068 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35068)){
var statearr_35101_35150 = state_35089__$1;
(statearr_35101_35150[(1)] = (34));

} else {
var statearr_35102_35151 = state_35089__$1;
(statearr_35102_35151[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (32))){
var inst_35077 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35103_35152 = state_35089__$1;
(statearr_35103_35152[(2)] = inst_35077);

(statearr_35103_35152[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (33))){
var inst_35064 = (state_35089[(2)]);
var inst_35065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35066 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35065);
var state_35089__$1 = (function (){var statearr_35104 = state_35089;
(statearr_35104[(8)] = inst_35064);

return statearr_35104;
})();
var statearr_35105_35153 = state_35089__$1;
(statearr_35105_35153[(2)] = inst_35066);

(statearr_35105_35153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (13))){
var inst_35023 = figwheel.client.heads_up.clear.call(null);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(16),inst_35023);
} else {
if((state_val_35090 === (22))){
var inst_35044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35045 = figwheel.client.heads_up.append_warning_message.call(null,inst_35044);
var state_35089__$1 = state_35089;
var statearr_35106_35154 = state_35089__$1;
(statearr_35106_35154[(2)] = inst_35045);

(statearr_35106_35154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (36))){
var inst_35075 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35107_35155 = state_35089__$1;
(statearr_35107_35155[(2)] = inst_35075);

(statearr_35107_35155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (29))){
var inst_35055 = (state_35089[(2)]);
var inst_35056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35057 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35056);
var state_35089__$1 = (function (){var statearr_35108 = state_35089;
(statearr_35108[(9)] = inst_35055);

return statearr_35108;
})();
var statearr_35109_35156 = state_35089__$1;
(statearr_35109_35156[(2)] = inst_35057);

(statearr_35109_35156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (6))){
var inst_35004 = (state_35089[(10)]);
var state_35089__$1 = state_35089;
var statearr_35110_35157 = state_35089__$1;
(statearr_35110_35157[(2)] = inst_35004);

(statearr_35110_35157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (28))){
var inst_35051 = (state_35089[(2)]);
var inst_35052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35053 = figwheel.client.heads_up.display_warning.call(null,inst_35052);
var state_35089__$1 = (function (){var statearr_35111 = state_35089;
(statearr_35111[(11)] = inst_35051);

return statearr_35111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(29),inst_35053);
} else {
if((state_val_35090 === (25))){
var inst_35049 = figwheel.client.heads_up.clear.call(null);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(28),inst_35049);
} else {
if((state_val_35090 === (34))){
var inst_35070 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(37),inst_35070);
} else {
if((state_val_35090 === (17))){
var inst_35029 = (state_35089[(2)]);
var inst_35030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35031 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35030);
var state_35089__$1 = (function (){var statearr_35112 = state_35089;
(statearr_35112[(12)] = inst_35029);

return statearr_35112;
})();
var statearr_35113_35158 = state_35089__$1;
(statearr_35113_35158[(2)] = inst_35031);

(statearr_35113_35158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (3))){
var inst_35021 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35021)){
var statearr_35114_35159 = state_35089__$1;
(statearr_35114_35159[(1)] = (13));

} else {
var statearr_35115_35160 = state_35089__$1;
(statearr_35115_35160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (12))){
var inst_35017 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35116_35161 = state_35089__$1;
(statearr_35116_35161[(2)] = inst_35017);

(statearr_35116_35161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (2))){
var inst_35004 = (state_35089[(10)]);
var inst_35004__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35089__$1 = (function (){var statearr_35117 = state_35089;
(statearr_35117[(10)] = inst_35004__$1);

return statearr_35117;
})();
if(cljs.core.truth_(inst_35004__$1)){
var statearr_35118_35162 = state_35089__$1;
(statearr_35118_35162[(1)] = (5));

} else {
var statearr_35119_35163 = state_35089__$1;
(statearr_35119_35163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (23))){
var inst_35047 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35047)){
var statearr_35120_35164 = state_35089__$1;
(statearr_35120_35164[(1)] = (25));

} else {
var statearr_35121_35165 = state_35089__$1;
(statearr_35121_35165[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (35))){
var state_35089__$1 = state_35089;
var statearr_35122_35166 = state_35089__$1;
(statearr_35122_35166[(2)] = null);

(statearr_35122_35166[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (19))){
var inst_35042 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35042)){
var statearr_35123_35167 = state_35089__$1;
(statearr_35123_35167[(1)] = (22));

} else {
var statearr_35124_35168 = state_35089__$1;
(statearr_35124_35168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (11))){
var inst_35013 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35125_35169 = state_35089__$1;
(statearr_35125_35169[(2)] = inst_35013);

(statearr_35125_35169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (9))){
var inst_35015 = figwheel.client.heads_up.clear.call(null);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(12),inst_35015);
} else {
if((state_val_35090 === (5))){
var inst_35006 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35089__$1 = state_35089;
var statearr_35126_35170 = state_35089__$1;
(statearr_35126_35170[(2)] = inst_35006);

(statearr_35126_35170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (14))){
var inst_35033 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35033)){
var statearr_35127_35171 = state_35089__$1;
(statearr_35127_35171[(1)] = (18));

} else {
var statearr_35128_35172 = state_35089__$1;
(statearr_35128_35172[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (26))){
var inst_35059 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35059)){
var statearr_35129_35173 = state_35089__$1;
(statearr_35129_35173[(1)] = (30));

} else {
var statearr_35130_35174 = state_35089__$1;
(statearr_35130_35174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (16))){
var inst_35025 = (state_35089[(2)]);
var inst_35026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35027 = figwheel.client.heads_up.display_exception.call(null,inst_35026);
var state_35089__$1 = (function (){var statearr_35131 = state_35089;
(statearr_35131[(13)] = inst_35025);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(17),inst_35027);
} else {
if((state_val_35090 === (30))){
var inst_35061 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35062 = figwheel.client.heads_up.display_warning.call(null,inst_35061);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(33),inst_35062);
} else {
if((state_val_35090 === (10))){
var inst_35019 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35132_35175 = state_35089__$1;
(statearr_35132_35175[(2)] = inst_35019);

(statearr_35132_35175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (18))){
var inst_35035 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35036 = figwheel.client.heads_up.display_exception.call(null,inst_35035);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(21),inst_35036);
} else {
if((state_val_35090 === (37))){
var inst_35072 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35133_35176 = state_35089__$1;
(statearr_35133_35176[(2)] = inst_35072);

(statearr_35133_35176[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (8))){
var inst_35011 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(11),inst_35011);
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
var statearr_35137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35137[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__);

(statearr_35137[(1)] = (1));

return statearr_35137;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1 = (function (state_35089){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35138){if((e35138 instanceof Object)){
var ex__28469__auto__ = e35138;
var statearr_35139_35177 = state_35089;
(statearr_35139_35177[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35178 = state_35089;
state_35089 = G__35178;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__ = function(state_35089){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1.call(this,state_35089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,msg_hist,msg_names,msg))
})();
var state__28579__auto__ = (function (){var statearr_35140 = f__28578__auto__.call(null);
(statearr_35140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,msg_hist,msg_names,msg))
);

return c__28577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28577__auto___35241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___35241,ch){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___35241,ch){
return (function (state_35224){
var state_val_35225 = (state_35224[(1)]);
if((state_val_35225 === (1))){
var state_35224__$1 = state_35224;
var statearr_35226_35242 = state_35224__$1;
(statearr_35226_35242[(2)] = null);

(statearr_35226_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (2))){
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35224__$1,(4),ch);
} else {
if((state_val_35225 === (3))){
var inst_35222 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35224__$1,inst_35222);
} else {
if((state_val_35225 === (4))){
var inst_35212 = (state_35224[(7)]);
var inst_35212__$1 = (state_35224[(2)]);
var state_35224__$1 = (function (){var statearr_35227 = state_35224;
(statearr_35227[(7)] = inst_35212__$1);

return statearr_35227;
})();
if(cljs.core.truth_(inst_35212__$1)){
var statearr_35228_35243 = state_35224__$1;
(statearr_35228_35243[(1)] = (5));

} else {
var statearr_35229_35244 = state_35224__$1;
(statearr_35229_35244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (5))){
var inst_35212 = (state_35224[(7)]);
var inst_35214 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35212);
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35224__$1,(8),inst_35214);
} else {
if((state_val_35225 === (6))){
var state_35224__$1 = state_35224;
var statearr_35230_35245 = state_35224__$1;
(statearr_35230_35245[(2)] = null);

(statearr_35230_35245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (7))){
var inst_35220 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35231_35246 = state_35224__$1;
(statearr_35231_35246[(2)] = inst_35220);

(statearr_35231_35246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (8))){
var inst_35216 = (state_35224[(2)]);
var state_35224__$1 = (function (){var statearr_35232 = state_35224;
(statearr_35232[(8)] = inst_35216);

return statearr_35232;
})();
var statearr_35233_35247 = state_35224__$1;
(statearr_35233_35247[(2)] = null);

(statearr_35233_35247[(1)] = (2));


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
});})(c__28577__auto___35241,ch))
;
return ((function (switch__28465__auto__,c__28577__auto___35241,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0 = (function (){
var statearr_35237 = [null,null,null,null,null,null,null,null,null];
(statearr_35237[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28466__auto__);

(statearr_35237[(1)] = (1));

return statearr_35237;
});
var figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1 = (function (state_35224){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35238){if((e35238 instanceof Object)){
var ex__28469__auto__ = e35238;
var statearr_35239_35248 = state_35224;
(statearr_35239_35248[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35249 = state_35224;
state_35224 = G__35249;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__ = function(state_35224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1.call(this,state_35224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___35241,ch))
})();
var state__28579__auto__ = (function (){var statearr_35240 = f__28578__auto__.call(null);
(statearr_35240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___35241);

return statearr_35240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___35241,ch))
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
return (function (state_35270){
var state_val_35271 = (state_35270[(1)]);
if((state_val_35271 === (1))){
var inst_35265 = cljs.core.async.timeout.call(null,(3000));
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(2),inst_35265);
} else {
if((state_val_35271 === (2))){
var inst_35267 = (state_35270[(2)]);
var inst_35268 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35270__$1 = (function (){var statearr_35272 = state_35270;
(statearr_35272[(7)] = inst_35267);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
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
var statearr_35276 = [null,null,null,null,null,null,null,null];
(statearr_35276[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__);

(statearr_35276[(1)] = (1));

return statearr_35276;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1 = (function (state_35270){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35277){if((e35277 instanceof Object)){
var ex__28469__auto__ = e35277;
var statearr_35278_35280 = state_35270;
(statearr_35278_35280[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35281 = state_35270;
state_35270 = G__35281;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35279 = f__28578__auto__.call(null);
(statearr_35279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35279;
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
return (function (state_35304){
var state_val_35305 = (state_35304[(1)]);
if((state_val_35305 === (1))){
var inst_35298 = cljs.core.async.timeout.call(null,(2000));
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35304__$1,(2),inst_35298);
} else {
if((state_val_35305 === (2))){
var inst_35300 = (state_35304[(2)]);
var inst_35301 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35302 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35301);
var state_35304__$1 = (function (){var statearr_35306 = state_35304;
(statearr_35306[(7)] = inst_35300);

return statearr_35306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35304__$1,inst_35302);
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
var statearr_35310 = [null,null,null,null,null,null,null,null];
(statearr_35310[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__);

(statearr_35310[(1)] = (1));

return statearr_35310;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1 = (function (state_35304){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_35304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e35311){if((e35311 instanceof Object)){
var ex__28469__auto__ = e35311;
var statearr_35312_35314 = state_35304;
(statearr_35312_35314[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35315 = state_35304;
state_35304 = G__35315;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__ = function(state_35304){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1.call(this,state_35304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28579__auto__ = (function (){var statearr_35313 = f__28578__auto__.call(null);
(statearr_35313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_35313;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35316){
var map__35320 = p__35316;
var map__35320__$1 = ((((!((map__35320 == null)))?((((map__35320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35320):map__35320);
var file = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35322 = "";
var G__35322__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35322),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35322);
var G__35322__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35322__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35322__$1);
if(cljs.core.truth_((function (){var and__24863__auto__ = line;
if(cljs.core.truth_(and__24863__auto__)){
return column;
} else {
return and__24863__auto__;
}
})())){
return [cljs.core.str(G__35322__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35322__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35323){
var map__35330 = p__35323;
var map__35330__$1 = ((((!((map__35330 == null)))?((((map__35330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35330):map__35330);
var ed = map__35330__$1;
var formatted_exception = cljs.core.get.call(null,map__35330__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35330__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35330__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35332_35336 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35333_35337 = null;
var count__35334_35338 = (0);
var i__35335_35339 = (0);
while(true){
if((i__35335_35339 < count__35334_35338)){
var msg_35340 = cljs.core._nth.call(null,chunk__35333_35337,i__35335_35339);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35340);

var G__35341 = seq__35332_35336;
var G__35342 = chunk__35333_35337;
var G__35343 = count__35334_35338;
var G__35344 = (i__35335_35339 + (1));
seq__35332_35336 = G__35341;
chunk__35333_35337 = G__35342;
count__35334_35338 = G__35343;
i__35335_35339 = G__35344;
continue;
} else {
var temp__4657__auto___35345 = cljs.core.seq.call(null,seq__35332_35336);
if(temp__4657__auto___35345){
var seq__35332_35346__$1 = temp__4657__auto___35345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35332_35346__$1)){
var c__25689__auto___35347 = cljs.core.chunk_first.call(null,seq__35332_35346__$1);
var G__35348 = cljs.core.chunk_rest.call(null,seq__35332_35346__$1);
var G__35349 = c__25689__auto___35347;
var G__35350 = cljs.core.count.call(null,c__25689__auto___35347);
var G__35351 = (0);
seq__35332_35336 = G__35348;
chunk__35333_35337 = G__35349;
count__35334_35338 = G__35350;
i__35335_35339 = G__35351;
continue;
} else {
var msg_35352 = cljs.core.first.call(null,seq__35332_35346__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35352);

var G__35353 = cljs.core.next.call(null,seq__35332_35346__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__35332_35336 = G__35353;
chunk__35333_35337 = G__35354;
count__35334_35338 = G__35355;
i__35335_35339 = G__35356;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35357){
var map__35360 = p__35357;
var map__35360__$1 = ((((!((map__35360 == null)))?((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35360):map__35360);
var w = map__35360__$1;
var message = cljs.core.get.call(null,map__35360__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__35372 = cljs.core.seq.call(null,plugins);
var chunk__35373 = null;
var count__35374 = (0);
var i__35375 = (0);
while(true){
if((i__35375 < count__35374)){
var vec__35376 = cljs.core._nth.call(null,chunk__35373,i__35375);
var k = cljs.core.nth.call(null,vec__35376,(0),null);
var plugin = cljs.core.nth.call(null,vec__35376,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35372,chunk__35373,count__35374,i__35375,pl_35382,vec__35376,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35382.call(null,msg_hist);
});})(seq__35372,chunk__35373,count__35374,i__35375,pl_35382,vec__35376,k,plugin))
);
} else {
}

var G__35383 = seq__35372;
var G__35384 = chunk__35373;
var G__35385 = count__35374;
var G__35386 = (i__35375 + (1));
seq__35372 = G__35383;
chunk__35373 = G__35384;
count__35374 = G__35385;
i__35375 = G__35386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35372);
if(temp__4657__auto__){
var seq__35372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35372__$1)){
var c__25689__auto__ = cljs.core.chunk_first.call(null,seq__35372__$1);
var G__35387 = cljs.core.chunk_rest.call(null,seq__35372__$1);
var G__35388 = c__25689__auto__;
var G__35389 = cljs.core.count.call(null,c__25689__auto__);
var G__35390 = (0);
seq__35372 = G__35387;
chunk__35373 = G__35388;
count__35374 = G__35389;
i__35375 = G__35390;
continue;
} else {
var vec__35379 = cljs.core.first.call(null,seq__35372__$1);
var k = cljs.core.nth.call(null,vec__35379,(0),null);
var plugin = cljs.core.nth.call(null,vec__35379,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35391 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35372,chunk__35373,count__35374,i__35375,pl_35391,vec__35379,k,plugin,seq__35372__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35391.call(null,msg_hist);
});})(seq__35372,chunk__35373,count__35374,i__35375,pl_35391,vec__35379,k,plugin,seq__35372__$1,temp__4657__auto__))
);
} else {
}

var G__35392 = cljs.core.next.call(null,seq__35372__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__35372 = G__35392;
chunk__35373 = G__35393;
count__35374 = G__35394;
i__35375 = G__35395;
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
var args35396 = [];
var len__25983__auto___35403 = arguments.length;
var i__25984__auto___35404 = (0);
while(true){
if((i__25984__auto___35404 < len__25983__auto___35403)){
args35396.push((arguments[i__25984__auto___35404]));

var G__35405 = (i__25984__auto___35404 + (1));
i__25984__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var G__35398 = args35396.length;
switch (G__35398) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35396.length)].join('')));

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

var seq__35399_35407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35400_35408 = null;
var count__35401_35409 = (0);
var i__35402_35410 = (0);
while(true){
if((i__35402_35410 < count__35401_35409)){
var msg_35411 = cljs.core._nth.call(null,chunk__35400_35408,i__35402_35410);
figwheel.client.socket.handle_incoming_message.call(null,msg_35411);

var G__35412 = seq__35399_35407;
var G__35413 = chunk__35400_35408;
var G__35414 = count__35401_35409;
var G__35415 = (i__35402_35410 + (1));
seq__35399_35407 = G__35412;
chunk__35400_35408 = G__35413;
count__35401_35409 = G__35414;
i__35402_35410 = G__35415;
continue;
} else {
var temp__4657__auto___35416 = cljs.core.seq.call(null,seq__35399_35407);
if(temp__4657__auto___35416){
var seq__35399_35417__$1 = temp__4657__auto___35416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35399_35417__$1)){
var c__25689__auto___35418 = cljs.core.chunk_first.call(null,seq__35399_35417__$1);
var G__35419 = cljs.core.chunk_rest.call(null,seq__35399_35417__$1);
var G__35420 = c__25689__auto___35418;
var G__35421 = cljs.core.count.call(null,c__25689__auto___35418);
var G__35422 = (0);
seq__35399_35407 = G__35419;
chunk__35400_35408 = G__35420;
count__35401_35409 = G__35421;
i__35402_35410 = G__35422;
continue;
} else {
var msg_35423 = cljs.core.first.call(null,seq__35399_35417__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35423);

var G__35424 = cljs.core.next.call(null,seq__35399_35417__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35399_35407 = G__35424;
chunk__35400_35408 = G__35425;
count__35401_35409 = G__35426;
i__35402_35410 = G__35427;
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
var len__25983__auto___35432 = arguments.length;
var i__25984__auto___35433 = (0);
while(true){
if((i__25984__auto___35433 < len__25983__auto___35432)){
args__25990__auto__.push((arguments[i__25984__auto___35433]));

var G__35434 = (i__25984__auto___35433 + (1));
i__25984__auto___35433 = G__35434;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((0) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25991__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35429){
var map__35430 = p__35429;
var map__35430__$1 = ((((!((map__35430 == null)))?((((map__35430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35430):map__35430);
var opts = map__35430__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35428){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35428));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35436){if((e35436 instanceof Error)){
var e = e35436;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35436;

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
return (function (p__35440){
var map__35441 = p__35440;
var map__35441__$1 = ((((!((map__35441 == null)))?((((map__35441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35441):map__35441);
var msg_name = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476966072385