using System;
using System.Collections.Generic;

namespace Senai_Roman_Desafio_Matilha.Domains
{
    public partial class Temas
    {
        public Temas()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        public string Tema { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
