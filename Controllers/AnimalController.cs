// Importando tudo que usaremos nas controllers
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/animal")]
    public class AnimalController : ControllerBase
    {
        private readonly AppDataContext _context;

        // O construtor da classe AnimalController
        // O nome do construtor deve ser o mesmo da classe
        public AnimalController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/Animal
        // Este método retorna todos os animais no banco de dados
    
        [HttpGet]
        [Route("encontrar")]
        public async Task<ActionResult<IEnumerable<Animal>>> GetAnimals()
        {
            return await _context.Animais.ToListAsync();
        }

        // GET: api/Animal/5
        // Este método retorna o animal com o ID especificado
[HttpGet]
    [Route("buscar/{id}")]
    public IActionResult Buscar([FromRoute] int id)
    {
        try
        {
            Animal? animalCadastrado =
                _context.Animais
                .FirstOrDefault(x => x.AnimalId == id);
            if (animalCadastrado != null)
            {
                return Ok(animalCadastrado );
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


        // PUT: api/Animal/5
        // Este método atualiza o animal com o ID especificado
    [HttpPut]
    [Route("atualizar/{id}")]
    public IActionResult Atualizar(int id, [FromBody] Animal animalAtualizado)
    {
        var animal = _context.Animais.FirstOrDefault(a => a.AnimalId == id);
        if (animal == null)
        {
            return NotFound();
        }

        animal.Nome = animalAtualizado.Nome;
        animal.Descricao = animalAtualizado.Descricao;
        // atualize outros campos conforme necessário

        _context.SaveChanges();

        return Ok(animal);
}

        //POST: api/Animal
        // Este método adiciona um novo animal ao banco de dados
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Animal animal)
    {
        _context.Animais.Add(animal);
        _context.SaveChanges();

        return Created("", animal);
    }

        // DELETE: api/Animal/5
        // Este método remove o animal com o ID especificado do banco de dados
        // Deletar um animal por id
    [HttpDelete]
    [Route("deletar/{id}")]
    public IActionResult Deletar(int id)
    {
        var animal = _context.Animais.FirstOrDefault(a => a.AnimalId == id);
        if (animal == null)
        {
            return NotFound();
        }

        _context.Animais.Remove(animal);
        _context.SaveChanges();

        return Ok();
    }
    }
    
}
