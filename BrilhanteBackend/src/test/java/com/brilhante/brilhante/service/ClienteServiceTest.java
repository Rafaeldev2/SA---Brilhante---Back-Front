//package com.brilhante.brilhante.service;
//
//import com.brilhante.brilhante.entity.Cliente;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import java.util.Random;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.AfterAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.Test;
//import static org.junit.jupiter.api.Assertions.*;
//import org.junit.jupiter.api.Disabled;
//import org.junit.jupiter.api.Order;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//@SpringBootTest
//public class ClienteServiceTest {
//    
//    @Autowired
//    private ClienteService srv;
//    
//    private final Random random = new Random();
//    
//    private final String nomes[] = { "Alice","João","Maria","Pedro","Laura","Marcos","Ana","Gabriel","Bruno",
//                              "Manuela","Gustavo","Carolina","Felipe","Juliana","Thiago","Camila","Marcelo",
//                              "Vanessa","André","Fernanda","Victor","Gabriela","Daniel" };
//
//    private final String sobrenomes[] = { "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Ferreira",
//                                    "Rodrigues", "Almeida", "Carvalho", "Gomes", "Martins", "Lima", "Araújo",
//                                    "Barbosa", "Ribeiro", "Alves","Cardoso", "Miranda", "Rocha", "Moraes", "Santos",
//                                    "Cunha", "Moreira", "Dias", "Castro", "Nascimento", "Nunes", "Mendes", "Torres" };
//    
//    public ClienteServiceTest() {
//    }
//    
//    @BeforeAll
//    public static void setUpClass() {
//    }
//    
//    @AfterAll
//    public static void tearDownClass() {
//    }
//    
//    @BeforeEach
//    public void setUp() {
//    }
//    
//    @AfterEach
//    public void tearDown() {
//    }
//    public String geraRandomico(){
//        int numero = random.nextInt(999);
//        String snumero = String.valueOf(numero);
//        if(snumero.length() == 2){ snumero = "0" + snumero; }
//        if(snumero.length() == 1){ snumero = "00" + snumero; }
//        return snumero;
//    }
//    
//    public List<String> gerarNumeroCPF(int qtd){
//        
//        List<String> listaCPF = new ArrayList();
//        for(int i=0;i<=qtd;i++){
//            listaCPF.add(geraRandomico() + geraRandomico() +
//               geraRandomico() + geraRandomico().substring(1));
//        }
//        return listaCPF;
//    }
//    
//    public List<String> gerarNomes(int qtd){
//        
//        List<String> listaNomes = new ArrayList();
//        int idxnome, idxsobre = 0;
//        for(int i=0;i<=qtd;i++){
//            idxnome = random.nextInt(nomes.length-1);
//            idxsobre = random.nextInt(sobrenomes.length -1);
//            listaNomes.add( nomes[idxnome] + " " + sobrenomes[idxsobre]);
//        }
//            return listaNomes;
//        }
//
//    /**
//     * Test of incluirCliente method, of class ClienteService.
//     */
//    
//    @Disabled
//    @Test
//    @Order(1)
//    public void incluirMassaClientes(){
//        
//        System.out.println("#0 Gerando massa de dados de Clientes para testes...");
//        List<String> listaCli = gerarNomes(1000);
//        List<String> listaCPF = gerarNumeroCPF(1000);
//        List<Long> listaIds = new ArrayList<>();
//        for(int i=0;i<listaCli.size();i++){
//            Cliente cli = new Cliente();
//            cli.setCpf(listaCPF.get(i));
//            cli.setNome(listaCli.get(i));
//            cli.setEmail(listaCli.get(i).replace(" ","_") + "@gmail.com");
//            listaIds.add( srv.incluirCliente(cli) );
//        }
//        assertTrue(!listaIds.isEmpty(), "#0 ERRO: Não foram gerados Clientes, verifique! ");
//    }
//    
//
////    @Test
////    @Order(2)
////    public void testIncluirCliente() {
////        System.out.println("incluirCliente");
////        Cliente cliente = new Cliente();
////        cliente.setCpf("901.888.512-91");
////        cliente.setEmail("zezinho@gmail.com");
////        cliente.setNome("José da Silva");
////        Long id = srv.incluirCliente(cliente);
////        Long expResult = null;
////        assertEquals(expResult, id);
////    }
////    
////    @Test
////    @Order(3)
////    public void testIncluirClienteSemCPF() {
////        System.out.println("incluirCliente");
////        Cliente cliente = new Cliente();
////        cliente.setEmail("zezinho@gmail.com");
////        cliente.setNome("José da Silva");
////        Long id = srv.incluirCliente(cliente);
////        Long expResult = null;
////        assertEquals(expResult, id);
////    }
////    
////    @Test
////    @Order(4)
////    public void testIncluirClienteCPF12Num() {
////        System.out.println("incluirCliente");
////        Cliente cliente = new Cliente();
////        cliente.setCpf("901.888.512-912");
////        cliente.setEmail("zezinho@gmail.com");
////        cliente.setNome("José da Silva");
////        Long id = srv.incluirCliente(cliente);
////        Long expResult = null;
////        assertEquals(expResult, id);
////    }
////    
////    @Test
////    @Order(5)
////    public void testIncluirClienteCPF10NumouMenos() {
////        System.out.println("incluirCliente");
////        Cliente cliente = new Cliente();
////        cliente.setCpf("901.888.512");
////        cliente.setEmail("zezinho@gmail.com");
////        cliente.setNome("José da Silva");
////        Long id = srv.incluirCliente(cliente);
////        Long expResult = null;
////        assertEquals(expResult, id);
////    };
////    
////    /**
////     * Test of excluirCliente method, of class ClienteService.
////     */
////    @Test
////    @Order(6)
////    public void testExcluirCliente() {
////        System.out.println("excluirCliente");
////        Long idCliente =52L;
////        Boolean expResult = true;
////        Boolean result = srv.excluirCliente(idCliente);
////        assertEquals(expResult, result);
////    }
////
////    /**
////     * Test of consultarCliente method, of class ClienteService.
////     */
////    @Test
////    @Order(7)
////    public void testConsultarCliente() {
////        System.out.println("consultarCliente");
////        Long idCliente = 1L;
////        Optional<Cliente> expResult = null;
////        Optional<Cliente> result = srv.consultarCliente(idCliente);
////        System.out.println("Nome do cliente 152: " + result.get().getNome());
////        assertNotEquals(expResult, result);
////    }
////
////    /**
////     * Test of listarClientes method, of class ClienteService.
////     */
////    @Test
////    @Order(8)
////    public void testListarClientes() {
////        System.out.println("listarClientes");
////        List<Cliente> expResult = null;
////        List<Cliente> result = srv.listarClientes();
////        assertNotEquals(expResult, result);
////    }
////
////    /**
////     * Test of atualizarCliente method, of class ClienteService.
////     */
////    @Test
////    @Order(9)
////    public void testAtualizarCliente() {
////        System.out.println("atualizarCliente");
////        Cliente cliente = new Cliente();
////        Long idCliente = Long.valueOf("102");
////        cliente.setIDCliente(idCliente);
////        cliente.setCpf("888.311.615-14");
////        cliente.setEmail("vitor@gmail.com");
////        cliente.setNome("vitor Matheus");
////        Boolean expResult = true;
////        Boolean result = srv.atualizarCliente(cliente);
////        assertEquals(expResult, result);
////    }
//    
//}
