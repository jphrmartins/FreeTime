package br.fundatec.lpi.codin;

public class ConversorMorse {

	private String mensagem;

	public ConversorMorse(String mensagem) {
		this.mensagem = mensagem.toUpperCase();
	}

	public String getMensagem() {
		if (!this.mensagem.contains("/")) {
			this.mensagem = transformarMorse();
			return mensagem;
		}
		return mensagem;
	}

	private String transformarMorse() {
		String mensagemConvertida = "";
		for (int loop = 0; loop < this.mensagem.length(); loop++) {
			char letter = this.mensagem.charAt(loop);
			switch (letter) {
			case 'A':
				mensagemConvertida += ".-/";
				break;
			case 'B':
				mensagemConvertida += "-.../";
				break;
			case 'C':
				mensagemConvertida += "-.-./";
				break;
			case 'D':
				mensagemConvertida += "-../";
				break;
			case 'E':
				mensagemConvertida += "./";
				break;
			case 'F':
				mensagemConvertida += "..-./";
				break;
			case 'G':
				mensagemConvertida += "--./";
				break;
			case 'H':
				mensagemConvertida += "..../";
				break;
			case 'I':
				mensagemConvertida += "../";
				break;
			case 'J':
				mensagemConvertida += ".---/";
				break;
			case 'K':
				mensagemConvertida += "-.-/";
				break;
			case 'L':
				mensagemConvertida += ".-../";
				break;
			case 'M':
				mensagemConvertida += "--/";
				break;
			case 'N':
				mensagemConvertida += "-./";
				break;
			case 'O':
				mensagemConvertida += "---/";
				break;
			case 'P':
				mensagemConvertida += ".--./";
				break;
			case 'Q':
				mensagemConvertida += "--.-/";
				break;
			case 'R':
				mensagemConvertida += ".-./";
				break;
			case 'S':
				mensagemConvertida += ".../";
				break;
			case 'T':
				mensagemConvertida += "-/";
				break;
			case 'U':
				mensagemConvertida += "..-/";
				break;
			case 'V':
				mensagemConvertida += "...-/";
				break;
			case 'W':
				mensagemConvertida += ".--/";
				break;
			case 'X':
				mensagemConvertida += "-..-/";
				break;
			case 'Y':
				mensagemConvertida += "-.--/";
				break;
			case 'Z':
				mensagemConvertida += "--../";
				break;
			case '1':
				mensagemConvertida += ".----/";
				break;
			case '2':
				mensagemConvertida += "..---/";
				break;
			case '3':
				mensagemConvertida += "...--/";
				break;
			case '4':
				mensagemConvertida += "....-/";
				break;
			case '5':
				mensagemConvertida += "...../";
				break;
			case '6':
				mensagemConvertida += "-..../";
				break;
			case '7':
				mensagemConvertida += "--.../";
				break;
			case '8':
				mensagemConvertida += "---../";
				break;
			case '9':
				mensagemConvertida += "----./";
				break;
			case '0':
				mensagemConvertida += "-----/";
				break;
			default:
				mensagemConvertida += " /";
				break;
			}

		}
		return mensagemConvertida;
	}

}
