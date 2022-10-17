using Dz.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dz.Api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<User>? Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(new List<User>
        {
            new() { Id = 1, Category = 1, Status = 1, BirthDay = DateTime.Now, FirstName = "Nguyen", LastName = "Dzung" }, 
            new() { Id = 2, Category = 1, Status = 1, BirthDay = DateTime.Now, FirstName = "Thao", LastName = "Nam" }
        });
        base.OnModelCreating(modelBuilder);
    }
}