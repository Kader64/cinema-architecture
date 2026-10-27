var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

var allowedOrigins = builder.Configuration
    .GetSection("AllowedOrigins")
    .Get<string[]>() ?? [];

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigins)
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Create an endpoint that serves API's schema.
}

app.UseHttpsRedirection(); // Redirect unencrypted HTTP request (code: 307), Asks user to use HTTPS.
app.UseCors(); // Enable CORS for React frontend 
app.UseAuthorization(); // Adds Authorization step in request flow (checks if user has permission).
app.MapControllers(); // Maps Controllers, so request can reach them.
app.Run();
