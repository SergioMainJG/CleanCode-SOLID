(() => {

    //?Aplicando el principio de responsabilidad única
    //!Priorizar la composición frente a la herencia
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }

    }

    // const  newPerson = new Person( 'Fernando', 'M', new Date('1985-10-21'));
    // console.log({ newPerson });

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
        }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredencials() {
            return true;
        }
    }

    interface SettingsProps {
        lasstOpenFolder: string;
        workingDirectory: string;
    }


    class Settings {
        public lasstOpenFolder: string;
        public workingDirectory: string;
        // 

        constructor({
            lasstOpenFolder,
            workingDirectory,
        }: SettingsProps) {
            this.lasstOpenFolder = lasstOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings{
        public person  : Person;
        public user    : User;
        public settings: Settings;

        constructor({ 
            name, gender,birthdate,
            email, role,
            lasstOpenFolder, workingDirectory    
        }:UserSettingsProps ){
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lasstOpenFolder, workingDirectory });
        }

    }

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
    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredencials() });

})();