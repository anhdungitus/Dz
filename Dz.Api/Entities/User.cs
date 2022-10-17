namespace Dz.Api.Entities;

public class User
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public int Status { get; set; }
    public DateTime? BirthDay { get; set; }
    public int Category { get; set; }
}