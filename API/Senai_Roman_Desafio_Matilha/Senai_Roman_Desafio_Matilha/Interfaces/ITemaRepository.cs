using Senai_Roman_Desafio_Matilha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_Desafio_Matilha.Interfaces
{
    interface ITemaRepository
    {
        void Cadastar(Temas tema);

        void Deletar(int id);

        void Alterar(Temas tema);

        List<Temas> Listar();
    }
}
