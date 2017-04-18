angular.module('app', []);
// declaro el mpdulo principal 
angular.module('app', []);
//creo un componente
angular.module('app').component('helloWorld', {
    //una buena practica es que el template sea un solo nodo es mas elegante
    //<div><h1>Hola CaraCola</h1><p>Que vuestros sueños mueran y se pudran con vosotros para que no infecten nuestro futuro</p></div>
    //que
    //<h1>Hola CaraCola</h1><p>Que vuestros sueños mueran y se pudran con vosotros para que no infecten nuestro futuro</p>
    //porque devuelvo un nodo el <div>, aunque tenga hijos
    template: '<h1>Hola CaraCola</h1>'
});

angular.module('app').component('goodbyeWorld', {
    template: '<div><h1>Adios CaraChocho</h1></div>'
});

angular.module('app').component('internalComponent', {
    template: '<span>soy internalComponent </span>'
});
angular.module('app').component('containerComponent', {
    template: '<div><h1>soy containerComponent y mi contenido es:</h1><internal-component></internal-component></div>'
});
angular.module('app').component('advertismentArduino', {
    templateUrl: 'templatesHTML/plantillatesturl.html'
});