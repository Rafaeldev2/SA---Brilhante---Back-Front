package com.brilhante.brilhante.service;

import com.brilhante.brilhante.entity.Cliente;
import com.brilhante.brilhante.repository.ClienteRepository;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClienteService {
    
    @Autowired
    ClienteRepository clienteRepository;
    
    public Long incluirCliente(Cliente cliente){
        
        if(cliente.getCpf() == null || 
           cliente.getNome() == null || 
           cliente.getEmail() == null || 
           cliente.getSenha() == null || 
           ! cliente.getEmail().matches("@")){
        
            return null;
        }
        
        
        String cpf = cliente.getCpf();
        Cliente cli = clienteRepository.findByCpf(cpf);
        if(cli == null){
        
            String senhaCod = codificarSenhaCliente(cliente.getSenha());
            cliente.setSenha(senhaCod);
           return clienteRepository.save(cliente).getIDCliente();
        }else{
        return null;
        }
    }
    public Boolean excluirCliente(Long idCliente){
    
    try{
        clienteRepository.deleteById(idCliente);
        return true;
    } catch (Exception ex){
            System.out.println("Erro ao excluir"
                    + "cliente ID: " + idCliente
                    + " Erro: " + ex.getLocalizedMessage());
         return false;
        }
            
    }
    public Optional<Cliente> consultarCliente(Long idCliente){
        
            return clienteRepository.findById(idCliente); 
    }
    
    public List<Cliente> listarClientes(){
        
        return clienteRepository.findAll();
    }
    
@Transactional
public Boolean atualizarCliente(Cliente cliente) {
    
    Cliente cli = clienteRepository.getReferenceById(cliente.getIDCliente());
    
    if (cli != null && cli.getIDCliente() != null) {
        cli.setCpf(cliente.getCpf());
        cli.setEmail(cliente.getEmail());
        cli.setNome(cliente.getNome());
        cli.setSenha(this.codificarSenhaCliente(cliente.getSenha()));
        cli.setPerfil(cliente.getPerfil());
        cli.setCep(cliente.getCep());
        cli.setLogradouro(cliente.getLogradouro());
        cli.setNumEndereco(cliente.getNumEndereco());
        cli.setUF(cliente.getUF());
        cli.setCidade(cliente.getCidade());
        cli.setBairro(cliente.getBairro());
        cli.setCompEndereco(cliente.getCompEndereco());
        cli.setCelular(cliente.getCelular());
        cli.setDataNasc(cliente.getDataNasc());

        clienteRepository.save(cli);
        return true;
    } else {
        return false;
    }
}
    
    public Cliente loginCliente(String email, String senha){
        Cliente cli = clienteRepository.findByEmail(email);
        if(cli != null){
            String senhaCod = codificarSenhaCliente(senha);
            if(cli.getSenha().equals(senhaCod)){
                return cli;
            }            
        }
        return null;
    }
    
    public String codificarSenhaCliente(String senha){
        String senhaCod = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            //md. update(salt);
            byte[] bytes = md.digest(senha.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            senhaCod = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.getLocalizedMessage();
        }
        return senhaCod;
    }
}
