using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman_Desafio_Matilha.Domains;
using Senai_Roman_Desafio_Matilha.Interfaces;
using Senai_Roman_Desafio_Matilha.Repositories;

namespace Senai_Roman_Desafio_Matilha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    return Ok(ctx.Usuarios.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    ctx.Usuarios.Add(usuario);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }                                                   
        }

        [HttpPut]
        public IActionResult Alterar(Usuarios usuario)
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    Usuarios usuarioExiste = ctx.Usuarios.Find(usuario.Id);

                    if( usuarioExiste == null)
                    {
                        return NotFound();
                    }

                    usuarioExiste.Nome = usuario.Nome;
                    ctx.Usuarios.Update(usuarioExiste);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    Usuarios usuarioProcurado = ctx.Usuarios.Find(id);

                    if(usuarioProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Usuarios.Remove(usuarioProcurado);
                    ctx.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

    }
}