(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),i=(a(21),a(5)),o=a.n(i),s=a(12),m=a(2),u=(a(23),a(24),a(30)),d=function(e){return e.ingredients.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"recipe-detail"},c.a.createElement("p",{key:Object(u.a)()},e.text)))}))},p=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=(a[0],a[1],Object(n.useState)(!1)),l=Object(m.a)(r,2),i=l[0],o=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-3 py-3"},c.a.createElement("div",{className:"card",style:{width:"18rem"}},c.a.createElement("img",{src:e.img,className:"card-img-top img-fluid",alt:"foo-img"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.desc.toFixed(2)),c.a.createElement("button",{className:"btn btn-sm btn-primary ing-btn",onClick:function(){return o(!i)}},"Ingredients"),i&&c.a.createElement(d,{ingredients:e.ingredients})))))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{id:"footer"},c.a.createElement("div",{className:"footerStyle"},c.a.createElement("p",null,"Food Recipe Application | Khan"))))},E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),i=Object(m.a)(l,2),d=i[0],E=i[1],b=Object(n.useState)("Banana"),g=Object(m.a)(b,2),h=g[0],v=g[1];Object(n.useEffect)((function(){y()}),[h]);var y=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("764ddc86","&app_key=").concat("293a7f6dad1a3d1bc0092eabe644a668"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"food-heading text-center py-5"},c.a.createElement("h1",null,"Food Recipe")),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(d)}},c.a.createElement("div",{className:"input-section"},c.a.createElement("input",{type:"text",placeholder:"What do you want to eat?",value:d,onChange:function(e){E(e.target.value)},className:"py-2 pl-2 w-25"}),c.a.createElement("button",{className:"btn btn-outline-warning py-2 ml-2"},"Search"))),c.a.createElement("div",{className:"intro-head text-center"},c.a.createElement("h1",null,"What are you making today?")),c.a.createElement("div",{className:"content_ max-width"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 content"},a.map((function(e,t){return c.a.createElement(p,{key:Object(u.a)(),id:e[t],url:e.recipe.url,title:e.recipe.label,desc:e.recipe.calories,ingredients:e.recipe.ingredients,img:e.recipe.image})}))))),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(14);l.a.render(c.a.createElement(b.a,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b572378c.chunk.js.map