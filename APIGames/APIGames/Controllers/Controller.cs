using APIGames.Data;
using APIGames.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIGames.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Controller : ControllerBase
    {
        private readonly DataContext _context;

        public Controller(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Game>>> GetAllGames() {
            var games = await _context.Games.ToListAsync();
        
            return Ok(games);
        }
        [HttpPost]
        public async Task<ActionResult<Game>> PostGames(Game game)
        {
            _context.Games.Add(game);  
            await _context.SaveChangesAsync();
            return Ok(game);
        }
        [HttpPut("/{id}")]
        public async Task<ActionResult<Game>> PutGames(int id,Game game)
        {
            var existGame = await _context.Games.FindAsync(id);
            if (existGame is null) return NotFound();

            existGame.Nota = game.Nota;
            existGame.Nome = game.Nome;
            existGame.Descricao = game.Descricao;
            await _context.SaveChangesAsync();
            return Ok(existGame);
        }

        [HttpDelete("/{id}")]
        public async Task<ActionResult<Game>> DelGame(int id)
        {
            var existGame = await _context.Games.FindAsync(id);
            if (existGame is null) return NotFound();

            _context.Remove(existGame);
            await _context.SaveChangesAsync();
            return Ok(existGame);
        }
    }
}
