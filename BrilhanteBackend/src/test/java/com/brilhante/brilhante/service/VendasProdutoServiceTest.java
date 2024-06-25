/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Produto;
import com.brilhante.brilhante.entity.Vendas;
import com.brilhante.brilhante.entity.VendasProduto;
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
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
//@Disabled
public class VendasProdutoServiceTest {
    @Autowired
    private VendasService vnd;
    
    @Autowired
    private ProdutoService pdt;
    
    @Autowired
    private VendasProdutoService VnPdt;
    
    public VendasProdutoServiceTest() {
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
    public void testIncluirVendasProduto() {
        System.out.println("incluir VendasProduto");
        VendasProduto vendasproduto = new VendasProduto();
        List <Produto> produtos = pdt.listarProduto();
        Long primeiroPdt = produtos.get(0).getIDProduto();
        List <Vendas> vendas = vnd.listarVenda();
        Long primeiraVnd = vendas.get(0).getIDVendas();
        vendasproduto.setQtdProduto(4);
        vendasproduto.setValorProduto(5.99);
        Long id = VnPdt.IncluirVendasProduto(vendasproduto, primeiraVnd, primeiroPdt);
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
}
