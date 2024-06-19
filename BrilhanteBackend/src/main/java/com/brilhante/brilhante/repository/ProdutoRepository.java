package com.brilhante.brilhante.repository;

import com.brilhante.brilhante.entity.Produto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
      Produto findByNomeProduto(String nome);
      List<Produto> findByProdutoTipo(Integer produtoTipo);
      Produto findByCodigoDeBarra(Long codigoDeBarra);
}