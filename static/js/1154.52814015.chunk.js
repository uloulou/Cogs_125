"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[1154],{1154:(i,t,o)=>{o.d(t,{TrailMaker:()=>a});var s=o(4409),e=o(5922);const n="trail";class a extends s.sJ{constructor(i){super(i),this._delay=0}clear(){}init(){}interact(i){var t,o,e,n;const a=this.container,{interactivity:r}=a;if(!a.retina.reduceFactor)return;const l=a.actualOptions.interactivity.modes.trail;if(!l)return;const c=l.delay*s.Xu/this.container.retina.reduceFactor;if(this._delay<c&&(this._delay+=i.value),this._delay<c)return;const d=!(l.pauseOnStop&&(r.mouse.position===this._lastPosition||(null===(t=r.mouse.position)||void 0===t?void 0:t.x)===(null===(o=this._lastPosition)||void 0===o?void 0:o.x)&&(null===(e=r.mouse.position)||void 0===e?void 0:e.y)===(null===(n=this._lastPosition)||void 0===n?void 0:n.y))),u=a.interactivity.mouse.position;u?this._lastPosition={...u}:delete this._lastPosition,d&&a.particles.push(l.quantity,a.interactivity.mouse,l.particles),this._delay-=c}isEnabled(i){var t;const o=this.container,e=o.actualOptions,a=o.interactivity.mouse,r=(null!==(t=null===i||void 0===i?void 0:i.interactivity)&&void 0!==t?t:e.interactivity).events;return a.clicking&&a.inside&&!!a.position&&(0,s.hn)(n,r.onClick.mode)||a.inside&&!!a.position&&(0,s.hn)(n,r.onHover.mode)}loadModeOptions(i){i.trail||(i.trail=new e.X);for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];for(const e of o)i.trail.load(null===e||void 0===e?void 0:e.trail)}reset(){}}}}]);
//# sourceMappingURL=1154.52814015.chunk.js.map