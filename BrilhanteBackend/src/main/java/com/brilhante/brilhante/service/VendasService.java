package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Carrinho;
import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.entity.Vendas;
import com.brilhante.brilhante.entity.VendasProduto;
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
    
//    @Autowired
//    private VendasProdutoService vendasProdutoService;
    

    public Long incluirVenda(Vendas vendas, Long IdCliente){
        Optional<Cliente> cliente = clienteService.consultarCliente(IdCliente);
        if(cliente.isPresent()){
            vendas.setCliente(cliente.get());
            return vendasRepository.save(vendas).getIDVendas();
        }
        return null;
    }
//     public Long incluirVenda(List<Carrinho> carrinho, Long IdCliente){
//        Optional<Cliente> cliente = clienteService.consultarCliente(IdCliente);
//        if(cliente.isPresent()){
//            Vendas vendas = new Vendas();
//            vendas.setCliente(cliente.get());
//            vendas.setStatus(1);
//            Long idVendas = vendasRepository.save(vendas).getIDVendas();
//            vendasProdutoService.IncluirVendasProdutoCarrinho(carrinho,idVendas);
//         return idVendas;
//        }
//        return null;
//    }
    
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
