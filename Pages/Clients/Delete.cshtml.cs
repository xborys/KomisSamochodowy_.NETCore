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
    public class DeleteModel : PageModel
    {
        private readonly ApplicationDbContext _db;

        public Client Client { get; set; }
        public DeleteModel(ApplicationDbContext db)
        {
            _db = db;
        }
        public void OnGet(int id)
        {
            Client = _db.Client.Find(id);
        }

        public async Task<IActionResult> OnPost(Client client)
        {
            
            var ClientFromDb = _db.Client.Find(client.clientID);
            if (ClientFromDb != null)
            {
                _db.Client.Remove(ClientFromDb);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            return Page();
        }
    }
}
