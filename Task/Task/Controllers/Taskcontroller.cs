using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Task.context;
using Task.Models;

namespace Task.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Taskcontroller : ControllerBase
    {
        private TaskContext _context;
        public Taskcontroller()
        {
             _context = new TaskContext();
        }



        [HttpPost]
        public IActionResult AddTask([FromBody]Task1 task1)
        {
            _context.Tasks.Add(task1);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaTask1PorId), new { Id = task1.Id }, task1);
        }

        [HttpGet]
        public IEnumerable<Task1> RecuperaTask1()
        {
            return _context.Tasks.Where(t => t.Validador == false);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaTask1PorId(int id)
        {
            Task1 task1 = _context.Tasks.FirstOrDefault(task1 => task1.Id == id);
            if(task1 != null)
            {
                return Ok(task1);
            }
            return NotFound();
        }

        
        



        [HttpPut("{id}")]
        public IActionResult ChangeTask(int id, [FromBody] Task1 task1New)
        {
            Task1 task1 = _context.Tasks.FirstOrDefault(task1 => task1.Id == id);
            if(task1 == null)
            {
                return NotFound();
            } 
            task1.Data = task1New.Data;
            task1.Text = task1New.Text;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpGet("concluidas")]
        public IEnumerable<Task1> RecuperaTask1Concluida()
        {
            return _context.Tasks.Where(t => t.Validador == true);
        }

        [HttpPut("concluir/{id}")]

        public IActionResult ChangeValidador(int id)
        {
            Task1 task1 = _context.Tasks.FirstOrDefault(task1 => task1.Id == id);
            if (task1 == null)
            {
                return NotFound();
            }
            task1.Validador = true;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("desmarcar/{id}")]
        public IActionResult ChangeFalse(int id)
        {
            Task1 task1 = _context.Tasks.Where(task1 => task1.Id == id).FirstOrDefault();
            task1.Validador = false;
            _context.SaveChanges();
            return NoContent();

        }


        [HttpDelete("delete/{id}")]
        public IActionResult RemoveTask(int id)
        {
            Task1 task1 = _context.Tasks.FirstOrDefault(task1 => task1.Id == id);
            if (task1 == null)
            {
                return NotFound();
            }
            _context.Remove(task1);
            _context.SaveChanges();
            return NoContent();
        }

        



    }

}
