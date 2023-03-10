using KomisSamochodowy.Model;
using Microsoft.EntityFrameworkCore;

namespace KomisSamochodowy.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Car> Car { get; set; }
        public DbSet<Client> Client { get; set; }
    }
}
