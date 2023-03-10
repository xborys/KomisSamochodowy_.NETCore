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
    public class MoreInfoModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Car Car { get; set; }
        public IEnumerable<Car> Cars { get; set; }
        public MoreInfoModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            Cars = _db.Car;
            Car = _db.Car.Find(id);
        }
        
    }
}
