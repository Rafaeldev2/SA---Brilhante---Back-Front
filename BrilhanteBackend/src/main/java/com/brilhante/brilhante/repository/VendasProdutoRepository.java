package com.brilhante.brilhante.repository;

import com.brilhante.brilhante.entity.VendasProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendasProdutoRepository extends JpaRepository<VendasProduto, Long>{
}