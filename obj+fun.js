const cliente = {
    nome: "João",
    idade: 23,
    telefone: "51940028922",
    email: ["joaozingames@gmail.com", "contato.joao@gmail.com"],
    saldo: 200,
    pago: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        }
        else {
            this.saldo-= valor;
            console.log(`Pagamento realizado. Saldo atual ${this.saldo}`);
        }
    }
}
cliente.pago(120)