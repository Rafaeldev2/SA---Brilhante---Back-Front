package com.brilhante.brilhante.service;


import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.entity.Vendas;
import com.brilhante.brilhante.repository.VendasRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class VendasService {
    @Autowired
    private VendasRepository vendasRepository;
    @Autowired
    private ClienteService clienteService;
    
    public Long incluirVenda(Vendas vendas, Long IdCliente){
       
        Cliente cliente = clienteService.consultarCliente(IdCliente).get();
        if(cliente != null){
            vendas.setCliente(cliente);
            return vendasRepository.save(vendas).getIDVendas();
        }
        return null;
    }
    
    public Boolean excluirVenda(Long idVenda){
        
        if(vendasRepository.getReferenceById(idVenda) != null){
            vendasRepository.deleteById(idVenda);
            return true;
        }
        return false;
    }
    
    public Optional<Vendas> consultarVenda(Long idVenda){
        
            return vendasRepository.findById(idVenda); 
    }
    
    public List<Vendas> listarVenda(){
        
        return vendasRepository.findAll();
    }
    
    @Transactional
    public Boolean atualizarVenda(Vendas venda) {
        
        Vendas vnd = vendasRepository.getReferenceById(venda.getIDVendas());
                if(vnd   != null){
                    vnd.setStatus(venda.getStatus());
                   vendasRepository.save(vnd);
                 return true;
            } else {
                return false;            
        }
    }
}
