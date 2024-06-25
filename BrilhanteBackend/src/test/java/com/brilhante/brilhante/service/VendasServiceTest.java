/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.entity.Vendas;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Order;
import org.springframework.beans.factory.annotation.Autowired;

@Disabled
public class VendasServiceTest {
    
    @Autowired
    private VendasService vnd;
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
        List <Cliente> clientes = cli.listarClientes();
        Cliente primeiroCli = clientes.getFirst();
        Vendas vendas = new Vendas();
        vendas.setStatus(1);
        vendas.setCliente(primeiroCli);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
    @Test
    @Order(2)
    public void testIncluirVendaStatus0() {
        System.out.println("incluir Venda");
        List <Cliente> clientes = cli.listarClientes();
        Cliente primeiroCli = clientes.getFirst();
        Vendas vendas = new Vendas();
        vendas.setStatus(0);
        vendas.setCliente(primeiroCli);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
    @Test
    @Order(3)
    public void testIncluirVendaStatusMaiorQue2() {
        System.out.println("incluir Venda");
        List <Cliente> clientes = cli.listarClientes();
        Cliente primeiroCli = clientes.getFirst();
        Vendas vendas = new Vendas();
        vendas.setStatus(3);
        vendas.setCliente(primeiroCli);
        Long id = vnd.incluirVenda(vendas, primeiroCli.getIDCliente());
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
}
