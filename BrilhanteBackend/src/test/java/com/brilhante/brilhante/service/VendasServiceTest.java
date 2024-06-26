/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.entity.Vendas;
import java.util.List;
import java.util.Optional;
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
public class VendasServiceTest {
    
    @Autowired
    private VendasService vnd;
    
    @Autowired
    private ClienteService cli;
    
    public VendasServiceTest() {
        
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

    @Test
    @Order(1)
    public void testIncluirVenda() {
        System.out.println("incluir Venda");
        List<Cliente> clientes = cli.listarClientes();
        System.out.println("Id Cliente " + clientes.get(0).getIDCliente());
        Cliente primeiroCli = clientes.get(0);
        Vendas vendas = new Vendas();
        vendas.setStatus(1);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
    @Test
    @Order(2)
    public void testIncluirVendaStatus0() {
        System.out.println("incluir Venda");
        List<Cliente> clientes = cli.listarClientes();
        Cliente primeiroCli = clientes.get(0);
        Vendas vendas = new Vendas();
        vendas.setStatus(0);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(3)
    public void testIncluirVendaStatusMaiorQue2() {
        System.out.println("incluir Venda");
        List<Cliente> clientes = cli.listarClientes();
        Cliente primeiroCli = clientes.get(0);
        Vendas vendas = new Vendas();
        vendas.setStatus(3);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(6)
    public void testExcluirProduto() {
        System.out.println("excluir Vendas");
        Long idVenda =3L;
        Boolean expResult = true;
        Boolean result = vnd.excluirVenda(idVenda);
        assertEquals(expResult, result);
    }
    @Test
    @Order(7)
    public void testConsultarVendas() {
        System.out.println("consultar Vendas");
        Long idProduto = 2L;
        Optional<Vendas> expResult = null;
        Optional<Vendas> result = vnd.consultarVenda(idProduto);
        System.out.println("ID da venda 1: " + result.get().getIDVendas());
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(9)
    public void testListarVendas() {
        System.out.println("Listar Vendas");
        List<Vendas> expResult = null;
        List<Vendas> result = vnd.listarVenda();
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(11)
    public void testAtualizarVendas(){
        System.out.println("Atualizar Vendas");
        Vendas vendas = new Vendas();
        Long IDVendas = 1L;
        vendas.setStatus(2);
        vendas.setIDVendas(IDVendas);
        Boolean id = vnd.atualizarVenda(vendas);
        Boolean expResult = false;
        assertNotEquals(expResult, id);
    }
}
