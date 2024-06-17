package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Produto;
import com.brilhante.brilhante.repository.ProdutoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    public Long incluirProduto(Produto produto) {

        if (produto.getNomeProduto() == null || produto.getProdutoTipo() == null
                || produto.getQtdEstoque() == null || produto.getValorProduto() == null) {

            return null;
        }
            return produtoRepository.save(produto).getIDProduto();
        }
    
    public Boolean excluirProduto(Long IDProduto) {

        try {
            produtoRepository.deleteById(IDProduto);
            return true;
        } catch (Exception ex) {
            System.out.println("Erro ao excluir"
                    + "produto ID: " + IDProduto
                    + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }

    public Optional<Produto> consultarProduto(Long IDProduto) {

        return produtoRepository.findById(IDProduto);
    }

    public Produto consultarNomeProduto(String nomeProduto) {

        return produtoRepository.findByNomeProduto(nomeProduto);
    }

    public List<Produto> listarProduto() {

        return produtoRepository.findAll();
    }

    public Boolean atualizarProduto(Produto produto) {

        Produto pdt = produtoRepository.getReferenceById(produto.getIDProduto());
        if (pdt != null) {
            pdt.setIDProduto(produto.getIDProduto());
            pdt.setNomeProduto(produto.getNomeProduto());
            pdt.setQtdEstoque(produto.getQtdEstoque());
            pdt.setDescricaoProduto(produto.getDescricaoProduto());
            pdt.setValorProduto(produto.getValorProduto());
            pdt.setCodigoDeBarra(produto.getCodigoDeBarra());
            pdt.setProdutoTipo(produto.getProdutoTipo());
            produtoRepository.save(pdt);
            return true;
        } else {
            return false;
        }
    }
}
