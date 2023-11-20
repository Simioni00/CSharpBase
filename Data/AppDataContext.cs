using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options){ }

// Toda CLASSE que eu quero que seja uma TABELA no BANCO, terá que ser explícita nessa parte!!
// O ponto de interrogação após o fechamento do menor é só para para de dar warning com o AppDataContext.
    public DbSet<Cliente>? Clientes {get;set;}

    public DbSet<Animal>? Animais {get;set;}

}
/*
    A Explicação dessa parte de cima do código é que a classe Cliente e Animal são tabelas que terão coisas no banco.
*/