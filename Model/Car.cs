using System.ComponentModel.DataAnnotations;

namespace KomisSamochodowy.Model
{
    public class Car
    {
        [Key]
        public int carID { get; set; }
        [Required]
        public string mark { get; set; }
        public string model { get; set; }
        public int year { get; set; }
        public int odometer { get; set; }
        public int value { get; set; }
        public string description { get; set; }
        public Boolean availability { get; set; }
    }
}
