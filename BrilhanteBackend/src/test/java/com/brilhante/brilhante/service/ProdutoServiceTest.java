//package com.brilhante.brilhante.service;
//
//import com.brilhante.brilhante.entity.Produto;
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
//
//@SpringBootTest
//@Disabled
//public class ProdutoServiceTest {
//    
//    public ProdutoServiceTest() {
//    }
//    
//    @Autowired
//    private ProdutoService pdt;
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
//
//    
//    @Test
//    @Order(1)
//    public void testIncluirProduto() {
//        System.out.println("incluirProduto");
//        Produto produto = new Produto();
//        produto.setNomeProduto("Pulseira Dourada");
//        produto.setValorProduto();
//        produto.setQtdEstoque(40);
//        produto.setProdutoTipo(3);
//        Long id = pdt.incluirProduto(produto);
//        Long expResult = null;
//        assertEquals(expResult, id);
//    }
//}
