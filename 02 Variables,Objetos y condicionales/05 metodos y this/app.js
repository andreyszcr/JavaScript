var perspons = { 
    name: 'John',
    age: 21,
    imprmirNombre: function()
        {
            // usamos el this de la referencia de windows
            console.log(this),
            console.log(this.name);
        },
    direccion: {
        pais: 'Mexico',
        obtenerPais: function(){
            var self = this;
            console.log(self);
            console.log(self.pais);
        }
    }
};
perspons.imprmirNombre();
perspons.direccion.obtenerPais();