( () => {

    //!No Aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person{
        
        public  birthdate: Date;
        public  gender: Gender;
        public  name: string;

        constructor({ name, gender, birthdate}: PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }

    }

    // const  newPerson = new Person( 'Fernando', 'M', new Date('1985-10-21'));
    // console.log({ newPerson });

    interface UserProps{
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person{
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ 
            email, 
            role, 
            birthdate, 
            gender, 
            name 
        }: UserProps){
            super({ name, gender, birthdate });
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredencials(){
            return true;
        }
    }

interface UserSettingsProps{
    birthdate       : Date;
    email           : string;
    gender          : Gender;
    lasstOpenFolder : string;
    name            : string;
    role            : string;
    workingDirectory: string;
}


    class UserSettings extends User{
        public lasstOpenFolder: string;
        public workingDirectory: string;
        // 

        constructor({ 
            birthdate,
            email,
            gender,
            lasstOpenFolder,
            name,
            role,
            workingDirectory,
            }: UserSettingsProps){
            super({ email, role, name, gender, birthdate });
            this.lasstOpenFolder = lasstOpenFolder;
            this.workingDirectory = workingDirectory;
        }
// 
    }
// 
    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-12'),
        email: 'algo@algo.com',
        gender: 'M',
        lasstOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });
// 
    console.log({ userSettings, areCredentialsValid: userSettings.checkCredencials()});

})();