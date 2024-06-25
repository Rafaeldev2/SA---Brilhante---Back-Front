package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Cliente;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.Random;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Disabled
public class ClienteServiceTest {
    
    @Autowired
    private ClienteService srv;
    
    private final Random random = new Random();
    
    private final String nomes[] = { "Alice","João","Maria","Pedro","Laura","Marcos","Ana","Gabriel","Bruno",
                              "Manuela","Gustavo","Carolina","Felipe","Juliana","Thiago","Camila","Marcelo",
                              "Vanessa","André","Fernanda","Victor","Gabriela","Daniel" };

    private final String sobrenomes[] = { "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Ferreira",
                                    "Rodrigues", "Almeida", "Carvalho", "Gomes", "Martins", "Lima", "Araújo",
                                    "Barbosa", "Ribeiro", "Alves","Cardoso", "Miranda", "Rocha", "Moraes", "Santos",
                                    "Cunha", "Moreira", "Dias", "Castro", "Nascimento", "Nunes", "Mendes", "Torres" };
    
    public ClienteServiceTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
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

    /**
     * Test of incluirCliente method, of class ClienteService.
     */
    
    @Test
    @Order(1)
    public void incluirMassaClientes(){
        
        System.out.println("#0 Gerando massa de dados de Clientes para testes...");
        List<String> listaCli = gerarNomes(1000);
        List<String> listaCPF = gerarNumeroCPF(1000);
        List<Long> listaIds = new ArrayList<>();
        for(int i=0;i<listaCli.size();i++){
            Cliente cli = new Cliente();
            cli.setCpf(listaCPF.get(i));
            cli.setNome(listaCli.get(i));
            cli.setEmail(listaCli.get(i).replace(" ","_") + "@gmail.com");
            listaIds.add( srv.incluirCliente(cli) );
        }
        assertTrue(!listaIds.isEmpty(), "#0 ERRO: Não foram gerados Clientes, verifique! ");
    }
    

    @Test
    @Order(2)
    public void testIncluirCliente() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("75188851291");
        cliente.setNome("João da Silva");
        cliente.setEmail("zezi@gmail.com");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long idExpect = null;
        assertNotEquals(id, idExpect);
    }
    
    @Test
    @Order(3)
    public void testIncluirClienteSemCPF() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setNome("José da Silva");
        cliente.setEmail("zizou@gmail.com");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    
    @Test
    @Order(4)
    public void testIncluirClienteCPF12Num() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901888512845");
        cliente.setNome("José da Silva");
        cliente.setEmail("zarinho@gmail.com");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    
    @Test
    @Order(5)
    public void testIncluirClienteCPF10NumouMenos() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901888512");
        cliente.setNome("José da Silva");
        cliente.setEmail("zero@gmail.com");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    };
    @Test
    @Order(6)
    public void testIncluirClienteSemNome() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901.888.512-01");
        cliente.setEmail("zinho@gmail.com");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    };
    @Test
    @Order(7)
    public void testIncluirClienteSemEmail() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901.888.512-56");
        cliente.setNome("José da Silva");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    };
    @Test
    @Order(8)
    public void testIncluirClienteSemCaminhoEmail() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901.888.512-71");
        cliente.setNome("José da Silva");
        cliente.setEmail("zezinho");
        cliente.setSenha("321654");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    };
    @Test
    @Order(9)
    public void testIncluirClienteSemSenha() {
        System.out.println("incluirCliente");
        Cliente cliente = new Cliente();
        cliente.setCpf("901.888.512-25");
        cliente.setEmail("zezinho");
        cliente.setNome("José da Silva");
        Long id = srv.incluirCliente(cliente);
        Long expResult = null;
        assertEquals(expResult, id);
    };
    
    /**
     * Test of excluirCliente method, of class ClienteService.
     */
    @Test
    @Order(10)
    public void testExcluirCliente() {
        System.out.println("excluirCliente");
        Long idCliente =3L;
        Boolean expResult = true;
        Boolean result = srv.excluirCliente(idCliente);
        assertEquals(expResult, result);
    }

    /**
     * Test of consultarCliente method, of class ClienteService.
     */
    @Test
    @Order(11)
    public void testConsultarCliente() {
        System.out.println("consultarCliente");
        Long idCliente = 2L;
        Optional<Cliente> expResult = null;
        Optional<Cliente> result = srv.consultarCliente(idCliente);
        System.out.println("Nome do cliente 1: " + result.get().getNome());
        assertNotEquals(expResult, result);
    }

    /**
     * Test of listarClientes method, of class ClienteService.
     */
    @Test
    @Order(12)
    public void testListarClientes() {
        System.out.println("listarClientes");
        List<Cliente> expResult = null;
        List<Cliente> result = srv.listarClientes();
        assertNotEquals(expResult, result);
    }

    /**
     * Test of atualizarCliente method, of class ClienteService.
     */
    @Test
    @Order(13)
    public void testAtualizarCliente() throws ParseException {
        System.out.println("atualizarCliente");
        Cliente cliente = new Cliente();
        Long idCliente = 252L;
        cliente.setIDCliente(idCliente);
        cliente.setCpf("75188851291");
        cliente.setEmail("zezi@gmail.com");
        cliente.setNome("João da Silva");
        cliente.setSenha("353");
        cliente.setPerfil("User");
        cliente.setCep(88020348L);
        cliente.setLogradouro("Rua da quinze");
        cliente.setNumEndereco("348");
        cliente.setUF("SC");
        cliente.setCidade("Florianópolis");
        cliente.setBairro("coqueiros");
        cliente.setCompEndereco("Apto 303");
        cliente.setCelular(45999355368L);
        cliente.setDataNasc(convertStringToDate("1976-12-19"));
        Boolean expResult = true;
        Boolean result = srv.atualizarCliente(cliente);
        assertEquals(expResult, result);
    }
    
    
    public Date convertStringToDate(String data) throws ParseException{
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.of("PT", "BR")); //Objeto Formatador de Data
    return sdf.parse(data); // Campo do tipo Date recebendo String...

    }
}
