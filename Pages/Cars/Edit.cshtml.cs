using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KomisSamochodowy.Model;
using KomisSamochodowy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Linq.Expressions;
using System.Diagnostics.CodeAnalysis;

namespace KomisSamochodowy.Pages.Cars
{
    public class EditModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Car Car { get; set; }
        

        public EditModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            Car = _db.Car.Find(id);
        }

        public async Task<IActionResult> OnPost(Car car)
        {
            if (ModelState.IsValid)
            {
                _db.Car.Update(car);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }
    }
}
