using Senai_Roman_Desafio_Matilha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_Desafio_Matilha.Interfaces
{
    interface IProjetoRepository
    {
        void Cadastrar(Projetos projeto);

        void Deletar(int id);

        void Alterar(Projetos projeto);

        List<Projetos> Listar();

    }
}
