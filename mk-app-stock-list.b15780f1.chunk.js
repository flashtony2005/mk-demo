webpackJsonp([15],{1832:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o,i=a(2),c=n(i),s=a(55),u=n(s),f=a(5),d=n(f),p=a(10),l=n(p),m=a(8),h=n(m),k=a(9),g=n(k),b=a(0),w=(n(b),a(252)),A=a(679),v=n(A),x=(r=(0,w.wrapper)(v.default))(o=function(t){function e(){return(0,d.default)(this,e),(0,h.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,l.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),e}(b.Component))||o;e.default=x,t.exports=e.default},1833:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new m.action(t),a=new A((0,i.default)({},t,{metaAction:e})),n=(0,i.default)({},e,a);return e.config({metaHandlers:n}),n}Object.defineProperty(e,"__esModule",{value:!0});var o=a(2),i=n(o),c=a(566),s=n(c),u=a(567),f=n(u),d=a(5),p=n(d);e.default=r;var l=a(0),m=(n(l),a(252)),h=(a(72),a(603)),k=n(h),g=a(6),b=(n(g),a(12)),w=n(b),A=function t(e){var a=this;(0,p.default)(this,t),this.onInit=function(t){var e=t.component,n=t.injections;a.component=e,a.injections=n,n.reduce("init");var r=a.metaAction.gf("data.pagination").toJS(),o=a.metaAction.gf("data.filter").toJS();a.load(r,o)},this.load=function(){var t=(0,f.default)(s.default.mark(function t(e,n){var r;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.webapi.stockList.init({pagination:e,filter:n});case 2:r=t.sent,r.filter=n,a.injections.reduce("load",r);case 5:case"end":return t.stop()}},t,a)}));return function(e,a){return t.apply(this,arguments)}}(),this.reload=(0,f.default)(s.default.mark(function t(){var e,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.metaAction.gf("data.pagination").toJS(),n=a.metaAction.gf("data.filter").toJS(),a.load(e,n);case 3:case"end":return t.stop()}},t,a)})),this.getListRowsCount=function(){return a.metaAction.gf("data.list").size},this.isSelectAll=function(){var t=a.metaAction.gf("data.list");return!(!t||0==t.size)&&t.every(function(t){return t.get("selected")})},this.selectAll=function(t){a.injections.reduce("selectAll",t.target.checked)},this.pageChanged=function(t,e){var n=a.metaAction.gf("data.filter").toJS();a.load({current:t,pageSize:e},n)},this.selectType=function(t,e){var n=a.metaAction.gf("data.pagination").toJS(),r=a.metaAction.gf("data.filter").toJS(),o=a.metaAction.gf("data.other.stockTypes").toJS(),i=w.default.tree.find(o,"children",function(e){return e.id==t[0]});r.type=i,a.load(n,r)},this.getTypeChildren=function(t){return t?{_isMeta:!0,value:w.default.tree.map(t,"children","",function(t){return{name:t.id,component:"Tree.TreeNode",key:t.id,title:t.name,children:t.children}})}:null},this.getSelectedCount=function(){var t=a.metaAction.gf("data.list");return t&&0!=t.size?t.filter(function(t){return!!t.get("selected")}).size:0},this.searchChange=function(t){var e=a.metaAction.gf("data.pagination").toJS(),n=a.metaAction.gf("data.filter").toJS();n.search=t.target.value,a.load(e,n)},this.showDisableChange=function(t){var e=a.metaAction.gf("data.pagination").toJS(),n=a.metaAction.gf("data.filter").toJS();n.showDisable=t.target.checked,a.load(e,n)},this.batchMenuClick=function(t){switch(t.key){case"del":a.batchDel();break;case"modify":a.batchModify();break;case"disable":a.batchDisable();break;case"enable":a.batchEnable()}},this.batchModify=(0,f.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw"请实现批量删除功能";case 1:case"end":return t.stop()}},t,a)})),this.batchDel=(0,f.default)(s.default.mark(function t(){var e,n,r,o;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=a.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return a.metaAction.toast("error","请选中要删除的存货"),t.abrupt("return");case 4:if((n=e.filter(function(t){return t.get("selected")}))&&0!=n.size){t.next=8;break}return a.metaAction.toast("error","请选中要删除的存货"),t.abrupt("return");case 8:return t.next=10,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 10:if(r=t.sent){t.next=13;break}return t.abrupt("return");case 13:return o=n.map(function(t){return t.get("id")}).toJS(),t.next=16,a.webapi.stockList.del({ids:o});case 16:a.metaAction.toast("success","删除成功"),a.reload();case 18:case"end":return t.stop()}},t,a)})),this.batchDisable=(0,f.default)(s.default.mark(function t(){var e,n,r;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=a.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return a.metaAction.toast("error","请选中要停用的存货"),t.abrupt("return");case 4:if((n=e.filter(function(t){return t.get("selected")}))&&0!=n.size){t.next=8;break}return a.metaAction.toast("error","请选中要停用的存货"),t.abrupt("return");case 8:return r=n.map(function(t){return t.get("id")}).toJS(),t.next=11,a.webapi.stockList.disable({ids:r});case 11:a.metaAction.toast("success","停用成功"),a.reload();case 13:case"end":return t.stop()}},t,a)})),this.batchEnable=(0,f.default)(s.default.mark(function t(){var e,n,r;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=a.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return a.metaAction.toast("error","请选中要启用的存货"),t.abrupt("return");case 4:if((n=e.filter(function(t){return t.get("selected")}))&&0!=n.size){t.next=8;break}return a.metaAction.toast("error","请选中要启用的存货"),t.abrupt("return");case 8:return r=n.map(function(t){return t.get("id")}).toJS(),t.next=11,a.webapi.stockList.enable({ids:r});case 11:a.metaAction.toast("success","启用成功"),a.reload();case 13:case"end":return t.stop()}},t,a)})),this.del=function(t){return(0,f.default)(s.default.mark(function e(){var n,r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:return r=[t],e.next=8,a.webapi.stockList.del({ids:r});case 8:a.metaAction.toast("success","删除成功"),a.reload();case 10:case"end":return e.stop()}},e,a)}))},this.addType=(0,f.default)(s.default.mark(function t(){var e,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个父分类"),t.abrupt("return");case 4:if(a.config.apps["mk-app-stock-type-card"]){t.next=6;break}throw"依赖mk-app-stock-type-card app,请使用mk clone mk-app-stock-type-card命令添加";case 6:return t.next=8,a.metaAction.modal("show",{title:"新增",children:a.metaAction.loadApp("mk-app-stock-type-card",{store:a.component.props.store,parentId:e.get("id")})});case 8:n=t.sent,n&&a.reload();case 10:case"end":return t.stop()}},t,a)})),this.modifyType=(0,f.default)(s.default.mark(function t(){var e,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:if(a.config.apps["mk-app-stock-type-card"]){t.next=6;break}throw"依赖mk-app-stock-type-card app,请使用mk clone mk-app-stock-type-card命令添加";case 6:return t.next=8,a.metaAction.modal("show",{title:"修改",children:a.metaAction.loadApp("mk-app-stock-type-card",{store:a.component.props.store,typeId:e.get("id")})});case 8:n=t.sent,n&&a.reload();case 10:case"end":return t.stop()}},t,a)})),this.delType=(0,f.default)(s.default.mark(function t(){var e,n,r,o,i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!(n=t.sent)){t.next=15;break}return r=a.metaAction.gf("data.filter.type.id"),t.next=11,a.webapi.stockType.del({id:r});case 11:o=t.sent,a.metaAction.toast("success","删除类型成功"),i=a.metaAction.gf("data.pagination").toJS(),a.load(i,{type:void 0});case 15:case"end":return t.stop()}},t,a)})),this.add=(0,f.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.config.apps["mk-app-stock-card"]){t.next=2;break}throw"依赖mk-app-stock-card app,请使用mk clone mk-app-stock-card命令添加";case 2:a.component.props.setPortalContent&&a.component.props.setPortalContent("存货卡片","mk-app-stock-card");case 3:case"end":return t.stop()}},t,a)})),this.modify=function(t){return(0,f.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.config.apps["mk-app-stock-card"]){e.next=2;break}throw"依赖mk-app-stock-card app,请使用mk clone mk-app-stock-card命令添加";case 2:a.component.props.setPortalContent&&a.component.props.setPortalContent("存货卡片","mk-app-stock-card",{stockId:t});case 3:case"end":return e.stop()}},e,a)}))},this.print=function(){throw"请实现打印功能"},this.imp=function(){throw"请实现导入功能"},this.exp=function(){throw"请实现导出功能"},this.setting=function(){throw"请实现设置功能"},this.numberFormat=w.default.number.format,this.metaAction=e.metaAction,this.config=k.default.current,this.webapi=this.config.webapi};t.exports=e.default},1834:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new f.reducer(t),a=new l((0,i.default)({},t,{metaReducer:e}));return(0,i.default)({},e,a)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(2),i=n(o),c=a(5),s=n(c);e.default=r;var u=a(72),f=a(252),d=a(603),p=(n(d),a(680)),l=function t(e){var a=this;(0,s.default)(this,t),this.init=function(t,e){return a.metaReducer.init(t,(0,p.getInitState)())},this.load=function(t,e){return t=a.metaReducer.sf(t,"data.list",(0,u.fromJS)(e.list)),t=a.metaReducer.sf(t,"data.pagination",(0,u.fromJS)(e.pagination)),t=a.metaReducer.sf(t,"data.filter",(0,u.fromJS)(e.filter)),e.stockTypes&&(t=a.metaReducer.sf(t,"data.other.stockTypes",(0,u.fromJS)(e.stockTypes))),t},this.selectAll=function(t,e){var n=a.metaReducer.gf(t,"data.list");if(!n||0==n.size)return t;for(var r=0;r<n.size;r++)t=a.metaReducer.sf(t,"data.list."+r+".selected",e);return t},this.metaReducer=e.metaReducer};t.exports=e.default}});