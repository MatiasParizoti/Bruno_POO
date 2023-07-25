package br.com.projeto;

import br.com.classes.Cliente;
import br.com.classes.Diaristas;

public class App {

	public static void main(String[] args) {
		
		Diaristas diarista = new Diaristas();
		
		
		diarista.nome = "João";
		diarista.telefone = "(11)9998-7609";
		diarista.endereco = "Av Cajamar N 111";
		diarista.chavePix = "123";
		
		
		System.out.println("Nome Diarista: " + diarista.nome);
		System.out.println("Telefone Diarista: " + diarista.telefone);
		System.out.println("Endereço Diarista: " + diarista.endereco);
		System.out.println("Chave Pix Diarista: " + diarista.chavePix);
		diarista.atender("Maria");
		
		System.out.println("===========================");
		Cliente cliente = new Cliente();
		
		cliente.nome = "Maria";
		cliente.telefone = "(11)9008-7609";
		cliente.endereco = "Av Jetulio Vargas";
		cliente.saldo = 100.0;
		
		System.out.println("Nome Cliente: " + cliente.nome);
		System.out.println("Telefone Cliente: " + cliente.telefone);
		System.out.println("Endereço Cliente: " + cliente.endereco);
		System.out.println("Saldo Cliente: " + cliente.saldo);
		
		

	}

}
