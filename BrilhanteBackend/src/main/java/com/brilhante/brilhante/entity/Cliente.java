package com.brilhante.brilhante.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.Date;
import java.util.Set;


@Table(name = "clientes")
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    @JoinColumn(nullable = false)
    private Long IDCliente;
    
    @Column(nullable = false)
    private String nome;
    
    @Column(nullable = false, unique=true)
    private String cpf;
    
    @Column(nullable = false, unique=true)
    private String email;   
    
    @Column(nullable = false)
    private String senha;
    
    @Column(nullable = true)
    private String perfil;
    
    @Column(nullable = true)
    private Long cep;
    
    @Column(nullable = true)
    private String logradouro;
    
    @Column(nullable = true)
    private String numEndereco;
    
    @Column(nullable = true)
    private String UF;
    
    @Column(nullable = true)
    private String cidade;
    
    @Column(nullable = true)
    private String bairro;
    
    @Column(nullable = true)
    private String compEndereco;
    
    @Column(nullable = true)
    private Long celular;
    
    @Column(nullable = true)
    private Date dataNasc;
    
    @OneToMany(mappedBy="cliente",
               fetch=FetchType.LAZY,
               orphanRemoval = true,
               cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Vendas> vendas;
    
    public Long getIDCliente() {
        return IDCliente;
    }

    public Set<Vendas> getVendas() {
        return vendas;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getPerfil() {
        return perfil;
    }

    public Long getCep() {
        return cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getNumEndereco() {
        return numEndereco;
    }

    public String getUF() {
        return UF;
    }

    public String getCidade() {
        return cidade;
    }

    public String getBairro() {
        return bairro;
    }
    
    public String getCompEndereco() {
        return compEndereco;
    }

    public Long getCelular() {
        return celular;
    }

    public Date getDataNasc() {
        return dataNasc;
    }
    
    public void setIDCliente(Long IDCliente) {
        this.IDCliente = IDCliente;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setVendas(Set<Vendas> vendas) {
        this.vendas = vendas;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }
    
    public void setCep(Long cep) {
        this.cep = cep;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public void setNumEndereco(String numEndereco) {
        this.numEndereco = numEndereco;
    }

    public void setUF(String UF) {
        this.UF = UF;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }
    
    public void setCompEndereco(String compEndereco) {
        this.compEndereco = compEndereco;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public void setDataNasc(Date dataNasc) {
        this.dataNasc = dataNasc;
    }
    
}
