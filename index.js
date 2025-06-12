import express from 'express';
import {prismaclient} from '@prisma/client'

const app = express()

let port;
if(process.env.port){
    port = process.env.PORT

}else{
    port
}
app.listen(4000,() => {
    console.log ('App running on port 4000');
}

