package com.brilhante.brilhante.repository;

import com.brilhante.brilhante.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
      Produto findByNomeProduto(String nome);
      Produto findByCodigoDeBarra(Long codigoDeBarra);

}