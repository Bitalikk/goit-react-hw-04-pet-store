(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{31:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return l});var n=a(35),r=a.n(n);r.a.defaults.baseURL="http://localhost:4042";var c=function(){return r.a.get("/pets").then(function(e){return e.data})},l=function(e){return r.a.get("/pets/".concat(e)).then(function(e){return e.data})}},47:function(e,t,a){e.exports={container:"Pet_container__3iCl6",image:"Pet_image__YaXLY",imageDesc:"Pet_imageDesc__2lvqw"}},65:function(e,t,a){e.exports={wrapper:"PetPage_wrapper__o57Wv",btn:"PetPage_btn__U1fXC"}},72:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),c=a(44),l=a(34),u=a(45),o=a(0),i=a.n(o),s=a(47),m=a.n(s),p=function(e){var t=e.age,a=e.breed,n=e.color,r=e.description,c=e.gender,l=e.image,u=e.name;return i.a.createElement("div",{className:m.a.container},i.a.createElement("div",{className:m.a.imageDesc},i.a.createElement("img",{src:l,alt:u,className:m.a.image}),i.a.createElement("div",{className:m.a.things},i.a.createElement("p",null,i.a.createElement("b",null,"Age:")," ",t),i.a.createElement("p",null,i.a.createElement("b",null,"Gender:")," ",c),i.a.createElement("p",null,i.a.createElement("b",null,"Color:")," ",n),i.a.createElement("p",null,i.a.createElement("b",null,"Breed:")," ",a))),i.a.createElement("p",null,r))},d=a(31),f=a(65),h=a.n(f),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(u)))).state={pet:null},a.handleGoBack=function(){var e=a.props,t=e.history,n=e.location;return n.state?t.push(n.state.from):t.push("/pets")},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;d.a(t).then(function(t){return e.setState({pet:t})})}},{key:"render",value:function(){var e=this.state.pet;return i.a.createElement("div",{className:h.a.wrapper},i.a.createElement("button",{type:"button",className:h.a.btn,onClick:this.handleGoBack},"\u2baa Return"),e&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"All about ",e.name),e&&i.a.createElement(p,e)))}}]),t}(o.Component);t.default=b}}]);
//# sourceMappingURL=pet-page.aaab4968.chunk.js.map