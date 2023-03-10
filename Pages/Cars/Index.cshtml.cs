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
    public class IndexModel : PageModel
    {
        private readonly ApplicationDbContext _db; 
        public IEnumerable<Car> Cars { get; set;}

        public IndexModel(ApplicationDbContext db)
        {
            _db=db;
        }


        public void OnGet()
        {
            Cars = _db.Car;
        }
    }
}
