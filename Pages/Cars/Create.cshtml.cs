using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KomisSamochodowy.Model;
using KomisSamochodowy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages.Cars
{
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext _db;

        public Car Car { get; set; }

        public CreateModel(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<IActionResult> OnPost(Car car)
        {
            if (ModelState.IsValid)
            {
                await _db.Car.AddAsync(car);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }

        public void OnGet()
        {
        }
    }
}