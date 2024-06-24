package com.brilhante.brilhante.service;


import com.brilhante.brilhante.entity.Carrinho;
import com.brilhante.brilhante.entity.Produto;
import com.brilhante.brilhante.entity.Vendas;
import com.brilhante.brilhante.entity.VendasProduto;
import com.brilhante.brilhante.repository.VendasProdutoRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VendasProdutoService {
    @Autowired
    private VendasProdutoRepository vendasProdutosRepository;
    @Autowired
    private VendasService vendasService;
    @Autowired
    private ProdutoService produtoService;

    
    
     public Long IncluirVendasProduto (VendasProduto vendasProduto, Long IdVendas,Long IdProduto){
         Optional<Vendas> vendas = vendasService.consultarVenda(IdVendas);
         Optional<Produto> produto = produtoService.consultarProduto(IdProduto);
         
         if(vendas.isPresent() && produto.isPresent()){
             vendasProduto.setVendas(vendas.get());
             vendasProduto.setProduto(produto.get());
             return vendasProdutosRepository.save(vendasProduto).getIDVendasProduto();
         }
         return null;
   }
//      public boolean IncluirVendasProdutoCarrinho (List<Carrinho> carrinho, Long IdVendas){
//          
//           for(Carrinho car : carrinho){
//                VendasProduto vendasprd = new VendasProduto();
//                vendasprd.setProduto(produtoService.consultarProduto(car.getIdproduto()).get());
//                vendasprd.setQtdProduto(car.getQtdproduto());
//                vendasprd.setValorProduto(car.getValorProduto());
//                vendasprd.setVendas(vendasService.consultarVenda(IdVendas).get());
//                vendasProdutosRepository.save(vendasprd);
//            }           
//         return true;
//   }
     public Boolean excluirVendasProduto(Long IDVendasProduto){
         if(vendasProdutosRepository.existsById(IDVendasProduto)){
             vendasProdutosRepository.deleteById(IDVendasProduto);
             return true;
         }
         return false;     
}
     
    public Optional<VendasProduto> consultarVendasProduto(Long IDVendasProduto){
        
        return vendasProdutosRepository.findById(IDVendasProduto);
}
    public List<VendasProduto> listarVendasProduto(){
        
        return vendasProdutosRepository.findAll();
    }
    @Transactional
    public Boolean atualizarVendasProduto(VendasProduto vendasProduto) {
        
        if(vendasProduto.getQtdProduto() == 0 ||
           vendasProduto.getValorProduto() == null) {
            return false;
        }        
        VendasProduto vndp = vendasProdutosRepository.getReferenceById(vendasProduto.getIDVendasProduto());
        if( vndp != null) {
            vndp.setIDVendasProduto(vendasProduto.getIDVendasProduto());
            vndp.setQtdProduto(vendasProduto.getQtdProduto());
            vndp.setValorProduto(vendasProduto.getValorProduto());
           vendasProdutosRepository.save(vndp);
            return true;
        } else {
            return false;            
        }
    }
}