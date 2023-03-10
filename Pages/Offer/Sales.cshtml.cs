using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KomisSamochodowy.Model;
using KomisSamochodowy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages.Offer
{
    public class SalesModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Car Car { get; set; }
        public Client Client { get; set; }

        public SalesModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            Car = _db.Car.Find(id);
        }

        public async Task<IActionResult> OnPost(Client Client)
        {
            if (ModelState.IsValid)
            {
                await _db.Client.AddAsync(Client);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }
    }
}
