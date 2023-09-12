namespace APIGames.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Nota { get; set; } = 0;
        public DateTime Lancamento { get; set; } = DateTime.Now;
    }
}
