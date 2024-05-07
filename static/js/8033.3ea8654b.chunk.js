"use strict";(self.webpackChunkfireworks=self.webpackChunkfireworks||[]).push([[8033],{8033:(i,t,s)=>{s.d(t,{EmitterInstance:()=>r});var e=s(4409),o=s(3381),n=s(7297);function a(i,t){i.color?i.color.value=t:i.color={value:t}}class r{constructor(i,t,s,n,a){var r,h,l,c,p,d,u,_,v,m=this;this.emitters=t,this.container=s,this._destroy=()=>{var i,t;null===(i=this._mutationObserver)||void 0===i||i.disconnect(),this._mutationObserver=void 0,null===(t=this._resizeObserver)||void 0===t||t.disconnect(),this._resizeObserver=void 0,this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._prepareToDie=()=>{var i;if(this._paused)return;const t=void 0!==(null===(i=this.options.life)||void 0===i?void 0:i.duration)?(0,e.VG)(this.options.life.duration):void 0;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&void 0!==t&&t>0&&(this._duration=t*e.Xu)},this._setColorAnimation=function(i,t,s){var o;let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const a=m.container;if(!i.enable)return t;const r=(0,e.BH)(i.offset),h=(0,e.VG)(m.options.rate.delay)*e.Xu/a.retina.reduceFactor;return(t+(0,e.VG)(null!==(o=i.speed)&&void 0!==o?o:0)*a.fpsLimit/h+r*n)%s},this._engine=i,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=a,n instanceof o.Emitter?this.options=n:(this.options=new o.Emitter,this.options.load(n)),this._spawnDelay=(0,e.VG)(null!==(r=this.options.life.delay)&&void 0!==r?r:0)*e.Xu/this.container.retina.reduceFactor,this.position=null!==(h=this._initialPosition)&&void 0!==h?h:this._calcPosition(),this.name=this.options.name,this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let y=(0,e.zw)({},this.options.particles);if(null!==(l=y)&&void 0!==l||(y={}),null!==(p=(c=y).move)&&void 0!==p||(c.move={}),null!==(u=(d=y.move).direction)&&void 0!==u||(d.direction=this.options.direction),this.options.spawnColor&&(this.spawnColor=(0,e.R5)(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=y,this._size=this._calcSize(),this.size=(0,e.YC)(this._size,this.container.canvas.size),this._lifeCount=null!==(_=this.options.life.count)&&void 0!==_?_:-1,this._immortal=this._lifeCount<=0,this.options.domId){const i=document.getElementById(this.options.domId);i&&(this._mutationObserver=new MutationObserver((()=>{this.resize()})),this._resizeObserver=new ResizeObserver((()=>{this.resize()})),this._mutationObserver.observe(i,{attributes:!0,attributeFilter:["style","width","height"]}),this._resizeObserver.observe(i))}const f=this.options.shape,w=null===(v=this._engine.emitterShapeManager)||void 0===v?void 0:v.getShapeGenerator(f.type);w&&(this._shape=w.generate(this.position,this.size,this.fill,f.options)),this._engine.dispatchEvent("emitterCreated",{container:s,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}async init(){var i;await(null===(i=this._shape)||void 0===i?void 0:i.init())}pause(){this._paused||delete this._emitDelay}play(){var i;if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(null!==(i=this._spawnDelay)&&void 0!==i?i:0))){if(void 0===this._emitDelay){const i=(0,e.VG)(this.options.rate.delay);this._emitDelay=i*e.Xu/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){var i;const t=this._initialPosition;this.position=t&&(0,e.Tj)(t,this.container.canvas.size,e.Mi.origin)?t:this._calcPosition(),this._size=this._calcSize(),this.size=(0,e.YC)(this._size,this.container.canvas.size),null===(i=this._shape)||void 0===i||i.resize(this.position,this.size)}update(i){if(!this._paused){var t,s;if(this._firstSpawn)this._firstSpawn=!1,this._currentSpawnDelay=null!==(t=this._spawnDelay)&&void 0!==t?t:0,this._currentEmitDelay=null!==(s=this._emitDelay)&&void 0!==s?s:0;if(this._startParticlesAdded||(this._startParticlesAdded=!0,this._emitParticles(this.options.startCount)),void 0!==this._duration&&(this._currentDuration+=i.value,this._currentDuration>=this._duration)){var o,n;if(this.pause(),void 0!==this._spawnDelay&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal)this.position=this._calcPosition(),null===(o=this._shape)||void 0===o||o.resize(this.position,this.size),this._spawnDelay=(0,e.VG)(null!==(n=this.options.life.delay)&&void 0!==n?n:0)*e.Xu/this.container.retina.reduceFactor;else this._destroy();this._currentDuration-=this._duration,delete this._duration}void 0!==this._spawnDelay&&(this._currentSpawnDelay+=i.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),void 0!==this._emitDelay&&(this._currentEmitDelay+=i.value,this._currentEmitDelay>=this._emitDelay&&(this._emit(),this._currentEmitDelay-=this._emitDelay))}}_calcPosition(){if(this.options.domId){const i=document.getElementById(this.options.domId);if(i){const t=i.getBoundingClientRect(),s=this.container.retina.pixelRatio;return{x:(t.x+.5*t.width)*s,y:(t.y+.5*t.height)*s}}}return(0,e.l1)({size:this.container.canvas.size,position:this.options.position})}_calcSize(){var i;const t=this.container;if(this.options.domId){const i=document.getElementById(this.options.domId);if(i){const s=i.getBoundingClientRect();return{width:s.width*t.retina.pixelRatio,height:s.height*t.retina.pixelRatio,mode:"precise"}}}return null!==(i=this.options.size)&&void 0!==i?i:(()=>{const i=new n.G;return i.load({height:0,mode:"percent",width:0}),i})()}_emit(){if(this._paused)return;const i=(0,e.VG)(this.options.rate.quantity);this._emitParticles(i)}_emitParticles(i){const t=(0,e.TA)(this._particlesOptions);for(let o=0;o<i;o++){const i=(0,e.zw)({},t);if(this.spawnColor){var s;const t=null===(s=this.options.spawnColor)||void 0===s?void 0:s.animation;if(t){const i={h:360,s:100,l:100},s=3.6;this.spawnColor.h=this._setColorAnimation(t.h,this.spawnColor.h,i.h,s),this.spawnColor.s=this._setColorAnimation(t.s,this.spawnColor.s,i.s),this.spawnColor.l=this._setColorAnimation(t.l,this.spawnColor.l,i.l)}a(i,this.spawnColor)}const o=this.options.shape;let n=this.position;if(this._shape){const t=this._shape.randomPosition();if(t){n=t.position;const s=o.replace;s.color&&t.color&&a(i,t.color),s.opacity&&(i.opacity?i.opacity.value=t.opacity:i.opacity={value:t.opacity})}else n=null}n&&this.container.particles.addParticle(n,i)}}}}}]);
//# sourceMappingURL=8033.3ea8654b.chunk.js.map