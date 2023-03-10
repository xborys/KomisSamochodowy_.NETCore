using System.ComponentModel.DataAnnotations;


namespace KomisSamochodowy.Model
{
    public class Client
    {
        [Key]
        public int clientID { get; set; }
        [Required]
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public int PostCode { get; set; }
        public int PhoneNumber { get; set; }
        public int FK_carID { get; set; }
    }
}
