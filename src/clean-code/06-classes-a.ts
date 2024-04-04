( () => {

    //!No Aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    class Person{

        constructor(  
            public name: string,
            public gender: Gender,
            public birthdate: Date,
            ){}

    }

    // const  newPerson = new Person( 'Fernando', 'M', new Date('1985-10-21'));
    // console.log({ newPerson });

    class User extends Person{
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredencials(){
            return true;
        }
    }

    class UserSettings extends User{

        constructor(
            public workingDirectory: string,
            public lasstOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( email, role, name, gender, birthdate);
        }

    }

    const userSettings = new UserSettings(
        '/usr/Home',
        '/home',
        'algo@algo.com',
        'admin',
        'Fernando',
        'M',
        new Date('1991-01-01'),
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredencials()});

})();