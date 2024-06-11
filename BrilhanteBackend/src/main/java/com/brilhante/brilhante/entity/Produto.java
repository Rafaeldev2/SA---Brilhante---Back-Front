package com.brilhante.brilhante.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.Set;



@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
        private Long IDProduto;
    
        @Column(nullable = false)
        private String nomeProduto;
        
        @Column(nullable = true)
        private String descricaoProduto;
        
        @Column(nullable = false)
        private Double valorProduto;
        
        @Column(nullable = false)
        private Integer qtdEstoque;
        
        @Column(nullable = true)
        private Long codigoDeBarra;
        
        @Column(nullable = false)
        private Integer produtoTipo;

        @OneToOne
        private VendasProduto vendasProduto;

    public Long getIDProduto() {
        return IDProduto;
    }

    public void setIDProduto(Long IDProduto) {
        this.IDProduto = IDProduto;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getDescricaoProduto() {
        return descricaoProduto;
    }

    public void setDescricaoProduto(String descricaoProduto) {
        this.descricaoProduto = descricaoProduto;
    }

    public Double getValorProduto() {
        return valorProduto;
    }

    public void setValorProduto(Double valorProduto) {
        this.valorProduto = valorProduto;
    }

    public Integer getQtdEstoque() {
        return qtdEstoque;
    }

    public void setQtdEstoque(Integer qtdEstoque) {
        this.qtdEstoque = qtdEstoque;
    }

    public Long getCodigoDeBarra() {
        return codigoDeBarra;
    }

    public void setCodigoDeBarra(Long codigoDeBarra) {
        this.codigoDeBarra = codigoDeBarra;
    }

    public Integer getProdutoTipo() {
        return produtoTipo;
    }

    public void setProdutoTipo(Integer produtoTipo) {
        this.produtoTipo = produtoTipo;
    }

    public VendasProduto getVendasProduto() {
        return vendasProduto;
    }

    public void setVendasProduto(VendasProduto vendasProduto) {
        this.vendasProduto = vendasProduto;
    }
        
}