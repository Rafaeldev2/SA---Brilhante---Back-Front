package com.brilhante.brilhante.repository;


import com.brilhante.brilhante.entity.Vendas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendasRepository extends JpaRepository<Vendas, Long>{
}
