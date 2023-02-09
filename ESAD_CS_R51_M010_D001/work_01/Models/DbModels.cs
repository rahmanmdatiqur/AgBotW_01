using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace work_01.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required,StringLength(40)]
        public string Title { get; set; }
        [Required,Column(TypeName ="date")]
        public DateTime StartDate { get; set; }
        [Required, Column(TypeName = "money")]
        public decimal Budget { get; set; }

    }
    public class ProjectDbContext : DbContext
    {
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options):base(options) { }
        
        public DbSet<Project> Projects { get; set;}
    }
}
