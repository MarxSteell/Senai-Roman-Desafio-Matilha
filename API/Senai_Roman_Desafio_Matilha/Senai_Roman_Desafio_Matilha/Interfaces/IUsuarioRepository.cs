using Senai_Roman_Desafio_Matilha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_Desafio_Matilha.Interfaces
{
    interface IUsuarioRepository
    {
        void Cadastrar(Usuarios usuario);

        List<Usuarios> Listar();

        void Deletar(int id);

        void Alterar(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(string email, string senha);
    }
}
