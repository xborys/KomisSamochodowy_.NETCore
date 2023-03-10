using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KomisSamochodowy.Migrations
{
    public partial class AddCarToDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "availability",
                table: "Car",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "Car",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "availability",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "description",
                table: "Car");
        }
    }
}
