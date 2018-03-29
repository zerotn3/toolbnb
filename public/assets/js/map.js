/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 19, 2017
 */
google.maps.__gjsload__('map', function(_){var sx=function(a,b,c,d,e,f,g,h,l){var n=[],q;e&&(q=new _.Mk,_.Nk(q,e),n.push(q));q=new _.Mk;_.Nk(q,37);_.qk(_.Ok(q),"smartmaps");n.push(q);return{va:_.xt(a,b,c,0,d,n,f,l),xb:g,scale:h}},tx=function(a){this.data=a||[]},ux=function(a,b,c,d,e){_.yt.call(this,a.B,a.l,a.projection,a.maxZoom,a.name,a.alt,a.G,a.Ic,a.hb,a.ma,a.D,a.m,a.C,a.heading);this.l&&this.j.set(sx(this.m,this.C,this.ma,this.D,this.hb,b,c,d,e))},vx=function(a){var b=Math.round(1E7*a);return 0>a?b+4294967296:b},wx=function(a,b){return _.Gk(a.get("projection"),
  b,a.get("zoom"),a.get("offset"),a.get("center"))},xx=function(a,b,c){for(var d=a.length,e=_.za(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0},yx=function(a,b,c,d,e){this.W=a;this.zoom=b;this.f=c;this.b=d.slice(0);this.j=e&&e.gb||_.ua},zx=function(a){this.tileSize=a[0].tileSize;this.Ea=a[0].Ea;this.b=a;xx(a,function(a){return a.tileSize.b(this.tileSize)&&a.Ea==this.Ea},this)},Ax=function(a){switch(a.ma){case "roadmap":return"Otm";case "satellite":return"Otk";case "hybrid":return"Oth";
    case "terrain":return"Otr"}return a instanceof _.Gg?"Ots":"Oto"},Bx=function(a,b){if(!a)return null;var c=!0,d=a.tileSize,e=a.Ea;_.v(b,function(a){if(!a)return null;c=c&&d.b(a.tileSize)&&e==a.pd});if(!c)return null;if(0==b.length)return a;var f=[];_.v(b,function(a){if(!a)return null;f.push(a instanceof _.Fg?a.f():new _.vu(a))});return new zx([a].concat(f))},Ex=function(a,b){var c=null,d=null,e=null;return function(f,g){if(d==f&&e==g)return c;d=f;e=g;_.v(f,function(b){b&&a(Ax(b))});c=null;g instanceof
  _.Fg?c=g.f():g&&(c=new _.vu(g));(f=Bx(c,f))?(c=f,Cx(b)):Dx(b);return c}},Hx=function(a,b){this.j=a;this.f=b;this.P=[_.z.bind(b,"insert_at",this,this.l),_.z.bind(b,"remove_at",this,this.m),_.z.bind(b,"set_at",this,this.B)];this.b=[];var c=this;this.f.forEach(function(a){a=Fx(c,a);c.b.push(a)});Gx(this)},Gx=function(a){_.v(a.b,function(a,c){a.set("zIndex",c)})},Fx=function(a,b){var c=new _.xu(a.j,null);c.bindTo("size",a);c.bindTo("zoom",a);c.bindTo("offset",a);c.bindTo("projectionBounds",a);_.zu(c,
  b);c.listener=b&&_.z.forward(c,"tilesloaded",b);return c},Ix=function(a){a.release();a.listener&&(_.z.removeListener(a.listener),delete a.listener)},Jx=function(a,b){for(var c=0,d=a.f,e=a.b,f=0,g;g=b[f++];)if(a.intersects(g)){var h=g.f,l=g.b;if(_.jj(g,a))return 1;g=e.contains(l.b)&&l.contains(e.b)&&!_.Ud(e,l)?_.Vd(l.b,e.f)+_.Vd(e.b,l.f):_.Vd(e.contains(l.b)?l.b:e.b,e.contains(l.f)?l.f:e.f);c+=g*(Math.min(d.b,h.b)-Math.max(d.f,h.f))}return c/=_.Yd(d)*_.Td(e)},Kx=function(a,b){this.j=a;this.f=b;_.z.bind(this,
  "tilesloaded",this,this.l);this.b=null},Cx=function(a){a.b&&(a.b.oa(),a.b.unbindAll(),a.b=null)},Dx=function(a){a.b||(a.b=new Hx(a.j,a.f),a.b.bindTo("size",a),a.b.bindTo("zoom",a),a.b.bindTo("offset",a),a.b.bindTo("projectionBounds",a))},Lx=function(a,b){var c=a.x,d=a.y;switch(b){case 90:a.x=d;a.y=256-c;break;case 180:a.x=256-c;a.y=256-d;break;case 270:a.x=256-d,a.y=c}},Mx=function(a,b,c,d,e,f){this.W=a.W;this.zoom=a.zoom;this.b=a;this.j=b;this.B=c;this.l=d;this.f=e;this.m=f||null;a=2==this.f||4==
  this.f?this.f:1;a=Math.min(1<<this.zoom,a);b=this.B&&4!=a;c=this.zoom;for(d=a;1<d;d/=2)c--;if(d=this.l(new _.I(this.W.x,this.W.y),this.zoom))c=_.kk(_.kk(_.kk(new _.ek(_.zt(this.j,d)),"x",d.x),"y",d.y),"z",c),1!=a&&_.kk(c,"w",256/a),b&&(a*=2),1!=a&&_.kk(c,"scale",a),this.b.setUrl(c.toString(),this.m)},Nx=function(a){this.j=a;this.b=null;this.set("idle",!0)},Ox=function(){var a=!1;return function(b,c){if(b&&c){if(.999999>Jx(b,c))return a=!1;b=_.Fk(b,(_.Fw-1)/2);return.999999<Jx(b,c)?a=!0:a}}},Px=function(){return function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b){if(a&&b)return.9<=Jx(a,b)}},Qx=_.pa("b"),Vx=function(a){for(var b=[],c=0;c<_.w(a);++c){var d,e=a[c].elementType;d=a[c].stylers;var f=[],g;g=(g=a[c].featureType)&&Rx[g.toLowerCase()];(g=null!=g?g:null)&&f.push("s.t:"+g);(e=e&&Sx[e.toLowerCase()]||null)&&f.push("s.e:"+e);for(e=0;e<_.w(d);++e){a:{g=void 0;var h=d[e];for(g in h){var l=h[g],n=g&&Tx[g.toLowerCase()]||null;if(n&&(_.x(l)||_.eb(l)||_.fb(l))&&l){"color"==g&&Ux.test(l)&&(l="#ff"+l.substr(1));g="p."+n+":"+l;break a}}g=void 0}g&&f.push(g)}(d=
    f.join("|"))&&b.push(d)}a=b.join(",");return 1E3>=a.length?a:""},Wx=function(a,b,c,d,e){this.f=a;a=_.ru(this,"apistyle");var f=_.ru(this,"authUser"),g=_.ru(this,"baseMapType"),h=_.ru(this,"scale"),l=_.ru(this,"tilt");this.b=null;var n=(0,_.p)(this.Gk,this);b=new _.gt([a,f,b,g,h,l],n);_.pu(this,"tileMapType",b);this.l=_.gd([]);a=(0,_.p)(this.Pn,this,c);_.z.bind(c,"insert_at",this,a);_.z.bind(c,"remove_at",this,a);_.z.bind(c,"set_at",this,a);a();this.B=new _.gt([this.l,b],Ex(e,d))},Xx=function(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c,d){function e(){if(!g.b&&!g.f){var n=c.get(),q=b.get("center"),r=b.get("zoom");null!=r&&q&&n&&n.width&&n.height&&(c.removeListener(e),h.remove(),l.remove(),d.size=n.width+"x"+n.height,d.hadviewport=f,g.f=q,g.m=r,g.b=_.$f("map2",{startTime:f?a:void 0,gn:d}))}}this.H=b;this.j={};this.m=this.f=this.b=null;this.l=!1;var f=!0,g=this,h=b.addListener("center_changed",e),l=b.addListener("zoom_changed",e);c.addListener(e);e();f=!1},Yx=function(a,b,c){!a.b||a.j[b]||a.l||(a.f.b(a.H.get("center"))&&a.m==a.H.get("zoom")?
    (a.j[b]=!0,c.call(a)):a.l=!0)},Zx=function(a,b){Yx(a,"staticmap",function(){var a={staticmap:b};Yx(this,"firstpixel",function(){a.firstpixel=b});Yx(this,"allpixels",function(){a.allpixels=b});_.Yf(this.b,a)})},ay=function(a){var b={};b.firstmap=$x;b.hdpi=1<_.Ek();b.mob=!_.X.C;b.staticmap=a;return b},by=function(a,b){this.j=a;this.l=b},cy=function(a){var b=window.document.createElement("div");_.Ul(b);_.Zl(b,0);a.appendChild(b);this.set("div",b)},dy=function(a,b){this.tileSize=a.tileSize;this.Ea=!0;
    this.f=a;this.b=b},ey=function(a,b){this.j=b||new _.wf;this.b=new _.Md(a%360,45);this.l=new _.I(0,0);this.f=!0},fy=function(a,b,c,d,e,f,g){this.tileSize=b;this.l=c;this.b=a;this.B=b;this.j=d;this.C=e;this.f=f;this.m=g;this.Ea=!0},gy=function(){var a=new Qx(Px()),b={};b.obliques=new Qx(Ox());b.report_map_issue=a;return b},hy=function(a){var b=new Nx(300);b.bindTo("input",a,"bounds");_.z.addListener(b,"idle_changed",function(){b.get("idle")&&_.z.trigger(a,"idle")})},iy=function(a){if(a&&_.Pl(a.getDiv())&&
    (_.el()||_.dl())){_.Vm(a,"Tdev");var b=window.document.querySelector('meta[name="viewport"]');(b=b&&b.content)&&b.match(/width=device-width/)&&_.Vm(a,"Mfp")}},jy=function(a,b){function c(){var c=b.get("baseMapType");if(c)switch(c.ma){case "roadmap":_.Vm(a,"Tm");break;case "satellite":c.F&&_.Vm(a,"Ta");_.Vm(a,"Tk");break;case "hybrid":c.F&&_.Vm(a,"Ta");_.Vm(a,"Th");break;case "terrain":_.Vm(a,"Tr");break;default:_.Vm(a,"To")}}c();_.z.addListener(b,"basemaptype_changed",c)},ly=function(a,b,c){_.Va(_.Vg,
  function(d,e){b.set(e,ky(a,e,{bl:c}))})},my=function(a,b){this.b=a;this.f=b},ny=function(a){this.b=a;a.addListener(function(){this.notify("style")},this)},oy=function(a,b){function c(c){var d=b.getAt(c);if(d instanceof _.Gg){c=d.get("styles");var f=Vx(c);d.f=function(){var b=ky(a,d.b);return(new ux(b,f,null,null,null)).f()}}}_.z.addListener(b,"insert_at",c);_.z.addListener(b,"set_at",c);b.forEach(function(a,b){c(b)})},qy=function(a){var b;b=(b=window.navigator.connection||window.navigator.mozConnection||
      window.navigator.webkitConnection||null)&&b.type;_.Vm(a,"Nt",b&&py[b]||"-na")},ry=function(a,b,c){if((_.el()||_.dl())&&!_.hm()){_.Vm(b,"Mmni");var d=window.setInterval(function(){var e;e=a.b.getBoundingClientRect();if(e=!(0>=e.top-5&&0>=e.left-5&&e.height+5>=window.document.body.scrollHeight&&e.width+5>=window.document.body.scrollWidth))e=a.b.getBoundingClientRect(),e=0>=e.top-5&&0>=e.left-5&&e.bottom+5>=window.innerHeight&&e.right+5>=window.innerWidth&&"greedy"==c.get();e&&(_.Vm(b,"Mmus"),window.clearInterval(d))},
  1E3)}},sy=_.pa("b"),ty=function(){var a,b=new _.A;b.bounds_changed=function(){var c=b.get("bounds");c?a&&_.cj(a,c)||(a=_.yf(c.I-512,c.J-512,c.L+512,c.M+512),b.set("boundsQ",a)):b.set("boundsQ",c)};return b},vy=function(){uy(this)},uy=function(a){var b=new _.iv(a.get("minZoom")||0,a.get("maxZoom")||30),c=a.get("mapTypeMinZoom"),d=a.get("mapTypeMaxZoom"),e=a.get("trackerMaxZoom");_.x(c)&&(b.min=Math.max(b.min,c));_.x(e)?b.max=Math.min(b.max,e):_.x(d)&&(b.max=Math.min(b.max,d));a.set("zoomRange",b)},
  wy=function(){this.B=new _.vf;this.l={};this.j={}},xy=_.oa(),yy=_.oa(),zy=function(a,b){var c=a.__gm,d=a.mapTypes,e=c.b,f=a.overlayMapTypes,g=a.__gm;b=new Kx(b,a.overlayMapTypes);b.bindTo("size",g);b.bindTo("zoom",g);b.bindTo("offset",g);b.bindTo("projectionBounds",g);_.z.forward(a,"tilesloaded",b);d=new Wx(d,e,f,b,_.Vk(_.Vm,a));d.bindTo("heading",a);d.bindTo("mapTypeId",a);_.rg[23]&&d.bindTo("scale",a);d.bindTo("apistyle",c);d.bindTo("authUser",c);d.bindTo("tilt",c);return d},Ay=function(a,b,c,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e,f,g,h){var l=c.__gm,n=new _.Pv(c,a,b,!!c.b,e,l,d,g,(0,_.p)(f.b,f),h);n.bindTo("draggingCursor",c);n.bindTo("draggableMap",c,"draggable");_.z.addListener(c,"zoom_changed",function(){n.get("zoom")!=c.get("zoom")&&n.set("zoom",c.get("zoom"))});n.set("zoom",c.get("zoom"));n.bindTo("disablePanMomentum",c);n.bindTo("projectionTopLeft",e);n.bindTo("draggableCursor",l,"cursor");d.bindTo("zoom",n);e.bindTo("zoom",n);return n},By=function(a,b,c,d){var e=new Xx(a,b,c,ay(!!d));$x=!1;d&&_.sj(d,function g(a){a&&
  (d.removeListener(g),Zx(e,a))});_.z.addListenerOnce(b,"tilesloaded",(0,_.p)(e.C,e));return e},Cy=function(a,b,c,d){return d?new by(a,function(){return b}):_.rg[23]?new by(a,function(a){var d=c.get("scale");return 2==d||4==d?b:a}):a},Dy=function(a,b){var c=a.__gm;b=new cy(b);b.bindTo("center",a);b.bindTo("projectionBounds",c);b.bindTo("offset",c);return b},Ey=_.pa("b"),Fy=function(a,b,c){var d=_.fj(),e=_.pf(_.R);this.H=b;this.b=c;this.j=new _.wf;this.f=_.nf(e);this.l=_.of(e);this.B=_.N(d,14);this.m=
    _.N(d,15);this.C=new _.kt(a,d,e)},Gy=function(a,b,c,d){d=d||{};var e=_.x(d.heading),f=("hybrid"==b&&!e||"terrain"==b||"roadmap"==b)&&0!=d.xk,g=d.Aa;if("satellite"==b){if(e)for(b=d.heading,a=_.zd(new _.ij(a.C.j.data[7]),0).slice(),c=0;c<a.length;++c)a[c]+="deg="+b+"&";else a=_.zd(new _.ij(a.C.j.data[1]),0).slice();return new fy(a,new _.J(256,256),"Sorry, we have no imagery here.",window.document,f&&1<_.Ek(),_.Gt(d.heading),g&&g.scale||null)}return new _.Ft(_.lt(a.C),new _.J(256,256),"Sorry, we have no imagery here.",
    window.document,f&&1<_.Ek(),_.Gt(d.heading),c,g,d.heading)},Hy=function(a){function b(a,b){if(!b||!b.va)return b;var c=[];_.Yi(c,b.va.data);c=new _.Dr(c);_.Nk(_.rr(_.is(c)),a);return{scale:b.scale,xb:b.xb,va:c}}return function(c){var d=Gy(a,"roadmap",a.b,{xk:!1,Aa:b(3,c.Aa().get())}),e=Gy(a,"roadmap",a.b,{Aa:b(18,c.Aa().get())}),d=new zx([d,e]);c=Gy(a,"roadmap",a.b,{Aa:c.Aa().get()});return new dy(d,c)}},Iy=function(a){return function(b){var c=b.Aa().get(),d=Gy(a,"satellite",null,{heading:b.heading,
    Aa:c});b=Gy(a,"hybrid",a.b,{heading:b.heading,Aa:c});return new zx([d,b])}},Jy=function(a,b){return new _.yt(Iy(a),a.b,_.x(b)?new ey(b):a.j,_.x(b)?21:22,"Hybrid","Show imagery with street names",_.tw.hybrid,"m@"+a.B,50,"hybrid",a.m,a.f,a.l,b)},Ky=function(a){return function(b){return Gy(a,"satellite",null,{heading:b.heading,Aa:b.Aa().get()})}},Ly=function(a,b){var c=_.x(b);return new _.yt(Ky(a),null,_.x(b)?new ey(b):a.j,c?21:22,"Satellite","Show satellite imagery",c?"a":_.tw.satellite,null,null,"satellite",
    a.m,a.f,a.l,b)},My=function(a,b){return function(c){return Gy(a,b,a.b,{Aa:c.Aa().get()})}},ky=function(a,b,c){c=c||{};var d=[0,90,180,270];if("hybrid"==b){b=Jy(a);b.b={};c=0;for(var e=d.length;c<e;++c)b.b[d[c]]=Jy(a,d[c])}else if("satellite"==b)for(b=Ly(a),b.b={},c=0,e=d.length;c<e;++c)b.b[d[c]]=Ly(a,d[c]);else b="roadmap"==b&&1<_.Ek()&&c.bl?new _.yt(Hy(a),a.b,a.j,21,"Map","Show street map",_.tw.roadmap,"m@"+a.B,47,"roadmap",a.m,a.f,a.l,void 0):"terrain"==b?new _.yt(My(a,"terrain"),a.b,a.j,21,"Terrain",
    "Show street map with terrain",_.tw.terrain,"r@"+a.B,63,"terrain",a.m,a.f,a.l,void 0):new _.yt(My(a,"roadmap"),a.b,a.j,21,"Map","Show street map",_.tw.roadmap,"m@"+a.B,47,"roadmap",a.m,a.f,a.l,void 0);return b},Ny=_.oa();_.yt.prototype.Aa=_.bj(26,_.qa("j"));_.vf.prototype.b=_.bj(10,function(a){_.ad(this.P,function(b){b(a)})});_.M.prototype.Od=_.bj(2,_.qa("data"));_.t(tx,_.M);tx.prototype.getTile=function(){return new _.sr(this.data[1])};_.t(ux,_.yt);yx.prototype.ta=_.qa("f");
  yx.prototype.pb=function(){return xx(this.b,function(a){return a.pb()})};yx.prototype.release=function(){_.v(this.b,function(a){a.release()});this.j()};yx.prototype.freeze=function(){_.v(this.b,function(a){a.freeze()})};zx.prototype.Ca=function(a,b,c){function d(){c&&c.cb&&g.pb()&&c.cb()}var e=_.ak(window.document,"DIV"),f=_.zk(this.b,function(c,f){c=c.Ca(a,b,{cb:d});var g=c.ta();g.style.position="absolute";g.style.zIndex=f;e.appendChild(g);return c}),g=new yx(a,b,e,f,{gb:c&&c.gb});return g};
  var Tx={hue:"h",saturation:"s",lightness:"l",gamma:"g",invert_lightness:"il",visibility:"v",color:"c",weight:"w"},Ux=/^#[0-9a-fA-F]{6}$/,Rx={all:0,administrative:1,"administrative.country":17,"administrative.province":18,"administrative.locality":19,"administrative.neighborhood":20,"administrative.land_parcel":21,poi:2,"poi.business":33,"poi.government":34,"poi.school":35,"poi.medical":36,"poi.attraction":37,"poi.place_of_worship":38,"poi.sports_complex":39,"poi.park":40,road:3,"road.highway":49,
    "road.highway.controlled_access":785,"road.arterial":50,"road.local":51,transit:4,"transit.line":65,"transit.station":66,"transit.station.rail":1057,"transit.station.bus":1058,"transit.station.airport":1059,"transit.station.ferry":1060,landscape:5,"landscape.man_made":81,"landscape.natural":82,"landscape.natural.landcover":1313,"landscape.natural.terrain":1314,water:6},Sx={all:"",geometry:"g","geometry.fill":"g.f","geometry.stroke":"g.s",labels:"l","labels.icon":"l.i","labels.text":"l.t","labels.text.fill":"l.t.f",
    "labels.text.stroke":"l.t.s"};_.t(Hx,_.A);Hx.prototype.oa=function(){_.v(this.b,function(a){Ix(a)},this);this.b.length=0;_.v(this.P,function(a){a.remove()})};Hx.prototype.l=function(a){var b=this.b,c=Fx(this,this.f.getAt(a));b.splice(a,0,c);Gx(this)};Hx.prototype.m=function(a){var b=this.b;Ix(b[a]);b.splice(a,1);Gx(this)};Hx.prototype.B=function(a){Ix(this.b[a]);var b=Fx(this,this.f.getAt(a));b.set("zIndex",a);this.b[a]=b};
  var Oy=[{ue:108.25,se:109.625,we:49,ve:51.5},{ue:109.625,se:109.75,we:49,ve:50.875},{ue:109.75,se:110.5,we:49,ve:50.625},{ue:110.5,se:110.625,we:49,ve:49.75}];_.t(Kx,_.A);Kx.prototype.l=function(){this.b||this.f.forEach(function(a){a&&_.z.trigger(a,"tilesloaded")})};var $x=!0;Mx.prototype.ta=function(){return this.b.ta()};Mx.prototype.pb=function(){return this.b.pb()};Mx.prototype.release=function(){this.b.release()};Mx.prototype.freeze=function(){this.b.freeze()};
  var py={bluetooth:"-b",cellular:"-c",ethernet:"-e",none:"-n",wifi:"-wf",wimax:"-wm",other:"-o"};_.t(Nx,_.A);Nx.prototype.input_changed=function(){this.get("idle")&&this.set("idle",!1);this.b&&window.clearTimeout(this.b);this.b=window.setTimeout((0,_.p)(this.f,this),this.j)};Nx.prototype.f=function(){this.b=null;this.set("idle",!0)};_.t(Qx,_.A);
  Qx.prototype.changed=function(a){if("available"!=a){a=this.get("viewport");var b=this.get("featureRects");a=this.b(a,b);null!=a&&a!=this.get("available")&&this.set("available",a)}};_.t(Wx,_.A);_.k=Wx.prototype;_.k.mapTypeId_changed=function(){var a=this.get("mapTypeId");this.qd(a)};_.k.heading_changed=function(){var a=this.get("heading");if(_.Aa(a)){var b=_.Za(90*Math.round(a/90),0,360);a!=b?this.set("heading",b):(a=this.get("mapTypeId"),this.qd(a))}};
  _.k.tilt_changed=function(){var a=this.get("mapTypeId");this.qd(a)};_.k.Pn=function(a){var b=[];a.forEach(function(a){b.push(a)});this.l.set(b)};_.k.setMapTypeId=function(a){this.qd(a);this.set("mapTypeId",a)};
  _.k.qd=function(a){var b=this.get("heading")||0,c=this.f.get(a),d=this.get("tilt");if(d&&c&&c instanceof _.yt&&c.b&&c.b[b])c=c.b[b];else if(0==d&&0!=b){this.set("heading",0);return}c&&c==this.m||(this.j&&(_.z.removeListener(this.j),this.j=null),b=(0,_.p)(this.qd,this,a),a&&(this.j=_.z.addListener(this.f,a.toLowerCase()+"_changed",b)),c&&c instanceof _.Gg?(a=c.b,this.set("styles",c.get("styles")),this.set("baseMapType",this.f.get(a))):(this.set("styles",null),this.set("baseMapType",c)),this.set("maxZoom",
    c&&c.maxZoom),this.set("minZoom",c&&c.minZoom),this.m=c)};
  _.k.Gk=function(a,b,c,d,e,f){if(void 0==f)return null;if(d instanceof _.yt){a=new ux(d,a,b,e,c);if(b=this.b instanceof ux)if(b=this.b,b==a)b=!0;else if(b&&a){if(c=b.heading==a.heading&&b.projection==a.projection&&b.Ic==a.Ic){b=b.j.get();c=a.j.get();if(b==c)b=!0;else if(b&&c){if(d=b.scale==c.scale&&b.xb==c.xb)b.va==c.va?b=!0:b.va&&c.va?(c=c.va,b=_.md(b.va.Od(),c?c.Od():null)):b=!1,d=b;b=d}else b=!1;c=b}b=c}else b=!1;b||(this.b=a)}else this.b=d;return this.b};
  Xx.prototype.D=function(){Yx(this,"visreq",function(){_.Zf(this.b,"visreq")})};Xx.prototype.F=function(){Yx(this,"visres",function(){_.Zf(this.b,"visres")})};Xx.prototype.B=function(){Yx(this,"firsttile",function(){var a={firsttile:void 0};Yx(this,"firstpixel",function(){a.firstpixel=void 0});_.Yf(this.b,a)})};Xx.prototype.C=function(){Yx(this,"tilesloaded",function(){var a={tilesloaded:void 0};Yx(this,"allpixels",function(){a.allpixels=void 0});_.Yf(this.b,a)})};
  by.prototype.m=function(a,b){return this.l(this.j.m(a,b))};by.prototype.f=function(a){return this.l(this.j.f(a))};by.prototype.b=function(){return this.j.b()};_.t(cy,_.A);cy.prototype.offset_changed=function(){this.set("newCenter",this.get("center"));var a=this.get("projectionBounds"),b=this.get("offset");if(a&&b){var c=this.get("div");_.Ql(c,new _.I(a.I-b.width,a.J-b.height));_.Vl(c)}};
  dy.prototype.Ca=function(a,b,c){var d;a:{if(!(7>b)){var e=1<<b-7;d=a.x/e;for(var e=a.y/e,f=0;f<Oy.length;++f)if(d>=Oy[f].ue&&d<=Oy[f].se&&e>=Oy[f].we&&e<=Oy[f].ve){d=!0;break a}}d=!1}return d?this.b.Ca(a,b,c):this.f.Ca(a,b,c)};ey.prototype.fromLatLngToPoint=function(a,b){b=this.j.fromLatLngToPoint(a,b);Lx(b,this.b.heading());b.y=(b.y-128)/_.Ew+128;return b};
  ey.prototype.fromPointToLatLng=function(a,b){var c=this.l;c.x=a.x;c.y=(a.y-128)*_.Ew+128;Lx(c,360-this.b.heading());return this.j.fromPointToLatLng(c,b)};ey.prototype.getPov=_.qa("b");fy.prototype.Ca=function(a,b,c){a=new _.At(a,b,this.B,this.j.createElement("div"),{Wg:this.l||void 0,gb:c&&c.gb});return new Mx(a,this.b,this.C,this.f,this.m,c&&c.cb)};_.t(my,_.A);
  my.prototype.getPrintableImageUri=function(a,b,c,d,e){var f=this.get("tileMapType");if(2048<a*(e||1)||2048<b*(e||1)||!(f instanceof _.yt))return null;d=d||this.get("zoom");if(null==d)return null;c=c||this.get("center");if(!c)return null;var g=f.Aa().get();if(!g.va)return null;var h=new _.ot(g.va);_.qt(h,0);var l=this.f.f(d);l&&_.tt(h,l);if("hybrid"==f.ma){_.js(h.b);for(f=_.Bd(h.b,1)-1;0<f;--f)_.kj(new _.Sq(_.lj(h.b,1,f)),new _.Sq(_.lj(h.b,1,f-1)));f=new _.Sq(_.lj(h.b,1,0));f.data[0]=1;_.oj(f,1);_.oj(f,
    2)}if(2==e||4==e)(new _.Uq(_.Q(h.b,4))).data[4]=e;e=d;d=new _.zr(_.Q(new _.wr(_.mj(h.b,0)),3));d.setZoom(e);e=new _.An(_.Q(d,2));f=vx(c.lat());e.data[0]=f;c=vx(c.lng());e.data[1]=c;d=new _.Ar(_.Q(d,0));d.data[0]=a;d.data[1]=b;a=this.b;a+="pb="+(0,window.encodeURIComponent)(_.hs(h.b)).replace(/%20/g,"+");null!=g.xb&&(a+="&authuser="+g.xb);return a};_.t(ny,_.A);ny.prototype.changed=function(a){"tileMapType"!=a&&"style"!=a&&this.notify("style")};
  ny.prototype.getStyle=function(){var a=[],b,c=this.get("tileMapType");c instanceof _.yt&&c.hb&&(b=new _.Mk,_.Nk(b,c.hb),a.push(b));b=new _.Mk;_.Nk(b,37);_.qk(_.Ok(b),"smartmaps");a.push(b);this.b.get().forEach(function(b){b.hb&&a.push(b.hb)});return a};_.t(vy,_.A);vy.prototype.changed=function(a){"zoomRange"!=a&&uy(this)};
  wy.prototype.C=function(a){if(_.Bd(a,0)){this.l={};this.j={};for(var b=0;b<_.Bd(a,0);++b){var c=new tx(_.lj(a,0,b)),d=c.getTile(),e=d.getZoom(),f=_.N(d,1),d=_.N(d,2),c=_.N(c,2),g=this.l;g[e]=g[e]||{};g[e][f]=g[e][f]||{};g[e][f][d]=c;this.j[e]=Math.max(this.j[e]||0,c)}this.B.b(null)}};wy.prototype.m=function(a,b){var c=this.l,d=a.x;a=a.y;return c[b]&&c[b][d]&&c[b][d][a]||0};wy.prototype.f=function(a){return this.j[a]||0};wy.prototype.b=_.qa("B");_.t(xy,_.A);
  xy.prototype.changed=function(a){if("apistyle"!=a&&"hasCustomStyles"!=a){var b=this.get("mapTypeStyles")||this.get("styles");this.set("hasCustomStyles",_.w(b));a=[];_.rg[13]&&a.push({featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]});_.cb(a,b);b=Vx(a);b!=this.b&&(this.b=b,this.notify("apistyle"));a.length&&!b&&_.Qc(_.Vk(_.z.trigger,this,"styleerror"))}};xy.prototype.getApistyle=_.qa("b");_.t(yy,_.A);
  yy.prototype.changed=function(a){if("maxZoomRects"==a||"latLng"==a){a=this.get("latLng");var b=this.get("maxZoomRects");if(a&&b){for(var c=void 0,d=0,e;e=b[d++];)e.b.contains(a)&&(c=Math.max(c||0,e.maxZoom));a=c;a!=this.get("maxZoom")&&this.set("maxZoom",a)}else this.set("maxZoom",void 0)}};_.t(Ey,_.A);Ey.prototype.immutable_changed=function(){var a=this,b=a.get("immutable"),c=a.f;b!=c&&(_.Va(a.b,function(d){(c&&c[d])!==(b&&b[d])&&a.set(d,b&&b[d])}),a.f=b)};Ny.prototype.f=function(a,b,c,d,e,f,g){var h=_.nf(_.pf(_.R)),l=a.__gm,n=a.getDiv();if(n){_.z.forward(n,"resize",c);_.z.addDomListenerOnce(c,"mousedown",function(){_.Vm(a,"Mi")},!0);var q=new _.mw(b,{Lg:c,Ng:n,Mg:!0,oh:_.qj(_.pf(_.R),15)}),n=q.j;_.Zl(q.b,0);_.z.forward(a,"resize",c);l.set("panes",q.l);l.set("innerContainer",q.f);var r=By(f,a,_.ru(q,"size"),d&&d.j),u=new yy,y=gy(),B,D;(function(){var b=_.N(_.fj(),14),c=a.get("noPerTile")&&_.rg[15],d=new wy;B=Cy(d,b,a,c);D=new _.$v(h,u,y,c?null:d,!!a.b,
    r)})();D.bindTo("tilt",a);D.bindTo("heading",a);D.bindTo("bounds",a);D.bindTo("zoom",a);D.bindTo("size",l);f=new Fy(new _.hj(_.Q(_.R,1)),a,B);ly(f,a.mapTypes,b.enableSplitTiles);_.gd(!1);_.R&&_.qj(_.R,27)||(l.set("eventCapturer",q.pa),l.set("panBlock",q.Cc));_.Bk()&&_.Jl()||_.F("onion",function(b){b.f(a,B)});var C=zy(a,q.l.mapPane);D.bindTo("baseMapType",C);var G=new _.qv(n,q.m,C.B,r);f=new _.tu(["blockingLayerCount","staticMapLoading"],"waitWithTiles",function(a,b){return!!a||!!b});f.bindTo("blockingLayerCount",
    l);G.bindTo("waitWithTiles",f);G.set("panes",q.l);G.bindTo("styles",a);_.rg[20]&&G.bindTo("animatedZoom",a);_.rg[35]&&(_.nw(a),_.ow(a));var L=new _.Rv;L.bindTo("tilt",a);L.bindTo("zoom",a);L.bindTo("mapTypeId",a);L.bindTo("aerial",y.obliques,"available");l.bindTo("tilt",L,"actualTilt");_.z.addListener(D,"attributiontext_changed",function(){a.set("mapDataProviders",D.get("attributionText"))});f=new xy;f.bindTo("styles",a);f.bindTo("mapTypeStyles",C,"styles");l.bindTo("apistyle",f);l.bindTo("hasCustomStyles",
    f);_.z.forward(f,"styleerror",a);f=new ny(l.b);f.bindTo("tileMapType",C);l.bindTo("style",f);var H=new _.Su;l.set("projectionController",H);G.bindTo("size",q);G.bindTo("projection",H);G.bindTo("projectionBounds",H);H.bindTo("projectionTopLeft",G);H.bindTo("offset",G);H.bindTo("latLngCenter",a,"center");H.bindTo("size",q);H.bindTo("projection",a);G.bindTo("fixedPoint",H);a.bindTo("bounds",H,"latLngBounds",!0);l.set("mouseEventTarget",{});var O=new _.Mv(_.X.j,q.f);O.bindTo("title",l);var aa=_.gd(!1);
    f=_.jt({draggable:_.ru(a,"draggable"),Og:_.ru(a,"gestureHandling"),th:aa});var ga=Ay(q.f,n,a,G,H,g,O,f);d&&(g=Dy(a,n),d.bindTo("div",g),d.bindTo("center",g,"newCenter"),d.bindTo("zoom",ga),d.bindTo("tilt",l),d.bindTo("size",l));l.bindTo("zoom",ga);l.bindTo("center",a);l.bindTo("size",q);l.bindTo("baseMapType",C);l.bindTo("offset",G);l.bindTo("layoutPixelBounds",G);l.bindTo("pixelBounds",G);l.bindTo("projectionTopLeft",G);l.bindTo("projectionBounds",G,"viewProjectionBounds");l.bindTo("projectionCenterQ",
      H);a.set("tosUrl",_.yw);d=ty();d.bindTo("bounds",G,"pixelBounds");l.bindTo("pixelBoundsQ",d,"boundsQ");d=new Ey({projection:1});d.bindTo("immutable",l,"baseMapType");g=new _.Ru({projection:new _.wf});g.bindTo("projection",d);a.bindTo("projection",g);_.z.forward(l,"panby",G);_.z.forward(l,"panbynow",G);_.z.forward(l,"panbyfraction",G);_.z.addListener(l,"panto",function(b){if(b instanceof _.E)if(a.get("center")){b=H.fromLatLngToDivPixel(b);var c=H.get("offset")||_.dh;b.x+=Math.round(c.width)-c.width;
      b.y+=Math.round(c.height)-c.height;_.z.trigger(G,"panto",b.x,b.y)}else a.set("center",b);else throw Error("panTo: latLng must be of type LatLng");});_.z.forward(l,"pantobounds",G);_.z.addListener(l,"pantolatlngbounds",function(a){if(a instanceof _.$d)_.z.trigger(G,"pantobounds",wx(H,a));else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");});_.z.addListener(ga,"zoom_changed",function(){ga.get("zoom")!=a.get("zoom")&&(a.set("zoom",ga.get("zoom")),_.$m(a,"Mm"))});var Ea=new vy;
    Ea.bindTo("mapTypeMaxZoom",C,"maxZoom");Ea.bindTo("mapTypeMinZoom",C,"minZoom");Ea.bindTo("maxZoom",a);Ea.bindTo("minZoom",a);Ea.bindTo("trackerMaxZoom",u,"maxZoom");ga.bindTo("zoomRange",Ea);G.bindTo("zoomRange",Ea);ga.bindTo("draggable",a);ga.bindTo("scrollwheel",a);ga.bindTo("disableDoubleClickZoom",a);var Da=new _.jw(_.Pl(c));l.bindTo("fontLoaded",Da);d=l.j;d.bindTo("scrollwheel",a);d.bindTo("disableDoubleClickZoom",a);d=function(){var b=a.get("streetView");b?(a.bindTo("svClient",b,"client"),
      b.__gm.bindTo("fontLoaded",Da)):(a.unbind("svClient"),a.set("svClient",null))};d();_.z.addListener(a,"streetview_changed",d);if(_.rg[71]){var jb=null;_.Sk(a,"floor_changed",function(){var b=a.get("floor");if((jb&&jb.ba.pid_lv)!=b){var c=jb,d=l.b.get();jb&&(c=null,d=d.Qa(jb));b&&(c=new _.nt,c.fa="indoor",c.ba.pid_lv=b,d=_.tj(d,c));jb=c;l.b.set(d)}})}if(!a.b){var vc=function(){_.F("controls",function(b){var d=new b.fg(q.b);l.set("layoutManager",d);G.bindTo("layoutBounds",d,"bounds");b.fm(d,a,C,q.b,
      D,y.report_map_issue,Ea,L,H,q.pa,c,aa,B);b.gm(a,q.f);b.fi(c)})};if(_.Bk()){var oc=_.ns.zb().b;d=new _.iw(l.b);d.bindTo("gid",oc);d.bindTo("persistenceKey",oc);_.Vm(a,"Sm");d=function(){oc.get("gid")&&_.Vm(a,"Su")};d();_.z.addListener(oc,"gid_changed",d)}var Ve=_.z.addListener(G,"tilesloading_changed",function(){G.get("tilesloading")&&(Ve.remove(),vc())});_.z.addListenerOnce(G,"tilesloaded",function(){_.F("util",function(b){b.f.b();window.setTimeout((0,_.p)(b.b.f,b.b),5E3);b.l(a)})});_.Vm(a,"Mm");
      b.v2&&_.Vm(a,"Mz");_.Xm("Mm","-p",a,!(!a||!a.b));jy(a,C);_.$m(a,"Mm");_.jm(function(){_.$m(a,"Mm")});iy(a);c&&ry(new sy(c),a,f)}hy(a);var Nf=_.N(_.fj(),14);b=new Fy(new _.hj(_.Q(_.R,1)),a,new by(B,function(a){return a||Nf}));oy(b,a.overlayMapTypes);_.rg[35]&&l.bindTo("card",a);a.b||qy(a);e&&window.setTimeout(function(){_.z.trigger(a,"projection_changed");_.m(a.get("bounds"))&&_.z.trigger(a,"bounds_changed");_.z.trigger(a,"tilt_changed");_.m(a.get("heading"))&&_.z.trigger(a,"heading_changed")},0);
    _.rg[15]&&(e=_.lt(_.mt()),e=new my(e[0],B),e.bindTo("tileMapType",C),e.bindTo("center",a),e.bindTo("zoom",l),a.getPrintableImageUri=(0,_.p)(e.getPrintableImageUri,e),a.setFpsMeasurementCallback=(0,_.p)(G.setFpsMeasurementCallback,G),l.bindTo("authUser",a),a.bindTo("tilesloading",G))}};
  Ny.prototype.fitBounds=function(a,b){function c(){var c=_.Df(a.getDiv());c.width-=80;c.width=Math.max(1,c.width);c.height-=80;c.height=Math.max(1,c.height);var e=a.getProjection(),f=b.getSouthWest(),g=b.getNorthEast(),h=f.lng(),l=g.lng();h>l&&(f=new _.E(f.lat(),h-360,!0));f=e.fromLatLngToPoint(f);h=e.fromLatLngToPoint(g);g=Math.max(f.x,h.x)-Math.min(f.x,h.x);f=Math.max(f.y,h.y)-Math.min(f.y,h.y);c=g>c.width||f>c.height?0:Math.floor(Math.min(_.yk(c.width+1E-12)-_.yk(g+1E-12),_.yk(c.height+1E-12)-_.yk(f+
      1E-12)));g=_.nk(e,b,0);e=_.ok(e,new _.I((g.I+g.L)/2,(g.J+g.M)/2),0);_.x(c)&&(a.setCenter(e),a.setZoom(c))}a.getProjection()?c():_.z.addListenerOnce(a,"projection_changed",c)};Ny.prototype.b=function(a,b,c,d,e,f){a=new _.At(a,b,c,d,{});a.setUrl(e,f);return a};_.kc("map",new Ny);});
