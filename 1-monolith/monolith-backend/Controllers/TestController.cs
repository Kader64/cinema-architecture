using Microsoft.AspNetCore.Mvc;

namespace monolith_backend.Controllers
{
    [ApiController] // Automaticly detects 400 (Bad Request) / 415 (Unsupported Media Type)
    [Route("api/[controller]")]

    public class TestController : ControllerBase // Inheriting from ControllerBase gives class access to built-in helper methods
    {
        [HttpGet]
        public IActionResult GetInfo()
        {
            return Ok(new { message = "Connection works!" });

        }
    }
}
