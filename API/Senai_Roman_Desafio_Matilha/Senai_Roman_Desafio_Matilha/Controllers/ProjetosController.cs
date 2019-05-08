using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman_Desafio_Matilha.Domains;

namespace Senai_Roman_Desafio_Matilha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarProjetos()
        {
            try
            {
                using (RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    return Ok(ctx.Projetos.ToList());
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles="Administrador")]
        [HttpPost]
        public IActionResult Cadastrar (Projetos projeto)
        {
            try
            {
                using(RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    ctx.Projetos.Add(projeto);
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
        public IActionResult Alterar(Projetos projeto)
        {
            try
            {
                using(RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    Projetos projetoExiste = ctx.Projetos.Find(projeto.Id);

                    if(projetoExiste == null)
                    {
                        return NotFound();
                    }

                    projetoExiste.Nome = projeto.Nome;
                    ctx.Projetos.Update(projetoExiste);
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
                using(RomanMatilhaContext ctx = new RomanMatilhaContext())
                {
                    Projetos projetoProcurado = ctx.Projetos.Find(id);

                    if(projetoProcurado == null)
                    {
                        return NotFound();
                    }

                    ctx.Projetos.Remove(projetoProcurado);
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