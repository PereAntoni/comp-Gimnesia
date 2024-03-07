Vue.component("movie-card", {
    props: ["image", "title"],
    template: `
      <div>
        <img width="100" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{ title }}</h2>  
      </div>
    `,
  });

  Vue.component("gimnesia-card", {
    props: ["nom", "nivell","habitat"],
    template: `
      <div>
        <input v-model="nivell">
        <input v-model="nom">
        <img width="100" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{ index }}:{{ nom }}-{{ nivell }}</h2>
        <button v-on:click="mostrar(this)">mostrar</button>
      </div>
    `,
  });

  Vue.component("boto", {
    props: [],
    template: `
      <div>
      <button type="button" class="btn btn-primary btn-lg" v-on:click="bota()">Cancelar</button>
      </div>
    `,
  });

  

  new Vue({
    el: "#app",
    data: {
        cartes:[
            {
                nom:"xorig",
                nivell: "2",
                habitat: [1,2]

            }
        ],
        movies: [
          {
            title: "Regreso al Futuro",
            image:
              "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg",
          },
          {
            title: "Matrix",
            image:
              "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle",
          },
          {
            title: "Interestellar",
            image:
              "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
          },
        ],
        },
    mounted() {
            axios
                .post('http://api.gimnesia.net/especie/read.php')
                .then(response => (this.dades = response.records.data))
        },
    methods: {
        mostrar(e){
            alert(this.cartes)

        }
    }
});
  