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
    public class DeleteModel : PageModel
    {
        private readonly ApplicationDbContext _db;

        public Car Car { get; set; }
        public DeleteModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            Car = _db.Car.Find(id);
        }

        public async Task<IActionResult> OnPost(Car car)
        {
            
            var CarFromDb = _db.Car.Find(car.carID);
            if (CarFromDb != null)
            {
                _db.Car.Remove(CarFromDb);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }
    }
}
