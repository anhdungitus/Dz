using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dz.Api.Migrations
{
    public partial class addSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "BirthDay", "Category", "FirstName", "LastName", "Status" },
                values: new object[] { 1, new DateTime(2022, 10, 18, 0, 26, 20, 645, DateTimeKind.Local).AddTicks(2134), 1, "Nguyen", "Dzung", 1 });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "BirthDay", "Category", "FirstName", "LastName", "Status" },
                values: new object[] { 2, new DateTime(2022, 10, 18, 0, 26, 20, 645, DateTimeKind.Local).AddTicks(2150), 1, "Thao", "Nam", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
