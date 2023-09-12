using APIGames.Models;
using Microsoft.EntityFrameworkCore;

namespace APIGames.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Game> Games { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("server=DESKTOP-H7EP5Q1\\SQLEXPRESS;database=games_db;trusted_connection=true;TrustServerCertificate=True");
        }
    }
}
