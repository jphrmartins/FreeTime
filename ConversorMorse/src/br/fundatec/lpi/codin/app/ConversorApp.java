package br.fundatec.lpi.codin.app;

import java.util.Scanner;

import br.fundatec.lpi.codin.ConversorMorse;

public class ConversorApp {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		System.out.print("Insira a mensagem para ser convertida: ");
		ConversorMorse conv = new ConversorMorse(teclado.nextLine());
		System.out.println(conv.getMensagem());
		
	}

}
