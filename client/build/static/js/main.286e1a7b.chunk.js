(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),c=a(11),s=a(12),i=a(13),m=a(15),u=a(14),h=a(16);var d=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",null,"Google Book Search")))},v={bar:{marginBottom:15}};var k=function(e){return o.a.createElement("div",{className:"input-group input-group-sm",style:v.bar},o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e,{placeholder:"Search For a Book"})))},b=a(2),p=a.n(b),g={getBooks:function(e){return p.a.get("/api/search/"+e)},getSavedBooks:function(){return p.a.get("/api/books")},deleteBook:function(e){return p.a.delete("/api/books/"+e)},saveBook:function(e){return p.a.post("/api/books",e)}},E={img:{maxWidth:150,alignContent:"center"},container:{padding:10}};var f=function(e){return o.a.createElement("div",{style:E.container},o.a.createElement("div",{className:"row",key:e.key},o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("img",{src:e.image,alt:e.title,style:E.img})),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("h2",null,e.title),o.a.createElement("h6",null,"By: ",e.authors),o.a.createElement("h6",null,"About Book:"),o.a.createElement("p",null,e.description),o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Visit Google Books"))))},B={button:{marginBottom:15},container:{padding:10}},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],bookSearch:"",title:"",authors:[],description:"",image:"",link:""},a.searchBooks=function(e){g.getBooks(e).then(function(e){a.setState({books:e.data.items},function(){return console.log(a.state)})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(c.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.bookSearch)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks("The Secret History")}},{key:"handleSave",value:function(){var e=this;g.saveBook().then(function(t){return e.loadSavedBooks()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:B.container},o.a.createElement(d,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement(k,{name:"bookSearch",value:this.state.bookSearch,onChange:this.handleInputChange}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("button",{className:"btn btn-primary",onClick:this.handleFormSubmit,style:B.button},"Search Books"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("h3",null,"Search Results"),this.state.books.map(function(t){return o.a.createElement("div",null,o.a.createElement(f,{key:e.state._id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.smallThumbnail,link:t.volumeInfo.previewLink}),o.a.createElement("button",{className:"btn btn-danger",style:B.button,onClick:e.handleSave},"Save"))})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"This is where I want all the saved books to show"))))}}]),t}(n.Component);l.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.286e1a7b.chunk.js.map