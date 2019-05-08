using Microsoft.EntityFrameworkCore;
using Senai_Roman_Desafio_Matilha.Domains;
using Senai_Roman_Desafio_Matilha.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_Desafio_Matilha.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public void Alterar(Usuarios usuario)
        {
            throw new NotImplementedException();
        }

        public Usuarios BuscarPorEmailESenha(string email, string senha)
        {
            using (RomanMatilhaContext ctx = new RomanMatilhaContext())
            {
                Usuarios usuarioBuscado = ctx.Usuarios.Include(x => x.IdTipousuarioNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);
                if(usuarioBuscado == null)
                {
                    return null;
                }
                return usuarioBuscado;
            }
        }

        public void Cadastrar(Usuarios usuario)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Usuarios> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
