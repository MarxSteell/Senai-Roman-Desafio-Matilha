﻿using System;
using System.Collections.Generic;

namespace Senai_Roman_Desafio_Matilha.Domains
{
    public partial class Projetos
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int IdTema { get; set; }
        public string Descricao { get; set; }
        public int IdUsuario { get; set; }

        public Temas IdTemaNavigation { get; set; }
        public Usuarios IdUsuarioNavigation { get; set; }
    }
}
