package com.brilhante.brilhante.repository;

import com.brilhante.brilhante.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{    
    Cliente findByCpf(String cpf);
    Cliente findByEmail(String email);
}
