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

@Disabled
public class VendasProdutoServiceTest {
    @Autowired
    private VendasService vnd;
    private ProdutoService pdt;
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
        Long primeiroPdt = produtos.getFirst().getIDProduto();
        List <Vendas> vendas = vnd.listarVenda();
        Long primeiraVnd = vendas.getFirst().getIDVendas();
        Long id = VnPdt.IncluirVendasProduto(vendasproduto, primeiraVnd, primeiroPdt);
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
}
