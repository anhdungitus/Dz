using Dz.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.ConfigureApplicationServices(builder);

var app = builder.Build();

app.ConfigureRequestPipeline();
app.Run();