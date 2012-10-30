/*
Copyright (c) 2008-2011, www.redips.net All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/drag-and-drop-table-content/
Version 5.0.0
Nov 1, 2012.
*/
var REDIPS=REDIPS||{};
REDIPS.drag=function(){var s,E,J,va,Ja,Ka,ba,ca,ga,wa,xa,R,ha,ya,S,ia,Y,za,B,v,N,ja,ka,la,Aa,Ba,Ca,D,x,Da,da,ma,na,La,Ma,Ea,oa,Fa,pa,ea,Ga,Na,qa,Oa,p=null,F=0,G=0,ra=null,sa=null,K=0,L=0,O=0,P=0,T=0,U=0,t,Z,M=[],f=[],$,ta,q,H=[],o=[],y=null,C=null,W=0,X=0,Pa=0,Qa=0,fa=!1,Ha=!1,aa=!1,Ia=0,g=null,u=null,z=null,j=null,w=null,I=null,l=null,A=null,V=null,i=!1,m=!1,r="cell",ua={div:[],cname:"only",other:"deny"},Ra={action:"deny",cname:"mark",exception:[]},k={};J=function(){return!1};s=function(){var a,
b,c,d,e,h;f.length=0;e=y.getElementsByTagName("table");for(b=a=0;a<e.length;a++)if(!("redips_clone"===e[a].parentNode.id||-1<e[a].className.indexOf("nolayout"))){c=e[a].parentNode;d=0;do"TD"===c.nodeName&&d++,c=c.parentNode;while(c&&c!==y);f[b]=e[a];f[b].redips||(f[b].redips={});f[b].redips.container=y;f[b].redips.nestedLevel=d;f[b].redips.idx=b;d=f[b].getElementsByTagName("td");c=0;for(h=!1;c<d.length;c++)if(1<d[c].rowSpan){h=!0;break}f[b].redips.rowspan=h;b++}a=0;for(e=$=1;a<f.length;a++)if(0===
f[a].redips.nestedLevel){f[a].redips.nestedGroup=e;f[a].redips.sort=100*$;c=f[a].getElementsByTagName("table");for(b=0;b<c.length;b++)-1<c[b].className.indexOf("nolayout")||(c[b].redips.nestedGroup=e,c[b].redips.sort=100*$+c[b].redips.nestedLevel);e++;$++}};va=function(a){var b=a||window.event,c,d;if(!0===this.redips.animated)return!0;b.cancelBubble=!0;b.stopPropagation&&b.stopPropagation();Ha=b.shiftKey;a=b.which?b.which:b.button;if(Ca(b)||!b.touches&&1!==a)return!0;if(window.getSelection)window.getSelection().removeAllRanges();
else if(document.selection&&"Text"===document.selection.type)try{document.selection.empty()}catch(e){}b.touches?(a=W=b.touches[0].clientX,d=X=b.touches[0].clientY):(a=W=b.clientX,d=X=b.clientY);Pa=a;Qa=d;fa=!1;REDIPS.drag.objOld=m=i||this;REDIPS.drag.obj=i=this;aa=-1<i.className.indexOf("clone")?!0:!1;REDIPS.drag.tableSort&&Ka(i);y!==i.redips.container&&(y=i.redips.container,s());-1===i.className.indexOf("row")?REDIPS.drag.mode=r="cell":(REDIPS.drag.mode=r="row",REDIPS.drag.obj=i=ea(i));v();!aa&&
"cell"===r&&(i.style.zIndex=999);g=j=l=null;S();z=u=g;I=w=j;V=A=l;REDIPS.drag.td.source=k.source=x("TD",i);REDIPS.drag.td.current=k.current=k.source;REDIPS.drag.td.previous=k.previous=k.source;"cell"===r?REDIPS.drag.event.clicked(k.current):REDIPS.drag.event.rowClicked(k.current);if(null===g||null===j||null===l)if(S(),z=u=g,I=w=j,V=A=l,null===g||null===j||null===l)return!0;ta=q=!1;REDIPS.event.add(document,"mousemove",ca);REDIPS.event.add(document,"touchmove",ca);REDIPS.event.add(document,"mouseup",
ba);REDIPS.event.add(document,"touchend",ba);i.setCapture&&i.setCapture();null!==g&&(null!==j&&null!==l)&&(Z=za(g,j,l));c=D(f[z],"position");"fixed"!==c&&(c=D(f[z].parentNode,"position"));c=B(i,c);p=[d-c[0],c[1]-a,c[2]-d,a-c[3]];y.onselectstart=function(a){b=a||window.event;if(!Ca(b)){b.shiftKey&&document.selection.clear();return false}};return!1};Ja=function(){REDIPS.drag.event.dblClicked()};Ka=function(a){var b;b=x("TABLE",a).redips.nestedGroup;for(a=0;a<f.length;a++)f[a].redips.nestedGroup===b&&
(f[a].redips.sort=100*$+f[a].redips.nestedLevel);f.sort(function(a,b){return b.redips.sort-a.redips.sort});$++};ea=function(a,b){var c,d,e,h,f,n;if("DIV"===a.nodeName)return h=a,a=x("TR",a),void 0===a.redips&&(a.redips={}),a.redips.div=h,a;d=a;void 0===d.redips&&(d.redips={});a=x("TABLE",a);aa&&q&&(h=d.redips.div,h.className=qa(h.className.replace("clone","")));c=a.cloneNode(!0);aa&&q&&(h.className+=" clone");e=c.rows.length-1;h="animated"===b?0===e?!0:!1:!0;for(f=e;0<=f;f--)if(f!==d.rowIndex){if(!0===
h&&void 0===b){e=c.rows[f];for(n=0;n<e.cells.length;n++)if(-1<e.cells[n].className.indexOf("rowhandler")){h=!1;break}}c.deleteRow(f)}q||(d.redips.empty_row=h);c.redips={};c.redips.container=a.redips.container;c.redips.source_row=d;Na(d,c.rows[0]);Aa(d,c.rows[0]);document.getElementById("redips_clone").appendChild(c);d=B(d,"fixed");c.style.position="fixed";c.style.top=d[0]+"px";c.style.left=d[3]+"px";c.style.width=d[1]-d[3]+"px";return c};Ga=function(a,b,c){var d=f[a],a=d.rows[0].parentNode,e=!1,h,
Q,n,j;j=function(){m.redips.empty_row?pa(m,"empty",REDIPS.drag.style.rowEmptyColor):(Q=x("TABLE",Q),Q.deleteRow(n))};void 0===c?c=i:e=!0;Q=c.redips.source_row;n=Q.rowIndex;h=c.getElementsByTagName("tr")[0];c.parentNode.removeChild(c);if(!1!==REDIPS.drag.event.rowDroppedBefore(n)){if(!e&&-1<k.target.className.indexOf(REDIPS.drag.trash.className))q?REDIPS.drag.event.rowDeleted():REDIPS.drag.trash.questionRow?confirm(REDIPS.drag.trash.questionRow)?(j(),REDIPS.drag.event.rowDeleted()):(delete m.redips.empty_row,
REDIPS.drag.event.rowUndeleted()):(j(),REDIPS.drag.event.rowDeleted());else if((e||!q)&&j(),b<d.rows.length?g===z||"before"===REDIPS.drag.rowPosition?(a.insertBefore(h,d.rows[b]),b=d.rows[b+1]):(a.insertBefore(h,d.rows[b].nextSibling),b=d.rows[b]):(a.appendChild(h),b=d.rows[0]),b&&(b.redips&&b.redips.empty_row)&&a.deleteRow(b.rowIndex),delete h.redips.empty_row,!e)"TABLE"!==Q.nodeName&&(Q=x("TABLE",Q)),REDIPS.drag.event.rowDropped(h,Q,n);0<h.getElementsByTagName("table").length&&s()}};Na=function(a,
b){var c,d,e,h=[],f=[];h[0]=a.getElementsByTagName("input");h[1]=a.getElementsByTagName("textarea");h[2]=a.getElementsByTagName("select");f[0]=b.getElementsByTagName("input");f[1]=b.getElementsByTagName("textarea");f[2]=b.getElementsByTagName("select");for(c=0;c<h.length;c++)for(d=0;d<h[c].length;d++)switch(e=h[c][d].type,e){case "text":case "textarea":case "password":f[c][d].value=h[c][d].value;break;case "radio":case "checkbox":f[c][d].checked=h[c][d].checked;break;case "select-one":f[c][d].selectedIndex=
h[c][d].selectedIndex;break;case "select-multiple":for(e=0;e<h[c][d].options.length;e++)f[c][d].options[e].selected=h[c][d].options[e].selected}};ba=function(a){var b=a||window.event,c,d,e,a=b.clientX;e=b.clientY;T=U=0;i.releaseCapture&&i.releaseCapture();REDIPS.event.remove(document,"mousemove",ca);REDIPS.event.remove(document,"touchmove",ca);REDIPS.event.remove(document,"mouseup",ba);REDIPS.event.remove(document,"touchend",ba);y.onselectstart=null;xa(i);ra=document.documentElement.scrollWidth;sa=
document.documentElement.scrollHeight;T=U=0;if(q&&"cell"===r&&(null===g||null===j||null===l))i.parentNode.removeChild(i),H[m.id]-=1,REDIPS.drag.event.notCloned();else if(null===g||null===j||null===l)REDIPS.drag.event.notMoved();else{g<f.length?(b=f[g],REDIPS.drag.td.target=k.target=b.rows[j].cells[l],Y(g,j,l,Z),c=g,d=j):null===u||null===w||null===A?(b=f[z],REDIPS.drag.td.target=k.target=b.rows[I].cells[V],Y(z,I,V,Z),c=z,d=I):(b=f[u],REDIPS.drag.td.target=k.target=b.rows[w].cells[A],Y(u,w,A,Z),c=u,
d=w);if("row"===r)if(ta)if(z===c&&I===d){b=i.getElementsByTagName("tr")[0];m.style.backgroundColor=b.style.backgroundColor;for(a=0;a<b.cells.length;a++)m.cells[a].style.backgroundColor=b.cells[a].style.backgroundColor;i.parentNode.removeChild(i);delete m.redips.empty_row;q?REDIPS.drag.event.rowNotCloned():REDIPS.drag.event.rowDroppedSource(k.target)}else Ga(c,d);else REDIPS.drag.event.rowNotMoved();else if(!q&&!fa)REDIPS.drag.event.notMoved();else if(q&&z===g&&I===j&&V===l)i.parentNode.removeChild(i),
H[m.id]-=1,REDIPS.drag.event.notCloned();else if(q&&!0===REDIPS.drag.deleteCloned&&(a<b.redips.offset[3]||a>b.redips.offset[1]||e<b.redips.offset[0]||e>b.redips.offset[2]))i.parentNode.removeChild(i),H[m.id]-=1,REDIPS.drag.event.notCloned();else if(-1<k.target.className.indexOf(REDIPS.drag.trash.className))i.parentNode.removeChild(i),REDIPS.drag.trash.question?setTimeout(function(){if(confirm(REDIPS.drag.trash.question))wa();else{if(!q){f[z].rows[I].cells[V].appendChild(i);v()}REDIPS.drag.event.undeleted()}},
20):wa();else if("switch"===REDIPS.drag.dropMode)if(a=REDIPS.drag.event.droppedBefore(k.target),!1===a)ga(!1);else{i.parentNode.removeChild(i);b=k.target.getElementsByTagName("div");c=b.length;for(a=0;a<c;a++)void 0!==b[0]&&(REDIPS.drag.objOld=m=b[0],k.source.appendChild(m),R(m));ga();c&&REDIPS.drag.event.switched()}else"overwrite"===REDIPS.drag.dropMode?(a=REDIPS.drag.event.droppedBefore(k.target),!1!==a&&ma(k.target)):a=REDIPS.drag.event.droppedBefore(k.target),ga(a);"cell"===r&&0<i.getElementsByTagName("table").length&&
s();v();REDIPS.drag.event.finish()}u=w=A=null};ga=function(a){!1!==a?("shift"===REDIPS.drag.dropMode&&(Oa(k.target)||"always"===REDIPS.drag.shift.after)&&na(k.source,k.target),"top"===REDIPS.drag.multipleDrop&&k.target.hasChildNodes()?k.target.insertBefore(i,k.target.firstChild):k.target.appendChild(i),R(i),REDIPS.drag.event.dropped(k.target),q&&(REDIPS.drag.event.clonedDropped(k.target),Ba())):q&&i.parentNode.removeChild(i)};R=function(a,b){!1===b?(a.onmousedown=null,a.ontouchstart=null,a.ondblclick=
null):(a.onmousedown=va,a.ontouchstart=va,a.ondblclick=Ja)};xa=function(a){a.style.top="";a.style.left="";a.style.position="";a.style.zIndex=""};wa=function(){var a;q&&Ba();if("shift"===REDIPS.drag.dropMode&&("delete"===REDIPS.drag.shift.after||"always"===REDIPS.drag.shift.after)){switch(REDIPS.drag.shift.mode){case "vertical2":a="lastInColumn";break;case "horizontal2":a="lastInRow";break;default:a="last"}na(k.source,Da(a,k.source)[2])}REDIPS.drag.event.deleted(q)};ca=function(a){var a=a||window.event,
b=REDIPS.drag.scroll.bound,c,d,e,h;a.touches?(d=W=a.touches[0].clientX,e=X=a.touches[0].clientY):(d=W=a.clientX,e=X=a.clientY);c=Math.abs(Pa-d);h=Math.abs(Qa-e);if(!ta){if("cell"===r&&(aa||!0===REDIPS.drag.cloneKey.div&&Ha))REDIPS.drag.objOld=m=i,REDIPS.drag.obj=i=la(i,!0),q=!0,REDIPS.drag.event.cloned();else{if("row"===r){if(aa||!0===REDIPS.drag.cloneKey.row&&Ha)q=!0;REDIPS.drag.objOld=m=i;REDIPS.drag.obj=i=ea(i);i.style.zIndex=999}i.setCapture&&i.setCapture();i.style.position="fixed";v();S();"row"===
r&&(q?REDIPS.drag.event.rowCloned():REDIPS.drag.event.rowMoved())}ia();d>F-p[1]&&(i.style.left=F-(p[1]+p[3])+"px");e>G-p[2]&&(i.style.top=G-(p[0]+p[2])+"px")}ta=!0;if("cell"===r&&(7<c||7<h)&&!fa)fa=!0,ia(),REDIPS.drag.event.moved(q);d>p[3]&&d<F-p[1]&&(i.style.left=d-p[3]+"px");e>p[0]&&e<G-p[2]&&(i.style.top=e-p[0]+"px");if(d<C[1]&&d>C[3]&&e<C[2]&&e>C[0]&&0===T&&0===U&&(o.containTable||d<o[3]||d>o[1]||e<o[0]||e>o[2]))S(),ha();if(REDIPS.drag.scroll.enable){K=b-(F/2>d?d-p[3]:F-d-p[1]);if(0<K){if(K>b&&
(K=b),c=N()[0],K*=d<F/2?-1:1,!(0>K&&0>=c||0<K&&c>=ra-F)&&0===T++)REDIPS.event.remove(window,"scroll",v),ja(window)}else K=0;L=b-(G/2>e?e-p[0]:G-e-p[2]);if(0<L){if(L>b&&(L=b),c=N()[1],L*=e<G/2?-1:1,!(0>L&&0>=c||0<L&&c>=sa-G)&&0===U++)REDIPS.event.remove(window,"scroll",v),ka(window)}else L=0;for(h=0;h<M.length;h++)if(c=M[h],c.autoscroll&&d<c.offset[1]&&d>c.offset[3]&&e<c.offset[2]&&e>c.offset[0]){O=b-(c.midstX>d?d-p[3]-c.offset[3]:c.offset[1]-d-p[1]);0<O?(O>b&&(O=b),O*=d<c.midstX?-1:1,0===T++&&(REDIPS.event.remove(c.div,
"scroll",v),ja(c.div))):O=0;P=b-(c.midstY>e?e-p[0]-c.offset[0]:c.offset[2]-e-p[2]);0<P?(P>b&&(P=b),P*=e<c.midstY?-1:1,0===U++&&(REDIPS.event.remove(c.div,"scroll",v),ka(c.div))):P=0;break}else O=P=0}a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};ha=function(){if(g<f.length&&(g!==u||j!==w||l!==A))null!==u&&(null!==w&&null!==A)&&(Y(u,w,A,Z),REDIPS.drag.td.previous=k.previous=f[u].rows[w].cells[A],REDIPS.drag.td.current=k.current=f[g].rows[j].cells[l],"switching"===REDIPS.drag.dropMode&&"cell"===
r&&(da(k.current,k.previous),v(),S()),"cell"===r?REDIPS.drag.event.changed(k.current):"row"===r&&(g!==u||j!==w)&&REDIPS.drag.event.rowChanged(k.current)),ia()};ya=function(){if("number"===typeof window.innerWidth)F=window.innerWidth,G=window.innerHeight;else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))F=document.documentElement.clientWidth,G=document.documentElement.clientHeight;else if(document.body&&(document.body.clientWidth||document.body.clientHeight))F=
document.body.clientWidth,G=document.body.clientHeight;ra=document.documentElement.scrollWidth;sa=document.documentElement.scrollHeight;v()};S=function(){var a,b,c,d,e,h;c=[];a=function(){null!==u&&(null!==w&&null!==A)&&(g=u,j=w,l=A)};b=W;h=X;for(g=0;g<f.length;g++)if(!1!==f[g].redips.enabled&&(c[0]=f[g].redips.offset[0],c[1]=f[g].redips.offset[1],c[2]=f[g].redips.offset[2],c[3]=f[g].redips.offset[3],void 0!==f[g].sca&&(c[0]=c[0]>f[g].sca.offset[0]?c[0]:f[g].sca.offset[0],c[1]=c[1]<f[g].sca.offset[1]?
c[1]:f[g].sca.offset[1],c[2]=c[2]<f[g].sca.offset[2]?c[2]:f[g].sca.offset[2],c[3]=c[3]>f[g].sca.offset[3]?c[3]:f[g].sca.offset[3]),c[3]<b&&b<c[1]&&c[0]<h&&h<c[2])){c=f[g].redips.row_offset;for(j=0;j<c.length-1;j++)if(void 0!==c[j]){o[0]=c[j][0];if(void 0!==c[j+1])o[2]=c[j+1][0];else for(d=j+2;d<c.length;d++)if(void 0!==c[d]){o[2]=c[d][0];break}if(h<=o[2])break}d=j;j===c.length-1&&(o[0]=c[j][0],o[2]=f[g].redips.offset[2]);do for(l=e=f[g].rows[j].cells.length-1;0<=l&&!(o[3]=c[j][3]+f[g].rows[j].cells[l].offsetLeft,
o[1]=o[3]+f[g].rows[j].cells[l].offsetWidth,o[3]<=b&&b<=o[1]);l--);while(f[g].redips.rowspan&&-1===l&&0<j--);0>j||0>l?a():j!==d&&(o[0]=c[j][0],o[2]=o[0]+f[g].rows[j].cells[l].offsetHeight,(h<o[0]||h>o[2])&&a());b=f[g].rows[j].cells[l];o.containTable=0<b.childNodes.length&&0<b.getElementsByTagName("table").length?!0:!1;if(-1===b.className.indexOf(REDIPS.drag.trash.className))if(h=-1<b.className.indexOf(REDIPS.drag.only.cname)?!0:!1,!0===h){if(-1===b.className.indexOf(ua.div[i.id])){a();break}}else if(void 0!==
ua.div[i.id]&&"deny"===ua.other){a();break}else if(h=-1<b.className.indexOf(REDIPS.drag.mark.cname)?!0:!1,(!0===h&&"deny"===REDIPS.drag.mark.action||!1===h&&"allow"===REDIPS.drag.mark.action)&&-1===b.className.indexOf(Ra.exception[i.id])){a();break}h=-1<b.className.indexOf("single")?!0:!1;if("cell"===r){if(("single"===REDIPS.drag.dropMode||h)&&0<b.childNodes.length){if(1===b.childNodes.length&&3===b.firstChild.nodeType)break;h=!0;for(d=b.childNodes.length-1;0<=d;d--)if(b.childNodes[d].className&&
-1<b.childNodes[d].className.indexOf("drag")){h=!1;break}if(!h&&(null!==u&&null!==w&&null!==A)&&(z!==g||I!==j||V!==l)){a();break}}if(-1<b.className.indexOf("rowhandler")){a();break}if(b.parentNode.redips&&b.parentNode.redips.empty_row){a();break}}break}};ia=function(){g<f.length&&(null!==g&&null!==j&&null!==l)&&(Z=za(g,j,l),Y(g,j,l),u=g,w=j,A=l)};Y=function(a,b,c,d){if("cell"===r&&fa)c=f[a].rows[b].cells[c].style,c.backgroundColor=void 0===d?REDIPS.drag.hover.colorTd:d.color[0].toString(),void 0!==
REDIPS.drag.hover.borderTd&&(void 0===d?c.border=REDIPS.drag.hover.borderTd:(c.borderTopWidth=d.top[0][0],c.borderTopStyle=d.top[0][1],c.borderTopColor=d.top[0][2],c.borderRightWidth=d.right[0][0],c.borderRightStyle=d.right[0][1],c.borderRightColor=d.right[0][2],c.borderBottomWidth=d.bottom[0][0],c.borderBottomStyle=d.bottom[0][1],c.borderBottomColor=d.bottom[0][2],c.borderLeftWidth=d.left[0][0],c.borderLeftStyle=d.left[0][1],c.borderLeftColor=d.left[0][2]));else if("row"===r){a=f[a].rows[b];for(b=
0;b<a.cells.length;b++)c=a.cells[b].style,c.backgroundColor=void 0===d?REDIPS.drag.hover.colorTr:d.color[b].toString(),void 0!==REDIPS.drag.hover.borderTr&&(void 0===d?g===z?j<I?c.borderTop=REDIPS.drag.hover.borderTr:c.borderBottom=REDIPS.drag.hover.borderTr:"before"===REDIPS.drag.rowPosition?c.borderTop=REDIPS.drag.hover.borderTr:c.borderBottom=REDIPS.drag.hover.borderTr:(c.borderTopWidth=d.top[b][0],c.borderTopStyle=d.top[b][1],c.borderTopColor=d.top[b][2],c.borderBottomWidth=d.bottom[b][0],c.borderBottomStyle=
d.bottom[b][1],c.borderBottomColor=d.bottom[b][2]))}};za=function(a,b,c){var d={color:[],top:[],right:[],bottom:[],left:[]},e=function(a,b){var c="border"+b+"Style",d="border"+b+"Color";return[D(a,"border"+b+"Width"),D(a,c),D(a,d)]};if("cell"===r)c=f[a].rows[b].cells[c],d.color[0]=c.style.backgroundColor,void 0!==REDIPS.drag.hover.borderTd&&(d.top[0]=e(c,"Top"),d.right[0]=e(c,"Right"),d.bottom[0]=e(c,"Bottom"),d.left[0]=e(c,"Left"));else{a=f[a].rows[b];for(b=0;b<a.cells.length;b++)c=a.cells[b],d.color[b]=
c.style.backgroundColor,void 0!==REDIPS.drag.hover.borderTr&&(d.top[b]=e(c,"Top"),d.bottom[b]=e(c,"Bottom"))}return d};B=function(a,b,c){var d=0,e=0,h=a;"fixed"!==b&&(b=N(),d=0-b[0],e=0-b[1]);if(void 0===c||!0===c){do d+=a.offsetLeft-a.scrollLeft,e+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}else{do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a&&"BODY"!==a.nodeName)}return[e,d+h.offsetWidth,e+h.offsetHeight,d]};v=function(){var a,b,c,d;for(a=0;a<f.length;a++){c=
[];d=D(f[a],"position");"fixed"!==d&&(d=D(f[a].parentNode,"position"));for(b=f[a].rows.length-1;0<=b;b--)"none"!==f[a].rows[b].style.display&&(c[b]=B(f[a].rows[b],d));f[a].redips.offset=B(f[a],d);f[a].redips.row_offset=c}C=B(y);for(a=0;a<M.length;a++)d=D(M[a].div,"position"),b=B(M[a].div,d,!1),M[a].offset=b,M[a].midstX=(b[1]+b[3])/2,M[a].midstY=(b[0]+b[2])/2};N=function(){var a,b;"number"===typeof window.pageYOffset?(a=window.pageXOffset,b=window.pageYOffset):document.body&&(document.body.scrollLeft||
document.body.scrollTop)?(a=document.body.scrollLeft,b=document.body.scrollTop):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?(a=document.documentElement.scrollLeft,b=document.documentElement.scrollTop):a=b=0;return[a,b]};ja=function(a){var b,c;b=W;c=X;0<T&&(v(),S(),b<C[1]&&(b>C[3]&&c<C[2]&&c>C[0])&&ha());"object"===typeof a&&(t=a);t===window?(a=N()[0],b=ra-F,c=K):(a=t.scrollLeft,b=t.scrollWidth-t.clientWidth,c=O);0<T&&(0>c&&0<a||0<c&&a<b)?(t===
window?(window.scrollBy(c,0),N(),a=parseInt(i.style.left,10),isNaN(a)):t.scrollLeft+=c,setTimeout(ja,REDIPS.drag.scroll.speed)):(REDIPS.event.add(t,"scroll",v),T=0,o=[0,0,0,0])};ka=function(a){var b,c;b=W;c=X;0<U&&(v(),S(),b<C[1]&&(b>C[3]&&c<C[2]&&c>C[0])&&ha());"object"===typeof a&&(t=a);t===window?(a=N()[1],b=sa-G,c=L):(a=t.scrollTop,b=t.scrollHeight-t.clientHeight,c=P);0<U&&(0>c&&0<a||0<c&&a<b)?(t===window?(window.scrollBy(0,c),N(),a=parseInt(i.style.top,10),isNaN(a)):t.scrollTop+=c,setTimeout(ka,
REDIPS.drag.scroll.speed)):(REDIPS.event.add(t,"scroll",v),U=0,o=[0,0,0,0])};la=function(a,b){var c=a.cloneNode(!0),d=c.className,e,h;!0===b&&(document.getElementById("redips_clone").appendChild(c),c.style.zIndex=999,c.style.position="fixed",e=B(a),h=B(c),c.style.top=e[0]-h[0]+"px",c.style.left=e[3]-h[3]+"px");c.setCapture&&c.setCapture();d=d.replace("clone","");d=d.replace(/climit(\d)_(\d+)/,"");c.className=qa(d);void 0===H[a.id]&&(H[a.id]=0);c.id=a.id+"c"+H[a.id];H[a.id]+=1;Aa(a,c);return c};Aa=
function(a,b){var c=[],d;c[0]=function(a,b){a.redips&&(b.redips={},b.redips.enabled=a.redips.enabled,b.redips.container=a.redips.container,a.redips.enabled&&R(b))};c[1]=function(a,b){a.redips&&(b.redips={},b.redips.empty_row=a.redips.empty_row)};d=function(d){var h,f,n;f=["DIV","TR"];h=a.getElementsByTagName(f[d]);f=b.getElementsByTagName(f[d]);for(n=0;n<f.length;n++)c[d](h[n],f[n])};if("DIV"===a.nodeName)c[0](a,b);else if("TR"===a.nodeName)c[1](a,b);d(0);d(1)};Ba=function(){var a,b,c;c=m.className;
a=c.match(/climit(\d)_(\d+)/);null!==a&&(b=parseInt(a[1],10),a=parseInt(a[2],10),a-=1,c=c.replace(/climit\d_\d+/g,""),0>=a?(c=c.replace("clone",""),2===b?(c=c.replace("drag",""),R(m,!1),m.style.cursor="auto",REDIPS.drag.event.clonedEnd2()):REDIPS.drag.event.clonedEnd1()):c=c+" climit"+b+"_"+a,m.className=qa(c))};Ca=function(a){var b=!1;a.srcElement?(b=a.srcElement.nodeName,a=a.srcElement.className):(b=a.target.nodeName,a=a.target.className);switch(b){case "A":case "INPUT":case "SELECT":case "OPTION":case "TEXTAREA":b=
!0;break;default:b=/\bnodrag\b/i.test(a)?!0:!1}return b};E=function(a,b,c){var d,e=[],h=[],f,n,i,g,j=/\bdrag\b/i,k=/\bnoautoscroll\b/i;n=REDIPS.drag.style.opacityDisabled;!0===a||"init"===a?(f=REDIPS.drag.style.borderEnabled,i="move",g=!0):(f=REDIPS.drag.style.borderDisabled,i="auto",g=!1);void 0===b?e=y.getElementsByTagName("div"):"subtree"===c?e="string"===typeof b?document.getElementById(b).getElementsByTagName("div"):b.getElementsByTagName("div"):e[0]="string"===typeof b?document.getElementById(b):
b;for(c=b=0;b<e.length;b++)if(j.test(e[b].className))"init"===a||void 0===e[b].redips?(e[b].redips={},e[b].redips.container=y):!0===a&&"number"===typeof n?(e[b].style.opacity="",e[b].style.filter=""):!1===a&&"number"===typeof n&&(e[b].style.opacity=n/100,e[b].style.filter="alpha(opacity="+n+")"),R(e[b],g),e[b].style.borderStyle=f,e[b].style.cursor=i,e[b].redips.enabled=g;else if("init"===a&&(h=D(e[b],"overflow"),"visible"!==h)){REDIPS.event.add(e[b],"scroll",v);h=D(e[b],"position");d=B(e[b],h,!1);
h=k.test(e[b].className)?!1:!0;M[c]={div:e[b],offset:d,midstX:(d[1]+d[3])/2,midstY:(d[0]+d[2])/2,autoscroll:h};h=e[b].getElementsByTagName("table");for(d=0;d<h.length;d++)h[d].sca=M[c];c++}};D=function(a,b){var c;a&&a.currentStyle?c=a.currentStyle[b]:a&&window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null)[b]);return c};x=function(a,b,c){b=b.parentNode;for(void 0===c&&(c=0);b&&b.nodeName!==a;)if((b=b.parentNode)&&b.nodeName===a&&0<c)c--,b=b.parentNode;return b};Da=function(a,b){var c=
x("TABLE",b),d,e;switch(a){case "firstInColumn":d=0;e=b.cellIndex;break;case "firstInRow":d=b.parentNode.rowIndex;e=0;break;case "lastInColumn":d=c.rows.length-1;e=b.cellIndex;break;case "lastInRow":d=b.parentNode.rowIndex;e=c.rows[d].cells.length-1;break;case "last":d=c.rows.length-1;e=c.rows[d].cells.length-1;break;default:d=e=0}return[d,e,c.rows[d].cells[e]]};da=function(a,b,c){var d,e,h;d=function(a,b){var c=REDIPS.drag.getPosition(b);REDIPS.drag.moveObject({obj:a,target:c,callback:function(a){Ia--;
0===Ia&&(REDIPS.drag.event.relocated(),a=REDIPS.drag.findParent("TABLE",a),REDIPS.drag.enableTable(!0,a))}})};if(a!==b&&!("object"!==typeof a||"object"!==typeof b))if(e=a.childNodes.length,"animation"===c){0<e&&(c=x("TABLE",b),REDIPS.drag.enableTable(!1,c));for(c=0;c<e;c++)1===a.childNodes[c].nodeType&&"DIV"===a.childNodes[c].nodeName&&(Ia++,d(a.childNodes[c],b))}else for(d=c=0;c<e;c++)1===a.childNodes[d].nodeType&&"DIV"===a.childNodes[d].nodeName?(h=a.childNodes[d],b.appendChild(h),R(h)):d++};ma=
function(a){var b,c;if("TD"!==a.nodeName)return!1;c=a.childNodes.length;for(b=0;b<c;b++)a.removeChild(a.childNodes[0])};na=function(a,b){var c,d,e,h,f,n,i,g,j,k,l;if(a!==b){f=REDIPS.drag.shift.mode;c=x("TABLE",a);d=x("TABLE",b);n=La(d);c===d&&(e=[a.redips.rowIndex,a.redips.cellIndex]);h=[b.redips.rowIndex,b.redips.cellIndex];i=d.rows.length-1;g=Ma(d);switch(f){case "vertical2":c=c===d&&a.cellIndex===b.cellIndex?e:[i,b.redips.cellIndex];break;case "horizontal2":c=c===d&&a.parentNode.rowIndex===b.parentNode.rowIndex?
e:[b.redips.rowIndex,g];break;default:c=c===d?e:[i,g]}"vertical1"===f||"vertical2"===f?(f=1E3*c[1]+c[0]<1E3*h[1]+h[0]?1:-1,l=i,d=0,e=1):(f=1E3*c[0]+c[1]<1E3*h[0]+h[1]?1:-1,l=g,d=1,e=0);for(;c[0]!==h[0]||c[1]!==h[1];)if(g=n[c[0]+"-"+c[1]],c[d]+=f,0>c[d]?(c[d]=l,c[e]--):c[d]>l&&(c[d]=0,c[e]++),i=n[c[0]+"-"+c[1]],void 0!==i&&(j=i),void 0!==g&&(k=g),void 0!==i&&void 0!==k||void 0!==j&&void 0!==g)REDIPS.drag.animation.shift?da(j,k,"animation"):da(j,k)}};La=function(a){var b=[],c,d={},e,f,i,n,g,j,k,l;n=
a.rows;for(g=0;g<n.length;g++)for(j=0;j<n[g].cells.length;j++){c=n[g].cells[j];a=c.parentNode.rowIndex;e=c.rowSpan||1;f=c.colSpan||1;b[a]=b[a]||[];for(k=0;k<b[a].length+1;k++)if("undefined"===typeof b[a][k]){i=k;break}d[a+"-"+i]=c;void 0===c.redips&&(c.redips={});c.redips.rowIndex=a;c.redips.cellIndex=i;for(k=a;k<a+e;k++){b[k]=b[k]||[];c=b[k];for(l=i;l<i+f;l++)c[l]="x"}}return d};Ma=function(a){var b=a.rows,c=0,d,e;"string"===typeof a&&document.getElementById(a);for(d=0;d<b.length;d++){for(e=a=0;e<
b[d].cells.length;e++)a+=b[d].cells[e].colSpan||1;a>c&&(c=a)}return c};Ea=function(a,b){var c=(b.k1-b.k2*a)*(b.k1-b.k2*a),d,a=a+REDIPS.drag.animation.step*(4-3*c)*b.direction;d=b.m*a+b.b;"horizontal"===b.type?(b.obj.style.left=a+"px",b.obj.style.top=d+"px"):(b.obj.style.left=d+"px",b.obj.style.top=a+"px");a<b.last&&0<b.direction||a>b.last&&0>b.direction?setTimeout(function(){Ea(a,b)},REDIPS.drag.animation.pause*c):(xa(b.obj),b.obj.redips.animated=!1,"cell"===b.mode?(!0===b.overwrite&&ma(b.targetCell),
b.targetCell.appendChild(b.obj),R(b.obj)):Ga(oa(b.target[0]),b.target[1],b.obj),"function"===typeof b.callback&&b.callback(b.obj))};Fa=function(a){var b,c,d;b=[];b=c=d=-1;if(void 0===a)b=g<f.length?f[g].redips.idx:null===u||null===w||null===A?f[z].redips.idx:f[u].redips.idx,c=f[z].redips.idx,b=[b,j,l,c,I,V];else{if(a="string"===typeof a?document.getElementById(a):a)"TD"!==a.nodeName&&(a=x("TD",a)),a&&"TD"===a.nodeName&&(b=a.cellIndex,c=a.parentNode.rowIndex,a=x("TABLE",a),d=a.redips.idx);b=[d,c,b]}return b};
oa=function(a){var b;for(b=0;b<f.length&&f[b].redips.idx!==a;b++);return b};qa=function(a){void 0!==a&&(a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," "));return a};Oa=function(a){var b;for(b=0;b<a.childNodes.length;b++)if(1===a.childNodes[b].nodeType)return!0;return!1};pa=function(a,b,c){var d,e;"string"===typeof a&&(a=document.getElementById(a),a=x("TABLE",a));if("TR"===a.nodeName){a=a.getElementsByTagName("td");for(d=0;d<a.length;d++)if(a[d].style.backgroundColor=c?c:"","empty"===b)a[d].innerHTML=
"";else for(e=0;e<a[d].childNodes.length;e++)1===a[d].childNodes[e].nodeType&&(a[d].childNodes[e].style.opacity=b/100,a[d].childNodes[e].style.filter="alpha(opacity="+b+")")}else a.style.opacity=b/100,a.style.filter="alpha(opacity="+b+")",a.style.backgroundColor=c?c:""};return{obj:i,objOld:m,mode:r,td:k,hover:{colorTd:"#E7AB83",colorTr:"#E7AB83"},scroll:{enable:!0,bound:25,speed:20},only:ua,mark:Ra,style:{borderEnabled:"solid",borderDisabled:"dotted",opacityDisabled:"",rowEmptyColor:"white"},trash:{className:"trash",
question:null,questionRow:null},saveParamName:"p",dropMode:"multiple",multipleDrop:"bottom",deleteCloned:!0,cloneKey:{div:!1,row:!1},animation:{pause:20,step:2,shift:!1},shift:{mode:"horizontal1",after:"default"},rowPosition:"before",tableSort:!0,init:function(a){var b;if(void 0===a||"string"!==typeof a)a="drag";y=document.getElementById(a);document.getElementById("redips_clone")||(a=document.createElement("div"),a.id="redips_clone",a.style.width=a.style.height="1px",y.appendChild(a));E("init");s();
ya();REDIPS.event.add(window,"resize",ya);b=y.getElementsByTagName("img");for(a=0;a<b.length;a++)REDIPS.event.add(b[a],"mousemove",J),REDIPS.event.add(b[a],"touchmove",J);REDIPS.event.add(window,"scroll",v)},enableDrag:E,enableTable:function(a,b){var c;if("object"===typeof b&&"TABLE"===b.nodeName)b.redips.enabled=a;else for(c=0;c<f.length;c++)-1<f[c].className.indexOf(b)&&(f[c].redips.enabled=a)},cloneObject:la,saveContent:function(a,b){var c="",d,e,f,i,g,j,k,l=[],m=REDIPS.drag.saveParamName;"string"===
typeof a&&(a=document.getElementById(a));if(void 0!==a&&"object"===typeof a&&"TABLE"===a.nodeName){d=a.rows.length;for(g=0;g<d;g++){e=a.rows[g].cells.length;for(j=0;j<e;j++)if(f=a.rows[g].cells[j],0<f.childNodes.length)for(k=0;k<f.childNodes.length;k++)i=f.childNodes[k],"DIV"===i.nodeName&&-1<i.className.indexOf("drag")&&(c+=m+"[]="+i.id+"_"+g+"_"+j+"&",l.push([i.id,g,j]))}c="json"===b&&0<l.length?JSON.stringify(l):c.substring(0,c.length-1)}return c},relocate:da,emptyCell:ma,moveObject:function(a){var b=
{direction:1},c,d,e,h,i,g;b.callback=a.callback;b.overwrite=a.overwrite;"string"===typeof a.id?b.obj=b.objOld=document.getElementById(a.id):"object"===typeof a.obj&&"DIV"===a.obj.nodeName&&(b.obj=b.objOld=a.obj);if("row"===a.mode){b.mode="row";g=oa(a.source[0]);i=a.source[1];m=b.objOld=f[g].rows[i];if(m.redips&&!0===m.redips.empty_row)return!1;b.obj=ea(b.objOld,"animated")}else if(b.obj&&-1<b.obj.className.indexOf("row")){b.mode="row";b.obj=b.objOld=m=x("TR",b.obj);if(m.redips&&!0===m.redips.empty_row)return!1;
b.obj=ea(b.objOld,"animated")}else b.mode="cell";if(!("object"!==typeof b.obj||null===b.obj))return b.obj.style.zIndex=999,y!==b.obj.redips.container&&(y=b.obj.redips.container,s()),g=B(b.obj),e=g[1]-g[3],h=g[2]-g[0],c=g[3],d=g[0],!0===a.clone&&"cell"===b.mode&&(b.obj=la(b.obj,!0),REDIPS.drag.event.cloned(b.obj)),void 0===a.target&&(a.target=Fa()),b.target=a.target,g=oa(a.target[0]),i=a.target[1],a=a.target[2],i>f[g].rows.length-1&&(i=f[g].rows.length-1),b.targetCell=f[g].rows[i].cells[a],"cell"===
b.mode?(g=B(b.targetCell),i=g[1]-g[3],a=g[2]-g[0],e=g[3]+(i-e)/2,h=g[0]+(a-h)/2):(g=B(f[g].rows[i]),e=g[3],h=g[0]),g=e-c,a=h-d,b.obj.style.position="fixed",Math.abs(g)>Math.abs(a)?(b.type="horizontal",b.m=a/g,b.b=d-b.m*c,b.k1=(c+e)/(c-e),b.k2=2/(c-e),c>e&&(b.direction=-1),g=c,b.last=e):(b.type="vertical",b.m=g/a,b.b=c-b.m*d,b.k1=(d+h)/(d-h),b.k2=2/(d-h),d>h&&(b.direction=-1),g=d,b.last=h),b.obj.redips.animated=!0,Ea(g,b),[b.obj,b.objOld]},shiftCells:na,deleteObject:function(a){"object"===typeof a&&
"DIV"===a.nodeName?a.parentNode.removeChild(a):"string"===typeof a&&(a=document.getElementById(a))&&a.parentNode.removeChild(a)},getPosition:Fa,rowOpacity:pa,rowEmpty:function(a,b,c){a=document.getElementById(a).rows[b];void 0===c&&(c=REDIPS.drag.style.rowEmptyColor);void 0===a.redips&&(a.redips={});a.redips.empty_row=!0;pa(a,"empty",c)},getScrollPosition:N,getStyle:D,findParent:x,findCell:Da,event:{changed:function(){},clicked:function(){},cloned:function(){},clonedDropped:function(){},clonedEnd1:function(){},
clonedEnd2:function(){},dblClicked:function(){},deleted:function(){},dropped:function(){},droppedBefore:function(){},moved:function(){},notCloned:function(){},notMoved:function(){},relocated:function(){},rowChanged:function(){},rowClicked:function(){},rowCloned:function(){},rowDeleted:function(){},rowDropped:function(){},rowDroppedBefore:function(){},rowDroppedSource:function(){},rowMoved:function(){},rowNotCloned:function(){},rowNotMoved:function(){},rowUndeleted:function(){},switched:function(){},
undeleted:function(){}}}}();REDIPS.event||(REDIPS.event=function(){return{add:function(s,E,J){s.addEventListener?s.addEventListener(E,J,!1):s.attachEvent?s.attachEvent("on"+E,J):s["on"+E]=J},remove:function(s,E,J){s.removeEventListener?s.removeEventListener(E,J,!1):s.detachEvent?s.detachEvent("on"+E,J):s["on"+E]=null}}}());