(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getCastMovieById( id: string ) {
        console.log({ id });
    }

    function getActorBiographyById( id: string ) {
        console.log({ id });
    }

    interface Movie{
        title:       string; 
        description: string; 
        rating:      number; 
        cast:        string[]; 
    }
    
    function createMovie({
        title, 
        description, 
        rating, 
        cast
    }: Movie ) 
        {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(
         fullName: string, 
         birthdate: Date 
         ): boolean
         {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    //? Continuación
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {        
        if ( isDead ) return 1500; 
        if ( isSeparated ) return 2500;
        return ( isRetired ) ? 3000 : 4000;
    }
        
        
})();
