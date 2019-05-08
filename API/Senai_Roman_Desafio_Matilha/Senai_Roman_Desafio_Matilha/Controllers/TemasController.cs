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
    public class TemasController : ControllerBase
    {

        [HttpGet]
        public IActionResult ListarTemas()
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    return Ok(ctx.Temas.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Cadastrar (Temas tema)
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    ctx.Temas.Add(tema);
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
        public IActionResult Alterar(Temas tema)
        {
            try
            {
                using(RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    Temas temaExiste = ctx.Temas.Find(tema.Id);

                    if(temaExiste == null)
                    {
                        return NotFound();
                    }

                    temaExiste.Tema = tema.Tema;
                    ctx.Temas.Update(temaExiste);
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
                    Temas temaProcurado = ctx.Temas.Find(id);

                    if(temaProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Temas.Remove(temaProcurado);
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