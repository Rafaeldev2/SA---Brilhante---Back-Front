/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package com.brilhante.brilhante;

import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.service.ClienteService;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 *
 * @author rafael_t_moraes
 */
public class CriarMassaTestes {

    private final Random random = new Random();
    
//    @Autowired
//    private ClienteServico cliSrv;

    private final String nomes[] = { "Alice","João","Maria","Pedro","Laura","Marcos","Ana","Gabriel","Bruno",
                              "Manuela","Gustavo","Carolina","Felipe","Juliana","Thiago","Camila","Marcelo",
                              "Vanessa","André","Fernanda","Victor","Gabriela","Daniel" };

    private final String sobrenomes[] = { "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Ferreira",
                                    "Rodrigues", "Almeida", "Carvalho", "Gomes", "Martins", "Lima", "Araújo",
                                    "Barbosa", "Ribeiro", "Alves","Cardoso", "Miranda", "Rocha", "Moraes", "Santos",
                                    "Cunha", "Moreira", "Dias", "Castro", "Nascimento", "Nunes", "Mendes", "Torres" };
    
    
    public static void main(String[] args) {       
        
        CriarMassaTestes geraDados = new CriarMassaTestes();
        ClienteService cliSrv = new ClienteService();
        List<String> clientes = geraDados.gerarNomes(100);
        List<String> cpfs = geraDados.gerarNumeroCPF(100);
        List<Long> idsCli = null;
        for(int i=0;i<10;i++){
            Cliente cli = new Cliente();
            cli.setCpf(cpfs.get(i));
            cli.setNome(clientes.get(i));
            cli.setEmail(clientes.get(i).replace(" ","_").toLowerCase() + "@gmail.com");
            cli.setSenha("senha" +cpfs.get(i).substring(0,3));
            idsCli.add(cliSrv.incluirCliente(cli));            
        }
        
        for(String nomeCli : clientes){
            System.out.println("Nome do Cliente: " + nomeCli);
            System.out.println("Email: " + nomeCli.replace(" ", "_").toLowerCase() +"@gmail.com");
        }
        System.out.println("Lista de CPFs: " + cpfs.toString());        
    }
    
    public String geraRandomico(){
        int numero = random.nextInt(999);
        String snumero = String.valueOf(numero);
        if(snumero.length() == 2){ snumero = "0" + snumero; }
        if(snumero.length() == 1){ snumero = "00" + snumero; }
        return snumero;
    }
    
    public List<String> gerarNumeroCPF(int qtd){
        
        List<String> listaCPF = new ArrayList();
        for(int i=0;i<=qtd;i++){
            listaCPF.add(geraRandomico() + geraRandomico() +
               geraRandomico() + geraRandomico().substring(1));
        }
        return listaCPF;
    }
    
    public List<String> gerarNomes(int qtd){
        
        List<String> listaNomes = new ArrayList();
        int idxnome, idxsobre = 0;
        for(int i=0;i<=qtd;i++){
            idxnome = random.nextInt(nomes.length-1);
            idxsobre = random.nextInt(sobrenomes.length -1);
            listaNomes.add( nomes[idxnome] + " " + sobrenomes[idxsobre]);
        }
            return listaNomes;
        }
    
}
