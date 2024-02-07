let vm = new Vue({
  el:'#app',
  data:{    
    Ip_Json:[
      {id:0210,name:'IPhone1',price:6010,count:0},
      {id:1102,name:'IPhone6',price:2556,count:0},
      {id: 0123,name: 'Iphone 8',price: 5099,count: 0,}
    ]
  },
  methods: {
    totalPrice: function () {
      var totalP = 0;
      
      for (var i = 0, len = this.Ip_Json.length; i < len; i++) {
        totalP += this.Ip_Json[i].price * this.Ip_Json[i].count;
      }
      return totalP;
    }
  }
})