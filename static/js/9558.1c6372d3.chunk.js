"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[9558],{9558:(e,t,a)=>{a.d(t,{ParallaxMover:()=>n});var i=a(4409);class n{init(){}isEnabled(e){return!(0,i.B9)()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const t=e.container,a=t.actualOptions.interactivity.events.onHover.parallax;if((0,i.B9)()||!a.enable)return;const n=a.force,r=t.interactivity.mouse.position;if(!r)return;const s=t.canvas.size,o=.5*s.width,c=.5*s.height,l=a.smooth,u=e.getRadius()/n,v=(r.x-o)*u,f=(r.y-c)*u,{offset:p}=e;p.x+=(v-p.x)/l,p.y+=(f-p.y)/l}}}}]);
//# sourceMappingURL=9558.1c6372d3.chunk.js.map