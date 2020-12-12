new Vue({
    el: '#app',
    data: {
       books: [{
        title: '',
        author: '',
        publisher: '',
        amazone: ''
    }],
      newtitle:""
    },


  methods:{
  
  newkitty: function (){
  return this.books.push({title:this.newtitle})
 }
    }
  }); 
 

