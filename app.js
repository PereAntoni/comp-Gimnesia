Vue.component("casella", {
    props: ["titol","contingut"],
    template: `
      <div>
        <label for="iText">Codi:</label>
        <input type="text" name="iText" v-model="contingut">
      </div>
    `,
  });

Vue.component("gimnesia-card", {
    props: ["codi","nom", "nivell","cientific","habitat"],
    template: `
      <div>
        <casella
            titol="codi"
            contingut= v-model="codi">
        </casella>
        <h2>{{ nom }}</h2>
            <label for="fcodi">Codi:</label>
            <input type="text" name="fcodi" v-model="codi">
            <input v-model="nivell">
            <input v-model="nom">
            <input v-model="cientific">
        
        
        <button v-on:click="mostrar(this)">mostrar</button>
      </div>
    `,
  });

new Vue({
    el: '#app-gimnesia',
    data: function(){
        return {
            cartes: [],
            dades:[]
        }
    },
    mounted() {
        console.log("Hi")
        axios
                .post('http://api.gimnesia.net/especie/read.php')
                .then(response => (this.dades = response.data))
        console.log(this.dades)        
    },
    watch: {
        dades(a,b){
            //a: nou valor
            //b: valor anterior
            console.log("hola")
            this.cartes=a["records"];
        }
    },
    methods: {
        guardar(e){
            e.descripcio.value = addslashes(e.descripcio.value)
            e.extra.value=addslashes(e.extra.value)
            e.nom.value=addslashes(e.nom.value)
            //alert(e.descripcio.value)
            let obj = JSON.stringify({"codi": e.codi.value, "nom": e.nom.value,"descripcio":e.descripcio.value,"imatge":e.imatge.value,"extra":e.extra.value});
            //llegim els grups que hi ha a l'esdeveniment
            axios
                .post('http://rondaulles.gimnesia.net/api/cara/update.php',obj)
            this.edita=false;  
            axios
                .post('http://rondaulles.gimnesia.net/api/cara/read.php')
                .then(response => (this.dades = response.data))
        },
        editar(e){
            //alert(e);
            this.edita=true;
            this.codi=e;
        },
        deseditar(e){
            this.edita=false;
        },
        
        triaSeccio: function(e){
            this.seccio=e;
            this.subSeccio='';
        },
        triaSubSeccio: function(e){
            this.subSeccio=e;
        },
        neteja: function(){
            alert(this.codi.value)
        }
    } 
})