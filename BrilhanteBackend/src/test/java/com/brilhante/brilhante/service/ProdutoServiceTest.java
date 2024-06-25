package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Produto;
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
public class ProdutoServiceTest {
    
    
    @Autowired
    private ProdutoService pdt;
    
    public ProdutoServiceTest() {
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
    public void testIncluirProduto() {
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        produto.setNomeProduto("Pulseira Dourada");
        produto.setValorProduto(50D);
        produto.setQtdEstoque(15);
        produto.setProdutoTipo(1);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
    @Test
    @Order(2)
    public void testIncluirProdutoSemNome() {
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        produto.setValorProduto(40D);
        produto.setQtdEstoque(40);
        produto.setProdutoTipo(3);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(3)
    public void testIncluirProdutoSemValor() {
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        produto.setNomeProduto("Pulseira Dourada");
        produto.setQtdEstoque(40);
        produto.setProdutoTipo(3);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(4)
    public void testIncluirProdutoSemQuantidade() {
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        produto.setNomeProduto("Pulseira Dourada");
        produto.setValorProduto(40D);
        produto.setProdutoTipo(3);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(5)
    public void testIncluirProdutoSemTipoProduto() {
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        produto.setNomeProduto("Pulseira Dourada");
        produto.setValorProduto(40D);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertEquals(expResult, id);
    }
    @Test
    @Order(6)
    public void testExcluirProduto() {
        System.out.println("excluir Produto");
        Long idProduto =3L;
        Boolean expResult = true;
        Boolean result = pdt.excluirProduto(idProduto);
        assertEquals(expResult, result);
    }
    @Test
    @Order(7)
    public void testConsultarProduto() {
        System.out.println("consultar Produto");
        Long idProduto = 2L;
        Optional<Produto> expResult = null;
        Optional<Produto> result = pdt.consultarProduto(idProduto);
        System.out.println("Nome do Produto 1: " + result.get().getNomeProduto());
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(8)
    public void testConsultarProdutoComIDErrado() {
        System.out.println("consultar Produto");
        Long idProduto = null;
        Optional<Produto> expResult = null;
        Optional<Produto> result = pdt.consultarProduto(idProduto);
        System.out.println("Nome do Produto 1: " + result.get().getNomeProduto());
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(9)
    public void testListarProduto() {
        System.out.println("Listar Produto");
        List<Produto> expResult = null;
        List<Produto> result = pdt.listarProduto();
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(10)
    public void testListarProdutoPorTipo(){
        System.out.println("Listar Produto por Tipo");
        List<Produto> expResult = null;
        List<Produto> result = pdt.listarProdutoPorTipo(Integer.SIZE);
        assertNotEquals(expResult, result);
    }
    @Test
    @Order(11)
    public void testAtualizarProduto(){
        System.out.println("incluirProduto");
        Produto produto = new Produto();
        Long idProduto = 102L;
        produto.setNomeProduto("Pulseira Dourada");
        produto.setValorProduto(69D);
        produto.setProdutoTipo(1);
        produto.setQtdEstoque(30);
        produto.setDescricaoProduto("Pulseira Dourada");
        produto.setCodigoDeBarra(123456565L);
        Long id = pdt.incluirProduto(produto);
        Long expResult = null;
        assertNotEquals(expResult, id);
    }
}