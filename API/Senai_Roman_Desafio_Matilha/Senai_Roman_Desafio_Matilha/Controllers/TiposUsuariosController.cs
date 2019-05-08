using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman_Desafio_Matilha.Domains;

namespace Senai_Roman_Desafio_Matilha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TiposUsuariosController : ControllerBase
    {

        [HttpGet]
        public IActionResult ListarTipoUsuarios()
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    return Ok(ctx.TipoUsuario.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Cadastrar (TipoUsuario tipoUsuario)
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    ctx.TipoUsuario.Add(tipoUsuario);
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