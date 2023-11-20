using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cliente")]
    public class ClienteController : ControllerBase
    {
        private AppDataContext _context;

        public ClienteController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/Cliente
        [HttpGet]
        [Route("buscar")]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        // GET: api/Cliente/5
        [HttpGet]
        [Route("encontrar/{id}")]
        public IActionResult BuscarCliente([FromRoute] int id)
        {
            try
            {
                Cliente cliente = _context.Clientes.Find(id);

                if (cliente != null)
                {
                    _= cliente.Nome;

                    return Ok(new { cliente.ClienteId, cliente.Nome});
                }

                return NotFound();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT: api/Cliente/5
        [HttpPut]
        [Route("atualizar/{id}")]
        public IActionResult Atualizar(int id, [FromBody] Cliente clienteAtualizado)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.ClienteId == id);
            if (cliente == null)
            {
                return NotFound();
            }

            cliente.Nome = clienteAtualizado.Nome;
            // atualize outros campos conforme necessário

            _context.SaveChanges();

            return Ok(cliente);
        }

        // POST: api/Cliente
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();

            return Created("", cliente);
        }

        // DELETE: api/Cliente/5
        [HttpDelete]
        [Route("deletar/{id}")]
        public IActionResult Deletar(int id)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.ClienteId == id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();

            return Ok();
        }
        [HttpDelete]
        [Route("deletarPorNome/{nome}")]
        public IActionResult DeletarPorNome(string nome)
        {
            var cliente = _context.Clientes.FirstOrDefault(c => c.Nome == nome);
            if (cliente == null)
            {
                return NotFound();
            }

        _context.Clientes.Remove(cliente);
        _context.SaveChanges();

            return Ok();
        }
    }
}
