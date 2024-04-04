(() => {
    const registerTemperaturesInCelsius: number[] = [33.6, 12.34];

    const serverIpAddress: string = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails: string[] = users.map( user => user.email );

    const canJumping: boolean= false;
    const canRunning: boolean = true;
    const hasItems: boolean = true;
    const isLoading: boolean = false;

    const initialTime: number = new Date().getTime();
    const endTime: number  = new Date().getTime() - initialTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( sidesSquare: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();
