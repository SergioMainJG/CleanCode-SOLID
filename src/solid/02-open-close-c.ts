// import axios from 'axios';

export class HttpClient {

    // async get( url: string ){
    //     const { data } = await axios.get( url );
    //     return {data};
    // }   

    async get( url: string){

        const resp = await fetch( url );
        const data = await resp.json();

        return { data, status: resp.status};
    }

}