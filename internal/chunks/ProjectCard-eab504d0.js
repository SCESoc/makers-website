import{S as he,i as me,s as ge,e as _,c as h,b as u,K as pe,g as Q,M as R,d,w as re,x as ie,y as ne,q as D,o as M,B as oe,t as Y,a as m,h as A,H as o,n as $e,p as be,P as ke,k as V,m as C,j as O,Z as qe}from"./vendor-db117ae3.js";import{b as se}from"./paths-4b3c6e7e.js";import{A as De,C as Ee,T as Ie}from"./Tag-fa691752.js";function ve(s,e,l){const t=s.slice();return t[4]=e[l],t}function je(s){let e,l,t;return{c(){e=_("img"),this.h()},l(a){e=h(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){u(e,"class","logo svelte-18en7q6"),pe(e.src,l=s[3])||u(e,"src",l),u(e,"alt",t=s[1].title+"'s Logo")},m(a,f){Q(a,e,f)},p:R,d(a){a&&d(e)}}}function Ve(s){let e,l;return e=new De({props:{active:s[1].active}}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ne(e,t,a),l=!0},p:R,i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Ce(s){let e,l;return e=new Ee({}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ne(e,t,a),l=!0},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Me(s){let e,l,t;return{c(){e=_("div"),l=Y("Since: "),t=Y(s[2]),this.h()},l(a){e=h(a,"DIV",{class:!0});var f=m(e);l=A(f,"Since: "),t=A(f,s[2]),f.forEach(d),this.h()},h(){u(e,"class","date svelte-18en7q6")},m(a,f){Q(a,e,f),o(e,l),o(e,t)},p:R,d(a){a&&d(e)}}}function we(s){let e,l,t=s[1].tags,a=[];for(let r=0;r<t.length;r+=1)a[r]=_e(ve(s,t,r));const f=r=>M(a[r],1,1,()=>{a[r]=null});return{c(){e=_("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=h(r,"DIV",{class:!0});var n=m(e);for(let i=0;i<a.length;i+=1)a[i].l(n);n.forEach(d),this.h()},h(){u(e,"class","tags svelte-18en7q6")},m(r,n){Q(r,e,n);for(let i=0;i<a.length;i+=1)a[i].m(e,null);l=!0},p(r,n){if(n&2){t=r[1].tags;let i;for(i=0;i<t.length;i+=1){const w=ve(r,t,i);a[i]?(a[i].p(w,n),D(a[i],1)):(a[i]=_e(w),a[i].c(),D(a[i],1),a[i].m(e,null))}for($e(),i=t.length;i<a.length;i+=1)f(i);be()}},i(r){if(!l){for(let n=0;n<t.length;n+=1)D(a[n]);l=!0}},o(r){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)M(a[n]);l=!1},d(r){r&&d(e),ke(a,r)}}}function _e(s){let e,l;return e=new Ie({props:{label:s[4]}}),{c(){re(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ne(e,t,a),l=!0},p:R,i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Pe(s){let e,l,t,a,f,r,n,i=s[0].metadata.title+"",w,U,E,X,x,P,B=s[0].metadata.description+"",H,ee,S,F=s[0].metadata.title+"",K,te,T,G=s[0].metadata.description+"",L,ae,I,le,W,b,k=s[3]&&je(s),g=s[1].active&&Ve(s),$=s[1].lookingForCollaborators&&Ce(),q=s[2]&&Me(s),p=s[1].tags&&s[1].tags.length&&we(s);return{c(){e=_("a"),l=_("div"),t=_("div"),k&&k.c(),a=V(),f=_("div"),r=_("div"),n=_("div"),w=Y(i),U=V(),E=_("div"),g&&g.c(),X=V(),$&&$.c(),x=V(),P=_("div"),H=Y(B),ee=V(),S=_("div"),K=Y(F),te=V(),T=_("div"),L=Y(G),ae=V(),I=_("div"),q&&q.c(),le=V(),p&&p.c(),this.h()},l(c){e=h(c,"A",{"sveltekit:prefetch":!0,href:!0});var v=m(e);l=h(v,"DIV",{class:!0});var j=m(l);t=h(j,"DIV",{class:!0});var Z=m(t);k&&k.l(Z),a=C(Z),f=h(Z,"DIV",{class:!0});var y=m(f);r=h(y,"DIV",{class:!0});var z=m(r);n=h(z,"DIV",{class:!0});var ce=m(n);w=A(ce,i),ce.forEach(d),U=C(z),E=h(z,"DIV",{class:!0});var J=m(E);g&&g.l(J),X=C(J),$&&$.l(J),J.forEach(d),z.forEach(d),x=C(y),P=h(y,"DIV",{class:!0});var fe=m(P);H=A(fe,B),fe.forEach(d),y.forEach(d),Z.forEach(d),ee=C(j),S=h(j,"DIV",{class:!0});var ue=m(S);K=A(ue,F),ue.forEach(d),te=C(j),T=h(j,"DIV",{class:!0});var de=m(T);L=A(de,G),de.forEach(d),ae=C(j),I=h(j,"DIV",{class:!0});var N=m(I);q&&q.l(N),le=C(N),p&&p.l(N),N.forEach(d),j.forEach(d),v.forEach(d),this.h()},h(){u(n,"class","title l-screen svelte-18en7q6"),u(E,"class","activity-tags svelte-18en7q6"),u(r,"class","title-line svelte-18en7q6"),u(P,"class","description l-screen svelte-18en7q6"),u(f,"class","content svelte-18en7q6"),u(t,"class","header svelte-18en7q6"),u(S,"class","title s-screen svelte-18en7q6"),u(T,"class","description s-screen svelte-18en7q6"),u(I,"class","footer svelte-18en7q6"),u(l,"class","container svelte-18en7q6"),u(e,"sveltekit:prefetch",""),u(e,"href",W=`${se}/projects/${s[0].slug}`)},m(c,v){Q(c,e,v),o(e,l),o(l,t),k&&k.m(t,null),o(t,a),o(t,f),o(f,r),o(r,n),o(n,w),o(r,U),o(r,E),g&&g.m(E,null),o(E,X),$&&$.m(E,null),o(f,x),o(f,P),o(P,H),o(l,ee),o(l,S),o(S,K),o(l,te),o(l,T),o(T,L),o(l,ae),o(l,I),q&&q.m(I,null),o(I,le),p&&p.m(I,null),b=!0},p(c,[v]){c[3]&&k.p(c,v),(!b||v&1)&&i!==(i=c[0].metadata.title+"")&&O(w,i),c[1].active&&g.p(c,v),(!b||v&1)&&B!==(B=c[0].metadata.description+"")&&O(H,B),(!b||v&1)&&F!==(F=c[0].metadata.title+"")&&O(K,F),(!b||v&1)&&G!==(G=c[0].metadata.description+"")&&O(L,G),c[2]&&q.p(c,v),c[1].tags&&c[1].tags.length&&p.p(c,v),(!b||v&1&&W!==(W=`${se}/projects/${c[0].slug}`))&&u(e,"href",W)},i(c){b||(D(g),D($),D(p),b=!0)},o(c){M(g),M($),M(p),b=!1},d(c){c&&d(e),k&&k.d(),g&&g.d(),$&&$.d(),q&&q.d(),p&&p.d()}}}function Se(s,e,l){let{project:t}=e,a=t.metadata,f=a.startDate&&qe(a.startDate).format("MMMM YYYY"),r=a.logo.startsWith("http")?a.logo:`${se}/images/projects/${a.logo}`;return s.$$set=n=>{"project"in n&&l(0,t=n.project)},[t,a,f,r]}class Be extends he{constructor(e){super();me(this,e,Se,Pe,ge,{project:0})}}export{Be as P};