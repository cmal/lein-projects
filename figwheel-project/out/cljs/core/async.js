// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28622 = [];
var len__25983__auto___28628 = arguments.length;
var i__25984__auto___28629 = (0);
while(true){
if((i__25984__auto___28629 < len__25983__auto___28628)){
args28622.push((arguments[i__25984__auto___28629]));

var G__28630 = (i__25984__auto___28629 + (1));
i__25984__auto___28629 = G__28630;
continue;
} else {
}
break;
}

var G__28624 = args28622.length;
switch (G__28624) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28622.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28625 = (function (f,blockable,meta28626){
this.f = f;
this.blockable = blockable;
this.meta28626 = meta28626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28627,meta28626__$1){
var self__ = this;
var _28627__$1 = this;
return (new cljs.core.async.t_cljs$core$async28625(self__.f,self__.blockable,meta28626__$1));
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28627){
var self__ = this;
var _28627__$1 = this;
return self__.meta28626;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28626","meta28626",-979470726,null)], null);
});

cljs.core.async.t_cljs$core$async28625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28625";

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28625");
});

cljs.core.async.__GT_t_cljs$core$async28625 = (function cljs$core$async$__GT_t_cljs$core$async28625(f__$1,blockable__$1,meta28626){
return (new cljs.core.async.t_cljs$core$async28625(f__$1,blockable__$1,meta28626));
});

}

return (new cljs.core.async.t_cljs$core$async28625(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28634 = [];
var len__25983__auto___28637 = arguments.length;
var i__25984__auto___28638 = (0);
while(true){
if((i__25984__auto___28638 < len__25983__auto___28637)){
args28634.push((arguments[i__25984__auto___28638]));

var G__28639 = (i__25984__auto___28638 + (1));
i__25984__auto___28638 = G__28639;
continue;
} else {
}
break;
}

var G__28636 = args28634.length;
switch (G__28636) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28634.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28641 = [];
var len__25983__auto___28644 = arguments.length;
var i__25984__auto___28645 = (0);
while(true){
if((i__25984__auto___28645 < len__25983__auto___28644)){
args28641.push((arguments[i__25984__auto___28645]));

var G__28646 = (i__25984__auto___28645 + (1));
i__25984__auto___28645 = G__28646;
continue;
} else {
}
break;
}

var G__28643 = args28641.length;
switch (G__28643) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28641.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28648 = [];
var len__25983__auto___28651 = arguments.length;
var i__25984__auto___28652 = (0);
while(true){
if((i__25984__auto___28652 < len__25983__auto___28651)){
args28648.push((arguments[i__25984__auto___28652]));

var G__28653 = (i__25984__auto___28652 + (1));
i__25984__auto___28652 = G__28653;
continue;
} else {
}
break;
}

var G__28650 = args28648.length;
switch (G__28650) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28648.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28655,ret){
return (function (){
return fn1.call(null,val_28655);
});})(val_28655,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28656 = [];
var len__25983__auto___28659 = arguments.length;
var i__25984__auto___28660 = (0);
while(true){
if((i__25984__auto___28660 < len__25983__auto___28659)){
args28656.push((arguments[i__25984__auto___28660]));

var G__28661 = (i__25984__auto___28660 + (1));
i__25984__auto___28660 = G__28661;
continue;
} else {
}
break;
}

var G__28658 = args28656.length;
switch (G__28658) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28656.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25793__auto___28663 = n;
var x_28664 = (0);
while(true){
if((x_28664 < n__25793__auto___28663)){
(a[x_28664] = (0));

var G__28665 = (x_28664 + (1));
x_28664 = G__28665;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28666 = (i + (1));
i = G__28666;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28670 = (function (flag,meta28671){
this.flag = flag;
this.meta28671 = meta28671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28672,meta28671__$1){
var self__ = this;
var _28672__$1 = this;
return (new cljs.core.async.t_cljs$core$async28670(self__.flag,meta28671__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28672){
var self__ = this;
var _28672__$1 = this;
return self__.meta28671;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28671","meta28671",-1871706037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28670";

cljs.core.async.t_cljs$core$async28670.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28670");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28670 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28670(flag__$1,meta28671){
return (new cljs.core.async.t_cljs$core$async28670(flag__$1,meta28671));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28670(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28676 = (function (flag,cb,meta28677){
this.flag = flag;
this.cb = cb;
this.meta28677 = meta28677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28678,meta28677__$1){
var self__ = this;
var _28678__$1 = this;
return (new cljs.core.async.t_cljs$core$async28676(self__.flag,self__.cb,meta28677__$1));
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28678){
var self__ = this;
var _28678__$1 = this;
return self__.meta28677;
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28677","meta28677",1834703698,null)], null);
});

cljs.core.async.t_cljs$core$async28676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28676";

cljs.core.async.t_cljs$core$async28676.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async28676");
});

cljs.core.async.__GT_t_cljs$core$async28676 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28676(flag__$1,cb__$1,meta28677){
return (new cljs.core.async.t_cljs$core$async28676(flag__$1,cb__$1,meta28677));
});

}

return (new cljs.core.async.t_cljs$core$async28676(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28679_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28679_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28680_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24875__auto__ = wport;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28681 = (i + (1));
i = G__28681;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24875__auto__ = ret;
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24863__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24863__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24863__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___28687 = arguments.length;
var i__25984__auto___28688 = (0);
while(true){
if((i__25984__auto___28688 < len__25983__auto___28687)){
args__25990__auto__.push((arguments[i__25984__auto___28688]));

var G__28689 = (i__25984__auto___28688 + (1));
i__25984__auto___28688 = G__28689;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((1) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25991__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28684){
var map__28685 = p__28684;
var map__28685__$1 = ((((!((map__28685 == null)))?((((map__28685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28685):map__28685);
var opts = map__28685__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28682){
var G__28683 = cljs.core.first.call(null,seq28682);
var seq28682__$1 = cljs.core.next.call(null,seq28682);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28683,seq28682__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28690 = [];
var len__25983__auto___28740 = arguments.length;
var i__25984__auto___28741 = (0);
while(true){
if((i__25984__auto___28741 < len__25983__auto___28740)){
args28690.push((arguments[i__25984__auto___28741]));

var G__28742 = (i__25984__auto___28741 + (1));
i__25984__auto___28741 = G__28742;
continue;
} else {
}
break;
}

var G__28692 = args28690.length;
switch (G__28692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28690.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28577__auto___28744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___28744){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___28744){
return (function (state_28716){
var state_val_28717 = (state_28716[(1)]);
if((state_val_28717 === (7))){
var inst_28712 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28718_28745 = state_28716__$1;
(statearr_28718_28745[(2)] = inst_28712);

(statearr_28718_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (1))){
var state_28716__$1 = state_28716;
var statearr_28719_28746 = state_28716__$1;
(statearr_28719_28746[(2)] = null);

(statearr_28719_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (4))){
var inst_28695 = (state_28716[(7)]);
var inst_28695__$1 = (state_28716[(2)]);
var inst_28696 = (inst_28695__$1 == null);
var state_28716__$1 = (function (){var statearr_28720 = state_28716;
(statearr_28720[(7)] = inst_28695__$1);

return statearr_28720;
})();
if(cljs.core.truth_(inst_28696)){
var statearr_28721_28747 = state_28716__$1;
(statearr_28721_28747[(1)] = (5));

} else {
var statearr_28722_28748 = state_28716__$1;
(statearr_28722_28748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (13))){
var state_28716__$1 = state_28716;
var statearr_28723_28749 = state_28716__$1;
(statearr_28723_28749[(2)] = null);

(statearr_28723_28749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (6))){
var inst_28695 = (state_28716[(7)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28716__$1,(11),to,inst_28695);
} else {
if((state_val_28717 === (3))){
var inst_28714 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28716__$1,inst_28714);
} else {
if((state_val_28717 === (12))){
var state_28716__$1 = state_28716;
var statearr_28724_28750 = state_28716__$1;
(statearr_28724_28750[(2)] = null);

(statearr_28724_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (2))){
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(4),from);
} else {
if((state_val_28717 === (11))){
var inst_28705 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
if(cljs.core.truth_(inst_28705)){
var statearr_28725_28751 = state_28716__$1;
(statearr_28725_28751[(1)] = (12));

} else {
var statearr_28726_28752 = state_28716__$1;
(statearr_28726_28752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (9))){
var state_28716__$1 = state_28716;
var statearr_28727_28753 = state_28716__$1;
(statearr_28727_28753[(2)] = null);

(statearr_28727_28753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (5))){
var state_28716__$1 = state_28716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28728_28754 = state_28716__$1;
(statearr_28728_28754[(1)] = (8));

} else {
var statearr_28729_28755 = state_28716__$1;
(statearr_28729_28755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (14))){
var inst_28710 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28730_28756 = state_28716__$1;
(statearr_28730_28756[(2)] = inst_28710);

(statearr_28730_28756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (10))){
var inst_28702 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28731_28757 = state_28716__$1;
(statearr_28731_28757[(2)] = inst_28702);

(statearr_28731_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (8))){
var inst_28699 = cljs.core.async.close_BANG_.call(null,to);
var state_28716__$1 = state_28716;
var statearr_28732_28758 = state_28716__$1;
(statearr_28732_28758[(2)] = inst_28699);

(statearr_28732_28758[(1)] = (10));


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
});})(c__28577__auto___28744))
;
return ((function (switch__28465__auto__,c__28577__auto___28744){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_28716){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28737){if((e28737 instanceof Object)){
var ex__28469__auto__ = e28737;
var statearr_28738_28759 = state_28716;
(statearr_28738_28759[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28716;
state_28716 = G__28760;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_28716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_28716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___28744))
})();
var state__28579__auto__ = (function (){var statearr_28739 = f__28578__auto__.call(null);
(statearr_28739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___28744);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___28744))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28948){
var vec__28949 = p__28948;
var v = cljs.core.nth.call(null,vec__28949,(0),null);
var p = cljs.core.nth.call(null,vec__28949,(1),null);
var job = vec__28949;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28577__auto___29135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function (state_28956){
var state_val_28957 = (state_28956[(1)]);
if((state_val_28957 === (1))){
var state_28956__$1 = state_28956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28956__$1,(2),res,v);
} else {
if((state_val_28957 === (2))){
var inst_28953 = (state_28956[(2)]);
var inst_28954 = cljs.core.async.close_BANG_.call(null,res);
var state_28956__$1 = (function (){var statearr_28958 = state_28956;
(statearr_28958[(7)] = inst_28953);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28956__$1,inst_28954);
} else {
return null;
}
}
});})(c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
;
return ((function (switch__28465__auto__,c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_28962 = [null,null,null,null,null,null,null,null];
(statearr_28962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_28962[(1)] = (1));

return statearr_28962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_28956){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28963){if((e28963 instanceof Object)){
var ex__28469__auto__ = e28963;
var statearr_28964_29136 = state_28956;
(statearr_28964_29136[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29137 = state_28956;
state_28956 = G__29137;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_28956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_28956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
})();
var state__28579__auto__ = (function (){var statearr_28965 = f__28578__auto__.call(null);
(statearr_28965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29135);

return statearr_28965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29135,res,vec__28949,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28966){
var vec__28967 = p__28966;
var v = cljs.core.nth.call(null,vec__28967,(0),null);
var p = cljs.core.nth.call(null,vec__28967,(1),null);
var job = vec__28967;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25793__auto___29138 = n;
var __29139 = (0);
while(true){
if((__29139 < n__25793__auto___29138)){
var G__28970_29140 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28970_29140) {
case "compute":
var c__28577__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29139,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (__29139,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (1))){
var state_28983__$1 = state_28983;
var statearr_28985_29143 = state_28983__$1;
(statearr_28985_29143[(2)] = null);

(statearr_28985_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (2))){
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28983__$1,(4),jobs);
} else {
if((state_val_28984 === (3))){
var inst_28981 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (4))){
var inst_28973 = (state_28983[(2)]);
var inst_28974 = process.call(null,inst_28973);
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28974)){
var statearr_28986_29144 = state_28983__$1;
(statearr_28986_29144[(1)] = (5));

} else {
var statearr_28987_29145 = state_28983__$1;
(statearr_28987_29145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (5))){
var state_28983__$1 = state_28983;
var statearr_28988_29146 = state_28983__$1;
(statearr_28988_29146[(2)] = null);

(statearr_28988_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (6))){
var state_28983__$1 = state_28983;
var statearr_28989_29147 = state_28983__$1;
(statearr_28989_29147[(2)] = null);

(statearr_28989_29147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (7))){
var inst_28979 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28990_29148 = state_28983__$1;
(statearr_28990_29148[(2)] = inst_28979);

(statearr_28990_29148[(1)] = (3));


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
});})(__29139,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
;
return ((function (__29139,switch__28465__auto__,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_28994 = [null,null,null,null,null,null,null];
(statearr_28994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_28994[(1)] = (1));

return statearr_28994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_28983){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_28983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e28995){if((e28995 instanceof Object)){
var ex__28469__auto__ = e28995;
var statearr_28996_29149 = state_28983;
(statearr_28996_29149[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29150 = state_28983;
state_28983 = G__29150;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(__29139,switch__28465__auto__,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_28997 = f__28578__auto__.call(null);
(statearr_28997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29142);

return statearr_28997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(__29139,c__28577__auto___29142,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
);


break;
case "async":
var c__28577__auto___29151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29139,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (__29139,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function (state_29010){
var state_val_29011 = (state_29010[(1)]);
if((state_val_29011 === (1))){
var state_29010__$1 = state_29010;
var statearr_29012_29152 = state_29010__$1;
(statearr_29012_29152[(2)] = null);

(statearr_29012_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (2))){
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(4),jobs);
} else {
if((state_val_29011 === (3))){
var inst_29008 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29010__$1,inst_29008);
} else {
if((state_val_29011 === (4))){
var inst_29000 = (state_29010[(2)]);
var inst_29001 = async.call(null,inst_29000);
var state_29010__$1 = state_29010;
if(cljs.core.truth_(inst_29001)){
var statearr_29013_29153 = state_29010__$1;
(statearr_29013_29153[(1)] = (5));

} else {
var statearr_29014_29154 = state_29010__$1;
(statearr_29014_29154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (5))){
var state_29010__$1 = state_29010;
var statearr_29015_29155 = state_29010__$1;
(statearr_29015_29155[(2)] = null);

(statearr_29015_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (6))){
var state_29010__$1 = state_29010;
var statearr_29016_29156 = state_29010__$1;
(statearr_29016_29156[(2)] = null);

(statearr_29016_29156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (7))){
var inst_29006 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29017_29157 = state_29010__$1;
(statearr_29017_29157[(2)] = inst_29006);

(statearr_29017_29157[(1)] = (3));


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
});})(__29139,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
;
return ((function (__29139,switch__28465__auto__,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29021 = [null,null,null,null,null,null,null];
(statearr_29021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29021[(1)] = (1));

return statearr_29021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29010){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29022){if((e29022 instanceof Object)){
var ex__28469__auto__ = e29022;
var statearr_29023_29158 = state_29010;
(statearr_29023_29158[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29010;
state_29010 = G__29159;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(__29139,switch__28465__auto__,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29024 = f__28578__auto__.call(null);
(statearr_29024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29151);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(__29139,c__28577__auto___29151,G__28970_29140,n__25793__auto___29138,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29160 = (__29139 + (1));
__29139 = G__29160;
continue;
} else {
}
break;
}

var c__28577__auto___29161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29161,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29161,jobs,results,process,async){
return (function (state_29046){
var state_val_29047 = (state_29046[(1)]);
if((state_val_29047 === (1))){
var state_29046__$1 = state_29046;
var statearr_29048_29162 = state_29046__$1;
(statearr_29048_29162[(2)] = null);

(statearr_29048_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (2))){
var state_29046__$1 = state_29046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29046__$1,(4),from);
} else {
if((state_val_29047 === (3))){
var inst_29044 = (state_29046[(2)]);
var state_29046__$1 = state_29046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29046__$1,inst_29044);
} else {
if((state_val_29047 === (4))){
var inst_29027 = (state_29046[(7)]);
var inst_29027__$1 = (state_29046[(2)]);
var inst_29028 = (inst_29027__$1 == null);
var state_29046__$1 = (function (){var statearr_29049 = state_29046;
(statearr_29049[(7)] = inst_29027__$1);

return statearr_29049;
})();
if(cljs.core.truth_(inst_29028)){
var statearr_29050_29163 = state_29046__$1;
(statearr_29050_29163[(1)] = (5));

} else {
var statearr_29051_29164 = state_29046__$1;
(statearr_29051_29164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (5))){
var inst_29030 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29046__$1 = state_29046;
var statearr_29052_29165 = state_29046__$1;
(statearr_29052_29165[(2)] = inst_29030);

(statearr_29052_29165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (6))){
var inst_29027 = (state_29046[(7)]);
var inst_29032 = (state_29046[(8)]);
var inst_29032__$1 = cljs.core.async.chan.call(null,(1));
var inst_29033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29034 = [inst_29027,inst_29032__$1];
var inst_29035 = (new cljs.core.PersistentVector(null,2,(5),inst_29033,inst_29034,null));
var state_29046__$1 = (function (){var statearr_29053 = state_29046;
(statearr_29053[(8)] = inst_29032__$1);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29046__$1,(8),jobs,inst_29035);
} else {
if((state_val_29047 === (7))){
var inst_29042 = (state_29046[(2)]);
var state_29046__$1 = state_29046;
var statearr_29054_29166 = state_29046__$1;
(statearr_29054_29166[(2)] = inst_29042);

(statearr_29054_29166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29047 === (8))){
var inst_29032 = (state_29046[(8)]);
var inst_29037 = (state_29046[(2)]);
var state_29046__$1 = (function (){var statearr_29055 = state_29046;
(statearr_29055[(9)] = inst_29037);

return statearr_29055;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29046__$1,(9),results,inst_29032);
} else {
if((state_val_29047 === (9))){
var inst_29039 = (state_29046[(2)]);
var state_29046__$1 = (function (){var statearr_29056 = state_29046;
(statearr_29056[(10)] = inst_29039);

return statearr_29056;
})();
var statearr_29057_29167 = state_29046__$1;
(statearr_29057_29167[(2)] = null);

(statearr_29057_29167[(1)] = (2));


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
});})(c__28577__auto___29161,jobs,results,process,async))
;
return ((function (switch__28465__auto__,c__28577__auto___29161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29061[(1)] = (1));

return statearr_29061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29046){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__28469__auto__ = e29062;
var statearr_29063_29168 = state_29046;
(statearr_29063_29168[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29169 = state_29046;
state_29046 = G__29169;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29161,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29064 = f__28578__auto__.call(null);
(statearr_29064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29161);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29161,jobs,results,process,async))
);


var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__,jobs,results,process,async){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__,jobs,results,process,async){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (7))){
var inst_29098 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29104_29170 = state_29102__$1;
(statearr_29104_29170[(2)] = inst_29098);

(statearr_29104_29170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (20))){
var state_29102__$1 = state_29102;
var statearr_29105_29171 = state_29102__$1;
(statearr_29105_29171[(2)] = null);

(statearr_29105_29171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (1))){
var state_29102__$1 = state_29102;
var statearr_29106_29172 = state_29102__$1;
(statearr_29106_29172[(2)] = null);

(statearr_29106_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (4))){
var inst_29067 = (state_29102[(7)]);
var inst_29067__$1 = (state_29102[(2)]);
var inst_29068 = (inst_29067__$1 == null);
var state_29102__$1 = (function (){var statearr_29107 = state_29102;
(statearr_29107[(7)] = inst_29067__$1);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29068)){
var statearr_29108_29173 = state_29102__$1;
(statearr_29108_29173[(1)] = (5));

} else {
var statearr_29109_29174 = state_29102__$1;
(statearr_29109_29174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (15))){
var inst_29080 = (state_29102[(8)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29102__$1,(18),to,inst_29080);
} else {
if((state_val_29103 === (21))){
var inst_29093 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29110_29175 = state_29102__$1;
(statearr_29110_29175[(2)] = inst_29093);

(statearr_29110_29175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (13))){
var inst_29095 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29111 = state_29102;
(statearr_29111[(9)] = inst_29095);

return statearr_29111;
})();
var statearr_29112_29176 = state_29102__$1;
(statearr_29112_29176[(2)] = null);

(statearr_29112_29176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (6))){
var inst_29067 = (state_29102[(7)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(11),inst_29067);
} else {
if((state_val_29103 === (17))){
var inst_29088 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
if(cljs.core.truth_(inst_29088)){
var statearr_29113_29177 = state_29102__$1;
(statearr_29113_29177[(1)] = (19));

} else {
var statearr_29114_29178 = state_29102__$1;
(statearr_29114_29178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (3))){
var inst_29100 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (12))){
var inst_29077 = (state_29102[(10)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(14),inst_29077);
} else {
if((state_val_29103 === (2))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(4),results);
} else {
if((state_val_29103 === (19))){
var state_29102__$1 = state_29102;
var statearr_29115_29179 = state_29102__$1;
(statearr_29115_29179[(2)] = null);

(statearr_29115_29179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (11))){
var inst_29077 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29116 = state_29102;
(statearr_29116[(10)] = inst_29077);

return statearr_29116;
})();
var statearr_29117_29180 = state_29102__$1;
(statearr_29117_29180[(2)] = null);

(statearr_29117_29180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (9))){
var state_29102__$1 = state_29102;
var statearr_29118_29181 = state_29102__$1;
(statearr_29118_29181[(2)] = null);

(statearr_29118_29181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (5))){
var state_29102__$1 = state_29102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29119_29182 = state_29102__$1;
(statearr_29119_29182[(1)] = (8));

} else {
var statearr_29120_29183 = state_29102__$1;
(statearr_29120_29183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (14))){
var inst_29082 = (state_29102[(11)]);
var inst_29080 = (state_29102[(8)]);
var inst_29080__$1 = (state_29102[(2)]);
var inst_29081 = (inst_29080__$1 == null);
var inst_29082__$1 = cljs.core.not.call(null,inst_29081);
var state_29102__$1 = (function (){var statearr_29121 = state_29102;
(statearr_29121[(11)] = inst_29082__$1);

(statearr_29121[(8)] = inst_29080__$1);

return statearr_29121;
})();
if(inst_29082__$1){
var statearr_29122_29184 = state_29102__$1;
(statearr_29122_29184[(1)] = (15));

} else {
var statearr_29123_29185 = state_29102__$1;
(statearr_29123_29185[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (16))){
var inst_29082 = (state_29102[(11)]);
var state_29102__$1 = state_29102;
var statearr_29124_29186 = state_29102__$1;
(statearr_29124_29186[(2)] = inst_29082);

(statearr_29124_29186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (10))){
var inst_29074 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29125_29187 = state_29102__$1;
(statearr_29125_29187[(2)] = inst_29074);

(statearr_29125_29187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (18))){
var inst_29085 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29126_29188 = state_29102__$1;
(statearr_29126_29188[(2)] = inst_29085);

(statearr_29126_29188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (8))){
var inst_29071 = cljs.core.async.close_BANG_.call(null,to);
var state_29102__$1 = state_29102;
var statearr_29127_29189 = state_29102__$1;
(statearr_29127_29189[(2)] = inst_29071);

(statearr_29127_29189[(1)] = (10));


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
});})(c__28577__auto__,jobs,results,process,async))
;
return ((function (switch__28465__auto__,c__28577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_29131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__);

(statearr_29131[(1)] = (1));

return statearr_29131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1 = (function (state_29102){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29132){if((e29132 instanceof Object)){
var ex__28469__auto__ = e29132;
var statearr_29133_29190 = state_29102;
(statearr_29133_29190[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29191 = state_29102;
state_29102 = G__29191;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__,jobs,results,process,async))
})();
var state__28579__auto__ = (function (){var statearr_29134 = f__28578__auto__.call(null);
(statearr_29134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__,jobs,results,process,async))
);

return c__28577__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29192 = [];
var len__25983__auto___29195 = arguments.length;
var i__25984__auto___29196 = (0);
while(true){
if((i__25984__auto___29196 < len__25983__auto___29195)){
args29192.push((arguments[i__25984__auto___29196]));

var G__29197 = (i__25984__auto___29196 + (1));
i__25984__auto___29196 = G__29197;
continue;
} else {
}
break;
}

var G__29194 = args29192.length;
switch (G__29194) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29192.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29199 = [];
var len__25983__auto___29202 = arguments.length;
var i__25984__auto___29203 = (0);
while(true){
if((i__25984__auto___29203 < len__25983__auto___29202)){
args29199.push((arguments[i__25984__auto___29203]));

var G__29204 = (i__25984__auto___29203 + (1));
i__25984__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var G__29201 = args29199.length;
switch (G__29201) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29199.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29206 = [];
var len__25983__auto___29259 = arguments.length;
var i__25984__auto___29260 = (0);
while(true){
if((i__25984__auto___29260 < len__25983__auto___29259)){
args29206.push((arguments[i__25984__auto___29260]));

var G__29261 = (i__25984__auto___29260 + (1));
i__25984__auto___29260 = G__29261;
continue;
} else {
}
break;
}

var G__29208 = args29206.length;
switch (G__29208) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29206.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28577__auto___29263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29263,tc,fc){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29263,tc,fc){
return (function (state_29234){
var state_val_29235 = (state_29234[(1)]);
if((state_val_29235 === (7))){
var inst_29230 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29236_29264 = state_29234__$1;
(statearr_29236_29264[(2)] = inst_29230);

(statearr_29236_29264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (1))){
var state_29234__$1 = state_29234;
var statearr_29237_29265 = state_29234__$1;
(statearr_29237_29265[(2)] = null);

(statearr_29237_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (4))){
var inst_29211 = (state_29234[(7)]);
var inst_29211__$1 = (state_29234[(2)]);
var inst_29212 = (inst_29211__$1 == null);
var state_29234__$1 = (function (){var statearr_29238 = state_29234;
(statearr_29238[(7)] = inst_29211__$1);

return statearr_29238;
})();
if(cljs.core.truth_(inst_29212)){
var statearr_29239_29266 = state_29234__$1;
(statearr_29239_29266[(1)] = (5));

} else {
var statearr_29240_29267 = state_29234__$1;
(statearr_29240_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (13))){
var state_29234__$1 = state_29234;
var statearr_29241_29268 = state_29234__$1;
(statearr_29241_29268[(2)] = null);

(statearr_29241_29268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (6))){
var inst_29211 = (state_29234[(7)]);
var inst_29217 = p.call(null,inst_29211);
var state_29234__$1 = state_29234;
if(cljs.core.truth_(inst_29217)){
var statearr_29242_29269 = state_29234__$1;
(statearr_29242_29269[(1)] = (9));

} else {
var statearr_29243_29270 = state_29234__$1;
(statearr_29243_29270[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (3))){
var inst_29232 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29234__$1,inst_29232);
} else {
if((state_val_29235 === (12))){
var state_29234__$1 = state_29234;
var statearr_29244_29271 = state_29234__$1;
(statearr_29244_29271[(2)] = null);

(statearr_29244_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (2))){
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29234__$1,(4),ch);
} else {
if((state_val_29235 === (11))){
var inst_29211 = (state_29234[(7)]);
var inst_29221 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29234__$1,(8),inst_29221,inst_29211);
} else {
if((state_val_29235 === (9))){
var state_29234__$1 = state_29234;
var statearr_29245_29272 = state_29234__$1;
(statearr_29245_29272[(2)] = tc);

(statearr_29245_29272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (5))){
var inst_29214 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29215 = cljs.core.async.close_BANG_.call(null,fc);
var state_29234__$1 = (function (){var statearr_29246 = state_29234;
(statearr_29246[(8)] = inst_29214);

return statearr_29246;
})();
var statearr_29247_29273 = state_29234__$1;
(statearr_29247_29273[(2)] = inst_29215);

(statearr_29247_29273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (14))){
var inst_29228 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
var statearr_29248_29274 = state_29234__$1;
(statearr_29248_29274[(2)] = inst_29228);

(statearr_29248_29274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (10))){
var state_29234__$1 = state_29234;
var statearr_29249_29275 = state_29234__$1;
(statearr_29249_29275[(2)] = fc);

(statearr_29249_29275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (8))){
var inst_29223 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
if(cljs.core.truth_(inst_29223)){
var statearr_29250_29276 = state_29234__$1;
(statearr_29250_29276[(1)] = (12));

} else {
var statearr_29251_29277 = state_29234__$1;
(statearr_29251_29277[(1)] = (13));

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
});})(c__28577__auto___29263,tc,fc))
;
return ((function (switch__28465__auto__,c__28577__auto___29263,tc,fc){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_29255 = [null,null,null,null,null,null,null,null,null];
(statearr_29255[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_29255[(1)] = (1));

return statearr_29255;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_29234){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29256){if((e29256 instanceof Object)){
var ex__28469__auto__ = e29256;
var statearr_29257_29278 = state_29234;
(statearr_29257_29278[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29234;
state_29234 = G__29279;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_29234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_29234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29263,tc,fc))
})();
var state__28579__auto__ = (function (){var statearr_29258 = f__28578__auto__.call(null);
(statearr_29258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29263);

return statearr_29258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29263,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_29343){
var state_val_29344 = (state_29343[(1)]);
if((state_val_29344 === (7))){
var inst_29339 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29345_29366 = state_29343__$1;
(statearr_29345_29366[(2)] = inst_29339);

(statearr_29345_29366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (1))){
var inst_29323 = init;
var state_29343__$1 = (function (){var statearr_29346 = state_29343;
(statearr_29346[(7)] = inst_29323);

return statearr_29346;
})();
var statearr_29347_29367 = state_29343__$1;
(statearr_29347_29367[(2)] = null);

(statearr_29347_29367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (4))){
var inst_29326 = (state_29343[(8)]);
var inst_29326__$1 = (state_29343[(2)]);
var inst_29327 = (inst_29326__$1 == null);
var state_29343__$1 = (function (){var statearr_29348 = state_29343;
(statearr_29348[(8)] = inst_29326__$1);

return statearr_29348;
})();
if(cljs.core.truth_(inst_29327)){
var statearr_29349_29368 = state_29343__$1;
(statearr_29349_29368[(1)] = (5));

} else {
var statearr_29350_29369 = state_29343__$1;
(statearr_29350_29369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (6))){
var inst_29330 = (state_29343[(9)]);
var inst_29323 = (state_29343[(7)]);
var inst_29326 = (state_29343[(8)]);
var inst_29330__$1 = f.call(null,inst_29323,inst_29326);
var inst_29331 = cljs.core.reduced_QMARK_.call(null,inst_29330__$1);
var state_29343__$1 = (function (){var statearr_29351 = state_29343;
(statearr_29351[(9)] = inst_29330__$1);

return statearr_29351;
})();
if(inst_29331){
var statearr_29352_29370 = state_29343__$1;
(statearr_29352_29370[(1)] = (8));

} else {
var statearr_29353_29371 = state_29343__$1;
(statearr_29353_29371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (3))){
var inst_29341 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29343__$1,inst_29341);
} else {
if((state_val_29344 === (2))){
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29343__$1,(4),ch);
} else {
if((state_val_29344 === (9))){
var inst_29330 = (state_29343[(9)]);
var inst_29323 = inst_29330;
var state_29343__$1 = (function (){var statearr_29354 = state_29343;
(statearr_29354[(7)] = inst_29323);

return statearr_29354;
})();
var statearr_29355_29372 = state_29343__$1;
(statearr_29355_29372[(2)] = null);

(statearr_29355_29372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (5))){
var inst_29323 = (state_29343[(7)]);
var state_29343__$1 = state_29343;
var statearr_29356_29373 = state_29343__$1;
(statearr_29356_29373[(2)] = inst_29323);

(statearr_29356_29373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (10))){
var inst_29337 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29357_29374 = state_29343__$1;
(statearr_29357_29374[(2)] = inst_29337);

(statearr_29357_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (8))){
var inst_29330 = (state_29343[(9)]);
var inst_29333 = cljs.core.deref.call(null,inst_29330);
var state_29343__$1 = state_29343;
var statearr_29358_29375 = state_29343__$1;
(statearr_29358_29375[(2)] = inst_29333);

(statearr_29358_29375[(1)] = (10));


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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28466__auto____0 = (function (){
var statearr_29362 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29362[(0)] = cljs$core$async$reduce_$_state_machine__28466__auto__);

(statearr_29362[(1)] = (1));

return statearr_29362;
});
var cljs$core$async$reduce_$_state_machine__28466__auto____1 = (function (state_29343){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29363){if((e29363 instanceof Object)){
var ex__28469__auto__ = e29363;
var statearr_29364_29376 = state_29343;
(statearr_29364_29376[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29377 = state_29343;
state_29343 = G__29377;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28466__auto__ = function(state_29343){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28466__auto____1.call(this,state_29343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28466__auto____0;
cljs$core$async$reduce_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28466__auto____1;
return cljs$core$async$reduce_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_29365 = f__28578__auto__.call(null);
(statearr_29365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29378 = [];
var len__25983__auto___29430 = arguments.length;
var i__25984__auto___29431 = (0);
while(true){
if((i__25984__auto___29431 < len__25983__auto___29430)){
args29378.push((arguments[i__25984__auto___29431]));

var G__29432 = (i__25984__auto___29431 + (1));
i__25984__auto___29431 = G__29432;
continue;
} else {
}
break;
}

var G__29380 = args29378.length;
switch (G__29380) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29378.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29387 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29407_29434 = state_29405__$1;
(statearr_29407_29434[(2)] = inst_29387);

(statearr_29407_29434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29381 = cljs.core.seq.call(null,coll);
var inst_29382 = inst_29381;
var state_29405__$1 = (function (){var statearr_29408 = state_29405;
(statearr_29408[(7)] = inst_29382);

return statearr_29408;
})();
var statearr_29409_29435 = state_29405__$1;
(statearr_29409_29435[(2)] = null);

(statearr_29409_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29382 = (state_29405[(7)]);
var inst_29385 = cljs.core.first.call(null,inst_29382);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29405__$1,(7),ch,inst_29385);
} else {
if((state_val_29406 === (13))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29410_29436 = state_29405__$1;
(statearr_29410_29436[(2)] = inst_29399);

(statearr_29410_29436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29390 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29390)){
var statearr_29411_29437 = state_29405__$1;
(statearr_29411_29437[(1)] = (8));

} else {
var statearr_29412_29438 = state_29405__$1;
(statearr_29412_29438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (12))){
var state_29405__$1 = state_29405;
var statearr_29413_29439 = state_29405__$1;
(statearr_29413_29439[(2)] = null);

(statearr_29413_29439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var inst_29382 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29382)){
var statearr_29414_29440 = state_29405__$1;
(statearr_29414_29440[(1)] = (4));

} else {
var statearr_29415_29441 = state_29405__$1;
(statearr_29415_29441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (11))){
var inst_29396 = cljs.core.async.close_BANG_.call(null,ch);
var state_29405__$1 = state_29405;
var statearr_29416_29442 = state_29405__$1;
(statearr_29416_29442[(2)] = inst_29396);

(statearr_29416_29442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (9))){
var state_29405__$1 = state_29405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29417_29443 = state_29405__$1;
(statearr_29417_29443[(1)] = (11));

} else {
var statearr_29418_29444 = state_29405__$1;
(statearr_29418_29444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29382 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29419_29445 = state_29405__$1;
(statearr_29419_29445[(2)] = inst_29382);

(statearr_29419_29445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29420_29446 = state_29405__$1;
(statearr_29420_29446[(2)] = inst_29401);

(statearr_29420_29446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29382 = (state_29405[(7)]);
var inst_29392 = cljs.core.next.call(null,inst_29382);
var inst_29382__$1 = inst_29392;
var state_29405__$1 = (function (){var statearr_29421 = state_29405;
(statearr_29421[(7)] = inst_29382__$1);

return statearr_29421;
})();
var statearr_29422_29447 = state_29405__$1;
(statearr_29422_29447[(2)] = null);

(statearr_29422_29447[(1)] = (2));


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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_29426 = [null,null,null,null,null,null,null,null];
(statearr_29426[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_29426[(1)] = (1));

return statearr_29426;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_29405){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29427){if((e29427 instanceof Object)){
var ex__28469__auto__ = e29427;
var statearr_29428_29448 = state_29405;
(statearr_29428_29448[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29405;
state_29405 = G__29449;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_29429 = f__28578__auto__.call(null);
(statearr_29429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25538__auto__ = (((_ == null))?null:_);
var m__25539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,_);
} else {
var m__25539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29675 = (function (ch,cs,meta29676){
this.ch = ch;
this.cs = cs;
this.meta29676 = meta29676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29677,meta29676__$1){
var self__ = this;
var _29677__$1 = this;
return (new cljs.core.async.t_cljs$core$async29675(self__.ch,self__.cs,meta29676__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29677){
var self__ = this;
var _29677__$1 = this;
return self__.meta29676;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29676","meta29676",-878467886,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29675";

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async29675");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29675 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29675(ch__$1,cs__$1,meta29676){
return (new cljs.core.async.t_cljs$core$async29675(ch__$1,cs__$1,meta29676));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29675(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28577__auto___29900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function (state_29812){
var state_val_29813 = (state_29812[(1)]);
if((state_val_29813 === (7))){
var inst_29808 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29814_29901 = state_29812__$1;
(statearr_29814_29901[(2)] = inst_29808);

(statearr_29814_29901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (20))){
var inst_29711 = (state_29812[(7)]);
var inst_29723 = cljs.core.first.call(null,inst_29711);
var inst_29724 = cljs.core.nth.call(null,inst_29723,(0),null);
var inst_29725 = cljs.core.nth.call(null,inst_29723,(1),null);
var state_29812__$1 = (function (){var statearr_29815 = state_29812;
(statearr_29815[(8)] = inst_29724);

return statearr_29815;
})();
if(cljs.core.truth_(inst_29725)){
var statearr_29816_29902 = state_29812__$1;
(statearr_29816_29902[(1)] = (22));

} else {
var statearr_29817_29903 = state_29812__$1;
(statearr_29817_29903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (27))){
var inst_29680 = (state_29812[(9)]);
var inst_29755 = (state_29812[(10)]);
var inst_29760 = (state_29812[(11)]);
var inst_29753 = (state_29812[(12)]);
var inst_29760__$1 = cljs.core._nth.call(null,inst_29753,inst_29755);
var inst_29761 = cljs.core.async.put_BANG_.call(null,inst_29760__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29818 = state_29812;
(statearr_29818[(11)] = inst_29760__$1);

return statearr_29818;
})();
if(cljs.core.truth_(inst_29761)){
var statearr_29819_29904 = state_29812__$1;
(statearr_29819_29904[(1)] = (30));

} else {
var statearr_29820_29905 = state_29812__$1;
(statearr_29820_29905[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (1))){
var state_29812__$1 = state_29812;
var statearr_29821_29906 = state_29812__$1;
(statearr_29821_29906[(2)] = null);

(statearr_29821_29906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (24))){
var inst_29711 = (state_29812[(7)]);
var inst_29730 = (state_29812[(2)]);
var inst_29731 = cljs.core.next.call(null,inst_29711);
var inst_29689 = inst_29731;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29822 = state_29812;
(statearr_29822[(13)] = inst_29692);

(statearr_29822[(14)] = inst_29730);

(statearr_29822[(15)] = inst_29690);

(statearr_29822[(16)] = inst_29689);

(statearr_29822[(17)] = inst_29691);

return statearr_29822;
})();
var statearr_29823_29907 = state_29812__$1;
(statearr_29823_29907[(2)] = null);

(statearr_29823_29907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (39))){
var state_29812__$1 = state_29812;
var statearr_29827_29908 = state_29812__$1;
(statearr_29827_29908[(2)] = null);

(statearr_29827_29908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (4))){
var inst_29680 = (state_29812[(9)]);
var inst_29680__$1 = (state_29812[(2)]);
var inst_29681 = (inst_29680__$1 == null);
var state_29812__$1 = (function (){var statearr_29828 = state_29812;
(statearr_29828[(9)] = inst_29680__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29681)){
var statearr_29829_29909 = state_29812__$1;
(statearr_29829_29909[(1)] = (5));

} else {
var statearr_29830_29910 = state_29812__$1;
(statearr_29830_29910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (15))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29689 = (state_29812[(16)]);
var inst_29691 = (state_29812[(17)]);
var inst_29707 = (state_29812[(2)]);
var inst_29708 = (inst_29692 + (1));
var tmp29824 = inst_29690;
var tmp29825 = inst_29689;
var tmp29826 = inst_29691;
var inst_29689__$1 = tmp29825;
var inst_29690__$1 = tmp29824;
var inst_29691__$1 = tmp29826;
var inst_29692__$1 = inst_29708;
var state_29812__$1 = (function (){var statearr_29831 = state_29812;
(statearr_29831[(13)] = inst_29692__$1);

(statearr_29831[(15)] = inst_29690__$1);

(statearr_29831[(16)] = inst_29689__$1);

(statearr_29831[(17)] = inst_29691__$1);

(statearr_29831[(18)] = inst_29707);

return statearr_29831;
})();
var statearr_29832_29911 = state_29812__$1;
(statearr_29832_29911[(2)] = null);

(statearr_29832_29911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (21))){
var inst_29734 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29836_29912 = state_29812__$1;
(statearr_29836_29912[(2)] = inst_29734);

(statearr_29836_29912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (31))){
var inst_29760 = (state_29812[(11)]);
var inst_29764 = done.call(null,null);
var inst_29765 = cljs.core.async.untap_STAR_.call(null,m,inst_29760);
var state_29812__$1 = (function (){var statearr_29837 = state_29812;
(statearr_29837[(19)] = inst_29764);

return statearr_29837;
})();
var statearr_29838_29913 = state_29812__$1;
(statearr_29838_29913[(2)] = inst_29765);

(statearr_29838_29913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (32))){
var inst_29755 = (state_29812[(10)]);
var inst_29752 = (state_29812[(20)]);
var inst_29754 = (state_29812[(21)]);
var inst_29753 = (state_29812[(12)]);
var inst_29767 = (state_29812[(2)]);
var inst_29768 = (inst_29755 + (1));
var tmp29833 = inst_29752;
var tmp29834 = inst_29754;
var tmp29835 = inst_29753;
var inst_29752__$1 = tmp29833;
var inst_29753__$1 = tmp29835;
var inst_29754__$1 = tmp29834;
var inst_29755__$1 = inst_29768;
var state_29812__$1 = (function (){var statearr_29839 = state_29812;
(statearr_29839[(10)] = inst_29755__$1);

(statearr_29839[(22)] = inst_29767);

(statearr_29839[(20)] = inst_29752__$1);

(statearr_29839[(21)] = inst_29754__$1);

(statearr_29839[(12)] = inst_29753__$1);

return statearr_29839;
})();
var statearr_29840_29914 = state_29812__$1;
(statearr_29840_29914[(2)] = null);

(statearr_29840_29914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (40))){
var inst_29780 = (state_29812[(23)]);
var inst_29784 = done.call(null,null);
var inst_29785 = cljs.core.async.untap_STAR_.call(null,m,inst_29780);
var state_29812__$1 = (function (){var statearr_29841 = state_29812;
(statearr_29841[(24)] = inst_29784);

return statearr_29841;
})();
var statearr_29842_29915 = state_29812__$1;
(statearr_29842_29915[(2)] = inst_29785);

(statearr_29842_29915[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (33))){
var inst_29771 = (state_29812[(25)]);
var inst_29773 = cljs.core.chunked_seq_QMARK_.call(null,inst_29771);
var state_29812__$1 = state_29812;
if(inst_29773){
var statearr_29843_29916 = state_29812__$1;
(statearr_29843_29916[(1)] = (36));

} else {
var statearr_29844_29917 = state_29812__$1;
(statearr_29844_29917[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (13))){
var inst_29701 = (state_29812[(26)]);
var inst_29704 = cljs.core.async.close_BANG_.call(null,inst_29701);
var state_29812__$1 = state_29812;
var statearr_29845_29918 = state_29812__$1;
(statearr_29845_29918[(2)] = inst_29704);

(statearr_29845_29918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (22))){
var inst_29724 = (state_29812[(8)]);
var inst_29727 = cljs.core.async.close_BANG_.call(null,inst_29724);
var state_29812__$1 = state_29812;
var statearr_29846_29919 = state_29812__$1;
(statearr_29846_29919[(2)] = inst_29727);

(statearr_29846_29919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (36))){
var inst_29771 = (state_29812[(25)]);
var inst_29775 = cljs.core.chunk_first.call(null,inst_29771);
var inst_29776 = cljs.core.chunk_rest.call(null,inst_29771);
var inst_29777 = cljs.core.count.call(null,inst_29775);
var inst_29752 = inst_29776;
var inst_29753 = inst_29775;
var inst_29754 = inst_29777;
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29847 = state_29812;
(statearr_29847[(10)] = inst_29755);

(statearr_29847[(20)] = inst_29752);

(statearr_29847[(21)] = inst_29754);

(statearr_29847[(12)] = inst_29753);

return statearr_29847;
})();
var statearr_29848_29920 = state_29812__$1;
(statearr_29848_29920[(2)] = null);

(statearr_29848_29920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (41))){
var inst_29771 = (state_29812[(25)]);
var inst_29787 = (state_29812[(2)]);
var inst_29788 = cljs.core.next.call(null,inst_29771);
var inst_29752 = inst_29788;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29849 = state_29812;
(statearr_29849[(10)] = inst_29755);

(statearr_29849[(20)] = inst_29752);

(statearr_29849[(27)] = inst_29787);

(statearr_29849[(21)] = inst_29754);

(statearr_29849[(12)] = inst_29753);

return statearr_29849;
})();
var statearr_29850_29921 = state_29812__$1;
(statearr_29850_29921[(2)] = null);

(statearr_29850_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (43))){
var state_29812__$1 = state_29812;
var statearr_29851_29922 = state_29812__$1;
(statearr_29851_29922[(2)] = null);

(statearr_29851_29922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (29))){
var inst_29796 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29852_29923 = state_29812__$1;
(statearr_29852_29923[(2)] = inst_29796);

(statearr_29852_29923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (44))){
var inst_29805 = (state_29812[(2)]);
var state_29812__$1 = (function (){var statearr_29853 = state_29812;
(statearr_29853[(28)] = inst_29805);

return statearr_29853;
})();
var statearr_29854_29924 = state_29812__$1;
(statearr_29854_29924[(2)] = null);

(statearr_29854_29924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (6))){
var inst_29744 = (state_29812[(29)]);
var inst_29743 = cljs.core.deref.call(null,cs);
var inst_29744__$1 = cljs.core.keys.call(null,inst_29743);
var inst_29745 = cljs.core.count.call(null,inst_29744__$1);
var inst_29746 = cljs.core.reset_BANG_.call(null,dctr,inst_29745);
var inst_29751 = cljs.core.seq.call(null,inst_29744__$1);
var inst_29752 = inst_29751;
var inst_29753 = null;
var inst_29754 = (0);
var inst_29755 = (0);
var state_29812__$1 = (function (){var statearr_29855 = state_29812;
(statearr_29855[(30)] = inst_29746);

(statearr_29855[(10)] = inst_29755);

(statearr_29855[(20)] = inst_29752);

(statearr_29855[(29)] = inst_29744__$1);

(statearr_29855[(21)] = inst_29754);

(statearr_29855[(12)] = inst_29753);

return statearr_29855;
})();
var statearr_29856_29925 = state_29812__$1;
(statearr_29856_29925[(2)] = null);

(statearr_29856_29925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (28))){
var inst_29771 = (state_29812[(25)]);
var inst_29752 = (state_29812[(20)]);
var inst_29771__$1 = cljs.core.seq.call(null,inst_29752);
var state_29812__$1 = (function (){var statearr_29857 = state_29812;
(statearr_29857[(25)] = inst_29771__$1);

return statearr_29857;
})();
if(inst_29771__$1){
var statearr_29858_29926 = state_29812__$1;
(statearr_29858_29926[(1)] = (33));

} else {
var statearr_29859_29927 = state_29812__$1;
(statearr_29859_29927[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (25))){
var inst_29755 = (state_29812[(10)]);
var inst_29754 = (state_29812[(21)]);
var inst_29757 = (inst_29755 < inst_29754);
var inst_29758 = inst_29757;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29758)){
var statearr_29860_29928 = state_29812__$1;
(statearr_29860_29928[(1)] = (27));

} else {
var statearr_29861_29929 = state_29812__$1;
(statearr_29861_29929[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (34))){
var state_29812__$1 = state_29812;
var statearr_29862_29930 = state_29812__$1;
(statearr_29862_29930[(2)] = null);

(statearr_29862_29930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (17))){
var state_29812__$1 = state_29812;
var statearr_29863_29931 = state_29812__$1;
(statearr_29863_29931[(2)] = null);

(statearr_29863_29931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (3))){
var inst_29810 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29812__$1,inst_29810);
} else {
if((state_val_29813 === (12))){
var inst_29739 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29864_29932 = state_29812__$1;
(statearr_29864_29932[(2)] = inst_29739);

(statearr_29864_29932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (2))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(4),ch);
} else {
if((state_val_29813 === (23))){
var state_29812__$1 = state_29812;
var statearr_29865_29933 = state_29812__$1;
(statearr_29865_29933[(2)] = null);

(statearr_29865_29933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (35))){
var inst_29794 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29866_29934 = state_29812__$1;
(statearr_29866_29934[(2)] = inst_29794);

(statearr_29866_29934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (19))){
var inst_29711 = (state_29812[(7)]);
var inst_29715 = cljs.core.chunk_first.call(null,inst_29711);
var inst_29716 = cljs.core.chunk_rest.call(null,inst_29711);
var inst_29717 = cljs.core.count.call(null,inst_29715);
var inst_29689 = inst_29716;
var inst_29690 = inst_29715;
var inst_29691 = inst_29717;
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29867 = state_29812;
(statearr_29867[(13)] = inst_29692);

(statearr_29867[(15)] = inst_29690);

(statearr_29867[(16)] = inst_29689);

(statearr_29867[(17)] = inst_29691);

return statearr_29867;
})();
var statearr_29868_29935 = state_29812__$1;
(statearr_29868_29935[(2)] = null);

(statearr_29868_29935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (11))){
var inst_29689 = (state_29812[(16)]);
var inst_29711 = (state_29812[(7)]);
var inst_29711__$1 = cljs.core.seq.call(null,inst_29689);
var state_29812__$1 = (function (){var statearr_29869 = state_29812;
(statearr_29869[(7)] = inst_29711__$1);

return statearr_29869;
})();
if(inst_29711__$1){
var statearr_29870_29936 = state_29812__$1;
(statearr_29870_29936[(1)] = (16));

} else {
var statearr_29871_29937 = state_29812__$1;
(statearr_29871_29937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (9))){
var inst_29741 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29872_29938 = state_29812__$1;
(statearr_29872_29938[(2)] = inst_29741);

(statearr_29872_29938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (5))){
var inst_29687 = cljs.core.deref.call(null,cs);
var inst_29688 = cljs.core.seq.call(null,inst_29687);
var inst_29689 = inst_29688;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29812__$1 = (function (){var statearr_29873 = state_29812;
(statearr_29873[(13)] = inst_29692);

(statearr_29873[(15)] = inst_29690);

(statearr_29873[(16)] = inst_29689);

(statearr_29873[(17)] = inst_29691);

return statearr_29873;
})();
var statearr_29874_29939 = state_29812__$1;
(statearr_29874_29939[(2)] = null);

(statearr_29874_29939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (14))){
var state_29812__$1 = state_29812;
var statearr_29875_29940 = state_29812__$1;
(statearr_29875_29940[(2)] = null);

(statearr_29875_29940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (45))){
var inst_29802 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29876_29941 = state_29812__$1;
(statearr_29876_29941[(2)] = inst_29802);

(statearr_29876_29941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (26))){
var inst_29744 = (state_29812[(29)]);
var inst_29798 = (state_29812[(2)]);
var inst_29799 = cljs.core.seq.call(null,inst_29744);
var state_29812__$1 = (function (){var statearr_29877 = state_29812;
(statearr_29877[(31)] = inst_29798);

return statearr_29877;
})();
if(inst_29799){
var statearr_29878_29942 = state_29812__$1;
(statearr_29878_29942[(1)] = (42));

} else {
var statearr_29879_29943 = state_29812__$1;
(statearr_29879_29943[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (16))){
var inst_29711 = (state_29812[(7)]);
var inst_29713 = cljs.core.chunked_seq_QMARK_.call(null,inst_29711);
var state_29812__$1 = state_29812;
if(inst_29713){
var statearr_29880_29944 = state_29812__$1;
(statearr_29880_29944[(1)] = (19));

} else {
var statearr_29881_29945 = state_29812__$1;
(statearr_29881_29945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (38))){
var inst_29791 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29882_29946 = state_29812__$1;
(statearr_29882_29946[(2)] = inst_29791);

(statearr_29882_29946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (30))){
var state_29812__$1 = state_29812;
var statearr_29883_29947 = state_29812__$1;
(statearr_29883_29947[(2)] = null);

(statearr_29883_29947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (10))){
var inst_29692 = (state_29812[(13)]);
var inst_29690 = (state_29812[(15)]);
var inst_29700 = cljs.core._nth.call(null,inst_29690,inst_29692);
var inst_29701 = cljs.core.nth.call(null,inst_29700,(0),null);
var inst_29702 = cljs.core.nth.call(null,inst_29700,(1),null);
var state_29812__$1 = (function (){var statearr_29884 = state_29812;
(statearr_29884[(26)] = inst_29701);

return statearr_29884;
})();
if(cljs.core.truth_(inst_29702)){
var statearr_29885_29948 = state_29812__$1;
(statearr_29885_29948[(1)] = (13));

} else {
var statearr_29886_29949 = state_29812__$1;
(statearr_29886_29949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (18))){
var inst_29737 = (state_29812[(2)]);
var state_29812__$1 = state_29812;
var statearr_29887_29950 = state_29812__$1;
(statearr_29887_29950[(2)] = inst_29737);

(statearr_29887_29950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (42))){
var state_29812__$1 = state_29812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29812__$1,(45),dchan);
} else {
if((state_val_29813 === (37))){
var inst_29771 = (state_29812[(25)]);
var inst_29680 = (state_29812[(9)]);
var inst_29780 = (state_29812[(23)]);
var inst_29780__$1 = cljs.core.first.call(null,inst_29771);
var inst_29781 = cljs.core.async.put_BANG_.call(null,inst_29780__$1,inst_29680,done);
var state_29812__$1 = (function (){var statearr_29888 = state_29812;
(statearr_29888[(23)] = inst_29780__$1);

return statearr_29888;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29889_29951 = state_29812__$1;
(statearr_29889_29951[(1)] = (39));

} else {
var statearr_29890_29952 = state_29812__$1;
(statearr_29890_29952[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29813 === (8))){
var inst_29692 = (state_29812[(13)]);
var inst_29691 = (state_29812[(17)]);
var inst_29694 = (inst_29692 < inst_29691);
var inst_29695 = inst_29694;
var state_29812__$1 = state_29812;
if(cljs.core.truth_(inst_29695)){
var statearr_29891_29953 = state_29812__$1;
(statearr_29891_29953[(1)] = (10));

} else {
var statearr_29892_29954 = state_29812__$1;
(statearr_29892_29954[(1)] = (11));

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
});})(c__28577__auto___29900,cs,m,dchan,dctr,done))
;
return ((function (switch__28465__auto__,c__28577__auto___29900,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28466__auto__ = null;
var cljs$core$async$mult_$_state_machine__28466__auto____0 = (function (){
var statearr_29896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29896[(0)] = cljs$core$async$mult_$_state_machine__28466__auto__);

(statearr_29896[(1)] = (1));

return statearr_29896;
});
var cljs$core$async$mult_$_state_machine__28466__auto____1 = (function (state_29812){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_29812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e29897){if((e29897 instanceof Object)){
var ex__28469__auto__ = e29897;
var statearr_29898_29955 = state_29812;
(statearr_29898_29955[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29956 = state_29812;
state_29812 = G__29956;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28466__auto__ = function(state_29812){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28466__auto____1.call(this,state_29812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28466__auto____0;
cljs$core$async$mult_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28466__auto____1;
return cljs$core$async$mult_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___29900,cs,m,dchan,dctr,done))
})();
var state__28579__auto__ = (function (){var statearr_29899 = f__28578__auto__.call(null);
(statearr_29899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___29900);

return statearr_29899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___29900,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29957 = [];
var len__25983__auto___29960 = arguments.length;
var i__25984__auto___29961 = (0);
while(true){
if((i__25984__auto___29961 < len__25983__auto___29960)){
args29957.push((arguments[i__25984__auto___29961]));

var G__29962 = (i__25984__auto___29961 + (1));
i__25984__auto___29961 = G__29962;
continue;
} else {
}
break;
}

var G__29959 = args29957.length;
switch (G__29959) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29957.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m);
} else {
var m__25539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,state_map);
} else {
var m__25539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25538__auto__ = (((m == null))?null:m);
var m__25539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,m,mode);
} else {
var m__25539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25990__auto__ = [];
var len__25983__auto___29974 = arguments.length;
var i__25984__auto___29975 = (0);
while(true){
if((i__25984__auto___29975 < len__25983__auto___29974)){
args__25990__auto__.push((arguments[i__25984__auto___29975]));

var G__29976 = (i__25984__auto___29975 + (1));
i__25984__auto___29975 = G__29976;
continue;
} else {
}
break;
}

var argseq__25991__auto__ = ((((3) < args__25990__auto__.length))?(new cljs.core.IndexedSeq(args__25990__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25991__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29968){
var map__29969 = p__29968;
var map__29969__$1 = ((((!((map__29969 == null)))?((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var opts = map__29969__$1;
var statearr_29971_29977 = state;
(statearr_29971_29977[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29969,map__29969__$1,opts){
return (function (val){
var statearr_29972_29978 = state;
(statearr_29972_29978[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29969,map__29969__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29973_29979 = state;
(statearr_29973_29979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29964){
var G__29965 = cljs.core.first.call(null,seq29964);
var seq29964__$1 = cljs.core.next.call(null,seq29964);
var G__29966 = cljs.core.first.call(null,seq29964__$1);
var seq29964__$2 = cljs.core.next.call(null,seq29964__$1);
var G__29967 = cljs.core.first.call(null,seq29964__$2);
var seq29964__$3 = cljs.core.next.call(null,seq29964__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29965,G__29966,G__29967,seq29964__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30147 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30148){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30148 = meta30148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30149,meta30148__$1){
var self__ = this;
var _30149__$1 = this;
return (new cljs.core.async.t_cljs$core$async30147(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30149){
var self__ = this;
var _30149__$1 = this;
return self__.meta30148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30148","meta30148",-317995787,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30147";

cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30148){
return (new cljs.core.async.t_cljs$core$async30147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30147(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28577__auto___30314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30251){
var state_val_30252 = (state_30251[(1)]);
if((state_val_30252 === (7))){
var inst_30166 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30253_30315 = state_30251__$1;
(statearr_30253_30315[(2)] = inst_30166);

(statearr_30253_30315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (20))){
var inst_30178 = (state_30251[(7)]);
var state_30251__$1 = state_30251;
var statearr_30254_30316 = state_30251__$1;
(statearr_30254_30316[(2)] = inst_30178);

(statearr_30254_30316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (27))){
var state_30251__$1 = state_30251;
var statearr_30255_30317 = state_30251__$1;
(statearr_30255_30317[(2)] = null);

(statearr_30255_30317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (1))){
var inst_30153 = (state_30251[(8)]);
var inst_30153__$1 = calc_state.call(null);
var inst_30155 = (inst_30153__$1 == null);
var inst_30156 = cljs.core.not.call(null,inst_30155);
var state_30251__$1 = (function (){var statearr_30256 = state_30251;
(statearr_30256[(8)] = inst_30153__$1);

return statearr_30256;
})();
if(inst_30156){
var statearr_30257_30318 = state_30251__$1;
(statearr_30257_30318[(1)] = (2));

} else {
var statearr_30258_30319 = state_30251__$1;
(statearr_30258_30319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (24))){
var inst_30211 = (state_30251[(9)]);
var inst_30202 = (state_30251[(10)]);
var inst_30225 = (state_30251[(11)]);
var inst_30225__$1 = inst_30202.call(null,inst_30211);
var state_30251__$1 = (function (){var statearr_30259 = state_30251;
(statearr_30259[(11)] = inst_30225__$1);

return statearr_30259;
})();
if(cljs.core.truth_(inst_30225__$1)){
var statearr_30260_30320 = state_30251__$1;
(statearr_30260_30320[(1)] = (29));

} else {
var statearr_30261_30321 = state_30251__$1;
(statearr_30261_30321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (4))){
var inst_30169 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30169)){
var statearr_30262_30322 = state_30251__$1;
(statearr_30262_30322[(1)] = (8));

} else {
var statearr_30263_30323 = state_30251__$1;
(statearr_30263_30323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (15))){
var inst_30196 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30196)){
var statearr_30264_30324 = state_30251__$1;
(statearr_30264_30324[(1)] = (19));

} else {
var statearr_30265_30325 = state_30251__$1;
(statearr_30265_30325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (21))){
var inst_30201 = (state_30251[(12)]);
var inst_30201__$1 = (state_30251[(2)]);
var inst_30202 = cljs.core.get.call(null,inst_30201__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30203 = cljs.core.get.call(null,inst_30201__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30204 = cljs.core.get.call(null,inst_30201__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30251__$1 = (function (){var statearr_30266 = state_30251;
(statearr_30266[(12)] = inst_30201__$1);

(statearr_30266[(10)] = inst_30202);

(statearr_30266[(13)] = inst_30203);

return statearr_30266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30251__$1,(22),inst_30204);
} else {
if((state_val_30252 === (31))){
var inst_30233 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30233)){
var statearr_30267_30326 = state_30251__$1;
(statearr_30267_30326[(1)] = (32));

} else {
var statearr_30268_30327 = state_30251__$1;
(statearr_30268_30327[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (32))){
var inst_30210 = (state_30251[(14)]);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30251__$1,(35),out,inst_30210);
} else {
if((state_val_30252 === (33))){
var inst_30201 = (state_30251[(12)]);
var inst_30178 = inst_30201;
var state_30251__$1 = (function (){var statearr_30269 = state_30251;
(statearr_30269[(7)] = inst_30178);

return statearr_30269;
})();
var statearr_30270_30328 = state_30251__$1;
(statearr_30270_30328[(2)] = null);

(statearr_30270_30328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (13))){
var inst_30178 = (state_30251[(7)]);
var inst_30185 = inst_30178.cljs$lang$protocol_mask$partition0$;
var inst_30186 = (inst_30185 & (64));
var inst_30187 = inst_30178.cljs$core$ISeq$;
var inst_30188 = (cljs.core.PROTOCOL_SENTINEL === inst_30187);
var inst_30189 = (inst_30186) || (inst_30188);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30189)){
var statearr_30271_30329 = state_30251__$1;
(statearr_30271_30329[(1)] = (16));

} else {
var statearr_30272_30330 = state_30251__$1;
(statearr_30272_30330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (22))){
var inst_30211 = (state_30251[(9)]);
var inst_30210 = (state_30251[(14)]);
var inst_30209 = (state_30251[(2)]);
var inst_30210__$1 = cljs.core.nth.call(null,inst_30209,(0),null);
var inst_30211__$1 = cljs.core.nth.call(null,inst_30209,(1),null);
var inst_30212 = (inst_30210__$1 == null);
var inst_30213 = cljs.core._EQ_.call(null,inst_30211__$1,change);
var inst_30214 = (inst_30212) || (inst_30213);
var state_30251__$1 = (function (){var statearr_30273 = state_30251;
(statearr_30273[(9)] = inst_30211__$1);

(statearr_30273[(14)] = inst_30210__$1);

return statearr_30273;
})();
if(cljs.core.truth_(inst_30214)){
var statearr_30274_30331 = state_30251__$1;
(statearr_30274_30331[(1)] = (23));

} else {
var statearr_30275_30332 = state_30251__$1;
(statearr_30275_30332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (36))){
var inst_30201 = (state_30251[(12)]);
var inst_30178 = inst_30201;
var state_30251__$1 = (function (){var statearr_30276 = state_30251;
(statearr_30276[(7)] = inst_30178);

return statearr_30276;
})();
var statearr_30277_30333 = state_30251__$1;
(statearr_30277_30333[(2)] = null);

(statearr_30277_30333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (29))){
var inst_30225 = (state_30251[(11)]);
var state_30251__$1 = state_30251;
var statearr_30278_30334 = state_30251__$1;
(statearr_30278_30334[(2)] = inst_30225);

(statearr_30278_30334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (6))){
var state_30251__$1 = state_30251;
var statearr_30279_30335 = state_30251__$1;
(statearr_30279_30335[(2)] = false);

(statearr_30279_30335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (28))){
var inst_30221 = (state_30251[(2)]);
var inst_30222 = calc_state.call(null);
var inst_30178 = inst_30222;
var state_30251__$1 = (function (){var statearr_30280 = state_30251;
(statearr_30280[(15)] = inst_30221);

(statearr_30280[(7)] = inst_30178);

return statearr_30280;
})();
var statearr_30281_30336 = state_30251__$1;
(statearr_30281_30336[(2)] = null);

(statearr_30281_30336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (25))){
var inst_30247 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30282_30337 = state_30251__$1;
(statearr_30282_30337[(2)] = inst_30247);

(statearr_30282_30337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (34))){
var inst_30245 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30283_30338 = state_30251__$1;
(statearr_30283_30338[(2)] = inst_30245);

(statearr_30283_30338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (17))){
var state_30251__$1 = state_30251;
var statearr_30284_30339 = state_30251__$1;
(statearr_30284_30339[(2)] = false);

(statearr_30284_30339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (3))){
var state_30251__$1 = state_30251;
var statearr_30285_30340 = state_30251__$1;
(statearr_30285_30340[(2)] = false);

(statearr_30285_30340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (12))){
var inst_30249 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30251__$1,inst_30249);
} else {
if((state_val_30252 === (2))){
var inst_30153 = (state_30251[(8)]);
var inst_30158 = inst_30153.cljs$lang$protocol_mask$partition0$;
var inst_30159 = (inst_30158 & (64));
var inst_30160 = inst_30153.cljs$core$ISeq$;
var inst_30161 = (cljs.core.PROTOCOL_SENTINEL === inst_30160);
var inst_30162 = (inst_30159) || (inst_30161);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30162)){
var statearr_30286_30341 = state_30251__$1;
(statearr_30286_30341[(1)] = (5));

} else {
var statearr_30287_30342 = state_30251__$1;
(statearr_30287_30342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (23))){
var inst_30210 = (state_30251[(14)]);
var inst_30216 = (inst_30210 == null);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30216)){
var statearr_30288_30343 = state_30251__$1;
(statearr_30288_30343[(1)] = (26));

} else {
var statearr_30289_30344 = state_30251__$1;
(statearr_30289_30344[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (35))){
var inst_30236 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
if(cljs.core.truth_(inst_30236)){
var statearr_30290_30345 = state_30251__$1;
(statearr_30290_30345[(1)] = (36));

} else {
var statearr_30291_30346 = state_30251__$1;
(statearr_30291_30346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (19))){
var inst_30178 = (state_30251[(7)]);
var inst_30198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30178);
var state_30251__$1 = state_30251;
var statearr_30292_30347 = state_30251__$1;
(statearr_30292_30347[(2)] = inst_30198);

(statearr_30292_30347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (11))){
var inst_30178 = (state_30251[(7)]);
var inst_30182 = (inst_30178 == null);
var inst_30183 = cljs.core.not.call(null,inst_30182);
var state_30251__$1 = state_30251;
if(inst_30183){
var statearr_30293_30348 = state_30251__$1;
(statearr_30293_30348[(1)] = (13));

} else {
var statearr_30294_30349 = state_30251__$1;
(statearr_30294_30349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (9))){
var inst_30153 = (state_30251[(8)]);
var state_30251__$1 = state_30251;
var statearr_30295_30350 = state_30251__$1;
(statearr_30295_30350[(2)] = inst_30153);

(statearr_30295_30350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (5))){
var state_30251__$1 = state_30251;
var statearr_30296_30351 = state_30251__$1;
(statearr_30296_30351[(2)] = true);

(statearr_30296_30351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (14))){
var state_30251__$1 = state_30251;
var statearr_30297_30352 = state_30251__$1;
(statearr_30297_30352[(2)] = false);

(statearr_30297_30352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (26))){
var inst_30211 = (state_30251[(9)]);
var inst_30218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30211);
var state_30251__$1 = state_30251;
var statearr_30298_30353 = state_30251__$1;
(statearr_30298_30353[(2)] = inst_30218);

(statearr_30298_30353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (16))){
var state_30251__$1 = state_30251;
var statearr_30299_30354 = state_30251__$1;
(statearr_30299_30354[(2)] = true);

(statearr_30299_30354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (38))){
var inst_30241 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30300_30355 = state_30251__$1;
(statearr_30300_30355[(2)] = inst_30241);

(statearr_30300_30355[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (30))){
var inst_30211 = (state_30251[(9)]);
var inst_30202 = (state_30251[(10)]);
var inst_30203 = (state_30251[(13)]);
var inst_30228 = cljs.core.empty_QMARK_.call(null,inst_30202);
var inst_30229 = inst_30203.call(null,inst_30211);
var inst_30230 = cljs.core.not.call(null,inst_30229);
var inst_30231 = (inst_30228) && (inst_30230);
var state_30251__$1 = state_30251;
var statearr_30301_30356 = state_30251__$1;
(statearr_30301_30356[(2)] = inst_30231);

(statearr_30301_30356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (10))){
var inst_30153 = (state_30251[(8)]);
var inst_30174 = (state_30251[(2)]);
var inst_30175 = cljs.core.get.call(null,inst_30174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30176 = cljs.core.get.call(null,inst_30174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30177 = cljs.core.get.call(null,inst_30174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30178 = inst_30153;
var state_30251__$1 = (function (){var statearr_30302 = state_30251;
(statearr_30302[(16)] = inst_30175);

(statearr_30302[(7)] = inst_30178);

(statearr_30302[(17)] = inst_30176);

(statearr_30302[(18)] = inst_30177);

return statearr_30302;
})();
var statearr_30303_30357 = state_30251__$1;
(statearr_30303_30357[(2)] = null);

(statearr_30303_30357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (18))){
var inst_30193 = (state_30251[(2)]);
var state_30251__$1 = state_30251;
var statearr_30304_30358 = state_30251__$1;
(statearr_30304_30358[(2)] = inst_30193);

(statearr_30304_30358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (37))){
var state_30251__$1 = state_30251;
var statearr_30305_30359 = state_30251__$1;
(statearr_30305_30359[(2)] = null);

(statearr_30305_30359[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30252 === (8))){
var inst_30153 = (state_30251[(8)]);
var inst_30171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30153);
var state_30251__$1 = state_30251;
var statearr_30306_30360 = state_30251__$1;
(statearr_30306_30360[(2)] = inst_30171);

(statearr_30306_30360[(1)] = (10));


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
});})(c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28465__auto__,c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28466__auto__ = null;
var cljs$core$async$mix_$_state_machine__28466__auto____0 = (function (){
var statearr_30310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30310[(0)] = cljs$core$async$mix_$_state_machine__28466__auto__);

(statearr_30310[(1)] = (1));

return statearr_30310;
});
var cljs$core$async$mix_$_state_machine__28466__auto____1 = (function (state_30251){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object)){
var ex__28469__auto__ = e30311;
var statearr_30312_30361 = state_30251;
(statearr_30312_30361[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30362 = state_30251;
state_30251 = G__30362;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28466__auto__ = function(state_30251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28466__auto____1.call(this,state_30251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28466__auto____0;
cljs$core$async$mix_$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28466__auto____1;
return cljs$core$async$mix_$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28579__auto__ = (function (){var statearr_30313 = f__28578__auto__.call(null);
(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30314);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v,ch);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30363 = [];
var len__25983__auto___30366 = arguments.length;
var i__25984__auto___30367 = (0);
while(true){
if((i__25984__auto___30367 < len__25983__auto___30366)){
args30363.push((arguments[i__25984__auto___30367]));

var G__30368 = (i__25984__auto___30367 + (1));
i__25984__auto___30367 = G__30368;
continue;
} else {
}
break;
}

var G__30365 = args30363.length;
switch (G__30365) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30363.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25538__auto__ = (((p == null))?null:p);
var m__25539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25538__auto__)]);
if(!((m__25539__auto__ == null))){
return m__25539__auto__.call(null,p,v);
} else {
var m__25539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25539__auto____$1 == null))){
return m__25539__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30371 = [];
var len__25983__auto___30496 = arguments.length;
var i__25984__auto___30497 = (0);
while(true){
if((i__25984__auto___30497 < len__25983__auto___30496)){
args30371.push((arguments[i__25984__auto___30497]));

var G__30498 = (i__25984__auto___30497 + (1));
i__25984__auto___30497 = G__30498;
continue;
} else {
}
break;
}

var G__30373 = args30371.length;
switch (G__30373) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30371.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24875__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24875__auto__)){
return or__24875__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24875__auto__,mults){
return (function (p1__30370_SHARP_){
if(cljs.core.truth_(p1__30370_SHARP_.call(null,topic))){
return p1__30370_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30370_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24875__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30374 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30375){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30375 = meta30375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30376,meta30375__$1){
var self__ = this;
var _30376__$1 = this;
return (new cljs.core.async.t_cljs$core$async30374(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30375__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30376){
var self__ = this;
var _30376__$1 = this;
return self__.meta30375;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30375","meta30375",2063966229,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30374";

cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30374");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30374 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30375){
return (new cljs.core.async.t_cljs$core$async30374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30375));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30374(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28577__auto___30500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30500,mults,ensure_mult,p){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30500,mults,ensure_mult,p){
return (function (state_30448){
var state_val_30449 = (state_30448[(1)]);
if((state_val_30449 === (7))){
var inst_30444 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30450_30501 = state_30448__$1;
(statearr_30450_30501[(2)] = inst_30444);

(statearr_30450_30501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (20))){
var state_30448__$1 = state_30448;
var statearr_30451_30502 = state_30448__$1;
(statearr_30451_30502[(2)] = null);

(statearr_30451_30502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (1))){
var state_30448__$1 = state_30448;
var statearr_30452_30503 = state_30448__$1;
(statearr_30452_30503[(2)] = null);

(statearr_30452_30503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (24))){
var inst_30427 = (state_30448[(7)]);
var inst_30436 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30427);
var state_30448__$1 = state_30448;
var statearr_30453_30504 = state_30448__$1;
(statearr_30453_30504[(2)] = inst_30436);

(statearr_30453_30504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (4))){
var inst_30379 = (state_30448[(8)]);
var inst_30379__$1 = (state_30448[(2)]);
var inst_30380 = (inst_30379__$1 == null);
var state_30448__$1 = (function (){var statearr_30454 = state_30448;
(statearr_30454[(8)] = inst_30379__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30380)){
var statearr_30455_30505 = state_30448__$1;
(statearr_30455_30505[(1)] = (5));

} else {
var statearr_30456_30506 = state_30448__$1;
(statearr_30456_30506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (15))){
var inst_30421 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30457_30507 = state_30448__$1;
(statearr_30457_30507[(2)] = inst_30421);

(statearr_30457_30507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (21))){
var inst_30441 = (state_30448[(2)]);
var state_30448__$1 = (function (){var statearr_30458 = state_30448;
(statearr_30458[(9)] = inst_30441);

return statearr_30458;
})();
var statearr_30459_30508 = state_30448__$1;
(statearr_30459_30508[(2)] = null);

(statearr_30459_30508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (13))){
var inst_30403 = (state_30448[(10)]);
var inst_30405 = cljs.core.chunked_seq_QMARK_.call(null,inst_30403);
var state_30448__$1 = state_30448;
if(inst_30405){
var statearr_30460_30509 = state_30448__$1;
(statearr_30460_30509[(1)] = (16));

} else {
var statearr_30461_30510 = state_30448__$1;
(statearr_30461_30510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (22))){
var inst_30433 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
if(cljs.core.truth_(inst_30433)){
var statearr_30462_30511 = state_30448__$1;
(statearr_30462_30511[(1)] = (23));

} else {
var statearr_30463_30512 = state_30448__$1;
(statearr_30463_30512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (6))){
var inst_30379 = (state_30448[(8)]);
var inst_30427 = (state_30448[(7)]);
var inst_30429 = (state_30448[(11)]);
var inst_30427__$1 = topic_fn.call(null,inst_30379);
var inst_30428 = cljs.core.deref.call(null,mults);
var inst_30429__$1 = cljs.core.get.call(null,inst_30428,inst_30427__$1);
var state_30448__$1 = (function (){var statearr_30464 = state_30448;
(statearr_30464[(7)] = inst_30427__$1);

(statearr_30464[(11)] = inst_30429__$1);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30429__$1)){
var statearr_30465_30513 = state_30448__$1;
(statearr_30465_30513[(1)] = (19));

} else {
var statearr_30466_30514 = state_30448__$1;
(statearr_30466_30514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (25))){
var inst_30438 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30467_30515 = state_30448__$1;
(statearr_30467_30515[(2)] = inst_30438);

(statearr_30467_30515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (17))){
var inst_30403 = (state_30448[(10)]);
var inst_30412 = cljs.core.first.call(null,inst_30403);
var inst_30413 = cljs.core.async.muxch_STAR_.call(null,inst_30412);
var inst_30414 = cljs.core.async.close_BANG_.call(null,inst_30413);
var inst_30415 = cljs.core.next.call(null,inst_30403);
var inst_30389 = inst_30415;
var inst_30390 = null;
var inst_30391 = (0);
var inst_30392 = (0);
var state_30448__$1 = (function (){var statearr_30468 = state_30448;
(statearr_30468[(12)] = inst_30392);

(statearr_30468[(13)] = inst_30390);

(statearr_30468[(14)] = inst_30389);

(statearr_30468[(15)] = inst_30414);

(statearr_30468[(16)] = inst_30391);

return statearr_30468;
})();
var statearr_30469_30516 = state_30448__$1;
(statearr_30469_30516[(2)] = null);

(statearr_30469_30516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (3))){
var inst_30446 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30448__$1,inst_30446);
} else {
if((state_val_30449 === (12))){
var inst_30423 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30470_30517 = state_30448__$1;
(statearr_30470_30517[(2)] = inst_30423);

(statearr_30470_30517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (2))){
var state_30448__$1 = state_30448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30448__$1,(4),ch);
} else {
if((state_val_30449 === (23))){
var state_30448__$1 = state_30448;
var statearr_30471_30518 = state_30448__$1;
(statearr_30471_30518[(2)] = null);

(statearr_30471_30518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (19))){
var inst_30379 = (state_30448[(8)]);
var inst_30429 = (state_30448[(11)]);
var inst_30431 = cljs.core.async.muxch_STAR_.call(null,inst_30429);
var state_30448__$1 = state_30448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30448__$1,(22),inst_30431,inst_30379);
} else {
if((state_val_30449 === (11))){
var inst_30403 = (state_30448[(10)]);
var inst_30389 = (state_30448[(14)]);
var inst_30403__$1 = cljs.core.seq.call(null,inst_30389);
var state_30448__$1 = (function (){var statearr_30472 = state_30448;
(statearr_30472[(10)] = inst_30403__$1);

return statearr_30472;
})();
if(inst_30403__$1){
var statearr_30473_30519 = state_30448__$1;
(statearr_30473_30519[(1)] = (13));

} else {
var statearr_30474_30520 = state_30448__$1;
(statearr_30474_30520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (9))){
var inst_30425 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30475_30521 = state_30448__$1;
(statearr_30475_30521[(2)] = inst_30425);

(statearr_30475_30521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (5))){
var inst_30386 = cljs.core.deref.call(null,mults);
var inst_30387 = cljs.core.vals.call(null,inst_30386);
var inst_30388 = cljs.core.seq.call(null,inst_30387);
var inst_30389 = inst_30388;
var inst_30390 = null;
var inst_30391 = (0);
var inst_30392 = (0);
var state_30448__$1 = (function (){var statearr_30476 = state_30448;
(statearr_30476[(12)] = inst_30392);

(statearr_30476[(13)] = inst_30390);

(statearr_30476[(14)] = inst_30389);

(statearr_30476[(16)] = inst_30391);

return statearr_30476;
})();
var statearr_30477_30522 = state_30448__$1;
(statearr_30477_30522[(2)] = null);

(statearr_30477_30522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (14))){
var state_30448__$1 = state_30448;
var statearr_30481_30523 = state_30448__$1;
(statearr_30481_30523[(2)] = null);

(statearr_30481_30523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (16))){
var inst_30403 = (state_30448[(10)]);
var inst_30407 = cljs.core.chunk_first.call(null,inst_30403);
var inst_30408 = cljs.core.chunk_rest.call(null,inst_30403);
var inst_30409 = cljs.core.count.call(null,inst_30407);
var inst_30389 = inst_30408;
var inst_30390 = inst_30407;
var inst_30391 = inst_30409;
var inst_30392 = (0);
var state_30448__$1 = (function (){var statearr_30482 = state_30448;
(statearr_30482[(12)] = inst_30392);

(statearr_30482[(13)] = inst_30390);

(statearr_30482[(14)] = inst_30389);

(statearr_30482[(16)] = inst_30391);

return statearr_30482;
})();
var statearr_30483_30524 = state_30448__$1;
(statearr_30483_30524[(2)] = null);

(statearr_30483_30524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (10))){
var inst_30392 = (state_30448[(12)]);
var inst_30390 = (state_30448[(13)]);
var inst_30389 = (state_30448[(14)]);
var inst_30391 = (state_30448[(16)]);
var inst_30397 = cljs.core._nth.call(null,inst_30390,inst_30392);
var inst_30398 = cljs.core.async.muxch_STAR_.call(null,inst_30397);
var inst_30399 = cljs.core.async.close_BANG_.call(null,inst_30398);
var inst_30400 = (inst_30392 + (1));
var tmp30478 = inst_30390;
var tmp30479 = inst_30389;
var tmp30480 = inst_30391;
var inst_30389__$1 = tmp30479;
var inst_30390__$1 = tmp30478;
var inst_30391__$1 = tmp30480;
var inst_30392__$1 = inst_30400;
var state_30448__$1 = (function (){var statearr_30484 = state_30448;
(statearr_30484[(12)] = inst_30392__$1);

(statearr_30484[(17)] = inst_30399);

(statearr_30484[(13)] = inst_30390__$1);

(statearr_30484[(14)] = inst_30389__$1);

(statearr_30484[(16)] = inst_30391__$1);

return statearr_30484;
})();
var statearr_30485_30525 = state_30448__$1;
(statearr_30485_30525[(2)] = null);

(statearr_30485_30525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (18))){
var inst_30418 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30486_30526 = state_30448__$1;
(statearr_30486_30526[(2)] = inst_30418);

(statearr_30486_30526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (8))){
var inst_30392 = (state_30448[(12)]);
var inst_30391 = (state_30448[(16)]);
var inst_30394 = (inst_30392 < inst_30391);
var inst_30395 = inst_30394;
var state_30448__$1 = state_30448;
if(cljs.core.truth_(inst_30395)){
var statearr_30487_30527 = state_30448__$1;
(statearr_30487_30527[(1)] = (10));

} else {
var statearr_30488_30528 = state_30448__$1;
(statearr_30488_30528[(1)] = (11));

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
});})(c__28577__auto___30500,mults,ensure_mult,p))
;
return ((function (switch__28465__auto__,c__28577__auto___30500,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30492[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30492[(1)] = (1));

return statearr_30492;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30448){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30493){if((e30493 instanceof Object)){
var ex__28469__auto__ = e30493;
var statearr_30494_30529 = state_30448;
(statearr_30494_30529[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30530 = state_30448;
state_30448 = G__30530;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30500,mults,ensure_mult,p))
})();
var state__28579__auto__ = (function (){var statearr_30495 = f__28578__auto__.call(null);
(statearr_30495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30500);

return statearr_30495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30500,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30531 = [];
var len__25983__auto___30534 = arguments.length;
var i__25984__auto___30535 = (0);
while(true){
if((i__25984__auto___30535 < len__25983__auto___30534)){
args30531.push((arguments[i__25984__auto___30535]));

var G__30536 = (i__25984__auto___30535 + (1));
i__25984__auto___30535 = G__30536;
continue;
} else {
}
break;
}

var G__30533 = args30531.length;
switch (G__30533) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30531.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30538 = [];
var len__25983__auto___30541 = arguments.length;
var i__25984__auto___30542 = (0);
while(true){
if((i__25984__auto___30542 < len__25983__auto___30541)){
args30538.push((arguments[i__25984__auto___30542]));

var G__30543 = (i__25984__auto___30542 + (1));
i__25984__auto___30542 = G__30543;
continue;
} else {
}
break;
}

var G__30540 = args30538.length;
switch (G__30540) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30538.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30545 = [];
var len__25983__auto___30616 = arguments.length;
var i__25984__auto___30617 = (0);
while(true){
if((i__25984__auto___30617 < len__25983__auto___30616)){
args30545.push((arguments[i__25984__auto___30617]));

var G__30618 = (i__25984__auto___30617 + (1));
i__25984__auto___30617 = G__30618;
continue;
} else {
}
break;
}

var G__30547 = args30545.length;
switch (G__30547) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30545.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28577__auto___30620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30586){
var state_val_30587 = (state_30586[(1)]);
if((state_val_30587 === (7))){
var state_30586__$1 = state_30586;
var statearr_30588_30621 = state_30586__$1;
(statearr_30588_30621[(2)] = null);

(statearr_30588_30621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (1))){
var state_30586__$1 = state_30586;
var statearr_30589_30622 = state_30586__$1;
(statearr_30589_30622[(2)] = null);

(statearr_30589_30622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (4))){
var inst_30550 = (state_30586[(7)]);
var inst_30552 = (inst_30550 < cnt);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30552)){
var statearr_30590_30623 = state_30586__$1;
(statearr_30590_30623[(1)] = (6));

} else {
var statearr_30591_30624 = state_30586__$1;
(statearr_30591_30624[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (15))){
var inst_30582 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30592_30625 = state_30586__$1;
(statearr_30592_30625[(2)] = inst_30582);

(statearr_30592_30625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (13))){
var inst_30575 = cljs.core.async.close_BANG_.call(null,out);
var state_30586__$1 = state_30586;
var statearr_30593_30626 = state_30586__$1;
(statearr_30593_30626[(2)] = inst_30575);

(statearr_30593_30626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (6))){
var state_30586__$1 = state_30586;
var statearr_30594_30627 = state_30586__$1;
(statearr_30594_30627[(2)] = null);

(statearr_30594_30627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (3))){
var inst_30584 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30586__$1,inst_30584);
} else {
if((state_val_30587 === (12))){
var inst_30572 = (state_30586[(8)]);
var inst_30572__$1 = (state_30586[(2)]);
var inst_30573 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30572__$1);
var state_30586__$1 = (function (){var statearr_30595 = state_30586;
(statearr_30595[(8)] = inst_30572__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30573)){
var statearr_30596_30628 = state_30586__$1;
(statearr_30596_30628[(1)] = (13));

} else {
var statearr_30597_30629 = state_30586__$1;
(statearr_30597_30629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (2))){
var inst_30549 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30550 = (0);
var state_30586__$1 = (function (){var statearr_30598 = state_30586;
(statearr_30598[(7)] = inst_30550);

(statearr_30598[(9)] = inst_30549);

return statearr_30598;
})();
var statearr_30599_30630 = state_30586__$1;
(statearr_30599_30630[(2)] = null);

(statearr_30599_30630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (11))){
var inst_30550 = (state_30586[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30586,(10),Object,null,(9));
var inst_30559 = chs__$1.call(null,inst_30550);
var inst_30560 = done.call(null,inst_30550);
var inst_30561 = cljs.core.async.take_BANG_.call(null,inst_30559,inst_30560);
var state_30586__$1 = state_30586;
var statearr_30600_30631 = state_30586__$1;
(statearr_30600_30631[(2)] = inst_30561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (9))){
var inst_30550 = (state_30586[(7)]);
var inst_30563 = (state_30586[(2)]);
var inst_30564 = (inst_30550 + (1));
var inst_30550__$1 = inst_30564;
var state_30586__$1 = (function (){var statearr_30601 = state_30586;
(statearr_30601[(10)] = inst_30563);

(statearr_30601[(7)] = inst_30550__$1);

return statearr_30601;
})();
var statearr_30602_30632 = state_30586__$1;
(statearr_30602_30632[(2)] = null);

(statearr_30602_30632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (5))){
var inst_30570 = (state_30586[(2)]);
var state_30586__$1 = (function (){var statearr_30603 = state_30586;
(statearr_30603[(11)] = inst_30570);

return statearr_30603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30586__$1,(12),dchan);
} else {
if((state_val_30587 === (14))){
var inst_30572 = (state_30586[(8)]);
var inst_30577 = cljs.core.apply.call(null,f,inst_30572);
var state_30586__$1 = state_30586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30586__$1,(16),out,inst_30577);
} else {
if((state_val_30587 === (16))){
var inst_30579 = (state_30586[(2)]);
var state_30586__$1 = (function (){var statearr_30604 = state_30586;
(statearr_30604[(12)] = inst_30579);

return statearr_30604;
})();
var statearr_30605_30633 = state_30586__$1;
(statearr_30605_30633[(2)] = null);

(statearr_30605_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (10))){
var inst_30554 = (state_30586[(2)]);
var inst_30555 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30586__$1 = (function (){var statearr_30606 = state_30586;
(statearr_30606[(13)] = inst_30554);

return statearr_30606;
})();
var statearr_30607_30634 = state_30586__$1;
(statearr_30607_30634[(2)] = inst_30555);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (8))){
var inst_30568 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30608_30635 = state_30586__$1;
(statearr_30608_30635[(2)] = inst_30568);

(statearr_30608_30635[(1)] = (5));


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
});})(c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28465__auto__,c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30612[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30612[(1)] = (1));

return statearr_30612;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30586){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30613){if((e30613 instanceof Object)){
var ex__28469__auto__ = e30613;
var statearr_30614_30636 = state_30586;
(statearr_30614_30636[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30637 = state_30586;
state_30586 = G__30637;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28579__auto__ = (function (){var statearr_30615 = f__28578__auto__.call(null);
(statearr_30615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30620);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30620,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30639 = [];
var len__25983__auto___30697 = arguments.length;
var i__25984__auto___30698 = (0);
while(true){
if((i__25984__auto___30698 < len__25983__auto___30697)){
args30639.push((arguments[i__25984__auto___30698]));

var G__30699 = (i__25984__auto___30698 + (1));
i__25984__auto___30698 = G__30699;
continue;
} else {
}
break;
}

var G__30641 = args30639.length;
switch (G__30641) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30639.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30701,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30701,out){
return (function (state_30673){
var state_val_30674 = (state_30673[(1)]);
if((state_val_30674 === (7))){
var inst_30653 = (state_30673[(7)]);
var inst_30652 = (state_30673[(8)]);
var inst_30652__$1 = (state_30673[(2)]);
var inst_30653__$1 = cljs.core.nth.call(null,inst_30652__$1,(0),null);
var inst_30654 = cljs.core.nth.call(null,inst_30652__$1,(1),null);
var inst_30655 = (inst_30653__$1 == null);
var state_30673__$1 = (function (){var statearr_30675 = state_30673;
(statearr_30675[(7)] = inst_30653__$1);

(statearr_30675[(8)] = inst_30652__$1);

(statearr_30675[(9)] = inst_30654);

return statearr_30675;
})();
if(cljs.core.truth_(inst_30655)){
var statearr_30676_30702 = state_30673__$1;
(statearr_30676_30702[(1)] = (8));

} else {
var statearr_30677_30703 = state_30673__$1;
(statearr_30677_30703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (1))){
var inst_30642 = cljs.core.vec.call(null,chs);
var inst_30643 = inst_30642;
var state_30673__$1 = (function (){var statearr_30678 = state_30673;
(statearr_30678[(10)] = inst_30643);

return statearr_30678;
})();
var statearr_30679_30704 = state_30673__$1;
(statearr_30679_30704[(2)] = null);

(statearr_30679_30704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (4))){
var inst_30643 = (state_30673[(10)]);
var state_30673__$1 = state_30673;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30673__$1,(7),inst_30643);
} else {
if((state_val_30674 === (6))){
var inst_30669 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30680_30705 = state_30673__$1;
(statearr_30680_30705[(2)] = inst_30669);

(statearr_30680_30705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (3))){
var inst_30671 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30673__$1,inst_30671);
} else {
if((state_val_30674 === (2))){
var inst_30643 = (state_30673[(10)]);
var inst_30645 = cljs.core.count.call(null,inst_30643);
var inst_30646 = (inst_30645 > (0));
var state_30673__$1 = state_30673;
if(cljs.core.truth_(inst_30646)){
var statearr_30682_30706 = state_30673__$1;
(statearr_30682_30706[(1)] = (4));

} else {
var statearr_30683_30707 = state_30673__$1;
(statearr_30683_30707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (11))){
var inst_30643 = (state_30673[(10)]);
var inst_30662 = (state_30673[(2)]);
var tmp30681 = inst_30643;
var inst_30643__$1 = tmp30681;
var state_30673__$1 = (function (){var statearr_30684 = state_30673;
(statearr_30684[(10)] = inst_30643__$1);

(statearr_30684[(11)] = inst_30662);

return statearr_30684;
})();
var statearr_30685_30708 = state_30673__$1;
(statearr_30685_30708[(2)] = null);

(statearr_30685_30708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (9))){
var inst_30653 = (state_30673[(7)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30673__$1,(11),out,inst_30653);
} else {
if((state_val_30674 === (5))){
var inst_30667 = cljs.core.async.close_BANG_.call(null,out);
var state_30673__$1 = state_30673;
var statearr_30686_30709 = state_30673__$1;
(statearr_30686_30709[(2)] = inst_30667);

(statearr_30686_30709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (10))){
var inst_30665 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30687_30710 = state_30673__$1;
(statearr_30687_30710[(2)] = inst_30665);

(statearr_30687_30710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (8))){
var inst_30643 = (state_30673[(10)]);
var inst_30653 = (state_30673[(7)]);
var inst_30652 = (state_30673[(8)]);
var inst_30654 = (state_30673[(9)]);
var inst_30657 = (function (){var cs = inst_30643;
var vec__30648 = inst_30652;
var v = inst_30653;
var c = inst_30654;
return ((function (cs,vec__30648,v,c,inst_30643,inst_30653,inst_30652,inst_30654,state_val_30674,c__28577__auto___30701,out){
return (function (p1__30638_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30638_SHARP_);
});
;})(cs,vec__30648,v,c,inst_30643,inst_30653,inst_30652,inst_30654,state_val_30674,c__28577__auto___30701,out))
})();
var inst_30658 = cljs.core.filterv.call(null,inst_30657,inst_30643);
var inst_30643__$1 = inst_30658;
var state_30673__$1 = (function (){var statearr_30688 = state_30673;
(statearr_30688[(10)] = inst_30643__$1);

return statearr_30688;
})();
var statearr_30689_30711 = state_30673__$1;
(statearr_30689_30711[(2)] = null);

(statearr_30689_30711[(1)] = (2));


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
});})(c__28577__auto___30701,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30701,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30693[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30693[(1)] = (1));

return statearr_30693;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30673){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30694){if((e30694 instanceof Object)){
var ex__28469__auto__ = e30694;
var statearr_30695_30712 = state_30673;
(statearr_30695_30712[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30713 = state_30673;
state_30673 = G__30713;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30701,out))
})();
var state__28579__auto__ = (function (){var statearr_30696 = f__28578__auto__.call(null);
(statearr_30696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30701);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30701,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30714 = [];
var len__25983__auto___30763 = arguments.length;
var i__25984__auto___30764 = (0);
while(true){
if((i__25984__auto___30764 < len__25983__auto___30763)){
args30714.push((arguments[i__25984__auto___30764]));

var G__30765 = (i__25984__auto___30764 + (1));
i__25984__auto___30764 = G__30765;
continue;
} else {
}
break;
}

var G__30716 = args30714.length;
switch (G__30716) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30714.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30767,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30767,out){
return (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (7))){
var inst_30722 = (state_30740[(7)]);
var inst_30722__$1 = (state_30740[(2)]);
var inst_30723 = (inst_30722__$1 == null);
var inst_30724 = cljs.core.not.call(null,inst_30723);
var state_30740__$1 = (function (){var statearr_30742 = state_30740;
(statearr_30742[(7)] = inst_30722__$1);

return statearr_30742;
})();
if(inst_30724){
var statearr_30743_30768 = state_30740__$1;
(statearr_30743_30768[(1)] = (8));

} else {
var statearr_30744_30769 = state_30740__$1;
(statearr_30744_30769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (1))){
var inst_30717 = (0);
var state_30740__$1 = (function (){var statearr_30745 = state_30740;
(statearr_30745[(8)] = inst_30717);

return statearr_30745;
})();
var statearr_30746_30770 = state_30740__$1;
(statearr_30746_30770[(2)] = null);

(statearr_30746_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (4))){
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30740__$1,(7),ch);
} else {
if((state_val_30741 === (6))){
var inst_30735 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30747_30771 = state_30740__$1;
(statearr_30747_30771[(2)] = inst_30735);

(statearr_30747_30771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (3))){
var inst_30737 = (state_30740[(2)]);
var inst_30738 = cljs.core.async.close_BANG_.call(null,out);
var state_30740__$1 = (function (){var statearr_30748 = state_30740;
(statearr_30748[(9)] = inst_30737);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30740__$1,inst_30738);
} else {
if((state_val_30741 === (2))){
var inst_30717 = (state_30740[(8)]);
var inst_30719 = (inst_30717 < n);
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30719)){
var statearr_30749_30772 = state_30740__$1;
(statearr_30749_30772[(1)] = (4));

} else {
var statearr_30750_30773 = state_30740__$1;
(statearr_30750_30773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (11))){
var inst_30717 = (state_30740[(8)]);
var inst_30727 = (state_30740[(2)]);
var inst_30728 = (inst_30717 + (1));
var inst_30717__$1 = inst_30728;
var state_30740__$1 = (function (){var statearr_30751 = state_30740;
(statearr_30751[(8)] = inst_30717__$1);

(statearr_30751[(10)] = inst_30727);

return statearr_30751;
})();
var statearr_30752_30774 = state_30740__$1;
(statearr_30752_30774[(2)] = null);

(statearr_30752_30774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (9))){
var state_30740__$1 = state_30740;
var statearr_30753_30775 = state_30740__$1;
(statearr_30753_30775[(2)] = null);

(statearr_30753_30775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (5))){
var state_30740__$1 = state_30740;
var statearr_30754_30776 = state_30740__$1;
(statearr_30754_30776[(2)] = null);

(statearr_30754_30776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (10))){
var inst_30732 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30755_30777 = state_30740__$1;
(statearr_30755_30777[(2)] = inst_30732);

(statearr_30755_30777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (8))){
var inst_30722 = (state_30740[(7)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30740__$1,(11),out,inst_30722);
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
});})(c__28577__auto___30767,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30767,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30759[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30759[(1)] = (1));

return statearr_30759;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30740){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30760){if((e30760 instanceof Object)){
var ex__28469__auto__ = e30760;
var statearr_30761_30778 = state_30740;
(statearr_30761_30778[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30740;
state_30740 = G__30779;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30767,out))
})();
var state__28579__auto__ = (function (){var statearr_30762 = f__28578__auto__.call(null);
(statearr_30762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30767);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30767,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30787 = (function (f,ch,meta30788){
this.f = f;
this.ch = ch;
this.meta30788 = meta30788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30789,meta30788__$1){
var self__ = this;
var _30789__$1 = this;
return (new cljs.core.async.t_cljs$core$async30787(self__.f,self__.ch,meta30788__$1));
});

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30789){
var self__ = this;
var _30789__$1 = this;
return self__.meta30788;
});

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30790 = (function (f,ch,meta30788,_,fn1,meta30791){
this.f = f;
this.ch = ch;
this.meta30788 = meta30788;
this._ = _;
this.fn1 = fn1;
this.meta30791 = meta30791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30792,meta30791__$1){
var self__ = this;
var _30792__$1 = this;
return (new cljs.core.async.t_cljs$core$async30790(self__.f,self__.ch,self__.meta30788,self__._,self__.fn1,meta30791__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30792){
var self__ = this;
var _30792__$1 = this;
return self__.meta30791;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30780_SHARP_){
return f1.call(null,(((p1__30780_SHARP_ == null))?null:self__.f.call(null,p1__30780_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30788","meta30788",1734429926,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30787","cljs.core.async/t_cljs$core$async30787",497294767,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30791","meta30791",1984718865,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30790";

cljs.core.async.t_cljs$core$async30790.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30790");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30790 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30790(f__$1,ch__$1,meta30788__$1,___$2,fn1__$1,meta30791){
return (new cljs.core.async.t_cljs$core$async30790(f__$1,ch__$1,meta30788__$1,___$2,fn1__$1,meta30791));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30790(self__.f,self__.ch,self__.meta30788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24863__auto__ = ret;
if(cljs.core.truth_(and__24863__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24863__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30788","meta30788",1734429926,null)], null);
});

cljs.core.async.t_cljs$core$async30787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30787";

cljs.core.async.t_cljs$core$async30787.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30787");
});

cljs.core.async.__GT_t_cljs$core$async30787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30787(f__$1,ch__$1,meta30788){
return (new cljs.core.async.t_cljs$core$async30787(f__$1,ch__$1,meta30788));
});

}

return (new cljs.core.async.t_cljs$core$async30787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30796 = (function (f,ch,meta30797){
this.f = f;
this.ch = ch;
this.meta30797 = meta30797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30798,meta30797__$1){
var self__ = this;
var _30798__$1 = this;
return (new cljs.core.async.t_cljs$core$async30796(self__.f,self__.ch,meta30797__$1));
});

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30798){
var self__ = this;
var _30798__$1 = this;
return self__.meta30797;
});

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30797","meta30797",240627732,null)], null);
});

cljs.core.async.t_cljs$core$async30796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30796";

cljs.core.async.t_cljs$core$async30796.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30796");
});

cljs.core.async.__GT_t_cljs$core$async30796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30796(f__$1,ch__$1,meta30797){
return (new cljs.core.async.t_cljs$core$async30796(f__$1,ch__$1,meta30797));
});

}

return (new cljs.core.async.t_cljs$core$async30796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30802 = (function (p,ch,meta30803){
this.p = p;
this.ch = ch;
this.meta30803 = meta30803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30804,meta30803__$1){
var self__ = this;
var _30804__$1 = this;
return (new cljs.core.async.t_cljs$core$async30802(self__.p,self__.ch,meta30803__$1));
});

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30804){
var self__ = this;
var _30804__$1 = this;
return self__.meta30803;
});

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30803","meta30803",-594904097,null)], null);
});

cljs.core.async.t_cljs$core$async30802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30802";

cljs.core.async.t_cljs$core$async30802.cljs$lang$ctorPrWriter = (function (this__25481__auto__,writer__25482__auto__,opt__25483__auto__){
return cljs.core._write.call(null,writer__25482__auto__,"cljs.core.async/t_cljs$core$async30802");
});

cljs.core.async.__GT_t_cljs$core$async30802 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30802(p__$1,ch__$1,meta30803){
return (new cljs.core.async.t_cljs$core$async30802(p__$1,ch__$1,meta30803));
});

}

return (new cljs.core.async.t_cljs$core$async30802(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30805 = [];
var len__25983__auto___30849 = arguments.length;
var i__25984__auto___30850 = (0);
while(true){
if((i__25984__auto___30850 < len__25983__auto___30849)){
args30805.push((arguments[i__25984__auto___30850]));

var G__30851 = (i__25984__auto___30850 + (1));
i__25984__auto___30850 = G__30851;
continue;
} else {
}
break;
}

var G__30807 = args30805.length;
switch (G__30807) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30805.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___30853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___30853,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___30853,out){
return (function (state_30828){
var state_val_30829 = (state_30828[(1)]);
if((state_val_30829 === (7))){
var inst_30824 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30830_30854 = state_30828__$1;
(statearr_30830_30854[(2)] = inst_30824);

(statearr_30830_30854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (1))){
var state_30828__$1 = state_30828;
var statearr_30831_30855 = state_30828__$1;
(statearr_30831_30855[(2)] = null);

(statearr_30831_30855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (4))){
var inst_30810 = (state_30828[(7)]);
var inst_30810__$1 = (state_30828[(2)]);
var inst_30811 = (inst_30810__$1 == null);
var state_30828__$1 = (function (){var statearr_30832 = state_30828;
(statearr_30832[(7)] = inst_30810__$1);

return statearr_30832;
})();
if(cljs.core.truth_(inst_30811)){
var statearr_30833_30856 = state_30828__$1;
(statearr_30833_30856[(1)] = (5));

} else {
var statearr_30834_30857 = state_30828__$1;
(statearr_30834_30857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (6))){
var inst_30810 = (state_30828[(7)]);
var inst_30815 = p.call(null,inst_30810);
var state_30828__$1 = state_30828;
if(cljs.core.truth_(inst_30815)){
var statearr_30835_30858 = state_30828__$1;
(statearr_30835_30858[(1)] = (8));

} else {
var statearr_30836_30859 = state_30828__$1;
(statearr_30836_30859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (3))){
var inst_30826 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30828__$1,inst_30826);
} else {
if((state_val_30829 === (2))){
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30828__$1,(4),ch);
} else {
if((state_val_30829 === (11))){
var inst_30818 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30837_30860 = state_30828__$1;
(statearr_30837_30860[(2)] = inst_30818);

(statearr_30837_30860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (9))){
var state_30828__$1 = state_30828;
var statearr_30838_30861 = state_30828__$1;
(statearr_30838_30861[(2)] = null);

(statearr_30838_30861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (5))){
var inst_30813 = cljs.core.async.close_BANG_.call(null,out);
var state_30828__$1 = state_30828;
var statearr_30839_30862 = state_30828__$1;
(statearr_30839_30862[(2)] = inst_30813);

(statearr_30839_30862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (10))){
var inst_30821 = (state_30828[(2)]);
var state_30828__$1 = (function (){var statearr_30840 = state_30828;
(statearr_30840[(8)] = inst_30821);

return statearr_30840;
})();
var statearr_30841_30863 = state_30828__$1;
(statearr_30841_30863[(2)] = null);

(statearr_30841_30863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (8))){
var inst_30810 = (state_30828[(7)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30828__$1,(11),out,inst_30810);
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
});})(c__28577__auto___30853,out))
;
return ((function (switch__28465__auto__,c__28577__auto___30853,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_30845 = [null,null,null,null,null,null,null,null,null];
(statearr_30845[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_30845[(1)] = (1));

return statearr_30845;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_30828){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_30828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e30846){if((e30846 instanceof Object)){
var ex__28469__auto__ = e30846;
var statearr_30847_30864 = state_30828;
(statearr_30847_30864[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30865 = state_30828;
state_30828 = G__30865;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_30828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_30828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___30853,out))
})();
var state__28579__auto__ = (function (){var statearr_30848 = f__28578__auto__.call(null);
(statearr_30848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___30853);

return statearr_30848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___30853,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30866 = [];
var len__25983__auto___30869 = arguments.length;
var i__25984__auto___30870 = (0);
while(true){
if((i__25984__auto___30870 < len__25983__auto___30869)){
args30866.push((arguments[i__25984__auto___30870]));

var G__30871 = (i__25984__auto___30870 + (1));
i__25984__auto___30870 = G__30871;
continue;
} else {
}
break;
}

var G__30868 = args30866.length;
switch (G__30868) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30866.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto__){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto__){
return (function (state_31038){
var state_val_31039 = (state_31038[(1)]);
if((state_val_31039 === (7))){
var inst_31034 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31040_31081 = state_31038__$1;
(statearr_31040_31081[(2)] = inst_31034);

(statearr_31040_31081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (20))){
var inst_31004 = (state_31038[(7)]);
var inst_31015 = (state_31038[(2)]);
var inst_31016 = cljs.core.next.call(null,inst_31004);
var inst_30990 = inst_31016;
var inst_30991 = null;
var inst_30992 = (0);
var inst_30993 = (0);
var state_31038__$1 = (function (){var statearr_31041 = state_31038;
(statearr_31041[(8)] = inst_30992);

(statearr_31041[(9)] = inst_30990);

(statearr_31041[(10)] = inst_31015);

(statearr_31041[(11)] = inst_30991);

(statearr_31041[(12)] = inst_30993);

return statearr_31041;
})();
var statearr_31042_31082 = state_31038__$1;
(statearr_31042_31082[(2)] = null);

(statearr_31042_31082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (1))){
var state_31038__$1 = state_31038;
var statearr_31043_31083 = state_31038__$1;
(statearr_31043_31083[(2)] = null);

(statearr_31043_31083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (4))){
var inst_30979 = (state_31038[(13)]);
var inst_30979__$1 = (state_31038[(2)]);
var inst_30980 = (inst_30979__$1 == null);
var state_31038__$1 = (function (){var statearr_31044 = state_31038;
(statearr_31044[(13)] = inst_30979__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30980)){
var statearr_31045_31084 = state_31038__$1;
(statearr_31045_31084[(1)] = (5));

} else {
var statearr_31046_31085 = state_31038__$1;
(statearr_31046_31085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (15))){
var state_31038__$1 = state_31038;
var statearr_31050_31086 = state_31038__$1;
(statearr_31050_31086[(2)] = null);

(statearr_31050_31086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (21))){
var state_31038__$1 = state_31038;
var statearr_31051_31087 = state_31038__$1;
(statearr_31051_31087[(2)] = null);

(statearr_31051_31087[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (13))){
var inst_30992 = (state_31038[(8)]);
var inst_30990 = (state_31038[(9)]);
var inst_30991 = (state_31038[(11)]);
var inst_30993 = (state_31038[(12)]);
var inst_31000 = (state_31038[(2)]);
var inst_31001 = (inst_30993 + (1));
var tmp31047 = inst_30992;
var tmp31048 = inst_30990;
var tmp31049 = inst_30991;
var inst_30990__$1 = tmp31048;
var inst_30991__$1 = tmp31049;
var inst_30992__$1 = tmp31047;
var inst_30993__$1 = inst_31001;
var state_31038__$1 = (function (){var statearr_31052 = state_31038;
(statearr_31052[(8)] = inst_30992__$1);

(statearr_31052[(9)] = inst_30990__$1);

(statearr_31052[(14)] = inst_31000);

(statearr_31052[(11)] = inst_30991__$1);

(statearr_31052[(12)] = inst_30993__$1);

return statearr_31052;
})();
var statearr_31053_31088 = state_31038__$1;
(statearr_31053_31088[(2)] = null);

(statearr_31053_31088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (22))){
var state_31038__$1 = state_31038;
var statearr_31054_31089 = state_31038__$1;
(statearr_31054_31089[(2)] = null);

(statearr_31054_31089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (6))){
var inst_30979 = (state_31038[(13)]);
var inst_30988 = f.call(null,inst_30979);
var inst_30989 = cljs.core.seq.call(null,inst_30988);
var inst_30990 = inst_30989;
var inst_30991 = null;
var inst_30992 = (0);
var inst_30993 = (0);
var state_31038__$1 = (function (){var statearr_31055 = state_31038;
(statearr_31055[(8)] = inst_30992);

(statearr_31055[(9)] = inst_30990);

(statearr_31055[(11)] = inst_30991);

(statearr_31055[(12)] = inst_30993);

return statearr_31055;
})();
var statearr_31056_31090 = state_31038__$1;
(statearr_31056_31090[(2)] = null);

(statearr_31056_31090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (17))){
var inst_31004 = (state_31038[(7)]);
var inst_31008 = cljs.core.chunk_first.call(null,inst_31004);
var inst_31009 = cljs.core.chunk_rest.call(null,inst_31004);
var inst_31010 = cljs.core.count.call(null,inst_31008);
var inst_30990 = inst_31009;
var inst_30991 = inst_31008;
var inst_30992 = inst_31010;
var inst_30993 = (0);
var state_31038__$1 = (function (){var statearr_31057 = state_31038;
(statearr_31057[(8)] = inst_30992);

(statearr_31057[(9)] = inst_30990);

(statearr_31057[(11)] = inst_30991);

(statearr_31057[(12)] = inst_30993);

return statearr_31057;
})();
var statearr_31058_31091 = state_31038__$1;
(statearr_31058_31091[(2)] = null);

(statearr_31058_31091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (3))){
var inst_31036 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31038__$1,inst_31036);
} else {
if((state_val_31039 === (12))){
var inst_31024 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31059_31092 = state_31038__$1;
(statearr_31059_31092[(2)] = inst_31024);

(statearr_31059_31092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (2))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31038__$1,(4),in$);
} else {
if((state_val_31039 === (23))){
var inst_31032 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31060_31093 = state_31038__$1;
(statearr_31060_31093[(2)] = inst_31032);

(statearr_31060_31093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (19))){
var inst_31019 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31061_31094 = state_31038__$1;
(statearr_31061_31094[(2)] = inst_31019);

(statearr_31061_31094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (11))){
var inst_30990 = (state_31038[(9)]);
var inst_31004 = (state_31038[(7)]);
var inst_31004__$1 = cljs.core.seq.call(null,inst_30990);
var state_31038__$1 = (function (){var statearr_31062 = state_31038;
(statearr_31062[(7)] = inst_31004__$1);

return statearr_31062;
})();
if(inst_31004__$1){
var statearr_31063_31095 = state_31038__$1;
(statearr_31063_31095[(1)] = (14));

} else {
var statearr_31064_31096 = state_31038__$1;
(statearr_31064_31096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (9))){
var inst_31026 = (state_31038[(2)]);
var inst_31027 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31038__$1 = (function (){var statearr_31065 = state_31038;
(statearr_31065[(15)] = inst_31026);

return statearr_31065;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31066_31097 = state_31038__$1;
(statearr_31066_31097[(1)] = (21));

} else {
var statearr_31067_31098 = state_31038__$1;
(statearr_31067_31098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (5))){
var inst_30982 = cljs.core.async.close_BANG_.call(null,out);
var state_31038__$1 = state_31038;
var statearr_31068_31099 = state_31038__$1;
(statearr_31068_31099[(2)] = inst_30982);

(statearr_31068_31099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (14))){
var inst_31004 = (state_31038[(7)]);
var inst_31006 = cljs.core.chunked_seq_QMARK_.call(null,inst_31004);
var state_31038__$1 = state_31038;
if(inst_31006){
var statearr_31069_31100 = state_31038__$1;
(statearr_31069_31100[(1)] = (17));

} else {
var statearr_31070_31101 = state_31038__$1;
(statearr_31070_31101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (16))){
var inst_31022 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31071_31102 = state_31038__$1;
(statearr_31071_31102[(2)] = inst_31022);

(statearr_31071_31102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31039 === (10))){
var inst_30991 = (state_31038[(11)]);
var inst_30993 = (state_31038[(12)]);
var inst_30998 = cljs.core._nth.call(null,inst_30991,inst_30993);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31038__$1,(13),out,inst_30998);
} else {
if((state_val_31039 === (18))){
var inst_31004 = (state_31038[(7)]);
var inst_31013 = cljs.core.first.call(null,inst_31004);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31038__$1,(20),out,inst_31013);
} else {
if((state_val_31039 === (8))){
var inst_30992 = (state_31038[(8)]);
var inst_30993 = (state_31038[(12)]);
var inst_30995 = (inst_30993 < inst_30992);
var inst_30996 = inst_30995;
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_30996)){
var statearr_31072_31103 = state_31038__$1;
(statearr_31072_31103[(1)] = (10));

} else {
var statearr_31073_31104 = state_31038__$1;
(statearr_31073_31104[(1)] = (11));

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
});})(c__28577__auto__))
;
return ((function (switch__28465__auto__,c__28577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31077[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1 = (function (state_31038){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31078){if((e31078 instanceof Object)){
var ex__28469__auto__ = e31078;
var statearr_31079_31105 = state_31038;
(statearr_31079_31105[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31106 = state_31038;
state_31038 = G__31106;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__ = function(state_31038){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1.call(this,state_31038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto__))
})();
var state__28579__auto__ = (function (){var statearr_31080 = f__28578__auto__.call(null);
(statearr_31080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto__);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto__))
);

return c__28577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31107 = [];
var len__25983__auto___31110 = arguments.length;
var i__25984__auto___31111 = (0);
while(true){
if((i__25984__auto___31111 < len__25983__auto___31110)){
args31107.push((arguments[i__25984__auto___31111]));

var G__31112 = (i__25984__auto___31111 + (1));
i__25984__auto___31111 = G__31112;
continue;
} else {
}
break;
}

var G__31109 = args31107.length;
switch (G__31109) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31107.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31114 = [];
var len__25983__auto___31117 = arguments.length;
var i__25984__auto___31118 = (0);
while(true){
if((i__25984__auto___31118 < len__25983__auto___31117)){
args31114.push((arguments[i__25984__auto___31118]));

var G__31119 = (i__25984__auto___31118 + (1));
i__25984__auto___31118 = G__31119;
continue;
} else {
}
break;
}

var G__31116 = args31114.length;
switch (G__31116) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31114.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31121 = [];
var len__25983__auto___31172 = arguments.length;
var i__25984__auto___31173 = (0);
while(true){
if((i__25984__auto___31173 < len__25983__auto___31172)){
args31121.push((arguments[i__25984__auto___31173]));

var G__31174 = (i__25984__auto___31173 + (1));
i__25984__auto___31173 = G__31174;
continue;
} else {
}
break;
}

var G__31123 = args31121.length;
switch (G__31123) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31121.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31176,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31176,out){
return (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31142 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31149_31177 = state_31147__$1;
(statearr_31149_31177[(2)] = inst_31142);

(statearr_31149_31177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var inst_31124 = null;
var state_31147__$1 = (function (){var statearr_31150 = state_31147;
(statearr_31150[(7)] = inst_31124);

return statearr_31150;
})();
var statearr_31151_31178 = state_31147__$1;
(statearr_31151_31178[(2)] = null);

(statearr_31151_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31127 = (state_31147[(8)]);
var inst_31127__$1 = (state_31147[(2)]);
var inst_31128 = (inst_31127__$1 == null);
var inst_31129 = cljs.core.not.call(null,inst_31128);
var state_31147__$1 = (function (){var statearr_31152 = state_31147;
(statearr_31152[(8)] = inst_31127__$1);

return statearr_31152;
})();
if(inst_31129){
var statearr_31153_31179 = state_31147__$1;
(statearr_31153_31179[(1)] = (5));

} else {
var statearr_31154_31180 = state_31147__$1;
(statearr_31154_31180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var state_31147__$1 = state_31147;
var statearr_31155_31181 = state_31147__$1;
(statearr_31155_31181[(2)] = null);

(statearr_31155_31181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31144 = (state_31147[(2)]);
var inst_31145 = cljs.core.async.close_BANG_.call(null,out);
var state_31147__$1 = (function (){var statearr_31156 = state_31147;
(statearr_31156[(9)] = inst_31144);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else {
if((state_val_31148 === (2))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31147__$1,(4),ch);
} else {
if((state_val_31148 === (11))){
var inst_31127 = (state_31147[(8)]);
var inst_31136 = (state_31147[(2)]);
var inst_31124 = inst_31127;
var state_31147__$1 = (function (){var statearr_31157 = state_31147;
(statearr_31157[(7)] = inst_31124);

(statearr_31157[(10)] = inst_31136);

return statearr_31157;
})();
var statearr_31158_31182 = state_31147__$1;
(statearr_31158_31182[(2)] = null);

(statearr_31158_31182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var inst_31127 = (state_31147[(8)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31147__$1,(11),out,inst_31127);
} else {
if((state_val_31148 === (5))){
var inst_31124 = (state_31147[(7)]);
var inst_31127 = (state_31147[(8)]);
var inst_31131 = cljs.core._EQ_.call(null,inst_31127,inst_31124);
var state_31147__$1 = state_31147;
if(inst_31131){
var statearr_31160_31183 = state_31147__$1;
(statearr_31160_31183[(1)] = (8));

} else {
var statearr_31161_31184 = state_31147__$1;
(statearr_31161_31184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31139 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31162_31185 = state_31147__$1;
(statearr_31162_31185[(2)] = inst_31139);

(statearr_31162_31185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31124 = (state_31147[(7)]);
var tmp31159 = inst_31124;
var inst_31124__$1 = tmp31159;
var state_31147__$1 = (function (){var statearr_31163 = state_31147;
(statearr_31163[(7)] = inst_31124__$1);

return statearr_31163;
})();
var statearr_31164_31186 = state_31147__$1;
(statearr_31164_31186[(2)] = null);

(statearr_31164_31186[(1)] = (2));


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
});})(c__28577__auto___31176,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31176,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31147){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object)){
var ex__28469__auto__ = e31169;
var statearr_31170_31187 = state_31147;
(statearr_31170_31187[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31188 = state_31147;
state_31147 = G__31188;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31176,out))
})();
var state__28579__auto__ = (function (){var statearr_31171 = f__28578__auto__.call(null);
(statearr_31171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31176);

return statearr_31171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31176,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31189 = [];
var len__25983__auto___31259 = arguments.length;
var i__25984__auto___31260 = (0);
while(true){
if((i__25984__auto___31260 < len__25983__auto___31259)){
args31189.push((arguments[i__25984__auto___31260]));

var G__31261 = (i__25984__auto___31260 + (1));
i__25984__auto___31260 = G__31261;
continue;
} else {
}
break;
}

var G__31191 = args31189.length;
switch (G__31191) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31189.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31263,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31263,out){
return (function (state_31229){
var state_val_31230 = (state_31229[(1)]);
if((state_val_31230 === (7))){
var inst_31225 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31231_31264 = state_31229__$1;
(statearr_31231_31264[(2)] = inst_31225);

(statearr_31231_31264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (1))){
var inst_31192 = (new Array(n));
var inst_31193 = inst_31192;
var inst_31194 = (0);
var state_31229__$1 = (function (){var statearr_31232 = state_31229;
(statearr_31232[(7)] = inst_31194);

(statearr_31232[(8)] = inst_31193);

return statearr_31232;
})();
var statearr_31233_31265 = state_31229__$1;
(statearr_31233_31265[(2)] = null);

(statearr_31233_31265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (4))){
var inst_31197 = (state_31229[(9)]);
var inst_31197__$1 = (state_31229[(2)]);
var inst_31198 = (inst_31197__$1 == null);
var inst_31199 = cljs.core.not.call(null,inst_31198);
var state_31229__$1 = (function (){var statearr_31234 = state_31229;
(statearr_31234[(9)] = inst_31197__$1);

return statearr_31234;
})();
if(inst_31199){
var statearr_31235_31266 = state_31229__$1;
(statearr_31235_31266[(1)] = (5));

} else {
var statearr_31236_31267 = state_31229__$1;
(statearr_31236_31267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (15))){
var inst_31219 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31237_31268 = state_31229__$1;
(statearr_31237_31268[(2)] = inst_31219);

(statearr_31237_31268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (13))){
var state_31229__$1 = state_31229;
var statearr_31238_31269 = state_31229__$1;
(statearr_31238_31269[(2)] = null);

(statearr_31238_31269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (6))){
var inst_31194 = (state_31229[(7)]);
var inst_31215 = (inst_31194 > (0));
var state_31229__$1 = state_31229;
if(cljs.core.truth_(inst_31215)){
var statearr_31239_31270 = state_31229__$1;
(statearr_31239_31270[(1)] = (12));

} else {
var statearr_31240_31271 = state_31229__$1;
(statearr_31240_31271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (3))){
var inst_31227 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31229__$1,inst_31227);
} else {
if((state_val_31230 === (12))){
var inst_31193 = (state_31229[(8)]);
var inst_31217 = cljs.core.vec.call(null,inst_31193);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31229__$1,(15),out,inst_31217);
} else {
if((state_val_31230 === (2))){
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31229__$1,(4),ch);
} else {
if((state_val_31230 === (11))){
var inst_31209 = (state_31229[(2)]);
var inst_31210 = (new Array(n));
var inst_31193 = inst_31210;
var inst_31194 = (0);
var state_31229__$1 = (function (){var statearr_31241 = state_31229;
(statearr_31241[(7)] = inst_31194);

(statearr_31241[(10)] = inst_31209);

(statearr_31241[(8)] = inst_31193);

return statearr_31241;
})();
var statearr_31242_31272 = state_31229__$1;
(statearr_31242_31272[(2)] = null);

(statearr_31242_31272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (9))){
var inst_31193 = (state_31229[(8)]);
var inst_31207 = cljs.core.vec.call(null,inst_31193);
var state_31229__$1 = state_31229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31229__$1,(11),out,inst_31207);
} else {
if((state_val_31230 === (5))){
var inst_31194 = (state_31229[(7)]);
var inst_31197 = (state_31229[(9)]);
var inst_31193 = (state_31229[(8)]);
var inst_31202 = (state_31229[(11)]);
var inst_31201 = (inst_31193[inst_31194] = inst_31197);
var inst_31202__$1 = (inst_31194 + (1));
var inst_31203 = (inst_31202__$1 < n);
var state_31229__$1 = (function (){var statearr_31243 = state_31229;
(statearr_31243[(12)] = inst_31201);

(statearr_31243[(11)] = inst_31202__$1);

return statearr_31243;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31244_31273 = state_31229__$1;
(statearr_31244_31273[(1)] = (8));

} else {
var statearr_31245_31274 = state_31229__$1;
(statearr_31245_31274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (14))){
var inst_31222 = (state_31229[(2)]);
var inst_31223 = cljs.core.async.close_BANG_.call(null,out);
var state_31229__$1 = (function (){var statearr_31247 = state_31229;
(statearr_31247[(13)] = inst_31222);

return statearr_31247;
})();
var statearr_31248_31275 = state_31229__$1;
(statearr_31248_31275[(2)] = inst_31223);

(statearr_31248_31275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (10))){
var inst_31213 = (state_31229[(2)]);
var state_31229__$1 = state_31229;
var statearr_31249_31276 = state_31229__$1;
(statearr_31249_31276[(2)] = inst_31213);

(statearr_31249_31276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31230 === (8))){
var inst_31193 = (state_31229[(8)]);
var inst_31202 = (state_31229[(11)]);
var tmp31246 = inst_31193;
var inst_31193__$1 = tmp31246;
var inst_31194 = inst_31202;
var state_31229__$1 = (function (){var statearr_31250 = state_31229;
(statearr_31250[(7)] = inst_31194);

(statearr_31250[(8)] = inst_31193__$1);

return statearr_31250;
})();
var statearr_31251_31277 = state_31229__$1;
(statearr_31251_31277[(2)] = null);

(statearr_31251_31277[(1)] = (2));


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
});})(c__28577__auto___31263,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31263,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31255[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31255[(1)] = (1));

return statearr_31255;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31229){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31256){if((e31256 instanceof Object)){
var ex__28469__auto__ = e31256;
var statearr_31257_31278 = state_31229;
(statearr_31257_31278[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31279 = state_31229;
state_31229 = G__31279;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31263,out))
})();
var state__28579__auto__ = (function (){var statearr_31258 = f__28578__auto__.call(null);
(statearr_31258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31263);

return statearr_31258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31263,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31280 = [];
var len__25983__auto___31354 = arguments.length;
var i__25984__auto___31355 = (0);
while(true){
if((i__25984__auto___31355 < len__25983__auto___31354)){
args31280.push((arguments[i__25984__auto___31355]));

var G__31356 = (i__25984__auto___31355 + (1));
i__25984__auto___31355 = G__31356;
continue;
} else {
}
break;
}

var G__31282 = args31280.length;
switch (G__31282) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31280.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28577__auto___31358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28577__auto___31358,out){
return (function (){
var f__28578__auto__ = (function (){var switch__28465__auto__ = ((function (c__28577__auto___31358,out){
return (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (7))){
var inst_31320 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31326_31359 = state_31324__$1;
(statearr_31326_31359[(2)] = inst_31320);

(statearr_31326_31359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (1))){
var inst_31283 = [];
var inst_31284 = inst_31283;
var inst_31285 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31324__$1 = (function (){var statearr_31327 = state_31324;
(statearr_31327[(7)] = inst_31285);

(statearr_31327[(8)] = inst_31284);

return statearr_31327;
})();
var statearr_31328_31360 = state_31324__$1;
(statearr_31328_31360[(2)] = null);

(statearr_31328_31360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (4))){
var inst_31288 = (state_31324[(9)]);
var inst_31288__$1 = (state_31324[(2)]);
var inst_31289 = (inst_31288__$1 == null);
var inst_31290 = cljs.core.not.call(null,inst_31289);
var state_31324__$1 = (function (){var statearr_31329 = state_31324;
(statearr_31329[(9)] = inst_31288__$1);

return statearr_31329;
})();
if(inst_31290){
var statearr_31330_31361 = state_31324__$1;
(statearr_31330_31361[(1)] = (5));

} else {
var statearr_31331_31362 = state_31324__$1;
(statearr_31331_31362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (15))){
var inst_31314 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31332_31363 = state_31324__$1;
(statearr_31332_31363[(2)] = inst_31314);

(statearr_31332_31363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (13))){
var state_31324__$1 = state_31324;
var statearr_31333_31364 = state_31324__$1;
(statearr_31333_31364[(2)] = null);

(statearr_31333_31364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (6))){
var inst_31284 = (state_31324[(8)]);
var inst_31309 = inst_31284.length;
var inst_31310 = (inst_31309 > (0));
var state_31324__$1 = state_31324;
if(cljs.core.truth_(inst_31310)){
var statearr_31334_31365 = state_31324__$1;
(statearr_31334_31365[(1)] = (12));

} else {
var statearr_31335_31366 = state_31324__$1;
(statearr_31335_31366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31322 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (12))){
var inst_31284 = (state_31324[(8)]);
var inst_31312 = cljs.core.vec.call(null,inst_31284);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(15),out,inst_31312);
} else {
if((state_val_31325 === (2))){
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(4),ch);
} else {
if((state_val_31325 === (11))){
var inst_31292 = (state_31324[(10)]);
var inst_31288 = (state_31324[(9)]);
var inst_31302 = (state_31324[(2)]);
var inst_31303 = [];
var inst_31304 = inst_31303.push(inst_31288);
var inst_31284 = inst_31303;
var inst_31285 = inst_31292;
var state_31324__$1 = (function (){var statearr_31336 = state_31324;
(statearr_31336[(11)] = inst_31302);

(statearr_31336[(7)] = inst_31285);

(statearr_31336[(8)] = inst_31284);

(statearr_31336[(12)] = inst_31304);

return statearr_31336;
})();
var statearr_31337_31367 = state_31324__$1;
(statearr_31337_31367[(2)] = null);

(statearr_31337_31367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (9))){
var inst_31284 = (state_31324[(8)]);
var inst_31300 = cljs.core.vec.call(null,inst_31284);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(11),out,inst_31300);
} else {
if((state_val_31325 === (5))){
var inst_31292 = (state_31324[(10)]);
var inst_31285 = (state_31324[(7)]);
var inst_31288 = (state_31324[(9)]);
var inst_31292__$1 = f.call(null,inst_31288);
var inst_31293 = cljs.core._EQ_.call(null,inst_31292__$1,inst_31285);
var inst_31294 = cljs.core.keyword_identical_QMARK_.call(null,inst_31285,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31295 = (inst_31293) || (inst_31294);
var state_31324__$1 = (function (){var statearr_31338 = state_31324;
(statearr_31338[(10)] = inst_31292__$1);

return statearr_31338;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31339_31368 = state_31324__$1;
(statearr_31339_31368[(1)] = (8));

} else {
var statearr_31340_31369 = state_31324__$1;
(statearr_31340_31369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (14))){
var inst_31317 = (state_31324[(2)]);
var inst_31318 = cljs.core.async.close_BANG_.call(null,out);
var state_31324__$1 = (function (){var statearr_31342 = state_31324;
(statearr_31342[(13)] = inst_31317);

return statearr_31342;
})();
var statearr_31343_31370 = state_31324__$1;
(statearr_31343_31370[(2)] = inst_31318);

(statearr_31343_31370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (10))){
var inst_31307 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31344_31371 = state_31324__$1;
(statearr_31344_31371[(2)] = inst_31307);

(statearr_31344_31371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (8))){
var inst_31292 = (state_31324[(10)]);
var inst_31288 = (state_31324[(9)]);
var inst_31284 = (state_31324[(8)]);
var inst_31297 = inst_31284.push(inst_31288);
var tmp31341 = inst_31284;
var inst_31284__$1 = tmp31341;
var inst_31285 = inst_31292;
var state_31324__$1 = (function (){var statearr_31345 = state_31324;
(statearr_31345[(7)] = inst_31285);

(statearr_31345[(14)] = inst_31297);

(statearr_31345[(8)] = inst_31284__$1);

return statearr_31345;
})();
var statearr_31346_31372 = state_31324__$1;
(statearr_31346_31372[(2)] = null);

(statearr_31346_31372[(1)] = (2));


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
});})(c__28577__auto___31358,out))
;
return ((function (switch__28465__auto__,c__28577__auto___31358,out){
return (function() {
var cljs$core$async$state_machine__28466__auto__ = null;
var cljs$core$async$state_machine__28466__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$state_machine__28466__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$state_machine__28466__auto____1 = (function (state_31324){
while(true){
var ret_value__28467__auto__ = (function (){try{while(true){
var result__28468__auto__ = switch__28465__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28468__auto__;
}
break;
}
}catch (e31351){if((e31351 instanceof Object)){
var ex__28469__auto__ = e31351;
var statearr_31352_31373 = state_31324;
(statearr_31352_31373[(5)] = ex__28469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31374 = state_31324;
state_31324 = G__31374;
continue;
} else {
return ret_value__28467__auto__;
}
break;
}
});
cljs$core$async$state_machine__28466__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28466__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28466__auto____0;
cljs$core$async$state_machine__28466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28466__auto____1;
return cljs$core$async$state_machine__28466__auto__;
})()
;})(switch__28465__auto__,c__28577__auto___31358,out))
})();
var state__28579__auto__ = (function (){var statearr_31353 = f__28578__auto__.call(null);
(statearr_31353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28577__auto___31358);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28579__auto__);
});})(c__28577__auto___31358,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476965752773