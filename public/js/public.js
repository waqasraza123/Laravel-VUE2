new Vue({
   el: "#app",
    data: {
       users: []
    },
    mounted(){
       axios.get('/sample-data').then( response => this.users = response.data );
    }
});
