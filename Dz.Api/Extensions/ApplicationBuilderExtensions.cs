namespace Dz.Api.Extensions;

public static class ApplicationBuilderExtensions
{
    public static void ConfigureRequestPipeline(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        
        app.UseCors(s => s.AllowAnyOrigin());

        app.UseAuthorization();

        app.MapControllers();
    }
}