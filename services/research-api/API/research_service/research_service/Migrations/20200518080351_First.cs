using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace research_service.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Researches",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    OwnerId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Researches", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ResearchDatasource",
                columns: table => new
                {
                    ResearchId = table.Column<Guid>(nullable: false),
                    DatasourceId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResearchDatasource", x => new { x.ResearchId, x.DatasourceId });
                    table.ForeignKey(
                        name: "FK_ResearchDatasource_Researches_ResearchId",
                        column: x => x.ResearchId,
                        principalTable: "Researches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ResearchEditor",
                columns: table => new
                {
                    ResearchId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResearchEditor", x => new { x.ResearchId, x.UserId });
                    table.ForeignKey(
                        name: "FK_ResearchEditor_Researches_ResearchId",
                        column: x => x.ResearchId,
                        principalTable: "Researches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ResearchDatasource");

            migrationBuilder.DropTable(
                name: "ResearchEditor");

            migrationBuilder.DropTable(
                name: "Researches");
        }
    }
}
