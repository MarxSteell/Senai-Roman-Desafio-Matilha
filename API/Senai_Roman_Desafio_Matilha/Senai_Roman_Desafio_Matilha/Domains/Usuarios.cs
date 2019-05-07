using System;
using System.Collections.Generic;

namespace Senai_Roman_Desafio_Matilha.Domains
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int Id { get; set; }
        public int IdTipousuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public TipoUsuario IdTipousuarioNavigation { get; set; }
        public ICollection<Projetos> Projetos { get; set; }
    }
}
