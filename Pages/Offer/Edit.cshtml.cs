using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KomisSamochodowy.Model;
using KomisSamochodowy.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages.Clients
{
    public class EditModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Client client { get; set; }
        public EditModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            client = _db.Client.Find(id);
        }

        public async Task<IActionResult> OnPost(Client client)
        {
            if (ModelState.IsValid)
            {
                _db.Client.Update(client);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }
    }
}
