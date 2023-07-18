const clientes = require("./clientes.json");
function filtrarApSemComp(clientes) {
    return clientes.filter((cliente) =>{
        return(
            cliente.endereco.apartamento && 
            cliente.endereco.hasOwnProperty("complemento")
            );
    });
}
const filtrados = filtrarApSemComp(clientes);
console.log(filtrados);