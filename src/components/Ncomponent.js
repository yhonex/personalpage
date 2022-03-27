import React, {Component} from 'react';

class Ncomponent extends Component {
    
    render(){
        let auto = {
            modelo:'audi',
            partes :['carroceria','motor','llantas'],
            combustible :'gasolina'
        }
        return(
          <div>
              <h1>{'el modelo es:' +auto.modelo }</h1>
              <h3>{'El combustible que usa es: '+auto.combustible} </h3>
              <h2>las partes que usa son:</h2>
              {
                  auto.partes.map((partes,i) =>{
                      return(
                        
                        
                      <li key={i} >
                          
                          { partes}
                      </li>
                     
                      )
                  })
              }
             
            
          </div>
        )
    }
}

export default Ncomponent;