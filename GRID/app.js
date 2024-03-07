/*createApp({
    components: {
      DemoGrid
    },
    data: () => ({
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    })
  }).mount('#app')
*/
  new Vue({
    el: '#app',
    data: function(){
        return{
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridData: [
              { name: 'Chuck Norris', power: Infinity },
              { name: 'Bruce Lee', power: 9000 },
              { name: 'Jackie Chan', power: 7000 },
              { name: 'Jet Li', power: 8000 }
            ] 
        }
    }


  })