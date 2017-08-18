package packege;

import java.util.Scanner;


public class Omain {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int[] vetor = new int[5];
		int valor = Integer.MAX_VALUE;
		for (int i = 0; i < vetor.length; i++) {
			System.out.println("insira o numero");
			vetor[i] = teclado.nextInt();
		}
		for (int i = 0; i < vetor.length; i++) {
			if(vetor[i] <= 0){
				if((0 - vetor[i])< valor){
					valor = vetor[i];
				}
			} else if ((0 + vetor[i]) < valor){
				valor = vetor[i];
			}	
			
		}
		for (int i = 0; i < vetor.length; i++) {
	
		}
		
	}
}
