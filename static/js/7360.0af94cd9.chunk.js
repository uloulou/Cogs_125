"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[7360],{7360:(t,s,i)=>{i.d(s,{EmittersCircleShapeGenerator:()=>o});var e=i(3532),h=i(4409);const n=.25,r=2*Math.PI;class a extends e.B{constructor(t,s,i,e){super(t,s,i,e)}async init(){}randomPosition(){const t=this.size,s=this.fill,i=this.position,[e,a]=[.5*t.width,.5*t.height],o=((t,s)=>{const i=(0,h.G0)()*n,e=Math.atan(s/t*Math.tan(r*i)),a=(0,h.G0)();return a<n?e:a<.5?Math.PI-e:a<.75?Math.PI+e:-e})(e,a),c=(u=o,(l=e)*(p=a)/Math.sqrt((p*Math.cos(u))**2+(l*Math.sin(u))**2)),M=s?c*Math.sqrt((0,h.G0)()):c;var l,p,u;return{position:{x:i.x+M*Math.cos(o),y:i.y+M*Math.sin(o)}}}}class o{generate(t,s,i,e){return new a(t,s,i,e)}}},3532:(t,s,i)=>{i.d(s,{B:()=>e});class e{constructor(t,s,i,e){this.position=t,this.size=s,this.fill=i,this.options=e}resize(t,s){this.position=t,this.size=s}}}}]);
//# sourceMappingURL=7360.0af94cd9.chunk.js.map