//https://github.com/fastify/fastify-formbody     DA installare

import * as fastify from 'fastify';
import * as cors  from 'fastify-cors'
import * as swagger from 'fastify-swagger';

const app = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true
  })

app.register(cors)
app.register(swagger, {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Gestione parco',
            description: 'Documentazione API per gestione parco',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://www.tecnicosuperiorekennedy.it',
            description: 'ITS'
        },
        host: 'localhost:5000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
});

app.get("/listparco",{ schema: {
    description: 'get list parco',
    
    body: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        nome: {
            type: 'string',
          },
        localita: {
            type: 'string',
          },
        tipo: {
            type: 'string',
          },
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    },
    security: [
      {
        "apiKey": []
      }
    ]
  }},(request,reply)=>{
   
})

app.get("/PersonaInCoda",{
     schema: {
        description: 'get lista persona in cosa',
        
        body: {
          type: 'object',
        
        },
        response: {
          201: {
            description: 'Successful response',
            type: 'object',
            properties: {
              numero: { type: 'integer' }
            }
          }
        },
        security: [
          {
            "apiKey": []
          }
        ]
      }
},(request,reply)=>{
    
})

app.get("/NumeroPersonaParco/:id",{
    schema: {
       description: 'get numero di persona in un parco usanda il suo id-parco',
       params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'id del parco'
          }
        }
      },
    
       response: {
         201: {
           description: 'Successful response',
           type: 'object',
           properties: {
             id:{
                 type:'string'
             },
             nome:{
                type:'string'
            },
            località:{
                type:'string'
            },
             numero: { type: 'integer' }
           }
         }
       },
       security: [
         {
           "apiKey": []
         }
       ]
     }
},(request,reply)=>{
   
})


app.get("/Popolarita/:id",{
    schema: {
       description: 'get il orario e il giorno di popolarita di ogni parco',
       params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'id del parco'
          }
        }
      },
    
       response: {
         201: {
           description: 'Successful response',
           type: 'object',
           properties: {
             id:{
                 type:'string'
             },
             nome:{
                type:'string'
            },
            località:{
                type:'string'
            },
             numero: { type: 'integer' },
             numeroDiPersonaAnnuale: { type: 'integer' },
             stagione: { type: 'string' }
           }
         }
       },
       security: [
         {
           "apiKey": []
         }
       ]
     }
},(request,reply)=>{
   
})

app.get("/Parco/:id",{
    schema: {
       description: 'get orario di apertura stato e chiusura di ogni parco',
       params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'id del parco'
          }
        }
      },
    
       response: {
         201: {
           description: 'Successful response',
           type: 'object',
           properties: {
             id:{
                 type:'string'
             },
             nome:{
                type:'string'
            },
            località:{
                type:'string'
            },
             numero: { type: 'integer' },
             chiusura: { type: 'number' },
             apertura: { type: 'number' },
             stato: { type: 'string',
                        description:' 1 se ancora aperto 0 se chiuso' },
           }
         }
       },
       security: [
         {
           "apiKey": []
         }
       ]
     }
},(request,reply)=>{
   
})
app.post("/Parco/",{
    schema: {
       description: ' Per aggiungere un nuovo parco',
       params: {
        type: 'object',
        properties: {
          
        }
      },
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          nome: {
              type: 'string',
            },
          localita: {
              type: 'string',
            },
          tipo: {
              type: 'string',
            },
        }
      },
    
       response: {
         201: {
           description: 'Successful response',
           type: 'object',
           properties: {
             res:{
                 type:'string',
                 status:'integer',
                 description:"1 se aggiunto altrimenti 0"
             },
            
            
             
           }
         }
       },
       security: [
         {
           "apiKey": []
         }
       ]
     }
},(request,reply)=>{
   
})
app.put("/numeroInCoda/:id",{
    schema: {
       description: ' Aggiurnare il numero di persona in cosa a un attrazione',
       params: {
        type: 'object',
        properties: {
          id:{
              type:'string'
          }
        }
      },
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          nome: {
              type: 'string',
            },
          numero:{
              tupe:'integer',
          }
        }
      },
    
       response: {
         201: {
           description: 'Successful response',
           type: 'object',
           properties: {
             res:{
                 type:'string',
                 status:'integer',
                 description:"1 se aggiunto altrimenti 0"
             },
            
            
             
           }
         }
       },
       security: [
         {
           "apiKey": []
         }
       ]
     }
},(request,reply)=>{
   
})
app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });