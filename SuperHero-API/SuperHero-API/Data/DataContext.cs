using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace SuperHero_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public Microsoft.EntityFrameworkCore.DbSet<SuperHero> SuperHeroes => Set<SuperHero>();
    }
}
